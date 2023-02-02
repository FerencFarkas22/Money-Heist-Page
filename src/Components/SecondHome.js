import React from 'react'
import "../Styles/SecondHome.scss"
import { cikkek } from '../datas/cikkek'
const SecondHome = () => {
    return (
        <div className='second' >
            <h1>Cikkek</h1>
            <div className="articles">


                {cikkek.map(e => {
                    return (
                        <div className="box">

                            <img src={e.image} alt="" />
                            <div className="text">
                                <h2>{e.articleName}</h2>
                                <p>{e.description}</p>
                                <button><a href={e.link}>{e.buttonText}</a></button>
                            </div>

                        </div>

                    )
                })}
            </div>
        </div>
    )
}

export default SecondHome