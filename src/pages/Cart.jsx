import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button } from 'react-bootstrap';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { Col, Row } from 'react-bootstrap'
import Card from 'react-bootstrap/Card';
import { emptyCart, removeFromCart } from '../redux/slices/cartSlice';


function Cart() {

  const cartItems = useSelector((state) => state.cartReducer);
  let totalPrice = 0;
  cartItems?.forEach(item => {
    totalPrice = totalPrice + item.price
  })





  const dispatch = useDispatch()
  const Navigate =useNavigate()
  const handleCheckout = () => {
    alert("Successfully Placed The Order");
    dispatch(emptyCart())
    Navigate("/")
    
  }
  return (
    <>
      <Button style={{ marginTop: "150px" }} className='btn btn-success ms-5'>

        <Link to={"/"} style={{ textDecoration: "none", color: "white" }}>
          <i class="fa-solid fa-arrow-left me-2"></i>
          Back to home</Link>
      </Button>
      <div className='row w-100 '>



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
                cartItems?.length > 0 ?
                  cartItems?.map((item, index) => (

                    <tr>
                      <th>{index + 1}</th>
                      <th>{item.title}</th>
                      <th><img src={item.thumbnail} alt="" height={"50px"} width={'50px'} /></th>
                      <th>&#8377; {item.price}</th>
                      <th>  <Button variant="outline-danger " onClick={() => dispatch(removeFromCart(item.id))}>
                        <i class="fa-solid fa-trash"></i></Button></th>
                    </tr>

                  ))
                  :


                  <p className='text-danger'>NO ITEMS IN CART</p>
              }

            </tbody>
          </table>
        </div>
        <div className='col-lg-4 col-md-4 m-5 d-flex justify-content-center align-items-center'>
          <div className='border shadow p-5'>
            <h3 className='text-primary'>Cart  Summary</h3>
            <h5>Total Number of Products <span className='fw-bolder text-warning ms-3'>{cartItems?.length}</span></h5>
            <h5>Total price <span className='fw-bolder text-warning ms-3' >{totalPrice}</span></h5>
            <button className='btn btn-success rounded w-100 mt-3' onClick={handleCheckout}>Checkout</button>
          </div>

        </div>
      </div>
    </>
  )
}

export default Cart