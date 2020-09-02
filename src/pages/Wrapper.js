import React, { useRef, Fragment, useEffect, useState, useLayoutEffect, cloneElement } from 'react'
import '../styles/App.css'
import { Footer } from '../components'
// import Pace from 'react-pace-progress'
import { TweenMax } from 'gsap'
import { Link, withRouter } from "react-router-dom";
//import moment from 'moment'
import logoSrc from '../images/logo.png'
import useSticky from "../hooks/useSticky.js"
// const cacheURL = [];

const App = (props) => {
    const headerRef = useRef(null), tempRef = useRef(null)
    const [size, setSize] = useState({ width: window.innerWidth, height: window.innerHeight })
    const [menuOpen, setMenuOpen] = useState(false)
    const [showHeader, setShowHeader] = useState(false)
    const [showExpertise, setshowExpertise] = useState(false)
    const [isLoading, setLoading] = useState(true)
    const { isSticky, element } = useSticky()

    // const handleScroll = () => {
    //     if (!showHeader && (window.pageYOffset > size.height / 2)) {
    //         TweenMax.to("#header-background", 0.3, { height: 80 })
    //         TweenMax.to("#logonew", 0.3, { height: 20, delay: 0.5 })
    //         setShowHeader(true)
    //     }
    //     if (showHeader && (window.pageYOffset < size.height / 2)) {
    //         TweenMax.to("#header-background", 0.3, { height: 0 })
    //         TweenMax.to("#logonew", 0.3, { height: 30 })
    //         setShowHeader(false)
    //     }
    // }

    useEffect(() => {
        props.history.listen((location) => {
            // console.log(location)
            // localStorage.setItem('isFirst', false)
            // setLoading(true)
            setMenuOpen(false)
            closeMenu()
            //handleScroll()
        })
    }, [showHeader])


    useLayoutEffect(() => {


        // window.addEventListener('scroll', handleScroll)
        // return () => window.removeEventListener('scroll', handleScroll)
    })


    const handleResize = () => {
        setSize({ width: window.innerWidth, height: window.innerHeight })
    }


    const onToggleMenu = () => {
        let _width = size.width
        if (size.height > _width) {
            _width = size.height
        }
        if (menuOpen) {
            setMenuOpen(false)
            closeMenu()
        } else {
            TweenMax.to("#header-background", 0.3, { height: 0 })
            TweenMax.to('#menu-overlay', 0.6, { display: 'block', width: _width * 3, height: _width * 3, top: -_width, right: -_width })
            TweenMax.to('#burger-top', 0.2, { display: 'none', opacity: 0 })
            TweenMax.to('#burger-bottom', 0.2, { display: 'none', opacity: 0, })
            TweenMax.to('#closed', 0.3, { display: 'block', opacity: 1 })
            TweenMax.to('#menu', 0.5, { display: 'flex', opacity: 1, delay: 0.2 })
            TweenMax.to('#logonew, #header-contact', 0.2, { display: 'none', opacity: 0 })
            setMenuOpen(true)
        }
    }
    const closeMenu = () => {
        TweenMax.to('#menu', 0.5, { display: 'none', opacity: 0 })
        TweenMax.to('#menu-overlay', 0.6, { display: 'block', width: 1, height: 0, top: 40, right: 40, delay: 0.2 })
        TweenMax.to('#burger-top', 0.3, { display: 'block', opacity: 1, rotation: 0, transformOrigin: "bottom 20%" })
        TweenMax.to('#burger-bottom', 0.3, { display: 'block', opacity: 1, rotation: 0, transformOrigin: "bottom 33%" })
        TweenMax.to('#closed', 0.3, { display: 'none', opacity: 0 })
        TweenMax.to('#logonew, #header-contact', 0.2, { display: 'inline-block', opacity: 1 })
    }

    const onToggleExpertise = () => {
        if (!showExpertise) {
            TweenMax.to('.sub-menu', 0, { opacity: 1, height: 115 })
            TweenMax.to('.sub-menu-item', 0, { opacity: 1, height: 30 })
        }
        else {
            TweenMax.to('.sub-menu', 0, { opacity: 0, height: 0 })
            TweenMax.to('.sub-menu-item', 0, { opacity: 1, height: 0 })

        }
        setshowExpertise(!showExpertise)
    }

    const Navbar = ({ sticky }) => (
        <div id="header" ref={headerRef} className={sticky ? "navbar navbar-sticky" : "navbar"}>
            <div id="header-background" />
            <div id="header-content">
                <Link to="/" className="link-logo" >
                    {/* <img id="logonew" src={require('../images/logo.png')} alt="ID21"/> */}
                    <img id="logonew" src={logoSrc} alt="ID21" />
                </Link>
                <div className="header-right">
                    <Link to="/contact" id="header-contact">
                        CONTACT
                        </Link>
                    <div className="menu-burger" onClick={onToggleMenu} >
                        <div id='burger-top' />
                        <div id='burger-bottom' />
                        <h5 id="closed">CLOSE</h5>
                    </div>
                </div>
            </div>
        </div>
    )

    return (
        <Fragment>
            {/* {isPaceLoading ? <Pace color="#FFCC00"/> : null} */}
            <Navbar sticky={isSticky} />

            <div className="main-body" ref={element} >

                {cloneElement(props.children, { setLoading })}
                {/* {isLoading &&
                    <PreLoader />
                } */}

                {/* <PreLoader isLoading={isLoading}  /> */}

            </div>

            <Footer />

            <div id="menu-overlay" />
            <div id="menu" style={{ backgroundImage: `url(${require("../images/menu-background.jpg")})`, backgroundSize: 'cover' }}>
                <div className="header-right">
                    <div className="menu-burger" onClick={onToggleMenu} >
                        <div id='burger-top' />
                        <div id='burger-bottom' />
                        <h5 id="closed">CLOSE</h5>
                    </div>
                </div>
                <div className="menu-inner">
                    <div id="menu-1" className="menus">
                        <img id="menu-logo" src={require('../images/logo.png')} alt="ID21" />
                        <hr className="menu-1-line mobile-hide" />
                        <h3 className="mobile-hide">Transformation</h3>
                        <h3 className="mobile-hide">At Work</h3>
                    </div>
                    <div id="menu-2" className="menus">
                        <Link to="/" className="menu-item"><span>01 /</span>Home</Link>
                        <Link to="/about" className="menu-item"><span>02 /</span>About</Link>
                        <Link to="/why-us" className="menu-item"><span>03 /</span>Why Us</Link>
                        {/* <span className="menu-item menu-item-1" onClick={onToggleExpertise}><span>04 /</span>Our Expertise</span> */}
                        <Link className="menu-item menu-item-1" to="/expertise" onMouseOver={onToggleExpertise}><span>04 /</span>Our Expertise</Link>
                        <div className="sub-menu">
                            <Link to="/expertise/workplace-understanding" className="sub-menu-item">Workplace Understanding</Link>
                            <Link to="/expertise/interior-design" className="sub-menu-item">Interior Design</Link>
                            <Link to="/expertise/project-delivery" className="sub-menu-item">Project Delivery</Link>

                        </div>
                        <Link to="/work" className="menu-item"><span>05 /</span>Our Works</Link>
                        <Link to="/blog" className="menu-item"><span>06 /</span>News & Blog</Link>
                        <Link to="/contact" className="menu-item"><span>07 /</span>Contact</Link>
                        <Link to="/faq" className="menu-item"><span>08 /</span>FAQs</Link>
                    </div>
                    <div id="menu-3" className="menus">
                        <p className="yellow-text big mobile-hide">Let's get in touch</p>
                        <p className="yellow-text big desktop-hide mobile-follow-us">Follow Us</p>
                        <div className="relative mobile-hide">
                            <div className="contact relative">
                                <img src={require('../images/icons/phone.png')} alt="Phone Us" />
                                <p className="menu-3-text"><a href="tel:+6562722345">(65) 6272 2345</a></p>
                            </div>

                            <div className="contact relative">
                                <img src={require("../images/icons/mail.png")} alt="Email Us" />
                                <p className="menu-3-text"><a href="mailto:enquiries@id21.com.sg">enquiries@id21.com.sg</a></p>
                            </div>
                        </div>
                        <div className="social">
                            <a href="#" target="_block"><img src={require("../images/icons/facebook.png")} alt="Facebook" /></a>
                            <a href="#" target="_block"><img src={require("../images/icons/linked-in.png")} alt="Linked In" /></a>
                            <a href="#" target="_block"><img src={require("../images/icons/instagram.png")} alt="Instagram" className="icon-ig" /></a>
                        </div>
                        <div className="privacy-terms">
                            <Link to="/privacy-policy">
                                <p>Privacy Policy</p>
                            </Link>
                            <p id="divider" >|</p>
                            <Link to="/terms">
                                <p>Terms</p>
                            </Link>
                            <p id="divider" >|</p>
                            <p>© 2020 ID21 Pte Ltd.</p>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
export default withRouter(App)
