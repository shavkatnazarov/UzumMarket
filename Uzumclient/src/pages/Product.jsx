import {useEffect, useState} from "react";
import {DeleteProduct, GetProductList, SaveProduct, UploadPhoto} from "../server/service/AppService.js";
import axios from "axios";
import {BaseUrl} from "../server/BaseUrl.js";
import {Api} from "../server/Api.js";
import {Link} from "react-router-dom";
import {Pagination} from "../component/Pagination.jsx";
import {Loading} from "../component/Loading.jsx";

export const Product = () => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(false)
    const [categories, setCategories] = useState([])
    const [search, setSearch] = useState('')
    const [currentPage, setCurrentPage] = useState(1);
    const [prePage] = useState(5)

    const getAll = async () => {
        try {
            const a = await GetProductList()
            setProducts(a)
            const res = await axios.get(BaseUrl + "/category")
            setCategories(res.data._embedded.list)
            setLoading(true)
        } catch (err) {
        }
    }

    useEffect(() => {
        getAll()
    }, [])

    const deleteProduct = async (id) => {
        const confirm = window.confirm("Mahsulotni o'chirmoqchimisiz?")
        if (confirm) {
            await DeleteProduct(id)
            await getAll()
        }
    }

    const indexOfLastData = currentPage * prePage;
    const indexOfFirstData = indexOfLastData - prePage;
    const currentData = products.slice(indexOfFirstData, indexOfLastData);
    const paginate = (pageNumber) => setCurrentPage(pageNumber);


    // const filter = products.filter(item => item.name.toLowerCase().includes(search.toLowerCase()))

    return (
        <div className={"container"}>
            {loading ? (
                <>
                    <div className=" w-100 d-flex align-items-center justify-content-between"
                         style={{marginTop: "23px"}}>
                        <div className={"w-25 d-flex align-items-center justify-content-between"}>
                            <button className="btn btn-primary" type="button" data-bs-toggle="offcanvas"
                                    data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"><i
                                className="bi bi-plus-circle"/></button>
                        </div>
                        <h3 className={"text-center m-5 text-primary"}>Mahsulot</h3>
                    </div>
                    <AddProduct categories={categories} getAll={getAll}/>
                    {products.length === 0 ? (
                        <h1 className={"text-center text-danger"}>Hozircha mahsulotlar mavjud emas...</h1>
                    ) : (
                        search.length === 0 ? (
                            <>
                                <GetProduct products={currentData} deleteProduct={deleteProduct} categories={categories}
                                            getAll={getAll}/>
                                <Pagination totalData={products.length} perPage={prePage}
                                            paginate={paginate}/>
                            </>
                        ) : (
                            filter.length === 0 ? (
                                <h1 className={"text-center text-danger"}>Qidiruv natijasida mahsulot topilmadi...</h1>
                            ) : (
                                <>
                                    <GetProduct products={filter} deleteProduct={deleteProduct} categories={categories}
                                                getAll={getAll}/>
                                    <Pagination totalData={filter.length} perPage={prePage}
                                                paginate={paginate}/>
                                </>
                            )
                        )
                    )}
                </>
            ) : (
                <Loading/>
            )}
        </div>
    )
}

