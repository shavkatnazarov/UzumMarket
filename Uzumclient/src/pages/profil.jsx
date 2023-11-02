import {My} from "./My.jsx";
import {Link, useNavigate} from "react-router-dom";
import {toast} from "react-toastify";

export const Profile = () => {
    const navigate = useNavigate()
    const register = () => {
        navigate("/auth/register")
    }
    const logout = () => {
        localStorage.clear()
        navigate("/")
        window.location.reload()
    }

    return (

        <div>
            <div>
                <div><i className="bi bi-person" style={{fontSize: "100px", marginLeft: "700px",color:""}}></i>

                    <h3 className={"text-center text-secondary"} style={{marginLeft: "1px"}}> Tel{localStorage.getItem("phoneNumber")}</h3>
                    <h3 className={"text-center text-secondary"} style={{borderRadius:"12px"}}>ism {localStorage.getItem("firstName")}</h3>

                </div>


                <button onClick={() => logout()} className={"btn btn-danger mt-3"}
                        style={{width: "250px", marginLeft: "760px"}}>Chiqish
                </button>
                <button className={"btn btn-success "}
                        onClick={() => register()}
                        style={{width: "250px", marginLeft: "500px", marginTop: "-65px"}}>registratsiya
                </button>
            </div>

            <My/>
        </div>
    )
}
