import {BaseUrl} from "./BaseUrl";

export const Api = {
    category: '/category',
    login: '/auth/login',
    register:'/register',
    product:"/product",
    basket: '/basket?id=',
    uploadPhoto: '/attachment/upload',
    downloadPhoto: BaseUrl + '/attachment/download?id='

}