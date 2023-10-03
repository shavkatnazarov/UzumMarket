import React, {useEffect, useState} from "react";
import {getBasketProduct} from "../server/service/AppService.js";
import {Api} from "../server/Api.js";
import {toast} from "react-toastify";

export const Basket = () => {

    const [product, setProduct] = useState([])
    const id = localStorage.getItem("id")

    const [orders, setOrder] = useState([])
    console.log(orders)
    const getAll = async () => {
        await getBasketProduct(id, setProduct)
    }
    useEffect(() => {
        getAll()
    }, [])
    return (
        <div>
            <h1 className={"text text-center mt-3"}>Savatcha</h1>
            {product.length === 0 ? (
                <div>
                    <h1>Savatcha bosh</h1>
                </div>
            ) : (
                <div>
                    {product.map((item) => (
                        <>
                            <div id={"productCard"}
                                 role="button"
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
                                                className="bi bi-cash-coin"></i> {item.price} so'm</small>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div id={"saveIcon"} style={{
                                    marginLeft: "515px",
                                    width: "50px",
                                    borderRadius: "50%",
                                    borderBlockColor: "#494f54"
                                }}>
                                    <i className="bi bi-cart3 " style={{fontSize: "30px", marginLeft: "10px"}}></i>
                                </div>
                            </div>

                        </>
                    ))}
                    <div>
                        <table className={"table shadow mt-5"}
                               style={{width: "1000px", marginLeft: "200px", borderColor: "yellow"}}>
                            <thead className={"bg-warning"}>
                            <tr>
                                <th>
                                    Yetgazish Hizmati
                                </th>
                                <th>
                                    Mahsulot Narxi
                                </th>
                                <th>
                                    Jami Mablag'
                                </th>
                                <th>
                                    Buyutma
                                </th>
                            </tr>
                            </thead>
                            <tbody>
                            {product.map((item) => (
                                <tr>
                                    <td>Bepul</td>
                                    <td>{item.price}</td>
                                    <td>{item.price} </td>
                                    <td><input type={"checkbox"} onInput={() => setOrder(item)}
                                               onAbort={() => setOrder(null)}/></td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                        <i className="bi bi-trash" style={{fontSize: "30px", marginLeft: "600px"}}></i>
                        <button className={"btn btn-warning "} onClick={() => order(adress, orders)}
                                style={{marginLeft: "-90px", marginTop: "100px"}}>{"   "} Buyurtma
                            berish {"     "}
                        </button>
                    </div>
                </div>
            )}
        </div>
    )
}
const order = (adress, orders) => {
    return (
        adress.trim().length === 0 ? (
            toast.warn("manzilni kriting")
        ) : (
            toast.success("Buyurtma Yuborildi adminstratorlar bog'lanishadi"),
            orders.map((item) => (
                localStorage.setItem("order", item.name)
            ))
)

)
}