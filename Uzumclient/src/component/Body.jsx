import {Link, useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import {GetCategoryList, GetProductList, GetUser, SaveBasketProducts} from "../server/service/AppService.js";
import {Api} from "../server/Api.js";


export const Body = () => {
    const [category, setCategory] = useState([])
    const [products, setProducts] = useState([]);
    const [one, setOne] = useState({})



    const getAll = async () => {
        try {
            const a = await GetProductList()
            setProducts(a)
            await GetCategoryList(setCategory)
        } catch (err) {
            console.log(err)
        }
    }
    useEffect(() => {
        getAll()
    }, [])
    // const navigate = useNavigate()

    return (
        <div className={"container"} style={{width: "1250px"}}>

            <div className="animatsiya">
                <div id="carouselExample" className="carousel slide">
                    <div className="carousel-inner"
                         style={{borderRadius: '12px', width: "1200px", marginTop: "25px", marginLeft: '-1px'}}>
                        <div className="carousel-item active">
                            <img
                                src="https://uzum.uz/static/img/bg-desktop.e8bacff.jpg"
                                className="d-block" alt="oka internet yo'q"/>
                        </div>
                    </div>
                </div>
                <div className={"row"}>
                    {products.map((item) => (
                        <div className="card col-3 m-4" style={{width: "120rem;", display: "flex"}}>
                            <img className="card-img-top" src={Api.downloadPhoto + item.img} alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title"> nomi:{item.name}</h5>
                                <h5 className="card-text">narxi:{item.price + "so'm"}</h5>
                                <h5 className="card-text">bolimi -{item.category.name}</h5>
                                <p className="card-text"> haqida: <br/>{item.description}  </p>
                                <Link to={"/"+item.id}  className={"btn btn-info"}>ko'rish</Link>
                                <div id={"saveIcon"} style={{
                                    marginTop: "-35px",
                                    marginLeft: "245px",
                                    width: "50px",
                                    borderRadius: "50%",
                                    borderBlockColor: "#494f54"
                                }}>
                                    <Link onClick={() => saveProduct(item)} className={"bi bi-bag-plus"} style={{
                                        fontSize: "30px",
                                        color: "black",
                                        marginLeft: "-50px",
                                        marginTop: "-10px",
                                        borderRadius: "12px"
                                    }}></Link>

                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div>
                    <img src="https://images.uzum.uz/cjvdgesjvf2kua1f8hog/main_page_banner.jpg" alt="quzi"/>
                </div>
            </div>
        </div>

    )
}
export const checkUser = ({users, phoneNumber, navigate}) => {
    const register = () => {
        navigate("/auth/register")
        window.location.reload()
    }
    return (
        <>
            <div>
                {users.map((item) => (
                    item.phoneNumber === phoneNumber ? (
                        localStorage.setItem("id", item.id),
                            localStorage.setItem("firstName", item.firstName),
                            localStorage.setItem('phoneNumber', item.phoneNumber),
                            localStorage.setItem("role", item.getRole[0].roleName),
                            window.location.reload()
                    ) : (
                        register()
                    )))}
                <div>
                </div>
            </div>
        </>
    )
}
export const saveProduct = (userId, id) => {
    const getAll = async () => {
        try {
            await SaveBasketProducts(userId, id);
        } catch (err) {
            console.log(err)
        }
    }
    return (
        <div>{
            getAll()
        }
        </div>
    )
}