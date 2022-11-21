import MenuCategories from "../../Filters/MenuCategories";
import Dishes from "./Dishes";

const Menu = () => {
    return (
        <div className="menuBox container">
            <MenuCategories/>
            <Dishes/>
        </div>
    )
}

export default Menu;