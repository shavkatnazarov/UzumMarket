import {NotFound} from "../component/NotFound.jsx";
import "../assets/css/style.css";
import {Dashboard} from "../pages/Dashboard.jsx";
import {Category} from "../pages/Category.jsx";
import "../css/style.css"
import {Product} from "../pages/Product.jsx";
import {AdminLayout} from "../layout/AdminLayout.jsx";
import {Login} from "../auth/Login.jsx";
import {ProductItem} from "../pages/ProductItem.jsx";
import {Profile} from "../pages/profil.jsx";
import {My} from "../pages/My.jsx";
import {Registers} from "../auth/Register.jsx";
import {CategoryItem} from "../pages/CategoryItem.jsx";
import {Basket} from "../pages/Basket.jsx";
import {Order} from "../pages/Order.jsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";

function App() {
    return (


        <BrowserRouter>
            <Routes>
                <Route path={"/"} element={<Dashboard/>}>
                </Route>
                    <Route path={"my/:id"} element={<My/>}/>
                <Route path={"/my/profile"} element={<Profile/>}>
                </Route>
                <Route path={"/auth/login"} element={<Login/>}/>
                    <Route path={"/my/order"} element={<Order/>}/>
                    <Route path={"/my/basket"} element={<Basket/>}/>
                    <Route path={"/auth/register"} element={<Registers/>}/>
                <Route path={"/auth/admin"} element={<AdminLayout/>}>
                    <Route path={"/auth/admin/category"} element={<Category/>}/>
                    <Route path={"/auth/admin/product"} element={<Product/>}/>
                </Route>
                <Route>
                    <Route path={"/auth/admin/product/:id"} element={<ProductItem/>}/>
                    <Route path={"category/:id"} element={<CategoryItem/>}/>
                    <Route path={"/*"} element={<NotFound/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App
