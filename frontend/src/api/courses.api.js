import axios from "axios";

const BASE_URL = import.meta.env.VITE_BASE_URL

export const allCourse = async () => {
    const res = await axios.get(`${BASE_URL}/course`)
    return res.data
}

export const featuredCourse = async () => {
    const res = await axios.get(`${BASE_URL}/course/featured`)
    return res.data
}