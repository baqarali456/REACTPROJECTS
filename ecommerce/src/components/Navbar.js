import React from 'react';

export default function Navbar({handleshowCart,cartIndex,handleHome}) {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <button onClick={handleHome} className="nav-link active" aria-current="page" >Home</button>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">Link</a>
        </li>
        <li className="nav-item">
          <a href='/' className="nav-link disabled">Disabled</a>
        </li>
      </ul>
      {/* <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form> */}
      <button onClick={handleshowCart} className='btn btn-success'>Carts {cartIndex>0?cartIndex:""}</button>
    </div>
  </div>
</nav>
    </>
  )
}