import React, { createContext, useState, useContext, useEffect } from "react";
import API from "./api"

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export const useUser = () => {
  const { user, loading } = useAuth();

  if (loading) {
    return { user: null, loading: true };
  }

  return { user, loading: false };
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Load user data from localStorage
  useEffect(() => {
    const checkUserLoggedIn = async () => {
      try {
        const savedUser = localStorage.getItem("user");
        const accessToken = localStorage.getItem("accessToken");

        if (savedUser && accessToken) {
          const parsedUser = JSON.parse(savedUser);
          setUser({
            ...parsedUser,
            token: accessToken,
          });
        }
      } catch (error) {
        console.error("Failed to load user:", error);
        // Clear invalid data
        localStorage.removeItem("user");
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");
      } finally {
        setLoading(false);
      }
    };

    checkUserLoggedIn();
  }, []);

  const login = async ({ form }) => {
    try {
      const { email, password } = form;
      const res = await API.post("/login", { email, password });

      if (!res.data || !res.data.accessToken || !res.data.user) {
        throw new Error("Invalid server response format");
      }

      const { accessToken, refreshToken, user } = res.data;

      if (!user || !user.id || !user.email || !user.role) {
        throw new Error("User data incomplete in server response");
      }

      const { id, email: userEmail, role } = user;

      // Save tokens and user data
      localStorage.setItem("accessToken", accessToken);
      if (refreshToken) {
        localStorage.setItem("refreshToken", refreshToken);
      }
      localStorage.setItem(
        "user",
        JSON.stringify({ id, email: userEmail, role })
      );

      setUser({ id, email: userEmail, role, token: accessToken });
      return { success: true, user: { id, email: userEmail, role } };
    } catch (error) {
      console.error("Login error:", error);
      const errorMessage =
        error.response?.data?.error ||
        error.response?.data?.message ||
        error.message ||
        "Login failed. Please try again.";
      throw new Error(errorMessage);
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    localStorage.removeItem("user");
    
    // Call logout endpoint but don't wait for it
    API.post("/logout").catch(err => {
      console.log("Logout endpoint error (non-critical):", err);
    });
  };

 

  // Memoize the context value to prevent unnecessary re-renders
  const contextValue = React.useMemo(
    () => ({
      user,
      loading,
      useUser,
      setUser,
      login,
      logout,
    }),
    [user, loading]
  );

  return (
    <AuthContext.Provider value={contextValue}>
      {loading ? (
        <div className="flex justify-center items-center h-screen">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
        </div>
      ) : (
        children
      )}
    </AuthContext.Provider>
  );
};