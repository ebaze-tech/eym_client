import axios from "axios";

const API = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
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
      const token = sessionStorage.getItem("token");
      const user = sessionStorage.getItem("user");

      if (token) {
        if (config.headers) {
          config.headers.Authorization = `Bearer ${token}`;
        }

        if (user) {
          try {
            // const userData = JSON.parse(user);

            // Example (optional)
            // config.headers["X-User-Id"] = userData.id;
            // config.headers["X-User-Role"] = userData.role;
          } catch {
            console.warn("Invalid user in sessionStorage");
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
      sessionStorage.removeItem("token");
      sessionStorage.removeItem("user");
      sessionStorage.removeItem("admin");

      const isAdmin = window.location.pathname.startsWith("/admin");
      window.location.href = isAdmin
        ? "/admin/login?session_expired=true"
        : "/login?session_expired=true";
    }

    return Promise.reject(error);
  }
);

export default API;
