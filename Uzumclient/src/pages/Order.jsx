import {My} from "./My.jsx";

export const Order = () => {
    return (
        <div>
            <My/>
            <h1 className={"text text-center m-3"}>Buyurtmalar</h1>
            {localStorage.getItem("order") === null? (
                <h1  className={"text-danger text-center m-3"}>Buyurtmalar Mavjud Emas</h1>
            ) : (
                <h1>
                    {
                        localStorage.getItem("order")
                    }
                </h1>
            )}
        </div>
    )
}