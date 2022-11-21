import { useState } from "react";
import { useDispatch } from "react-redux";
import ChangeQuantity from "../Cart/ChangeQuantity";
import { addItemToCart } from "../../Redux/cartSlice";

const Dish = ({dish}) => {
    const [quantity, setQuantity] = useState(1);
    const dispatch = useDispatch();

    return (
        <div className="dishItem" key={dish.id}>
            <img src={`./${dish.img}.jpg`} alt={dish.name} className="dishImg" width="300px" height="420px"/>
            <h3 className="dishTxt">{dish.name}</h3>
            <p>Price: ${dish.price.toFixed(2)}</p>
            <ChangeQuantity quantity={quantity} setQuantity={setQuantity}/>
            <button className="dishBtn addBtn" onClick={() => {dispatch(addItemToCart({dish, quantity}))}}>Add to cart</button>
        </div>
    )
}

export default Dish;
