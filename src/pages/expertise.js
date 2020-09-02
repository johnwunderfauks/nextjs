import React, { useEffect, useState } from 'react'
import { TweenMax } from 'gsap'
import '../styles/expertise.css'
// import { Carousel } from 'react-responsive-carousel'
import { Fade } from 'react-awesome-reveal'


const Page = (props) => {

  const [index, setIndex] = useState(1)

  useEffect(() => {
    window.scrollTo(0, 0)
    // props.setLoading(false)
    // setTimeout(() => {

    // }, 6000)
    // TweenMax.to('.exp-1', 0.2, { color: "#3B4349" })
    if (props.match.params.slug) {
      var slug = props.match.params.slug
      if (slug === 'workplace-understanding') {
        TweenMax.to('.exp-0', 0.2, { color: "#3B4349" })
        setIndex(0)
      } else if (slug === 'interior-design') {
        TweenMax.to('.exp-1', 0.2, { color: "#3B4349" })
        setIndex(1)
      } else {
        TweenMax.to('.exp-2', 0.2, { color: "#3B4349" })
        setIndex(2)
      }
    }
    else {
      TweenMax.to('.exp-0', 0.2, { color: "#3B4349" })
      setIndex(0)
    }
  }, []);


  const onClickIndex = (i) => {
    TweenMax.to(`.exp-${i}`, 0.2, { color: "#3B4349" })
    if (i === 0) {
      TweenMax.to(`.exp-1`, 0.2, { color: "#7C8080" })
      TweenMax.to(`.exp-2`, 0.2, { color: "#7C8080" })
    } else if (i === 1) {
      TweenMax.to(`.exp-0`, 0.2, { color: "#7C8080" })
      TweenMax.to(`.exp-2`, 0.2, { color: "#7C8080" })
    } else {
      TweenMax.to(`.exp-0`, 0.2, { color: "#7C8080" })
      TweenMax.to(`.exp-1`, 0.2, { color: "#7C8080" })
    }
    setIndex(i)
  }

  return (
    <Fade triggerOnce={true} cascade bottom>
      <div id="expertise" className="pages">

        <div className='page-banner' >
          <div className="header-bg" style={{ backgroundImage: `url(${require("../images/expertise/background.jpg")})` }} >
            <div className="overlay" />
          </div>
          <div className="header-cont">
            <Fade triggerOnce={true} cascade bottom>
              <h1 className="header-text">
                Our combined services can offer<br /> you a <span className="yellow-text">turn-key solution</span> for a<br /> smoother project delivery.
          </h1>
              <h3 className="header-subtitle">
                Be it an office in the business district, or a laboratory in industrial<br />parks, we are experts at addressing all types of renovation needs.
          </h3>
            </Fade>
          </div>
          {/* <h1 className="expertise-header-text"></h1>
          <h3 className="expertise-title"></h3> */}
        </div>

        <div id="expertise-1">
          <Fade triggerOnce={true} cascade bottom delay={1000}>
            <img src={require("../images/expertise/image.jpg")} width="100%" alt="Our Expertise" />
          </Fade>
        </div>

        <div id="expertise-2">

          <div id="expertise-2-1" onClick={() => onClickIndex(0)}>
            <Fade triggerOnce={true} cascade bottom>
              <h2 className="exp-0">Workplace<br />Understanding</h2>
              <p className="exp-0">With years of experience,<br />we have in-depth knowledge of our trade. We pair you with the right experts on our team who can advise and guide you through the rapidly changing world of work.</p>
            </Fade>
          </div>
          <div id="expertise-2-2" onClick={() => onClickIndex(1)}>
            <Fade triggerOnce={true} cascade bottom delay={500}>
              <h2 className="exp-1">Interior<br />Design</h2>
              <p className="exp-1">We help clients understand the upside of integrating modern interior design strategies, both creative and technical into corporate offices and more. </p>
            </Fade>
          </div>
          <div id="expertise-2-3" onClick={() => onClickIndex(2)}>
            <Fade triggerOnce={true} cascade bottom delay={1000}>
              <h2 className="exp-2">Project<br />Delivery</h2>
              <p className="exp-2">Our on-site design implementation is adequately resourced, organised and controlled to meet project objectives and deliver quality work on-time and on-budget.</p>
            </Fade>
          </div>
        </div>
        {/* <div id="expertise-3">
    <div class="box"></div>
  </div> */}
        <div id="expertise-3" className="box">
          {/* <div> */}
          {index === 0 ?
            <div className="contents">
              <div className="box box-1"></div>
              <div className="expertise-3-content">
                <Fade triggerOnce={true} cascade bottom>
                  <div>
                  <h3>Procurement</h3>
                  <p>We not only look at ways we can help you manage your construction & project costs but ways we can offer the best value for money at all stages of the project life-cycle.</p>
                  <hr />
                  </div>
                  <div>
                  <h3>In-House<br />Carpentry</h3>
                  <p>We own and manage an integrated furniture customisation and fabrication arm that supports our quality management and service continuity.</p>
                  <hr />
                  </div>
                  <div>
                  <h3>Client Services<br />Support</h3>
                  <p>We provide extensive coverage for our design & build projects with a dedicated after-sales support team as part of our commitment to deliver a workplace environment that is safe, secured and comfortable for you.</p>
                  <hr />
                  </div>
                  <div>
                  <h3>Move<br />Management</h3>
                  <p>Let us support you with your technology integration and migration.</p>
                  <hr />
                  </div>
                  <div>
                  <h3>Project &<br />Construction<br />Management</h3>
                  <p>Our in-house project management and construction teams combined with our In-house M&E & carpentry together provide a streamlined processes that are ISO certified to produce quality products that minimise redundancies for more timely project deliveries.</p>
                  </div>
                </Fade>
              </div>
            </div>
            : index === 1 ?
              <div className="contents">
                <div className="box box-2"></div>
                <div className="expertise-3-content">
                  <Fade triggerOnce={true} cascade bottom>
                    <div>
                    <h3>Project &<br />Construction<br />Management</h3>
                    <p>Our in-house project management and construction teams combined with our In-house M&E & carpentry together provide a streamlined processes that are ISO certified to produce quality products that minimise redundancies for more timely project deliveries.</p>
                    <hr />
                    </div><div>
                    <h3>Procurement</h3>
                    <p>We not only look at ways we can help you manage your construction & project costs but ways we can offer the best value for money at all stages of the project life-cycle.</p>
                    <hr />
                    </div><div>
                    <h3>In-House<br />Carpentry</h3>
                    <p>We own and manage an integrated furniture customisation and fabrication arm that supports our quality management and service continuity.</p>
                    <hr />
                    </div><div>
                    <h3>Client Services<br />Support</h3>
                    <p>We provide extensive coverage for our design & build projects with a dedicated after-sales support team as part of our commitment to deliver a workplace environment that is safe, secured and comfortable for you.</p>
                    <hr />
                    </div><div>
                    <h3>Move<br />Management</h3>
                    <p>Let us support you with your technology integration and migration.</p>
                    </div>
                  </Fade>
                </div>
              </div>
              :
              <div className="contents">
                <div className="box box-3"></div>
                <div className="expertise-3-content">
                  <Fade triggerOnce={true} cascade bottom>
                    <div>
                    <h3>In-House<br />Carpentry</h3>
                    <p>We own and manage an integrated furniture customisation and fabrication arm that supports our quality management and service continuity.</p>
                    <hr />
                    </div><div>
                    <h3>Procurement</h3>
                    <p>We not only look at ways we can help you manage your construction & project costs but ways we can offer the best value for money at all stages of the project life-cycle.</p>
                    <hr />
                    </div><div>
                    <h3>Project &<br />Construction<br />Management</h3>
                    <p>Our in-house project management and construction teams combined with our in-inhouse M&E & carpentry together provide a streamlined processes that are ISO certified to produce quality products that minimise redundancies for more timely project deliveries.</p>
                    <hr />
                    </div><div>
                    <h3>Client Services<br />Support</h3>
                    <p>We provide extensive coverage for our design & build projects with a dedicated after-sales support team as part of our commitment to deliver a workplace environment that is safe, secured and comfortable for you.</p>
                    <hr />
                    </div><div>
                    <h3>Move<br />Management</h3>
                    <p>Let us support you with your technology integration and migration.</p>
                    </div>
                  </Fade>
                </div>
              </div>
          }

        </div>

        {/* </div> */}

      </div>
    </Fade>
  )
}

export default Page
