import React, { useState } from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaPaperPlane
} from 'react-icons/fa'
import '../Pages/CSS/Contact.css'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    console.log(formData)
    alert('Thank you! Your message has been submitted.')

    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    })
  }

  return (
    <>
      <Header />

      <div className="jz-contact-page">

        <section className="jz-contact-banner">
          <p>WE WOULD LOVE TO HEAR FROM YOU</p>
          <h1>Contact Us</h1>
          <span>
            Have a question or need assistance? We are here to help you.
          </span>
        </section>

        <section className="jz-contact-section">

          <div className="jz-contact-info">
            <p className="jz-contact-subtitle">GET IN TOUCH</p>
            <h2>Let's Start a Conversation</h2>
            <p className="jz-contact-description">
              Whether you have questions about our collections,
              orders or services, feel free to contact us.
              Our team will be happy to assist you.
            </p>

            <div className="jz-contact-item">
              <div className="jz-contact-icon">
                <FaPhoneAlt />
              </div>
              <div>
                <h3>Phone Number</h3>
                <p>+91 98765 43210</p>
              </div>
            </div>

            <div className="jz-contact-item">
              <div className="jz-contact-icon">
                <FaEnvelope />
              </div>
              <div>
                <h3>Email Address</h3>
                <p>support@jewelzip.com</p>
              </div>
            </div>

            <div className="jz-contact-item">
              <div className="jz-contact-icon">
                <FaMapMarkerAlt />
              </div>
              <div>
                <h3>Our Location</h3>
                <p>Lucknow, Uttar Pradesh, India</p>
              </div>
            </div>

            <div className="jz-contact-item">
              <div className="jz-contact-icon">
                <FaClock />
              </div>
              <div>
                <h3>Working Hours</h3>
                <p>Monday - Saturday: 10 AM - 7 PM</p>
              </div>
            </div>
          </div>

          <div className="jz-contact-form-box">
            <h2>Send Us a Message</h2>
            <p>Fill out the form below and we'll get back to you.</p>

            <form onSubmit={handleSubmit}>

              <div className="jz-form-row">
                <div className="jz-form-group">
                  <label>Your Name</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="jz-form-group">
                  <label>Email Address</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="jz-form-row">
                <div className="jz-form-group">
                  <label>Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Enter your phone number"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="jz-form-group">
                  <label>Subject</label>
                  <input
                    type="text"
                    name="subject"
                    placeholder="Enter subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="jz-form-group">
                <label>Your Message</label>
                <textarea
                  name="message"
                  rows="5"
                  placeholder="Write your message here..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <button type="submit">
                Send Message <FaPaperPlane />
              </button>

            </form>
          </div>

        </section>

        <section className="jz-contact-map">
          <div>
            <p className="jz-contact-subtitle">FIND US</p>
            <h2>Visit Our Location</h2>
          </div>

          <iframe
            title="JewelZip Location"
            src="https://www.google.com/maps?q=Lucknow,Uttar%20Pradesh,India&output=embed"
            loading="lazy"
            allowFullScreen
          ></iframe>
        </section>

      </div>

      <Footer />
    </>
  )
}

export default Contact