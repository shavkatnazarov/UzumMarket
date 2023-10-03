import {Navbar} from "../component/Navbar.jsx";
import {Body} from "../component/Body.jsx";
import {Outlet} from "react-router-dom";
import {Fotter} from "../component/Fotter.jsx";

export const Dashboard =()=>{
    return(
        <div>
            <Navbar/>
            <Body/>
            <Outlet/>
            <Fotter/>
        </div>
    )
}