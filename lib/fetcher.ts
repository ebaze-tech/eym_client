import API from "@/api_handler/api";

// SWR fetcher using our custom Axios instance
export const fetcher = (url: string) => API.get(url).then((res) => res.data);
