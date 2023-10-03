import {My} from "./My.jsx";
import {useNavigate} from "react-router-dom";
import {toast} from "react-toastify";

export const Profile = () => {
    const navigate = useNavigate()
    const logout = () => {
        localStorage.clear()
        navigate("/")
        window.location.reload()
    }

    return (

        <div>
            <My/>
            <div>
                <div><i className="bi bi-person-circle" style={{fontSize: "100px", marginLeft: "700px"}}></i>
                    <h1 className={"text-center"}>{localStorage.getItem("firstName") + " " + " " + localStorage.getItem("lastName")}</h1>
                    <h className={"text-center text-secondary"}
                       style={{marginLeft: "705px"}}>{localStorage.getItem("phoneNumber")}</h>

                </div>
                <label htmlFor="name" style={{marginLeft: "465px"}}>ism</label>
                <input id={"name"} style={{width: "600px", marginLeft: "450px"}} type={"text"}
                       className={"form-control"} placeholder={localStorage.getItem("firstName")}></input>
                <label htmlFor="name" style={{marginLeft: "465px"}}>Familiya</label>
                <input id={"surName"} style={{width: "600px", marginLeft: "450px"}} type={"text"}
                       className={"form-control"} placeholder={localStorage.getItem("lastName")}></input>
                <label htmlFor="name" style={{marginLeft: "465px"}}>Tug'ilgan sana</label>
                <input id={"date"} style={{width: "600px", marginLeft: "450px"}} type={"date"}
                       className={"form-control"} placeholder={localStorage.getItem("firstName")}></input>
                <button onClick={() => logout()} className={"btn btn-danger mt-3"}
                        style={{width: "250px", marginLeft: "760px"}}>Chiqish
                </button>
                <button className={"btn btn-secondary "}
                        onClick={() => edit()}
                        style={{width: "250px", marginLeft: "500px", marginTop: "-65px"}}>Saqlash
                </button>
            </div>

        </div>
    )
}
const edit = () => {
    return (
        toast.warn("Malumotni tahrirlab bolmaydi")
    )
}