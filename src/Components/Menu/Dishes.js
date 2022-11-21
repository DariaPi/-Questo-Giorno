import { useSelector } from "react-redux";
import DishData from "../../data/DishData";
import { getSelectedCategory } from "../../Redux/dishesSlice";
import Dish from "./Dish";

const Dishes = () => {
    const selectedCategory = useSelector(getSelectedCategory);

    return (
        <div className="dishesBox">
            {DishData
            .filter (dish => {
                if (selectedCategory === 'All') return true;
                return selectedCategory === dish.category;
            })
            .map(dish => <Dish key={dish.id} dish={dish}/>)}
        </div>
    )
}

export default Dishes;
