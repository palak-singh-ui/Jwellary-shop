import React, { useState, useEffect } from 'react'
import Header from '../Components/Header'
import '../Pages/CSS/Home.css'
import axios from 'axios'
import Footer from '../Components/Footer'
import {FaArrowRight} from 'react-icons/fa'

const Home = () => {

  const [collections, setCollections] = useState([])

  const fetchData = async () => {
    try {
      const res = await axios.get('/Data/collection.json')
      setCollections(res.data)
      console.log(res.data)
      // console.log(Array.isArray(res.data))
     

    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <>
      <Header />

      <div className="home-container">

        <section className="jz-hero">
          <video
            className="jz-hero-video"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src="/videos/hero.mp4" type="video/mp4" />
          </video>

          <div className="jz-hero-overlay"></div>

          <div className="jz-hero-content">
            <p>TIMELESS ELEGANCE</p>
            <h1>Jewellery That Defines You</h1>
            <span>
              Discover jewellery that makes every moment special.
            </span>
          </div>
        </section>

        <div className="shopnow-btn">
          <button>SHOP NOW <FaArrowRight /></button>
        </div>

        <section className="our-collections">

          <div className="collection-heading">
            <p>EXPLORE OUR WORLD</p>
           <a href="/collections"> Our Collections</a><br/>
            <span>Discover jewellery that reflects your style</span>
          </div>

          <div className="collection-card">

            {collections?.map((item) => (
              <div className="collection" key={item.id}>

                <div className="collection-image">
                  <img src={item.image}  />
                </div>

               <div className="collection-info">
                  <h3>{item.name}</h3>
                  <p>{item.description}</p>
                  <span>Explore Collection →</span>
                </div>

              </div>
               
            ))}

          </div>

        </section>

      </div>
      <Footer/>
    </>
  )
}

export default Home