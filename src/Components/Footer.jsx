import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  FaGem,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaPinterestP,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaArrowRight
} from 'react-icons/fa'
import './CSS/Footer.css'

const Footer = () => {
  const [email, setEmail] = useState('')

  const handleSubscribe = (e) => {
    e.preventDefault()

    if (!email.trim()) {
      alert('Please enter your email address')
      return
    }

    alert('Thank you for subscribing to JewelZip!')
    setEmail('')
  }

  return (
    <footer className="jz-footer">

      <div className="jz-footer-main">

        <div className="jz-footer-about">
          <Link to="/" className="jz-footer-logo">
            <FaGem />
            <span>Jewel<span>Zip</span></span>
          </Link>

          <p>
            Discover the beauty of timeless jewellery.
            At JewelZip, we bring you elegant designs
            that make every moment special.
          </p>


        </div>

        <div className="jz-footer-links">
          <h3>Quick Links</h3>
          <Link to="/">Home</Link>
          <Link to="/about">About Us</Link>
          <Link to="/collections">Collections</Link>
          <Link to="/contact">Contact Us</Link>
        </div>



        <div className="jz-footer-contact">
          <h3>Contact Us</h3>

          <p>
            <FaMapMarkerAlt />
            <span>Lucknow, Uttar Pradesh, India</span>
          </p>

          <p>
            <FaPhoneAlt />
            <span>+91 98765 43210</span>
          </p>

          <p>
            <FaEnvelope />
            <span>support@jewelzip.com</span>
          </p>
        </div>

        <div className="jz-footer-links">
           <div className="jz-newsletter">
        <form onSubmit={handleSubscribe}>
          <input
            type="email"
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit">
            Subscribe <FaArrowRight />
          </button>
        </form>
      </div>
          <div className="jz-social-links">
            <a href="https://www.facebook.com/" target="_blank" rel="noreferrer"><FaFacebookF /></a>
            <a href="https://www.instagram.com/" target="_blank" rel="noreferrer"><FaInstagram /></a>
            <a href="https://www.twitter.com/" target="_blank" rel="noreferrer"><FaTwitter /></a>
            <a href="https://www.pinterest.com/" target="_blank" rel="noreferrer"><FaPinterestP /></a>
         
          </div>
          
        </div>


      </div>

    

      <div className="jz-footer-bottom">
        <p>© {new Date().getFullYear()} JewelZip. All Rights Reserved.</p>
        <p>Designed with <span>♥</span> for Jewellery Lovers</p>
      </div>

    </footer>
  )
}

export default Footer