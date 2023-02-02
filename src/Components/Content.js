import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'

const Content = ({routes}) => {
  const location = useLocation();

  return (
    <div className='Content'>
 <Routes location={location} key={location.pathname}>
           {routes.map(route => (
            <Route key={route.path} path={route.path} element={route.element} />
           ))}
      </Routes>
    </div>
  )
}

export default Content