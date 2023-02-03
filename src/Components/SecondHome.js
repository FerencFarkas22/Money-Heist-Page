import React from 'react'
import "../Styles/SecondHome.scss"
import { cikkek } from '../datas/cikkek'
const SecondHome = () => {
    return (
        <div className='second' >
            <h1>Cikkek</h1>
            <div className="articles">


                {cikkek.map((e, index) => {
                    return (
                        <div className="box" key={index}>

                            <img src={e.image} alt="" />
                            <div className="text">
                                <h2>{e.articleName}</h2>
                                <p>{e.description}</p>
                                <button><a rel="noreferrer" target="_blank" href={e.link}>{e.buttonText}</a></button>
                            </div>

                        </div>

                    )
                })}
            </div>
        </div>
    )
}

export default SecondHome