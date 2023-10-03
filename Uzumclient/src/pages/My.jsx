
import {NotFound} from "../component/NotFound.jsx";
import {Link, useLocation} from "react-router-dom";

export const My = () => {
    const location = useLocation().pathname
    const barre = [
        {name: "Ma'lumot", link: "/my/profile"},
        {name: "Buyurtmalar", link: "/my/order"}
    ]
    return (
        localStorage.getItem("id") ? (
            <div>
                <form className={"d-flex mt-3 "} style={{marginLeft: "40%"}}>
                    {barre.map((item) => (
                        <Link to={item.link}
                              className={location === item.link ? "btn btn-warning m-1" : "btn btn-outline-secondary m-1"}
                              aria-current="page">
                            {item.name}
                        </Link>
                    ))}
                   </form>
            </div>
        ) : (
            <NotFound/>
        )
    )
}