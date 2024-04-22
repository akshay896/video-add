import React from 'react'
import {  Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import img1 from '../assets/3764901.jpg'
function Landing() {
  return (
    <>
    <div className='landingsection container'>
      <div className="row align-items-center my-5">
        <div className="col-lg-5">
          <h3>Welcome to <span className='text-warning'>Media Player</span></h3>
          <p className='mt-3' style={{textAlign:'justify'}}> Media Player App will allow user to add or remove their upload videos form youtube and also allow them to arrange it in different categories by drag and drop. User can also have the provision to manage their watch history as well. What are you waiting for, let starts exploring our site!!</p>
          <Link to={'/home'} className='btn btn-info mt-3'>Get Started</Link>
        </div>
        <div className="col"></div>
        <div className="col-lg-6">
        <img src='' alt="landing page" />
        </div>
      </div>
      {/* features */}
      <div className="Features my-5">
        <h3 className='text-center'>Features</h3>
        <div className="row">
          <div className="col-lg-4">
          <Card style={{ width: '22rem',height:'400px' }}>
      <Card.Img variant="top" src={img1} style={{height:'250px'}} className='img-fluid' />
      <Card.Body>
        <Card.Title>Managing Videos</Card.Title>
        <Card.Text>
          Users can upload, view and remove the videos
        </Card.Text>
      </Card.Body>
    </Card>
          </div>
          <div className="col-lg-4">
          <Card style={{ width: '22rem',height:'400px' }}>
          <Card.Img variant="top" src={img1} style={{height:'250px'}} className='img-fluid' />      <Card.Body>
        <Card.Title>Category Videos</Card.Title>
        <Card.Text>
          Users can categorise the videos by drag and drop feature
        </Card.Text>
      </Card.Body>
    </Card>
          </div>
          <div className="col-lg-4">
          <Card style={{ width: '22rem',height:'400px' }}>
          <Card.Img variant="top" src={img1} style={{height:'250px'}} className='img-fluid' />      <Card.Body>
        <Card.Title>Managing History</Card.Title>
        <Card.Text>
          Users can manage the watch history of all videos
        </Card.Text>
      </Card.Body>
    </Card>
          </div>
          
        </div>
       
      </div>
      {/* last */}
      <div className="my-5 row border rounded p-5">
        <div className="col-lg-5">
          <h3 className='text-warning'>Simple, Fast and Powerful</h3>
          <p style={{textAlign:'justify'}}><span className='fs-5'>Play Everything</span>: Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor harum cumque ratione adipisci at atque? Saepe ex laborum deleniti! Exp </p>
          <p style={{textAlign:'justify'}}><span className='fs-5'>Play Everything</span>: Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor harum cumque ratione adipisci at atque? Saepe ex laborum deleniti! Exp </p>
          <p style={{textAlign:'justify'}}><span className='fs-5'>Play Everything</span>: Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor harum cumque ratione adipisci at atque? Saepe ex laborum deleniti! Exp </p>
        </div>
        <div className="col"></div>
        <div className="col-lg-6">
        <iframe width="100%" height="369" src="https://www.youtube.com/embed/Po3jStA673E" title="LEO - Official Trailer | Thalapathy Vijay | Lokesh Kanagaraj | Anirudh Ravichander" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
      </div>
    </div>
    </>
  )
}

export default Landing