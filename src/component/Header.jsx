import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <>
    <link rel="icon" href="https://pn-paul.netlify.app/image/ff-logo-02.png" />
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>First-Fiddle</title>
  <link
    href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
    rel="stylesheet"
    integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
    crossOrigin="anonymous"
  />
  <link rel="stylesheet" href="./style.css" />
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css"
    integrity="sha512-Kc323vGBEqzTmouAECnVceyQqyqdsSiqLQISBL29aUW4U/M7pSPA/gEUZQqv1cwx4OnYxTxve5UMg5GT6L4JJg=="
    crossOrigin="anonymous"
    referrerPolicy="no-referrer"
  />
  <link rel="stylesheet" href="https://unpkg.com/aos@2.3.1/dist/aos.css" />
  {/* {nav div start} */}
  {/* nav div start */}
  <ul
    className="nav justify-content-center"
    style={{ backgroundColor: "#212529" }}
  >
    <li className="nav-item">
      <button
        className="btn"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasExample"
        aria-controls="offcanvasExample"
      >
        <i className="fa-solid fa-bars-staggered aa" />
      </button>
      <div
        style={{ background: "#181e2394" }}
        className="offcanvas offcanvas-start"
        tabIndex={-1}
        id="offcanvasExample"
        aria-labelledby="offcanvasExampleLabel"
      >
        
        <div class="offcanvas-header">
          <h5 class="offcanvas-title" id="offcanvasNavbarLabel"></h5>
          <button   type="button" class="btn-close bg-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
          
          <div className="offcanvas-body">
            <ul className="menu">
              <img
                src="https://firstfiddle.in/_next/image?url=%2Fimages%2Fheader%2Flogo-01.png&w=256&q=75"
                alt=""
                className="menu image"
                width="120px"
                height="100px"
              />
              <li>
                <Link  className="active" to="/" >
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about"> About</Link>
              </li>
             
              <li>
                <Link to="/franchies"> Team</Link>
              </li>
              <li>
                <Link to="/contact"> Contact</Link>
              </li>
            </ul>
          </div>
        {/* </div> */}
      </div>
    </li>
    <img
      src="https://firstfiddle.in/_next/image?url=%2Fimages%2Fheader%2Flogo-01.png&w=256&q=75"
      alt=""
      className="navlogo"
    />
    <li className="nav-item"  >
      <Link className="nav-link" to="/about"  style={{color:"white" }} >
        ABOUT
      </Link>
    </li>
    <li className="nav-item">
      <button className="main-btn" data-bs-target="#b" data-bs-toggle="modal">
        <Link className="nav-link " to="/franchies" tabIndex={-1} aria-disabled="true" style={{color:"white" }} >
          Franchise white us
        </Link>
      </button>
    </li>
  </ul>
  {/* nav end */}
</>

  )
}

export default Header