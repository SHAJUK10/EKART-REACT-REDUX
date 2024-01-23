import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <>
     <>
      <div className='d-flex justify-content-center align-items-center mt-5 ' style={{backgroundColor:"#5D3FD3"}}>
        <div className='footer d-flex align-item-center justify-content-evenly mt-5 mb-3'>
          <div className='website' style={{ width: "400px" }}>

            <h5 style={{color:"#ff6f61"}}> <i class="fa-solid fa-cart-shopping" style={{color:"#ff6f61"}}></i> E-KART</h5>
            <p style={{ textAlign: "justify" }}>
              The React-based media player boasts seamless functionality and an intuitive interface that adapts across devices. Leveraging React's components, it offers dynamic controls for playback and navigation, ensuring a rich multimedia experience.</p>

          </div>
          <div className='links d-flex flex-column ms-5'>
            <h4 style={{color:"#ff6f61"}}>Links</h4>
            <Link to="/" style={{ textDecoration: 'none', color: "black" }}  >Home</Link>
            <Link to="/cart" style={{ textDecoration: 'none', color: "black" }}   >Cart</Link>
            <Link to="/wishlist" style={{ textDecoration: 'none', color: "black" }}>Wishlist</Link>
          </div>


          <div className='guides d-flex flex-column ms-5'>
            <h4 style={{color:"#ff6f61"}}>Guides</h4>
            <Link to="https://react.dev/" target='_blank' style={{ textDecoration: 'none', color: "black" }}  >React</Link>
            <Link to="https://react-bootstrap.netlify.app/" target='_blank' style={{ textDecoration: 'none', color: "black" }}   >React Bootstrap</Link>
            <Link to="https://bootswatch.com/" target='_blank' style={{ textDecoration: 'none', color: "black" }}>Boots Watch</Link>
          </div>


          <div className='contactus ms-5'>
            <h4 style={{color:""}}>Contact Us</h4>
            <div className='d-flex'>
              <input type="text" className='form-control' placeholder='Enter Your Email' />
              <button className='btn  ms-3' style={{backgroundColor:"#088F8F"}}>Subscribe</button>
            </div>
            <div className='d-flex justify-content-evenly align-item-center mt-3'>
              <Link style={{color:"#40E0D0"}}><i class="fa-brands fa-instagram fa-2x" ></i></Link>
              <Link style={{color:"#40E0D0"}}><i class="fa-brands fa-twitter fa-2x"></i></Link>
              <Link style={{color:"#40E0D0"}}><i class="fa-brands fa-facebook fa-2x"></i></Link>
              <Link style={{color:"#40E0D0"}}><i class="fa-brands fa-linkedin fa-2x"></i></Link>
            </div>
          </div>






        </div>


      </div>

      <p className='mt-5  text-center'>Copyright &copy; 2024 Ekart Built with React and Redux</p>
    </>
    </>
  )
}

export default Footer