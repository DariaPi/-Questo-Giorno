import { useSelector } from "react-redux";
import { getCartItems, getTotalPrice } from "../../Redux/cartSlice";
import CartItem from "./CartItem"

const Cart = () => {
    const cartItems = useSelector(getCartItems);
    const totalPrice = useSelector(getTotalPrice);
    const tnxU = () => {
        if (cartItems === []) alert ('it is alive')
        document.querySelector('.orderAlrt').style.display = "block";
        document.querySelector('.cartContainer').style.opacity = .2;
        document.body.classList.add ('lock');
    };
    const clsTnx = () => {
        document.querySelector('.orderAlrt').style.display = "none";
        document.querySelector('.cartContainer').style.opacity = 1;
        document.body.classList.remove ('lock');
    };

    return (
        <div className="container">
            <div className="orderAlrt">
                <h3>Thanks for your order</h3>
                <button onClick={clsTnx} className="tnxBtn">back</button>
            </div>
            <div className="cartContainer">
                <div className="cartBox orderBox">
                    {cartItems.map(cartItem => <CartItem key={cartItem.id} cartItem={cartItem}/>)}
                </div>
                <div className="orderBtnBox">
                    <h3>TOTAL: ${ totalPrice.toFixed(2) }</h3>
                    <button onClick={tnxU} className="orderBtn">Make an order</button>
                </div>
            </div>
        </div>
    )
}

export default Cart;