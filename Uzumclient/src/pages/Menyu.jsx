import {Link, Outlet} from "react-router-dom";
import {Navbar} from "react-bootstrap";
import {SideBar} from "../component/SideBar.jsx";


export const Menyu = () => {
    return (
       <div>
           <div style={{width: "100%"}}>
               <SideBar/>
               <div style={{width: "83%", marginLeft: "250px", marginTop: "-750px"}}>
                   <Outlet/>
               </div>
           </div>
       </div>

    )
}