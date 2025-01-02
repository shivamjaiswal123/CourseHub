import axios from "axios";

const BASE_URL = import.meta.env.VITE_BASE_URL

export const signup = async (formData) => {
    const response = await axios.post(`${BASE_URL}/user/register`, formData)
    return response.data
}

export const signin = async (formData) => {
    const response = await axios.post(`${BASE_URL}/user/login`, formData)
    return response.data
}

export const getMe = async () => {
    const response = await axios.get(`${BASE_URL}/user/me`, {
        headers: {
            Authorization: localStorage.getItem('token')
        }
    })
    return response.data
}

export const myPurchase = async () => {
    const response = await axios.get(`${BASE_URL}/user/courses/purchased`, {
        headers: {
            Authorization: localStorage.getItem('token')
        }
    })
    return response.data
}