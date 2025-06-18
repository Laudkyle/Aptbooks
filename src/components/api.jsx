import axios from "axios";

// Create Axios instance
const API = axios.create({
  baseURL: "https://app.ryamex.com/api/api",
  withCredentials: true, // Important for HttpOnly cookies
});

// Track if we're currently refreshing to prevent multiple refresh attempts
let isRefreshing = false;
let failedQueue = [];

const processQueue = (error, token = null) => {
  failedQueue.forEach(prom => {
    if (error) {
      prom.reject(error);
    } else {
      prom.resolve(token);
    }
  });
  
  failedQueue = [];
};

// Request Interceptor - Attach Access Token
API.interceptors.request.use(
  async (config) => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
      console.log(`Request to ${config.url} with token: ${token.substring(0, 20)}...`);
    } else {
      console.log(`Request to ${config.url} with NO token`);
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response Interceptor - Refresh Token if Expired
API.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (error.response && error.response.status === 401 && !originalRequest._retry) {
      if (isRefreshing) {
        // If we're already refreshing, wait for it to complete
        return new Promise((resolve, reject) => {
          failedQueue.push({ resolve, reject });
        }).then(token => {
          originalRequest.headers.Authorization = `Bearer ${token}`;
          return API(originalRequest);
        }).catch(err => {
          return Promise.reject(err);
        });
      }

      originalRequest._retry = true;
      isRefreshing = true;

      try {
        // Try refreshing the token
        console.log("Attempting token refresh...");
        const refreshResponse = await axios.post(
          `https://app.ryamex.com/api/api/refresh`,
          {},
          { withCredentials: true }
        );
        
        console.log("Refresh response:", refreshResponse.data);
        const newAccessToken = refreshResponse.data.accessToken;
        
        if (!newAccessToken) {
          throw new Error("No access token received from refresh endpoint");
        }
        
        console.log("Old token:", localStorage.getItem("accessToken")?.substring(0, 20) + "...");
        console.log("New token:", newAccessToken.substring(0, 20) + "...");
        
        // Update localStorage with new token
        localStorage.setItem("accessToken", newAccessToken);
        
        // Process the queue with the new token
        processQueue(null, newAccessToken);
        
        // Retry the original request with the new token
        originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
        console.log("Retrying original request with new token:", originalRequest.url);
        console.log("Authorization header:", originalRequest.headers.Authorization?.substring(0, 30) + "...");
        
        return API(originalRequest);
        
      } catch (refreshError) {
        console.error("Refresh token failed:", refreshError);
        
        // Process queue with error
        processQueue(refreshError, null);
        
        // Clear stored tokens
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");
        localStorage.removeItem("user");
        
        // Redirect to login or handle logout
        window.location.href = "/login";
        
        return Promise.reject(refreshError);
      } finally {
        isRefreshing = false;
      }
    }
    
    return Promise.reject(error);
  }
);

// Add inventory alert methods to the API instance
API.getAlertSettings = async function () {
  return this.get("/alert-settings");
};

API.updateAlertSettings = async function (settings) {
  return this.put("/alert-settings", settings);
};

API.getLowInventoryItems = async function () {
  const settings = await this.getAlertSettings();
  const inventory = await this.get("/inventory");
  return inventory.data.filter(
    (item) => item.quantity_in_stock <= settings.data.threshold_quantity
  );
};

export default API;