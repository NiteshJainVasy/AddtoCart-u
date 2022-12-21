import React, {useState} from 'react'
import {useSelector} from 'react-redux'
function Header(props)
{
    console.warn("Wwwwwwwwwwwwwwwwwwwwwwwww",props.data)
    const result = useSelector((state)=>state.cartData);

 
        const[items, setItems] = useState(false)
    console.warn("resultresultw",result)
    return(
        <div>
            
             <div className="add-to-cart">
           
            <span className="cart-count" hidden={(props.data.length === 0 ? true : false)}>{props.data.length}</span>
                <img src="https://static.vecteezy.com/system/resources/thumbnails/000/496/007/small/Ecommerce_998.jpg" />
            </div>
            
        </div>
    )
}

export default Header