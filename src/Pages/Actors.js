import React from 'react'
import { Szereplok } from '../datas/szereplok'
import '../Styles/Actors.scss'
const Actors = () => {
  return (
    <div className='Actors'>
      <div className="container">
        {Szereplok.map((e, index) => {
          return (
            <div key={index} className='actor'>
              <img src={e.image} alt="" />
              <h1>{e.fictiveName}</h1>
              <h2>{e.realName}</h2>
              <h3>Kor:{e.age}</h3>
              <p>{e.description}</p>
            </div>
          )
        })}
      </div>

    </div>
  )
}

export default Actors