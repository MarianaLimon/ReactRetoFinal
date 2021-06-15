import React from 'react';

import HeaderLogo from './HeaderLogo';
import HeaderSearch from './HeaderSearch';
import AppButton from '../AppButton';
import AppThemeToggle from '../AppThemeToggle'

import MenuHamburger from "./MenuHamburger";

import './index.css';
// import Styles from './header.module.css'

class Header extends React.Component {
    render() {
        return (
            <nav className="header d-flex justify-content-between">
                {/* </nav><nav className=´{d-flex ${Styles.Header}}´> */}
                <div className="container">
                    <div className="row">
                        <div className="col-6 d-flex">
                            <MenuHamburger />
                            <HeaderLogo />
                            <HeaderSearch />
                        </div>
                        <div className="col-6 d-flex justify-content-end">
                            <AppButton 
                                className = "btn-link d-flex align-items-center justtify-content-center"
                                text = "Log in"
                                type = "anchor"
                            />
                            <AppButton 
                                className= "btn-primary d-flex align-items-center justtify-content-center"
                                text = "Create account"
                                type = "anchor"
                            />
                            <AppThemeToggle />
                        </div>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Header