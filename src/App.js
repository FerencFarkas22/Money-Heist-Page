import React from 'react'
import './App.scss'
import { HashRouter as Router } from 'react-router-dom'
import Header from './Components/Header'
import Content from './Components/Content'
import Home from './Pages/Home'
import Actors from './Pages/Actors'
import Story from './Pages/Story'
import Contact from './Pages/Contact'
import PageNotFound from './Pages/PageNotFound'

const App = () => {
    const pages = [
        {name: "Kezdőlap", path: '/', menubar: true, element: <Home/>},
        {name: "Szereplők", path: '/actors', menubar: true, element:<Actors/>},
        {name: "Történet", path: '/story', menubar: true, element:<Story/>},
        {name: "Kapcsolat", path: '/contact', menubar: true, element: <Contact/>},
        {name: "notFound", path: "*", menubar:false, element:<PageNotFound/>}
      ]

  return (
    <div className='App'>
        <Router>
            <Header menu={pages}/>
            <Content routes={pages}/>
        </Router>
    </div>
  )
}

export default App