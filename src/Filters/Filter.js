import { useDispatch, useSelector } from 'react-redux';
import { filterCategory, getSelectedCategory } from '../Redux/dishesSlice';

const Filter = ({category}) => {
    const dispatch = useDispatch();
    const selectedCategory = useSelector(getSelectedCategory);

    return (
        <div>
            <p onClick={() => {
                dispatch(filterCategory(category))
            }} className={selectedCategory === category ? "categoryItem selectedCategory" : "categoryItem"}>{category}</p>
        </div>
    )
}

export default Filter;