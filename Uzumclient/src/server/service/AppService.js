import {BaseConfig} from "../BaseConfig";
import {Api} from "../Api";
import {toast} from "react-toastify";


export const EditProduct = async (data, id) => {
    const check = {
        name: data.name.trim().length === 0,
        price: data.price <= 0,
        des: data.description.trim().length === 0,
        categoryId: data.categoryId === '0',
    }
    if (check.name) {
        return toast.warning("mahsulot nomi bo'lishi shart")
    }
    if (check.price) {
        return toast.warning("mahsulot narxi bo'lishi shart")
    }
    if (check.des) {
        return toast.warning("mahsulot haqidagi mal'umot bo'lishi shart")
    }
    if (check.categoryId) {
        return toast.warning("mahsulot bo'limini tanlash shart")
    }
    try {
        await BaseConfig.doPut(Api.product, id, data)
        toast.success("Taxrirlandi")
    } catch (err) {
        toast.error("xatolik")
    }
}

export const DeleteProduct = async (id) => {
    try {
        await BaseConfig.doDelete(Api.product, id)
        toast.success("Mahsulot o'chirildi")
    } catch (err) {
        toast.error("xatolik")
    }
}
export const GetCategoryList = async (setCategory) => {
    try {
        const res = await BaseConfig.doGet(Api.category)
        setCategory(res.data._embedded.list)
    } catch (err) {
        console.log(err)
        toast.error("xatolik")
    }
}

export const GetProductList = async (id) => {
    try {
        const res = await BaseConfig.doGet(Api.product)
    } catch (err) {
        console.log(err)
        toast.error("xatolik")
    }
}
// export const OneProduct =async (id)=>{
//     try{
//         const res =BaseConfig.doGetOne(Api.product, id)
//     }catch (err){
//         toast.error("xatolik"+err)
//         console.log(err)
//     }
// }
export const GetUser = async (setUser) => {
    try {
        const res = await BaseConfig.doGet("/auth")
        setUser(res.data)
    } catch (err) {
        console.log(err)
        toast.error(err.response.data.message)
    }
}

export const SaveProduct = async (data) => {
    const check = {
        name: data.name.trim().length === 0,
        price: data.price <= 0,
        des: data.description.trim().length === 0,
        categoryId: data.categoryId === '0',
    }
    if (check.name) {
        return toast.warning("mahsulot nomi bo'lishi shart")
    }
    if (check.price) {
        return toast.warning("mahsulot narxi bo'lishi shart")
    }
    if (check.des) {
        return toast.warning("mahsulot haqidagi mal'umot bo'lishi shart")
    }
    if (check.categoryId) {
        return toast.warning("mahsulot bo'limini tanlash shart")
    }
    try {
        await BaseConfig.doPost(Api.product, data)
        toast.success("saqlandi")
        console.log(data, Api.product)
    } catch (err) {
        console.log(err)
        console.log(err)
        toast.error(err)
        toast.error(err.response.data.message)
        toast.error("qo'shishda xatolik")
        console.log(err.response.data.message)
    }
}

export const UploadPhoto = async (photo) => {
    try {
        const res = await BaseConfig.doPost(Api.uploadPhoto, photo)
        return res.data
    } catch (err) {
        console.log(err)
        toast.error(err.response.data.message)
    }

}
export const SaveBasketProducts = async (id) => {
    try {
        await BaseConfig.doPost(Api.basket + localStorage.getItem("id") + "&&Id=" + id)
        toast.success("savatga saqlandi")
    } catch (err) {
        toast.error(err.response.data.message)
        console.log(err.response.data.message)
    }
}
export const getBasketProduct=async (id,setProduct)=> {
    try {
        const res = await BaseConfig.doGet(Api.basket + id)
        setProduct(res.data)
        console.log(res)
    } catch (err) {
        console.log(err)
        toast.error("xatolik")
    }
}