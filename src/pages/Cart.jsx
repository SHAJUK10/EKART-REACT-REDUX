import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Col, Row } from 'react-bootstrap'
import Card from 'react-bootstrap/Card';
import { removeFromCart } from '../redux/slices/cartSlice';

function Cart() {
  const cartItems = useSelector((state) => state.cartReducer);
  const dispatch = useDispatch()
  return (
    <>
      <Button style={{ marginTop: "150px" }} className='btn btn-success ms-5'>

        <Link to={"/"} style={{ textDecoration: "none", color: "white" }}>
          <i class="fa-solid fa-arrow-left me-2"></i>
          Back to home</Link>
      </Button>
      <div className='row w-100'>

        {
          cartItems?.length > 0 ?
          <div className='col-lg-6 col-md-6 m-5'>
          <table className='table table shadow border'>
            <thead>
              <tr>
                <th>#</th>
                <th>Product</th>
                <th>Image</th>
                <th>Price</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {
                cartItems?.map((item,index)=>(

                  <tr>
                <th>{index+1}</th>
                <th>{item.title}</th>
                <th><img src={item.thumbnail} alt="" height={"50px"} width={'50px'}/></th>
                <th>&#8377; {item.price}</th>
                <th>  <Button variant="outline-danger " onClick={() => dispatch(removeFromCart(item.id))}>
          <i class="fa-solid fa-trash"></i></Button></th>
              </tr>

                ))
              }
              
            </tbody>
          </table>
        </div>:

      
      <p className='text-danger'>NO ITEMS IN CART</p>
      }
      </div>  
    </>
  )
}

export default Cart