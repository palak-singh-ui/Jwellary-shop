import React, { useState } from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import {
    FaTruck,
    FaStar,
    FaPhoneAlt,
    FaEnvelope,
    FaSearch,
    FaUser,
    FaHeart,
    FaShoppingCart,
    FaGem
} from 'react-icons/fa'
import '../Components/CSS/Header.css'
// import React, { useState } from 'react'

const Header = () => {
    const [showSearch, setShowSearch] = useState(false)
    //  const [searchText, setSearchText] = useState('')
    return (
        <header className="jz-header">
            <div className="jz-topbar">
                <Container fluid className="jz-topbar-inner">
                    <span>
                        <FaTruck /> Free Shipping on Orders Above ₹999
                    </span>

                    <span>
                        <FaStar /> 100% Authentic & Certified Jewellery
                    </span>

                    <div className="jz-contact">
                        <span>
                            <FaPhoneAlt /> +91 98765 43210
                        </span>

                        <span>
                            <FaEnvelope /> support@jewelzip.com
                        </span>
                    </div>
                </Container>
            </div>

            <Navbar expand="lg" className="jz-navbar">
                <Container fluid className="jz-nav-inner">
                    <Navbar.Brand as={NavLink} to="/" className="jz-logo">
                        <FaGem className="jz-logo-gem" />
                        <div>
                            Jewel<span>Zip</span>
                        </div>
                        <small>Shine Every Moment</small>
                    </Navbar.Brand>

                    <Navbar.Collapse id="jz-nav">
                        <Nav className="jz-links">
                            <Nav.Link as={NavLink} to="/" end>
                                Home
                            </Nav.Link>
                            <Nav.Link as={NavLink} to="/about">
                                About
                            </Nav.Link>
                            <Nav.Link as={NavLink} to="/contact">
                                Contact Us
                            </Nav.Link>


                            <Nav.Link as={NavLink} to="/Collections">
                                Collections
                            </Nav.Link>

                        </Nav>

                        <div className="jz-actions">

                            <div className="jz-search-box">
                                <input
                                    type="text"
                                    placeholder="Search jewellery..."
                                />
                                <FaSearch className="jz-search-btn" />
                            </div>

                            <FaUser className="jz-user-icon" />

                            <span className="jz-action-icon">
                                <FaHeart />
                                <small>0</small>
                            </span>

                            <span className="jz-action-icon">
                                <FaShoppingCart />
                                <small>0</small>
                            </span>

                        </div>

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}

export default Header