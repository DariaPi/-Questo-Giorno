import { useSelector } from "react-redux";
import { getTotalPrice } from "../Redux/cartSlice";
import Filter from "./Filter";

const MenuCategories = () => {
    const totalPrice = useSelector(getTotalPrice);

    return (
        <div className="categoryBox">
            {['All', 'Appetizers', 'Salads', 'Pizza', 'Pasta', 'Burgers', 'Meat', 'Fish', 'Soup', 'Dessert', 'Drinks']
            .map(category => <Filter  key={category} category={category}/>)}
            <hr/>
            <h4>TOTAL: ${ totalPrice.toFixed(2) }</h4>
        </div>
    )
}

export default MenuCategories;