import React from 'react'
import Header from './Header'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { removeToCart } from '../redux/action';
function Cart() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.cartData)
  const amount = data.length && data.map((iteam)=>iteam.productPrice).reduce((prv,nxt)=>prv+nxt)
  console.log(amount)
  console.log("The data of all products", data)
  return (
    <div>
      <Header />
      <h1>Cart</h1>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Product Name</th>
            <th scope="col">Price</th>
            <th scope="col">Remove</th>
          </tr>
        </thead>
        {
          data.map((items) => 
            <tbody key={items.ProductId}>
            <tr key={items.ProductId}>
           
              <td>{items.ProductName}</td>
              <td> {items.productPrice}</td>
              <td><button onClick={() => dispatch(removeToCart(items.productId))}>remove cart</button></td>
            </tr>
          </tbody>
          )
        }
     
      </table>
      <h3> <b> Amount : {amount}  </b> </h3>
    </div>
  )
}

export default Cart
