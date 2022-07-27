import {ShopContext} from "../context";
import {useContext} from 'react'

function Cart(props) {
const {order, handleBasketShow=Function.prototype} = useContext(ShopContext)
    const quantity = order.length;

    return <div className='cart blue darken-3 white-text' onClick={handleBasketShow}>
        <i className='material-icons'>add_shopping_cart</i>
        {quantity ? (<span className='cart-quantity'>{quantity}</span>) : null}
    </div>
}

export {Cart}