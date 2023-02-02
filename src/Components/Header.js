import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../Styles/Header.scss'
import Logo from '../assets/Logo.png'
import MenuIcon from '@mui/icons-material/Menu';
const Header = ({menu}) => {
  const [navStyle, setNavStyle] = useState("navbar-right-none");


  function handleNavbarMobile() {
    if(navStyle === "navbar-right"){
      setNavStyle("navbar-right-none")
    }else{
      setNavStyle("navbar-right")
    }
}
function handleMenuItemClick(){
  setNavStyle("navbar-right")
}


  return (
    <div className="navbar">
        <div className="nav-left">
            <img src={Logo} alt="" />
            <button onClick={handleNavbarMobile} className="HamburgerButton"><MenuIcon/></button>
        </div>
        <div className={navStyle}>
          {menu.filter(e=> e.menubar === true).map(e=> <Link to={e.path} onClick={handleMenuItemClick}>{e.name}</Link>)}
        </div>
    </div>
  )
}

export default Header