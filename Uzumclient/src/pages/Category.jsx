import {useEffect, useState} from "react";
import axios from "axios";
import {toast} from "react-toastify";

export const Category = () => {
    const [name, setName] = useState('')
    const [category, setCategory] = useState([])
    const [id, setId] = useState('')
    const [currentPage, setCurrentPage] = useState(1);
    const [prePage] = useState(10)

    const saveCategory = async () => {
        if (name.trim().length === 0) {
            return toast.warning("name not null")
        }
        try {
            const data = {
                name
            }
            const res = await axios.post("http://localhost:8080/api/v1/category", data)
            console.log(res)
            toast.success("successfully saved category")
            setTimeout(() => {
                window.location.reload()
            }, 2000)
        } catch (e) {
            toast.error("error")
        }
    }

    const editCategory = async () => {
        if (name.trim().length === 0) {
            return toast.warning("name not null")
        }
        try {
            const data = {
                name
            }
            await axios.put("http://localhost:8080/api/v1/category/" + id, data)
            toast.success("successfully edited category")
            setTimeout(() => {
                window.location.reload()
            }, 2000)
        } catch (e) {
            toast.error("error")
        }
    }

    const deleteCategory = async () => {
        try {
            await axios.delete("http://localhost:8080/api/v1/category/" + id)
            toast.success("deleted")
            setTimeout(() => {
                window.location.reload()
            }, 2000)
        } catch (err) {
            toast.error("error")
        }
    }

    const getAll = async () => {
        try {
            const res = await axios.get("http://localhost:8080/api/v1/category")
            setCategory(res.data._embedded.list)

        } catch (err) {

        }
    }
    useEffect(() => {
        getAll()
    }, [])

    const indexOfLastData = currentPage * prePage;
    const indexOfFirstData = indexOfLastData - prePage;
    const currentData = category.slice(indexOfFirstData, indexOfLastData);
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <div className={"container"}>
            <h1 className={"text-center m-5 text-primary"}>Category pages</h1>
            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                +add
            </button>

            {currentData.length === 0 ? (
                <h1 className={"text-center text-danger"}>hozircha malumot joq</h1>
            ) : (
                <table className={"table mt-3"}>
                    <thead>
                    <tr>
                        <th>T/r</th>
                        <th>name</th>
                        <th colSpan={2}>action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {category.map((item, i) => (
                        <tr>
                            <td>{i + 1}</td>
                            <td>{item.name}</td>
                            <td>
                                <button onClick={() => setId(item.id)} type="button" className="btn btn-warning"
                                        data-bs-toggle="modal"
                                        data-bs-target="#editModal">
                                    edit
                                </button>
                            </td>
                            <td>
                                <button onClick={() => setId(item.id)} type="button" className="btn btn-danger"
                                        data-bs-toggle="modal"
                                        data-bs-target="#deleteModal">
                                    delete
                                </button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            )}
            {/*<PageNation totalData={category.length} perPage={prePage} paginate={paginate}/>*/}

            <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel"
                 aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">add category</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal"
                                    aria-label="Close"/>
                        </div>
                        <div className="modal-body">
                            <input type="text" placeholder={"enter category name"} value={name}
                                   onChange={e => setName(e.target.value)} className={"form-control"}/>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Close</button>
                            <button onClick={() => saveCategory()} type="button" className="btn btn-primary">Save
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="modal fade" id="editModal" tabIndex="-1" aria-labelledby="editModalLabel"
                 aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="editModalLabel">add category</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal"
                                    aria-label="Close"/>
                        </div>
                        <div className="modal-body">
                            <input type="text" placeholder={"enter category name"} value={name}
                                   onChange={e => setName(e.target.value)} className={"form-control"}/>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Close</button>
                            <button onClick={() => editCategory()} type="button" className="btn btn-primary">Save
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="modal fade" id="deleteModal" tabIndex="-1" aria-labelledby="deleteModalLabel"
                 aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="deleteModalLabel">delete category</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal"
                                    aria-label="Close"/>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Close</button>
                            <button onClick={() => deleteCategory()} type="button" className="btn btn-primary">delete
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}