import { useContext } from "react"
import { CartContext } from "../contexts/CartContext";

export const Cart = () => {
    const { cart } = useContext(CartContext)
    return <div>No. of Cart itrms: {cart} </div>;
}