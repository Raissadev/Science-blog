import axios from "axios";

const api = axios.create({
    baseURL: process.env.REACT_APP_API_HOST || "/api/v1",
    timeout: parseInt( process.env.REACT_APP_API_TIMEOUT as string ) * 1000 || 3000,
    headers: {
        "Content-Type": "application/json"
    }
});

export default api;