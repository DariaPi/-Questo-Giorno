import DishData from "../../data/DishData";
import { useDispatch } from "react-redux";
import { removeItemFromCart } from "../../Redux/cartSlice";

const CartItem = ({cartItem}) => {

    const dishes = DishData.find(item => item.id === cartItem.dishId);
    const dispatch = useDispatch();

    return (
        <div className="cartItm">
            <img className="cartImg" src={`./${dishes.img}.jpg`} alt={dishes.name} width="150px" height="210px"/>
            <div className="cartTxt">
                <h3>{dishes.name}</h3>
                <p>{cartItem.quantity} portion(s)</p>
                <p>Price: ${(dishes.price * cartItem.quantity).toFixed(2)}</p>
                <span onClick={() => dispatch(removeItemFromCart({cartItemId: cartItem.id}))}>
                    <img className="icon" src="https://img.icons8.com/material-outlined/48/000000/trash--v1.png" alt="delete" width="20px"/> 
                </span>
            </div>
        </div>
    )
}

export default CartItem;