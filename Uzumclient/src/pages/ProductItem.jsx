import {Link, useParams} from 'react-router-dom'
import {useEffect, useState} from "react";
import {BaseConfig} from "../server/BaseConfig.js";
import {Api} from "../server/Api.js";
import {Loading} from "../component/Loading.jsx";

export const ProductItem = () => {
    const id = useParams().id
    const [product, setProduct] = useState({})
    const [loading, setLoading] = useState(false)
    const getOne = async () => {
        try {
            const res = await BaseConfig.doGet(Api.product + "/" + id)
            setProduct(res.data)
            setLoading(true)
        } catch (err) {

        }
    }
    useEffect(() => {
        getOne()
    }, [])
    return (
        <div className={"container"}>
            {loading ? (
                <div className="card mt-5">
                    <div className="card-header text-center">
                        {product.name}
                    </div>
                    <div className="card-body d-flex align-items-center justify-content-center flex-column">
                        <h5 className="card-title">bo'lim nomi : {product.category.name}</h5>
                        <p className="card-text">mahsulot haqida : {product.description}</p>
                        <p className="card-text">mahsulot narxi : {product.price}</p>
                        <img src={Api.downloadPhoto + product.img} width={"60%"} alt=""/>
                        <div>
                        <button className={"btn btn-success"}>sotib olish</button>{"          "}
                        <Link className={"btn btn-info"}> Savatga saqlash</Link>
                        </div>
                    </div>
                </div>
            ) : (
                <Loading/>
            )}
        </div>
    )
}