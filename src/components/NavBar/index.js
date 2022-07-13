import React from 'react'
import {Navbar, NavbarBrand} from 'reactstrap'

const NavBar = () => {
  return (
    <header>
      <Navbar color="danger">
        <NavbarBrand className="text-white">
          <img
            src="https://res.cloudinary.com/domjecv7t/image/upload/v1657707475/hush-naidoo-jade-photography-yo01Z-9HQAw-unsplash_ns5ssc.jpg"
            height="100"
            className="d-inline-block align-center"
            alt="logo"
          />{' '}
          Doctor Appointments
        </NavbarBrand>
      </Navbar>
    </header>
  )
}

export default NavBar
