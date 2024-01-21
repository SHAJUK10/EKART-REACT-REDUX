import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Col, Row } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import {removeFromWishlist} from '../redux/slices/wishlistSlice'
import { addToCart } from '../redux/slices/cartSlice';

function Wishlist() {
  const wishListItems = useSelector((state) => state.wishlistReducer);
  const dispatch=useDispatch()
  const handleWishlist=(item)=>{
    dispatch(addToCart(item))
    dispatch(removeFromWishlist(item.id))
  }
  return (
    <>
   <Button style={{marginTop:"150px"}} className='btn btn-success ms-5'>
   
    <Link to={"/"} style={{textDecoration:"none",color:"white"}}>
    <i class="fa-solid fa-arrow-left me-2"></i>
      Back to home</Link></Button>
      <Row  className='ms-5 me-5 mt-5' >
      
        {
               wishListItems?.length>0?
               wishListItems.map((item)=>(
                <Col className='mb-5 ' sm={12}  md={6} lg={4} xl={3}>
                  <Card style={{ width: '16rem' }}>
        <Card.Img variant="top" src={item.thumbnail} height={'200px'}  />
        <Card.Body>
          <Card.Title style={{fontSize:"15px"}}>{item.title}</Card.Title>
          <Card.Text>
            {item.description.slice(0,50)}...
          </Card.Text>
          <div className='d-flex align-items-center justify-content-between'>
          <Button variant="outline-danger " onClick={() => dispatch(removeFromWishlist(item.id))}>
          <i class="fa-solid fa-trash"></i></Button>
          <Button
          onClick={()=>handleWishlist(item)}
          variant="outline-success"><i class="fa-solid fa-cart-plus"></i></Button>
          </div>
          
        </Card.Body>
      </Card>
                </Col>
               )):
               <p>NO Items in wishlist</p>
               }
      </Row>
    </>
  )
}

export default Wishlist