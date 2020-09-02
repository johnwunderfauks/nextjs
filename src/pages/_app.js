import React, { Component, Fragment, useEffect, useState, useLayoutEffect } from 'react'
import '../styles/App.scss'

import Head from 'next/head'
import Router from 'next/router'
import Link from 'next/link'

import {Footer} from '../components'
import {TweenMax} from 'gsap'


const cacheURL = [];
import "react-responsive-carousel/lib/styles/carousel.min.css"

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      size: {width: 0, height: 0},
      showHeader: false,
      menuOpen: false,
    }
  }

  componentDidMount() {
    Router.events.on('routeChangeComplete', this.handleLoadStyle)
    window.addEventListener('scroll', this.handleScroll)
    window.addEventListener('resize', this.handleResize)
    this.handleResize()
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
    window.removeEventListener('resize', this.handleResize)
  }

  handleResize = () => {
    this.setState({ size: {width: window.innerWidth, height: window.innerHeight} })
  }
  handleScroll = () => {
    let {showHeader, size} = this.state

    if(!showHeader && (window.pageYOffset > size.height/2 ) ) {
      TweenMax.to("#header-background", 0.3, {height: 80})
      this.setState({ showHeader: true })
    }
    if(showHeader && (window.pageYOffset < size.height/2) ) {
      TweenMax.to("#header-background", 0.3, {height: 0})
      this.setState({ showHeader: false })
    }
  }


  handleLoadStyle = (url) => {
    if (cacheURL.includes(url)) return
    const els = document.querySelectorAll(
      'link[href*="/_next/static/css/styles.chunk.css"]')
      const timestamp = new Date().valueOf()
      for (let i = 0; i < els.length; i++) {
        if (els[i].rel === 'stylesheet') {
          els[i].href = '/_next/static/css/styles.chunk.css?v=' + timestamp
          cacheURL.push(url)
          break
        }
      }
    }


    onToggleMenu = () => {
      const {size, menuOpen} = this.state
      let _width = size.width
      if(size.height > _width) {
        _width = size.height
      }
      if(menuOpen) {

        this.setState({ menuOpen: false })
      } else {
        TweenMax.to("#header-background", 0.3, {height: 0})
        TweenMax.to('#menu-overlay', {display: 'block', width: _width * 3, height: _width * 3, top: -_width, right: -_width})
        TweenMax.to('#menu', {display: 'block', opacity: 1})
        this.setState({ menuOpen: true })
      }
    }

    render() {
      const {size} = this.state
      const {pageProps, Component} = this.props
      return (
        <Fragment>
          <Head>
            <meta charset="utf-8" />
            <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no" />
            <title>id21</title>
            <link href="https://fonts.googleapis.com/css2?family=EB+Garamond:wght@400;500;700&family=Source+Sans+Pro:wght@300;400;700&display=swap" rel="stylesheet"/>

            {/* <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" /> */}
            {process.env.NODE_ENV == 'production' &&
            <Fragment>

            </Fragment>
          }
        </Head>

        <div id="header" >
          <div id="header-background" />
          <div id="header-content">
            <Link href="/"
            >
              
            </Link>
            <div id="header-right">
              <Link href="/contact"
              >
                <a>CONTACT</a>
              </Link>
              <div id="menu-burger" onClick={this.onToggleMenu} >
                <div />
                <div />
              </div>
            </div>
          </div>
        </div>

        <Component {...pageProps} size={size} />

        <Footer />

        <div id="menu-overlay" />
        <div id="menu">
          <div id="menu-1" className="menus mobile-hide">
            <h3 className="mobile-hide">Transformation</h3>
            <h3 className="mobile-hide">At Work</h3>
          </div>
          <div id="menu-2" className="menus">
            <Link href="/" ><a>Home</a></Link>
          </div>
          <div id="menu-3" className="menus">
            <p >Let's get in touch</p>
          </div>
        </div>


      </Fragment>
    );
  }
}

export default App
