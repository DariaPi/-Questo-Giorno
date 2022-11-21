const ChangeQuantity = ({quantity, setQuantity}) => {
    const addQuantity = () => {
        setQuantity(quantity + 1)
    } 

    const removeQuantity = () => {
        if (quantity <= 1) return;
        setQuantity(quantity - 1)
    }

    return (
        <div>
            <button className="dishBtn quantityBtn" onClick={removeQuantity}>-</button>
            <span className="quantityNumber">{quantity}</span>
            <button className="dishBtn quantityBtn" onClick={addQuantity}>+</button>
        </div>
    )
}

export default ChangeQuantity;