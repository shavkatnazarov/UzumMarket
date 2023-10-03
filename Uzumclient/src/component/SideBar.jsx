import {Link, useLocation, useNavigate} from "react-router-dom";
import {useState} from "react";

export const SideBar = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const logout = () => {
        localStorage.clear()
        navigate("/")
    }
    const sideArr = [
        {name: "Bo'lim", link: '/auth/admin/category', icon: "bi bi-inboxes"},
        {name: "Product", link: '/auth/admin/product', icon: ""},
    ]
    return (
        <aside className="sidebar" style={{color:"black"}}>
            <div className="sidebar-start">
                <div className="sidebar-head">
                    <a href="/" className="logo-wrapper" title="Home">
                        <span className="sr-only">Home</span>

                        <div className="logo-text">
                            <span className="logo-title" style={{color:"white"}}>Uzum</span>
                            <span className="logo-subtitle">Admin panel</span>
                        </div>

                    </a>

                </div >
                <div className="sidebar-body">
                    <ul className="sidebar-body-menu">
                        <ul className="nav nav-pills flex-column mb-auto">
                            {sideArr.map(item => (
                                <li className="nav-item">
                                    <Link to={item.link} className={location === item.link ? "active" : "nav-link"}
                                          aria-current="page">
                                        <i className={item.icon} style={{fontSize: "22px",}}>{" "}</i>{" " + item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </ul>
                    <ul className="sidebar-body-menu">

                        <li>
                            <a className="show-cat-btn"  onClick={getUser}>
                                <span className="icon user-3" onClick={getUser} aria-hidden="true"/>Users
                                <span className="category__btn transparent-btn" title="Open list">

                        </span>
                            </a>
                        </li>
                    </ul>

                </div>
            </div>
            <div className="sidebar-footer">
                <a href="##" className="sidebar-user">
            <span className="sidebar-user-img">
                <picture>
                    <source
                        srcSet={"https://junkmailimages.blob.core.windows.net/large/fa685acad3d44539bd3d0ffba39c913b.jpg"}
                        type="image/webp"/>
                        <img
                            src={"https://junkmailimages.blob.core.windows.net/large/fa685acad3d44539bd3d0ffba39c913b.jpg"}
                            alt="User name"/>
                </picture>
            </span>
                    <div onClick={() => logout()} className="sidebar-user-info">
                        <span className="sidebar-user__title">Log Out</span>
                        <span className="sidebar-user__subtitle">Admin</span>
                    </div>
                </a>
            </div>
        </aside>

    )
}
const getUser =()=>{
    const [users, setUsers] = useState([])
    users.map(item=>(
        <li className="nav-item">
            <Link to={item.name}
                  aria-current="page">
            </Link>
        </li>
    ))
}