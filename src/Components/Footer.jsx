import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className='d-flex justify-content-center align-items-center flex-column bg-primary text-light mt-5' style={{width:'100%', height:'300px'}}>

       <div className='footer-content d-flex justify-content-evenly w-100 flex-wrap '>
{/* E cart */}
            <div className='website' style={{width:'400px'}}>
                <h4>
                    <i class="fa-solid fa-truck-fast me-2"></i>
                    E-Cart
                </h4>
                <h6>
                It's a go-to destination for convenient and seamless online shopping experiences. Built with React, our e-cart ensures a modern and responsive interface, providing users with an intuitive platform to browse, select, and purchase their favorite products.
                </h6>
                <h6>Code licensed.docs CC BY 3.0.</h6>
                <p>Currently v1.0.0</p>
            </div>
{/* Links */}
            <div className='links d-flex flex-column'>
                <h4>Links</h4>
                <Link to={'/'} style={{textDecoration:'none',color:'white'}}>Home</Link>
                <Link to={'/cart'} style={{textDecoration:'none',color:'white'}}>Cart</Link>
                <Link to={'/wishlist'} style={{textDecoration:'none',color:'white'}}>Wishlist</Link>
            </div>
{/* Guides */}
            <div className='guides d-flex flex-column'>
                <h4>Guides</h4>
                <Link to={'https://getbootstrap.com/'} style={{textDecoration:'none',color:'white'}}>React</Link>
                <Link to={'https://react-bootstrap.github.io/'} style={{textDecoration:'none',color:'white'}}>React Bootstrap</Link>
                <Link to={'https://reactrouter.com/en/main'} style={{textDecoration:'none',color:'white'}}>Routing</Link>
            </div>
{/* Contant us */}
            <div className='contact d-flex flex-column flex-wrap'>
                <h4>Contact Us</h4>
                <div className='d-flex'>
                    <input className='form-control' placeholder='Enter your Mail' />
                    <button className='btn btn-warning ms-3'><i class="fa-solid fa-arrow-right fa-beat"></i></button>
                </div>
                <div className='icons mt-3 d-flex justify-content-between fs-5'>
                <Link to={'https://getbootstrap.com/'} style={{textDecoration:'none',color:'white'}}><i class="fa-brands fa-instagram"></i></Link>
                    <Link to={'https://react-bootstrap.github.io/'} style={{textDecoration:'none',color:'white'}}><i class="fa-brands fa-twitter"></i></Link>
                    <Link to={'https://react-bootstrap.github.io/'} style={{textDecoration:'none',color:'white'}}><i class="fa-brands fa-facebook-f"></i></Link>
                    <Link to={'https://react-bootstrap.github.io/'} style={{textDecoration:'none',color:'white'}}><i class="fa-regular fa-envelope"></i></Link>
                    <Link to={'https://react-bootstrap.github.io/'} style={{textDecoration:'none',color:'white'}}><i class="fa-brands fa-tiktok"></i></Link>
                    <Link to={'https://react-bootstrap.github.io/'} style={{textDecoration:'none',color:'white'}}><i class="fa-brands fa-github"></i></Link>
                    <Link to={'https://react-bootstrap.github.io/'} style={{textDecoration:'none',color:'white'}}><i class="fa-brands fa-linkedin-in"></i></Link>
                </div>
            </div>
       </div>
        <p>Copyright &copy; 2023 E Cart. Build with React.</p>
    </div>
  )
}

export default Footer