const GetProduct = ({products, deleteProduct, categories, getAll}) => {
    const [photoId, setPhotoId] = useState('')
    const [description, setDescription] = useState('')
    const [status, setStatus] = useState('')
    const [product, setProduct] = useState({})

    const showModalInfoAnImg = (about, status) => {
        if (status === "img") {
            setPhotoId(about)
        } else {
            setDescription(about)
        }
        setStatus(status)
    }
    return (
        <div>
            <table className={"table shadow mt-5"}>
                <thead>
                <tr>
                    <th>T/r</th>
                    <th>nomi</th>
                    <th>narxi</th>
                    <th>bo'limi</th>
                    <th className={"w-25"} colSpan={5}>haqida</th>
                </tr>
                </thead>
                <tbody>
                {products.map((item, i) => (
                    <tr>
                        <td>{i + 1}</td>
                        <td>{item.name}</td>
                        <td>{item.price}</td>
                        <td>{item.category.name}</td>
                        <td>
                            <button className={"btn btn-primary"} onClick={() => showModalInfoAnImg(item.img, "img")}
                                    type="button"
                                    data-bs-toggle="modal" data-bs-target="#exampleModal"><i
                                className="bi bi-image-fill"/></button>
                        </td>
                        <td>
                            <button className={"btn btn-info"} type="button"
                                    data-bs-toggle="modal" data-bs-target="#exampleModal"
                                    onClick={() => showModalInfoAnImg(item.description, "description")}><i
                                className="bi bi-info-circle"/></button>
                        </td>
                        <td>
                            <Link className={"btn btn-success"} to={`/auth/admin/product/${item.id}`}>
                                <i className="bi bi-eye"/>
                            </Link>
                        </td>
                        <td>
                            <button className={"btn btn-warning"} type="button" data-bs-toggle="offcanvas"
                                    data-bs-target="#addOffcanvasRight" aria-controls="addOffcanvasRight"
                                    onClick={() => setProduct(item)}><i
                                className="bi bi-pencil-square"/></button>
                        </td>
                        <td>
                            <button className={"btn btn-danger"} onClick={() => deleteProduct(item.id)}><i
                                className="bi bi-trash3"/></button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>

            <EditProducts categories={categories} getAll={getAll} product={product}/>

            <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel"
                 aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5"
                                id="exampleModalLabel">{status === "img" ? "Mahsulot rasmi" : "Mahsulot haqida"}</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"/>
                        </div>
                        <div className="modal-body">
                            {status === "img" ? (
                                <img width={"100%"} src={Api.downloadPhoto + photoId} alt="1"/>
                            ) : (
                                <h6>{description}</h6>
                            )}
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const AddProduct = ({categories, getAll}) => {
    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const [categoryId, setCategoryId] = useState('')
    const [description, setDescription] = useState('')

    const saveProduct = async () => {
        const file = new FormData()
        let rasm = document.getElementById("img")
        file.append("rasm", rasm.files[0])

        let img = await UploadPhoto(file)

        const data = {
            name, price, categoryId, description, img
        }

        await SaveProduct(data)
        setName("")
        setPrice("")
        setCategoryId("")
        setDescription("")
        await getAll()

    }
    return (
        <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasRight"
             aria-labelledby="offcanvasRightLabel">
            <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="offcanvasRightLabel">mahsulot qo'shish</h5>
                <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"/>
            </div>
            <div className="offcanvas-body">
                <form>
                    <label htmlFor="name" className={"m-2 text-primary"}>mahsulot nomini kiriting</label>
                    <input type="text" placeholder={"nomi..."} className={"form-control"} id={"name"} name={"name"}
                           value={name} onChange={e => setName(e.target.value)}/>

                    <label htmlFor="price" className={"m-2 text-primary"}>mahsulot narxini kiriting</label>
                    <input type="number" placeholder={"narxi..."} className={"form-control"} id={"price"} name={"price"}
                           value={price} onChange={e => setPrice(e.target.value)}/>

                    <label htmlFor="categoryId" className={"m-2 text-primary"}>mahsulot qaysi bo'limga tegishli</label>
                    <select name="categoryId" value={categoryId} onChange={e => setCategoryId(e.target.value)}
                            id="categoryId"
                            className={"form-select"}>
                        <option value="0" selected={true}>bo'limni tanlang</option>
                        {categories.map(item => (
                            <option value={item.id}>{item.name}</option>
                        ))}
                    </select>

                    <label htmlFor="description" className={"m-2 text-primary"}>mahsulot haqida ma'lumot
                        kiriting</label>
                    <textarea name="description" id="description" cols="47" rows="4" value={description}
                              onChange={e => setDescription(e.target.value)}/>

                    <label htmlFor="img" className={"m-2 text-primary"}>mahsulot rasmini yuklang</label>
                    <input type="file" className={"form-control"} id={"img"} name={"img"}/>

                    <button type={"button"} onClick={() => saveProduct()} className={"btn btn-primary mt-3"}><i
                        className="bi bi-plus-circle"/>{" "}save
                    </button>
                </form>
            </div>
        </div>
    )
}


const EditProducts = ({categories, getAll, product}) => {
    const [name, setName] = useState(product.name)
    const [price, setPrice] = useState(product.price)
    const [description, setDescription] = useState(product.description)

    const editProduct = async () => {
        const file = new FormData()
        let rasm = document.getElementById("editImg")
        file.append("rasm", rasm.files[0])

        let img = await UploadPhoto(file)

        const data = {
            name, price, description, img
        }

        await EditProduct(data, product.id)
        setName("")
        setPrice("")
        setDescription("")
        await getAll()
    }
    return (
        <div className="offcanvas offcanvas-end" tabIndex="-1" id="addOffcanvasRight"
             aria-labelledby="offcanvasRightLabel">
            <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="offcanvasRightLabel">mahsulotni taxrirlash</h5>
                <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"/>
            </div>
            <div className="offcanvas-body">
                <form>
                    <label htmlFor="name" className={"m-2 text-primary"}>mahsulot nomini kiriting</label>
                    <input type="text" placeholder={"nomi..."} className={"form-control"} id={"name"} name={"name"}
                           value={name} onChange={e => setName(e.target.value)}/>

                    <label htmlFor="price" className={"m-2 text-primary"}>mahsulot narxini kiriting</label>
                    <input type="number" placeholder={"narxi..."} className={"form-control"} id={"price"} name={"price"}
                           value={price} onChange={e => setPrice(e.target.value)}/>


                    <label htmlFor="description" className={"m-2 text-primary"}>mahsulot haqida ma'lumot
                        kiriting</label>
                    <textarea name="description" id="description" cols="47" rows="4" value={description}
                              onChange={e => setDescription(e.target.value)}/>

                    <label htmlFor="editImg" className={"m-2 text-primary"}>mahsulot rasmini yuklang</label>
                    <input type="file" className={"form-control"} id={"editImg"} name={"editImg"}/>

                    <button type={"button"} onClick={() => editProduct()} className={"btn btn-primary mt-3"}><i
                        className="bi bi-plus-circle"/>{" "}save
                    </button>
                </form>
            </div>
        </div>
    )

}