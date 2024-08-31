import axios from "axios"

// const baseURL = "http://localhost:5000"
const baseURL = "https://vanafolioserver.vercel.app";

export default axios.create({
    baseURL: baseURL,
    withCredentials : true
})