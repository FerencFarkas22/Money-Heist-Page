import React from 'react'
import "../Styles/Contact.scss"
import image from '../assets/home4.jpg'
const Contact = () => {
  return (
    <div className='Contact'>
      <h1>Kapcsolat!</h1>
      <div className="container">
      <div className="box">
      <div className="image"><img src={image} alt="" /></div>
      
      <div className="form">
        <form >
        <h3>Küldj nekünk üzenetet</h3>
          <label name="nev">Név</label>
          <input type="text" name='nev' placeholder='név'/>
          <label name="email">Email</label>
          <input type="email" name="email" id="" placeholder='email'/>
          <label name="tel">Telefonszám</label>
          <input type="tel" name="tel" id=""  placeholder='telefonszám'/>
          <label name="message">Üzenet</label>
          <textarea name="message" id="" cols="30" rows="5" placeholder='"Üzenet'></textarea>
          <div>
          <label>Elfogadom az adatkezelési </label>
          <input className='checkbox' type="checkbox" name="" id="" />
          </div>
          <button>Küldés</button>
        </form>
      </div>
      </div>
      
      </div>
     
    </div>
  )
}

export default Contact