import React from 'react'
import Header from '../Components/Header'
import '../Pages/CSS/About.css'
import Footer from '../Components/Footer'

const About = () => {
  return (
    <>
      <Header />

      <div className="about-page">

        <section className="about-banner">
          <div className="about-banner-content">
          <p>YOUR STYLE, YOUR STORY</p>
          <h2>Let Your Jewellery Speak</h2>
          <span>Find the perfect piece that feels uniquely you.</span>
          </div>
        </section>

        <section className="about-story">
          <div className="about-story-image">
            <img src="/images/about.avif" alt="Jewellery collection" />
          </div>

          <div className="about-story-content">
            <p className="about-subtitle">OUR STORY</p>
            <h2>Where Beauty Meets Timeless Elegance</h2>
            <p>
              Welcome to JewelZip, your destination for beautiful
              and elegant jewellery. We believe that jewellery is
              more than just an accessory; it is a reflection of
              your personality, emotions and special moments.
            </p>
            <p>
              Our collection brings together timeless designs,
              modern trends and exceptional beauty. From everyday
              essentials to special occasion pieces, we have
              something for every style.
            </p>
            <h3>Make Every Moment Shine With JewelZip.</h3>
          </div>
        </section>

        <section className="about-mission">
          <div className="mission-card">
            <div className="mission-icon">✧</div>
            <h2>Our Mission</h2>
            <p>
              To make beautiful and stylish jewellery accessible
              to everyone while delivering quality, elegance and
              a memorable shopping experience.
            </p>
          </div>

          <div className="mission-card">
            <div className="mission-icon">◇</div>
            <h2>Our Vision</h2>
            <p>
              To become a trusted jewellery destination where
              every customer finds a design that celebrates
              their individuality and special moments.
            </p>
          </div>
        </section>

        <section className="why-jewelzip">
          <div className="why-heading">
            <p>THE JEWELZIP DIFFERENCE</p>
            <h2>Why Choose Us?</h2>
          </div>

          <div className="why-cards">
            <div className="why-card">
              <span>✧</span>
              <h3>Beautiful Designs</h3>
              <p>Unique and elegant designs for every occasion.</p>
            </div>

            <div className="why-card">
              <span>◇</span>
              <h3>Quality Products</h3>
              <p>Carefully selected jewellery with attention to detail.</p>
            </div>

            <div className="why-card">
              <span>♡</span>
              <h3>Customer Happiness</h3>
              <p>Your satisfaction and happiness are our priority.</p>
            </div>

            <div className="why-card">
              <span>❖</span>
              <h3>Affordable Luxury</h3>
              <p>Beautiful jewellery at prices you will love.</p>
            </div>
          </div>
        </section>

      </div>
      <Footer/>
    </>
  )
}

export default About