import React from 'react'
import { Link } from 'react-router-dom';
import SecondHome from '../Components/SecondHome';
import Carousel from 'react-bootstrap/Carousel';
import Home1 from '../assets/home1.jpg'
import Home2 from '../assets/home2.jpg'
import Home3 from '../assets/home3.jpg'
import Home4 from '../assets/home4.jpg'

import '../Styles/Home.scss'

const Home = () => {
  return (
    <div className='Home'>

      <div className="background">
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block"
              src={Home1}
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block"
              src={Home2}
              alt="Second slide"
            />

          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block"
              src={Home3}
              alt="Third slide"
            />

          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block"
              src={Home4}
              alt="Third slide"
            />

          </Carousel.Item>
        </Carousel>
      </div>


      <div className="homeContainer">
        <h1>A Nagy Pénzrablás</h1>
        <p>Adott egy bűnözőkből álló banda, élükön egy idealista, de agyafúrt vezetővel, a Professzorral (Álvaro Morte). A csapat a madridi Királyi Pénzverdébe akar betörni, hogy az ott található pénzjegynyomdában egy életre elegendő bankjegyet nyomtassak maguknak.</p>
        <Link to="/story">
          <button>Sztori</button>
        </Link>
        <Link to="/actors">
          <button>Szereplők</button>
        </Link>
      </div>
      <SecondHome />
    </div>

  )
}

export default Home