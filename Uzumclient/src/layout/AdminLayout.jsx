import {SideBar} from "../component/SideBar";
import {Outlet} from 'react-router-dom'
import {NotFound} from "../component/NotFound";

export const AdminLayout = () => {
    const token = localStorage.getItem("token")
    return (
        <div className={"w-100 d-flex"}>
            {token ? (
                <div className={"w-100 d-flex"}>
                    <SideBar/>
                    <div className={'d-flex align-items-center justify-content-center flex-column'}
                         style={{height: '100vh', width: '80%'}}>
                        <div className={"p-3"} style={{width: '100%', height: '94%'}}>
                            <Outlet/>
                        </div>
                        <div style={{width:"100"}}>
                        </div>
                    </div>
                </div>
             ) : (
               <NotFound/>
            )}
        </div>
    )
}