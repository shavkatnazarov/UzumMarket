import {Link} from "react-router-dom";
import {Menyu} from "../pages/Menyu.jsx";

export const NotFound = () => {
    return (
        <div className={"container"}>

            <h1 style={{color: "red", textAlign: "center"}}>404 not found <br/>
                pages
            </h1>
            <div>
                <Link style={{marginTop: "-10px", marginLeft: "600px", width: "40px", height: "40"}} to={"/"}
                      className={"btn btn-success"}><i
                    className="bi bi-box-arrow-left"></i></Link>
            </div>
        </div>
    )
}