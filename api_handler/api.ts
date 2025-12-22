import axios from "axios";

const API = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_NEXT_PUBLIC_API_URL,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

/**
 * REQUEST INTERCEPTOR
 */
API.interceptors.request.use(
  (config) => {
    // Next.js runs on server + client → guard window
    if (typeof window !== "undefined") {
      const token = localStorage.getItem("token");
      const user = localStorage.getItem("user");

      if (token) {
        if (config.headers) {
          config.headers.Authorization = `Bearer ${token}`;
        }

        if (user) {
          try {
            const userData = JSON.parse(user);

            // Example (optional)
            // config.headers["X-User-Id"] = userData.id;
            // config.headers["X-User-Role"] = userData.role;
          } catch (err) {
            console.warn("Invalid user in localStorage");
          }
        }
      }
    }

    return config;
  },
  (error) => Promise.reject(error)
);

/**
 * RESPONSE INTERCEPTOR
 */
API.interceptors.response.use(
  (response) => response,
  (error) => {
    if (typeof window !== "undefined" && error.response?.status === 401) {
      localStorage.removeItem("token");
      localStorage.removeItem("user");

      window.location.href = "/login?session_expired=true";
    }

    return Promise.reject(error);
  }
);

export default API;
