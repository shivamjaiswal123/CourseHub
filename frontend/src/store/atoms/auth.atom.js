import { atom } from "recoil";


export const authState = atom({
    key: 'auth',
    // get initial state from local storage to enable user to stay logged in
    default: localStorage.getItem('token')
})