import React, { useEffect } from 'react'
import { Row, Col, Card, Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchProducts, onNavigateNext, onNavigatePrev } from '../Redux/Slices/productSlice';
import { addToWishlist } from '../Redux/Slices/wishlistSlice';
import { addtoCart } from '../Redux/Slices/cartSlice';
import Header from '../Components/Header';

function Home() {
  const dispatch = useDispatch()
  const {loading, products,error,productsPerPage,currentPage} = useSelector((state)=>state.productSlice)
  const {wishlist} = useSelector(state=>state.wishlistSlice)

  const totalPages = Math.ceil(products?.length/productsPerPage)
  const indexOfLastItem = currentPage * productsPerPage
  const indexOfFirstItem = indexOfLastItem - productsPerPage
  const visibleCards = products?.slice(indexOfFirstItem,indexOfLastItem)

  useEffect(()=>{
    dispatch(fetchProducts())
  },[])

  const handleWishlist = (product)=>{
    const existingProduct = wishlist.find(item=>item.id==product.id)
    if(existingProduct){
      alert("This product is already in your Wishlist")
    }else{
      dispatch(addToWishlist(product))
    }
  }

  const navigatePrev = ()=>{
    if(currentPage!=1){
      dispatch(onNavigatePrev())
    }
  }

  const navigateNext = ()=>{
    if(currentPage!=totalPages){
      dispatch(onNavigateNext())
    }
  }

  
  return (
    <>
      <Header insideHome/>
      <div style={{marginTop:'60px'}}>
        {
          !loading&&error ?
          <div className='mt-5 text-center text-danger fw-bolder'>{error}</div>:null
        }
        {
          loading? 
          <div className='d-flex justify-content-center mt-5'>
            <Spinner className='me-3' animation="border" variant="dark" />
            Loading...
          </div>:
          <Row className='m-5 '>
            {
            products.length>0?visibleCards.map((product,index)=>(
            <Col key={index} className='mb-5' sm={12} md={6} lg={4} xl={3}>
            <Card className='shadow rounded' style={{ width: '18rem' }}>
              <Link to={`/view/${product.id}`}>
                <Card.Img style={{height:'180px'}} variant="top" src={product.thumbnail} />
              </Link>
              <Card.Body>
              <Card.Title>{product.title.slice(0,20)}...</Card.Title>
                <div className='d-flex justify-content-between'>
                  <button onClick={()=>handleWishlist(product)} className='btn fs-5'><i className="fa-solid fa-heart text-danger"></i></button>
                  <button onClick={()=>dispatch(addtoCart(product))} className='btn fs-5'><i className="fa-solid fa-cart-plus text-success"></i></button>
                </div>
              </Card.Body>
            </Card>
            </Col>
            )):
            !error&&
              <div className='mt-5 text-center text-danger fw-bolder'>
                Product not found!!!
              </div>
            }
            <div className="d-flex justify-content-center align-items-center fw-bolder">
              <span onClick={navigatePrev} className='btn btn-link'><i class="fa-solid fa-angles-left text-dark fw-bolder"></i></span>
                <span>{currentPage} of {totalPages}</span>
              <span onClick={navigateNext} className='btn btn-link'><i class="fa-solid fa-angles-right text-dark fw-bolder"></i></span>
            </div>
          </Row>
        }
      
      </div>
    </>
  )
}

export default Home