import React from 'react'
import "../Styles/Contact.scss"
import image from '../assets/home4.jpg'
const Contact = () => {
  return (
    <div className='Contact'>
      <h1>Kapcsolat!</h1>
      <div className="container">

        <div className="image"><img src={image} alt="" /></div>


        <form >
          <h3>Küldj nekünk üzenetet</h3>
          <label name="nev">Név</label>
          <input type="text" name='nev' placeholder='név'  autoComplete="off"/>
          <label name="email">Email</label>
          <input type="email" name="email" id="" placeholder='email' />
          <label name="tel">Telefonszám</label>
          <input type="tel" name="tel" id="" placeholder='telefonszám'  autoComplete="off"/>
          <label name="message">Üzenet</label>
          <textarea  autoComplete="off" name="message" id="" cols="10" rows="4" placeholder='"Üzenet'></textarea>
          <div className='checkbox'>
            <input type="checkbox" id="scales" name="scales" />
              <label htmlFor="scales">Elfogadom az adatkezelési feltételeket</label>
          </div>
          <button>Küldés</button>
        </form>

      </div>

    </div>
  )
}

export default Contact