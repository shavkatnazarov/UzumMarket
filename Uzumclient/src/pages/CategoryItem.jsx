import {useParams} from "react-router-dom";
import React, {useEffect, useState} from "react";
import {BaseConfig} from "../server/BaseConfig.js";
import {Api} from "../server/Api.js";
import {Loading} from "../component/Loading.jsx";
import {saveProduct} from "../component/Body.jsx";

export const CategoryItem = () => {
    const id = useParams().id
    const [product, setProduct] = useState([])
    const [loading, setLoading] = useState(false)
    const [one, setOne] = useState({})
    const [phoneNumber, setPhoneNumber] = useState('')
    const getProduct = async () => {
        try {
            const res = await BaseConfig.doGetByCategoryId(id)
            setLoading(true)
            setProduct(res.data)
        } catch (err) {
            console.log(err)
        }
    }
    useEffect(() => {
        getProduct()
    }, [])
    const oneProduct = (oneoy) => {
        setOne(oneoy)
    }
    return (
        <div>
            {loading ? (
                <div className={"container mt-5"}>

                    {product.map((item) => (
                        <>
                            <div data-bs-toggle="modal"  id={"productCard"}
                                 href="#exampleModalToggle" role="button"
                                 className="card shadow d-inline-block mt-5 mb-3"
                                 style={{
                                     width: "600px",
                                     marginLeft: "10px",
                                 }}>
                                <div className="row" style={{boxShadow: "1px 0,9"}}>
                                    <div className="col-md-4">
                                        <img src={Api.downloadPhoto + item.img}
                                             className="img-fluid rounded-start " style={{width: "100%"}}
                                             alt={item.name}/>
                                    </div>
                                    <div className="col-md-8">
                                        <div className="card-body">
                                            <h5 className="card-title">{item.name}</h5>
                                            <p className="card-text">{item.description}</p>
                                            <p className="card-text"><small
                                                className="text-muted"><i
                                                className="bi bi-cash-coin    "></i> {item.price} so'm</small>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div id={"saveIcon"} style={{
                                    marginLeft: "515px", width: "50px", borderRadius: "50%", borderBlockColor: "#494f54"}}>

                                    <i className="bi bi-cart3 " style={{fontSize: "30px", marginLeft: "10px"}}></i>
                                </div>
                            </div>
                            <div className="modal fade" id="exampleModalToggle" aria-hidden="true"
                                 aria-labelledby="exampleModalToggleLabel" tabIndex="-1">
                                <div className="modal-dialog modal-dialog-centered">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <img src={Api.downloadPhoto + one.img}
                                                 className="img-fluid rounded-start " style={{width: "800px"}}
                                                 alt={one.name}></img>
                                            <button type="button" className="btn-close" data-bs-dismiss="modal"
                                                    aria-label="Close"></button>
                                        </div>
                                        <div className="modal-body">
                                            <div className="col-md-4">
                                                <h5 className="card-title">{one.name}</h5>
                                            </div>
                                            <div className={"modal-body"}>
                                                <p className="card-text">{one.description}</p>
                                            </div>
                                            <div className={"modal-body"}>
                                                <p className="card-text"><small
                                                    className="text-muted">{one.price} so'm</small>

                                                </p>
                                            </div>
                                        </div>
                                        <button className={"btn btn-warning mb-2"} onClick={() => saveProduct(item.id)}
                                                role="button"
                                                style={{width: "470px", marginLeft: "15px"}}> Savatga qo'shish
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </>
                    ))}
                    <div className="modal fade" id="examplePriceModalToggle" aria-hidden="true"
                         aria-labelledby="exampleModalToggleLabel" tabIndex="-1">
                        <div className="modal-dialog modal-dialog-centered">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="exampleModalToggleLabel">Kirish</h5>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal"
                                            aria-label="Close"></button>
                                </div>
                                <div className="modal-footer">
                                </div>
                                <button className="btn btn-warning mb-3" data-bs-target="#exampleModalToggle2"
                                        data-bs-toggle="modal" data-bs-dismiss="modal"
                                        style={{width: "95%", marginLeft: "14px"}}>Tasdiqlash
                                </button>
                            </div>
                        </div>
                    </div>

                </div>
            ) : (
                <Loading/>
            )}
        </div>

    )
}
