import React, { Fragment } from 'react'
import './header.scss'
import logo_white from "src/assets/img/logo-white.png"


function Header() {


    return (
        <Fragment>
            <header className="header">
                <div className="header__logo-box">
                    <img src={logo_white} alt="Logo" className="header__logo" />
                </div>

                <div className="header__text-box">
                    <h1 className="heading-primary">
                        <span className="heading-primary--main">Outdoors</span>
                        <span className="heading-primary--sub">is where life happens</span>
                    </h1>
                    <a href="#section-tours" className="btn btn--white btn--animated">Discover our tours</a>
                </div>
            </header>
        </Fragment>
    )
}

export default Header
