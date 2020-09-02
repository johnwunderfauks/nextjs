import React, { useRef, useEffect, useState } from 'react'
import axios from 'axios'
import '../styles/why-us.css'
import { Carousel } from 'react-responsive-carousel'
import { Fade } from 'react-awesome-reveal'
// import CountUp from 'react-countup';
import Ticker from '../components/Ticker'
import { Link } from "react-router-dom";

const Page = (props) => {
  const awardsRef = useRef(null)
  const [awards, setAwards] = useState(null)
  const [testimonials, setTestimonials] = useState(null)
  const [clients, setClients] = useState(null)

  const onStart = async () => {
    await axios.get(`http://id21.wunderfauks.com/wp/wp-json/wp/v2/awards?per_page=50&orderby=menu_order&order=asc`)
      .then((response) => {

        setAwards(response.data)
      }, (error) => {
        console.log(error)
      }
      )

    await axios.get(`http://id21.wunderfauks.com/wp/wp-json/wp/v2/testimonials?_fields=title,excerpt&per_page=10&orderby=menu_order&order=asc`)
      .then((response) => {

        setTestimonials(response.data)
      }, (error) => {
        console.log(error)
      }
      )

    await axios.get(`http://id21.wunderfauks.com/wp/wp-json/wp/v2/clients?_fields=title,acf&per_page=50&orderby=menu_order&order=asc`)
      .then((response) => {

        setClients(response.data)
      }, (error) => {
        console.log(error)
      }
      )
  }

  useEffect(() => {
    window.scrollTo(0, 0)
    // props.setLoading(false)
    onStart()

    if (props.location.state && props.location.state.fromaward === 1) {

      setTimeout(() => {
        if (awardsRef.current) {
          awardsRef.current.scrollIntoView({
            behavior: 'smooth'
          }, 400)
        }
      }, 1000)

    }


  }, []);

  function renderClients() {

    let rowContents = [];
    const contents = clients.reduce((acc, item, i) => {
      rowContents.push(<div key={i} className="clients br bb">
        {(item.acf.client_image &&
          <img src={item.acf.client_image} alt={item.title.rendered} />
        )}
      </div>);
      if (i % 4 === 3) {
        acc.push(<div className="client"><Fade triggerOnce={true} cascade bottom>{rowContents}</Fade></div>);
        rowContents = [];
      }
      return acc;
    }, [])
    contents.push(<div className="client"><Fade triggerOnce={true} cascade bottom>{rowContents}</Fade></div>);

    return (
      <React.Fragment>
        {contents}
      </React.Fragment>

    )
  }

  function renderTestimonials() {
    const regex = /(<([^>]+)>)/ig;
    return (
      <Carousel className="slider" showStatus={false} showIndicators={true} infiniteLoop={true}
        showThumbs={false} autoPlay={true} interval={5000}  >
        {testimonials.map((item, index) => (
          <div className="carousel">
            <Fade triggerOnce={true} cascade bottom>
              <p>“{item.title.rendered}”</p>
              <h5>{item.excerpt.rendered.replace(regex, '')}</h5>
            </Fade>
          </div>
        ))}
      </Carousel>
    )
  }

  function renderAwards() {

    let rowContents = [];
    const contents = awards.reduce((acc, item, i) => {
      var tempContent = (<div key={i} className="awards br">
        <Fade triggerOnce={true} cascade bottom>
          {(item.acf.logo &&
            <img src={item.acf.logohover} className="img-hover" alt={item.title.rendered} />
          )}
          <h6>{item.acf.year}</h6>
          <h5>{item.title.rendered}</h5>
          <h4>{item.acf.subtitle}</h4>
        </Fade>
      </div>)

      if (item.acf.work_link) {
        rowContents.push(<Link to={"/work/" + item.acf.work_link[0].post_name}>{tempContent}</Link>);
      }
      else {
        rowContents.push(tempContent);
      }

      if (i % 6 === 5) {
        acc.push(<div className="award" key={i}>{rowContents}</div>);
        rowContents = [];
      }
      return acc;
    }, [])
    contents.push(<div className="award" >{rowContents}</div>);

    return (
      <Carousel className="slider" showStatus={true} showIndicators={false} infiniteLoop={true} showThumbs={false}
        autoPlay={false} interval={5000} showArrows={true}
        renderArrowPrev={(onClickHandler, hasPrev, label) =>
          hasPrev && (
            <div className="btn-left">
              <button type="button" onClick={onClickHandler} title={label} >
                PREV
              </button>
            </div>
          )
        }
        renderArrowNext={(onClickHandler, hasNext, label) =>
          hasNext && (
            <div className="btn-right">
              <button type="button" onClick={onClickHandler} title={label} >
                NEXT
            </button>
            </div>
          )
        }
      >
        {contents}
      </Carousel>

    )
  }

  return (

    <div id="why-us" className="pages">
      <div className='page-banner' >
        <div className="header-bg" style={{ backgroundImage: `url(${require('../images/why-us/background.jpg')})` }} />
        <Fade triggerOnce={true} bottom>
          <div className="header-cont">
            <h1 className="header-text">Lorem ipsum dolor sit amet, <br />consectetuer adipiscing elit, sed</h1>
            <h3 className="header-subtitle"></h3>
          </div>
        </Fade>
      </div>

      <Fade triggerOnce={true} cascade bottom>
        <div id="why-1">
          <div id="why-1-1">
            <img src={require("../images/why-us/image.jpg")} width="80%" alt="Why Us" />
          </div>
          <div id="why-1-blank" />
          <div id="why-1-2">
            <Fade triggerOnce={true} cascade bottom>
              <h5>
                <Ticker
                  start={0}
                  end={80}
                  duration={4}
                  separator=""
                  decimals={0}
                  decimal=""
                  prefix=""
                  suffix="+"
                  delay={1}
                //onEnd={() => console.log('Ended! 👏')}
                //onStart={() => console.log('Started! 💨')}
                />
              </h5>
              <p>IN-HOUSE <br className="mobile-hide" />DESIGN & BUILD< br className="mobile-hide" />PROFESSIONALS</p>
            </Fade>
          </div>
          <div id="why-1-3">
            <Fade triggerOnce={true} cascade bottom>
              <hr />
              <p>Award-winning <br className="mobile-hide" />creative talents</p>
              <hr />
              <p>In-house factory & <br className="mobile-hide" />construction teams</p>
              <hr />
              <p>In-house M&E team</p>
              <hr />
              <p>Dedicated after-sales <br className="mobile-hide" />& maintenance</p>
              <hr />
            </Fade>
          </div>
        </div>
      </Fade>


      <div id="why-2">
        <Fade triggerOnce={true} bottom>
          <h2>Some of the renowned clients <br className="mobile-hide" />that we’ve worked with.</h2>
        </Fade>
        {clients ?
          renderClients()
          :
          <div id="loader">
            <div className="lds-facebook"><div></div><div></div><div></div></div>
          </div>
        }

      </div>

      <div id="why-3">
        <Fade triggerOnce={true} cascade bottom>
          <div className="bg" style={{ backgroundImage: `url(${require('../images/why-us/background-1.jpg')})` }} />

          <h2>HEAR FROM THEM</h2>
        </Fade>
        {testimonials ?
          renderTestimonials()
          :
          <div id="loader">
            <div className="lds-facebook"><div></div><div></div><div></div></div>
          </div>
        }

      </div>


      <div id="why-4" ref={awardsRef}>
        <h2>Our Awards</h2>

        {awards ?
          renderAwards()
          :
          <div id="loader">
            <div className="lds-facebook"><div></div><div></div><div></div></div>
          </div>
        }


      </div>

      <div id="why-5">
        <Fade triggerOnce={true} cascade bottom>
          <h2>Our Accreditation</h2>
        </Fade>
        <div className="p30">
          <div className="left">
            <div className="p30" >
              <Fade triggerOnce={true} cascade bottom>
                <img src={require("../images/why-us/ISO.svg")} alt="ISO" />
                <p>We meet global international standards.<br />
                Quality Management Systems (9001)<br />
                Effective Environment Management 14001<br />
                Occupational Health & Safety (45001)</p>
              </Fade>
            </div>
          </div>
          <div className="right">
            <div className="p30" >
              <Fade triggerOnce={true} cascade bottom>
                <img src={require("../images/why-us/Bizsafe.svg")} alt="bizsafe" /><br />
                <img src={require("../images/why-us/BizsafePartner.svg")} alt="bizsafe partner" />
                <p>We are also proud to be a bizSafe Partner and bizSafe Star rated.</p>
              </Fade>
            </div>
          </div>
        </div>

      </div>


    </div>


  )

}
export default Page
