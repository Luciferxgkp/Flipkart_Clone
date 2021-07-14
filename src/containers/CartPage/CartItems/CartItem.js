import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { generatePublicUrl } from '../../../urlconfig'
import './style.css'
const CartItem=(props)=> {
    const [qty,setQty] = useState(props.cartItem.qty);
    const {
        _id , name,price,img
    } = props.cartItem

    const onQuantityIncrement = () =>{
        setQty(qty+1);
        props.onQuantityInc(_id,qty+1);
    }
    const onQuantityDecrement = () =>{
        if(qty<=1)
            return ;
        setQty(qty-1);
        props.onQuantityDec(_id,qty-1);
    }

    return (
        <div>
            <div className="cartItemContainer">
                <div className="flexRow">
                    <div className="cartProImgContainer">
                        <img src={generatePublicUrl(img)}/>
                    </div>
                    <div className="cartItemDetails">
                        <div>
                            <p>{name}</p>
                            <p>Rs. {price}</p>
                        </div>
                        <p>Delivery in 3- 5 days</p>
                    </div>
                </div>
                <div style={{
                    display:'flex',
                    margin:'5px 0'
                }}>
                    <div className="quantityControl">
                        <button onClick={onQuantityDecrement}>-</button>
                        <input value={qty} readOnly></input>
                        <button onClick={onQuantityIncrement}>+</button>
                    </div>
                    <button className="cartActionBtn">save for later</button>
                    <button className="cartActionBtn">Remove</button>
                </div>
            </div>
            
        </div>
    )
}

export default CartItem
