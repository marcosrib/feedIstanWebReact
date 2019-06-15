import React from 'react'
import './Header.css'
import logo from '../assets/logo.svg'
import camera from '../assets/camera.svg'
import { Link } from 'react-router-dom'
function Header() {

    return (
        <header id="main-header">
            <div className="header-content">
                <Link to="/">
                    <img src={logo} alt="InstagranClone" />
                </Link>
                <Link to="/new">
                    <img src={camera} alt="Eviar publicação" />
                </Link>
            </div>
        </header>
    );

}

export default Header