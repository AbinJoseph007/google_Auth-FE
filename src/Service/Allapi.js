import { BASE_URL } from "./BaseURL"
import { commonAPI } from "./CommonApi"

export const userRegisterAPI = async(user)=>{
    return await commonAPI("POST",`${BASE_URL}/user/register`,user,"")
}

export const userLoginAPI = async(user)=>{
    return await commonAPI("POST",`${BASE_URL}/user/login`,user,"")
}