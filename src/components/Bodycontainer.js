import React, { useEffect } from 'react'
import Header from './Header';
import { addToCart,clearToCart,removeToCart } from '../redux/action';
import { useDispatch } from 'react-redux'
import { productList } from '../redux/productAction';
import { useSelector } from 'react-redux'
function Bodycontainer() {
  const data = useSelector((state)=>state.productData)
  // console.log("The data of all products",data)
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(productList())
  },[productList])
  return (
    <div>
      <Header />
      <div >
        
      
        <button onClick={() => dispatch(clearToCart())}>clear cart</button>
        {/* <button onClick={() => dispatch(productList())}>Product action</button> */}
      </div>
      <div>
      {
        data.map((item)=> 
        <div key={item.productId} className='product-item'>
            {/* <img src={item.photo} alt="" /> */}
            <div>Name : {item.ProductName} </div>
            <div>Price : {item.productPrice} </div>
            <div>
            <button onClick={() => dispatch(addToCart(item))}>Add To Cart</button>
            <button onClick={() => dispatch(removeToCart(item.productId))}>remove cart</button>

              </div>
          </div>)
        }
      </div>
    </div>
  )
}

export default Bodycontainer
