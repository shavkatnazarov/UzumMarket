import {useState} from "react";
import {Register} from "../server/service/AuthService.js";
import {Dashboard} from "../pages/Dashboard.jsx"

export const Registers = () => {
    const [name, setName] = useState('')
    const [surName, setsurName] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('');
    const [password, setPassword] = useState('');

    const registers = async () => {
        const dto = {phoneNumber, name, surName,password}
        try {
            await Register(dto)
        } catch (err) {
            console.log(err)
        }
    }
    return (
        localStorage.getItem("id") ? (
            <Dashboard/>
        ) : (
            <div>
                <div className={"container d-flex align-items-center justify-content-center"} style={{height: '100vh'}}>
                    <form className={"w-50 p-5 shadow"}>
                        <h1 className={"text-center text-primary mb-3"}>Kirish</h1>
                        <div className="form-outline mb-4">
                            <input type="phoneNumber" value={phoneNumber} onChange={e => setPhoneNumber(e.target.value)}
                                   id="form2Example1" className="form-control"/>
                            <label className="form-label" htmlFor="form2Example1">Telefon raqam</label>

                            <input type="phoneNumber" value={password} onChange={e => setPassword(e.target.value)}
                                   id="form2Example1" className="form-control"/>
                            <label className="form-label" htmlFor="form2Example1">parol</label>
                        </div>

                        <div className="form-outline mb-4">
                            <input type="text" placeholder={"ismingizni kiriting"} value={name}
                                   onChange={e => setName(e.target.value)}
                                   id="form2Example2" className="form-control"/>
                            <label className="form-label" htmlFor="form2Example2">Ism</label>
                            <input type="text" value={surName} placeholder={"familyangizni kiriting"}
                                   onChange={e => setsurName(e.target.value)}
                                   id="form2Example2" className="form-control"/>
                            <label className="form-label" htmlFor="form2Example2">Familya</label>
                        </div>
                        <button type="button" onClick={() => registers()}
                                className="btn btn-primary btn-block mb-4">Sign
                            in
                        </button>
                    </form>
                </div>

            </div>

        )
    )
}