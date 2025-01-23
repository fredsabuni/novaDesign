import React, {useState} from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = ({ className , showIcons }) => {
    const location = useLocation();  

    // Function to check if a link is active based on current path
    const getLinkStyle = (path) => {
        return location.pathname === path ? { color: '#C7322B' } : {};
    };

    return (
        <header id="header" className={className}>
            <div className="header header-1 d-none d-lg-block js-header-1">
                <div className="header__bar">
                    <div className="wrap wrap--w1790">
                        <div className="container-fluid">
                            <div className="header__content">
                                <div className="logo">
                                    <Link to="/">
                                        <img src="images/icon/logo-white.png" alt="NovaDesign" style={{ width: '150px' }} />
                                    </Link>
                                </div>
                                <div className="header__content-right">
                                    <nav className="header-nav-menu">
                                        <ul className="menu nav-menu">
                                            <li className="menu-item">
                                                <Link to="/" style={getLinkStyle('/')}>Home</Link> 
                                            </li>
                                            <li className="menu-item">
                                                <Link to="/expertise" style={getLinkStyle('/expertise')}>Our Expertise</Link>
                                            </li> 
                                            {/* <li className="menu-item">
                                                <Link to="/approach" style={getLinkStyle('/approach')}>Our Approach</Link>
                                            </li>  */}
                                            <li className="menu-item">
                                                <Link to="/our-process" style={getLinkStyle('/our-process')}>Our Process</Link>
                                            </li> 
                                            <li className="menu-item">
                                                <Link to="/team" style={getLinkStyle('/team')}>Team</Link>
                                            </li> 
                                            <li className="menu-item">
                                                <Link to="/contact" style={getLinkStyle('/contact')}>Contact</Link>
                                            </li>
                                        </ul>
                                    </nav>
                                    {showIcons && (
                                    <div className="header-social">
                                        <ul className="list-social">
                                            <li className="list-social__item">
                                                <a className="ic-fb" href="#">
                                                    <i className="zmdi zmdi-facebook"></i>
                                                </a>
                                            </li>
                                            <li className="list-social__item">
                                                <a className="ic-youtube" href="#">
                                                    <i className="zmdi zmdi-youtube"></i>
                                                </a>
                                            </li>
                                            <li className="list-social__item">
                                                <a className="ic-twi" href="#">
                                                    <i className="zmdi zmdi-twitter"></i>
                                                </a>
                                            </li>
                                            <li className="list-social__item">
                                                <a className="ic-linkedin" href="#">
                                                    <i className="zmdi zmdi-linkedin"></i>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>)}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="header-mobile d-block d-lg-none">
                <div className="header-mobile__bar">
                    <div className="container-fluid">
                        <div className="header-mobile__bar-inner">
                            <Link className="logo" to="/">
                                <img src="images/icon/logo-white.png" style={{ maxWidth: '50%' }} alt="NovaDesign" />
                            </Link>
                            <button className="hamburger-nova hamburger--slider float-right" type="button" data-toggle="collapse" data-target="#mobile-menu">
                                <span className="hamburger-box">
                                    <span className="hamburger-inner"></span>
                                </span>
                            </button>   

                       </div>
                    </div>
                </div>
                <nav className="header-nav-menu-mobile collapse" id="mobile-menu">
                    <div className="container-fluid">
                        <ul className="menu nav-menu menu-mobile">
                            <li className="menu-item">
                                <Link to="/" style={getLinkStyle('/')}>Home</Link>
                            </li>
                            <li className="menu-item">
                                <Link to="/expertise" style={getLinkStyle('/expertise')}>Our Expertise</Link>
                            </li> 
                            {/* <li className="menu-item">
                                <Link to="/approach" style={getLinkStyle('/approach')}>Our Approach</Link>
                            </li> */}
                            <li className="menu-item">
                                <Link to="/our-process" style={getLinkStyle('/our-process')}>Our Process</Link>
                            </li>  
                            <li className="menu-item">
                                <Link to="/team" style={getLinkStyle('/team')}>Team</Link>
                            </li> 
                            <li className="menu-item">
                                <Link to="/contact" style={getLinkStyle('/contact')}>Contact</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Header;
