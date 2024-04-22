import React from 'react'
import { Link } from 'react-router-dom'


function Footer() {
  return (

    <div style={{ height: '300px' }} className='container mt-5 w-100'>
      <div className='d-flex justify-content-between align-items-between'>

        <div style={{ width: '400px' }} className='intro'>

          <h5 className=''><i className="fa-solid fa-music me-2"></i>Media Player</h5>
          <p>Designed to built with all the love in the world by the Media team with the help of our contributors</p>
          <p>Code licenced by Media, docs CC By 3.0.</p>

          <p>Currently v5.3.2</p>

        </div>

        <div className='links d-flex flex-column'>

          <h5 className=''>Links</h5>

          <Link to={'./'} style={{ textDecoration: 'none' }} className='text-white mt-2'>Landing Page</Link>
          <Link to={'./home'} style={{ textDecoration: 'none' }} className='text-white mt-2'>Home Page</Link>
          <Link to={'./history'} style={{ textDecoration: 'none' }} className='text-white mt-2'>History Page</Link>
        </div>

        <div className='guides'>
          <h5>Guides</h5>

          <div className='d-flex flex-column'>
            <a href="https://react.dev/" target='_blank' style={{ textDecoration: 'none' }} className='text-white mt-2'>React</a>
            <a href="https://react-bootstrap.github.io/" target='_blank' style={{ textDecoration: 'none' }} className='text-white mt-2'>React Bootstrap</a>
            <a href="https://reactrouter.com/en/main" target='_blank' style={{ textDecoration: 'none' }} className='text-white mt-2'>React Router Dom</a>

          </div>
        </div>

        <div className='contact'>
          <h5>Contact</h5>

          <div className='d-flex'>
            <input  type="text" placeholder='Enter Your Email id here' style={{ borderRadius: '10px', padding: '5px 8px',border:'none' }} />
            <button type='button' className='btn btn-info ms-2'><i className="fa-solid fa-arrow-right"></i></button>

          </div>

          <div className='d-flex mt-3 justify-content-between'>

          <a href='' style={{textDecoration:'none',color:'white'}} target='_blank'><i class="fa-brands fa-x-twitter"></i></a>
          <a href='' style={{textDecoration:'none',color:'white'}} target='_blank' ><i class="fa-brands fa-instagram"></i></a>
          <a href='' style={{textDecoration:'none',color:'white'}} target='_blank'><i class="fa-brands fa-facebook"></i></a>
          <a href='' style={{textDecoration:'none',color:'white'}} target='_blank'><i class="fa-brands fa-linkedin"></i></a>
          <a href='' style={{textDecoration:'none',color:'white'}} target='_blank'><i class="fa-brands fa-github"></i></a>
          <a href='' style={{textDecoration:'none',color:'white'}} target='_blank'><i class="fa-solid fa-phone"></i></a>

          </div>
        </div>
      </div>
      <p className='text-center mt-5'>Copyright @ Jan Batch 2024 Media Player. Built with React.</p>
    </div>
  )
}

export default Footer