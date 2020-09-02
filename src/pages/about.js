import React, { useEffect, useState } from 'react'
import '../styles/about.css'
import { Fade } from 'react-awesome-reveal'
// import CountUp from 'react-countup';
import Ticker from '../components/Ticker'

const Page = (props) => {
  const [index, setIndex] = useState(0)

  const aspire = ['A', 'S', 'P', 'I', 'R', 'E']

  useEffect(() => {
    
    window.scrollTo(0, 0)
    props.setLoading(false)

  }, []);

  const onClickIndex = (i) => {
    setIndex(i)
  }

  return (
    <div id="about" className="pages">
      <div className='page-banner' >
        <div className="header-bg" style={{ backgroundImage: `url(${require("../images/about/bg-about.jpg")})` }} />
        <div className="header-cont">
          <Fade triggerOnce={true} cascade bottom>
            <h1 className="header-text">Lorem ipsum dolor sit amet, <br /><span className="yellow-text">consectetuer adipiscing</span> elit, sed</h1>
            <h3 className="header-subtitle">Lorem ipsum dolor sit amet, consectetuer adipiscing elit,<br /> sed diam nonummy nibh euismod tincidunt ut laoreet </h3>
          </Fade>
        </div>
      </div>



      <div id="about-1">
        <Fade triggerOnce={true} cascade direction="right">
          <img src={require("../images/about/people-1.jpg")} width="60%" alt="about us ID 21" />
        </Fade>
        <div id="about-1-block">
          <div id="about-1-block-p" >
            <Fade triggerOnce={true} cascade direction="bottom">
              <h2>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh uismod.</h2>
              <hr />
              <h5>JANET ONG</h5>
              <p>Founder</p>
              <p>Managing Director</p>
            </Fade>
          </div>
        </div>

        <div id="about-1-num">
          <Fade triggerOnce={true} cascade direction="bottom">
            <div className="nums">
              <p className="num">
                <Ticker
                  start={0}
                  end={24}
                  duration={4}
                  separator=""
                  decimals={0}
                  decimal=""
                  prefix=""
                  suffix=""
                  delay={1}
                />
              </p>
              <p className="detail">YEARS OF<br />EXPERIENCE</p>
            </div>
            <div className="nums">
              <p className="num">
                <Ticker
                  start={0}
                  end={11}
                  duration={4}
                  separator=""
                  decimals={0}
                  decimal=""
                  prefix=""
                  suffix=""
                  delay={1.5}
                />
              </p>
              <p className="detail">COUNTRIES WE’VE<br />DELIVERED PROJECTS</p>
            </div>
            <div className="nums">
              <p className="num">
                <Ticker
                  start={0}
                  end={2000}
                  duration={4}
                  separator=","
                  decimals={0}
                  decimal=""
                  prefix=""
                  suffix=""
                  delay={2}
                />
              </p>
              <p className="detail">PROJECTS<br />COMPLETED</p>
            </div>
          </Fade>
        </div>


      </div>

      <div id="about-2">
        {/* <div className="left" style={{ backgroundImage: `url(${require("../images/about/mission.jpg")})` }}> */}
        <div className="left">
          <Fade triggerOnce={true} cascade bottom>
            <img src={require("../images/about/mission.jpg")} width="90%" alt="Our Mission" />
          </Fade>
        </div>
        <div className="right">
          <Fade triggerOnce={true} cascade bottom>
            <div className="content">

              <h4>Our Mission</h4>
              <p>Lorem ipsum dolor sit amet,<br />consectetuer adipiscing elit, sed diam<br />nonummy nibh euismod tincidunt ut<br />laoreet dolore magna aliquam erat.</p>
            </div>
            <div className="content">
              <h4>Our Vision</h4>
              <p>Lorem ipsum dolor sit amet,<br />consectetuer adipiscing elit, sed diam<br />nonummy nibh euismod tincidunt ut<br />laoreet dolore magna aliquam erat.</p>
            </div>
          </Fade>
        </div>
      </div>

      <div id="about-3">
        <div id="about-3-2">
          <h4>CORE VALUES</h4>
          {aspire.map((item, i) => (
            <div key={i} id={"about-3-2-" + (index + 1)} onClick={() => onClickIndex(i)}>
              <h2 style={{ color: index === i && '#ffc000' }} >{item}</h2>
            </div>
          ))}
          {/* <div id="about-3-2-1" onClick={() => onClickIndex(0)}>
            <h2><span className="yellow-text">A</span></h2>
          </div>
          <div id="about-3-2-2" onClick={() => onClickIndex(1)}>
            <h2>S</h2>
          </div>
          <div id="about-3-2-3" onClick={() => onClickIndex(2)}>
            <h2>P</h2>
          </div>
          <div id="about-3-2-4" onClick={() => onClickIndex(3)}>
            <h2>I</h2>
          </div>
          <div id="about-3-2-5" onClick={() => onClickIndex(4)}>
            <h2>R</h2>
          </div>
          <div id="about-3-2-6" onClick={() => onClickIndex(5)}>
            <h2>E</h2>
          </div> */}
        </div>
        <div className="about-3-content">
          {index === 0 ?
            <Fade triggerOnce={true} cascade left key="1">
              <h5>Accountability</h5>
              <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed<br />diam nonummy nibh euismod tincidunt ut laoreet dolore.</p>
              <img src={require("../images/about/aspire.jpg")} width="100%" alt="Accountability" />
            </Fade>
            : index === 1 ?
              <Fade triggerOnce={true} cascade left key="2">
                <h5>SSSSSS</h5>
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed<br />diam nonummy nibh euismod tincidunt ut laoreet dolore.</p>
                <img src={require("../images/about/background.jpg")} width="100%" alt="Strategy" />
              </Fade>
              : index === 2 ?
                <Fade triggerOnce={true} cascade left key="3">
                  <h5>Procurement</h5>
                  <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed<br />diam nonummy nibh euismod tincidunt ut laoreet dolore.</p>
                  <img src={require("../images/about/aspire.jpg")} width="100%" alt="Procurement" />
                </Fade>
                : index === 3 ?
                  <Fade triggerOnce={true} cascade left key="4">
                    <h5>Accountability</h5>
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed<br />diam nonummy nibh euismod tincidunt ut laoreet dolore.</p>
                    <img src={require("../images/about/aspire.jpg")} width="100%" alt="Inspiration" />
                  </Fade>
                  : index == 4 ?
                    <Fade triggerOnce={true} cascade left key="5">
                      <h5>SSSSSS</h5>
                      <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed<br />diam nonummy nibh euismod tincidunt ut laoreet dolore.</p>
                      <img src={require("../images/about/background.jpg")} width="100%" alt="Relationship" />
                    </Fade>
                    :
                    <Fade triggerOnce={true} cascade left key="6">
                      <h5>Procurement</h5>
                      <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed<br />diam nonummy nibh euismod tincidunt ut laoreet dolore.</p>
                      <img src={require("../images/about/aspire.jpg")} width="100%" alt="Engagement" />
                    </Fade>
          }
        </div>
      </div>



      {/* <div id="about-3">
        <h4>CORE VALUES</h4>
        <h2><span className="yellow-text">A</span> S P I R E</h2>
        <h5>Accountability</h5>
        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed<br />diam nonummy nibh euismod tincidunt ut laoreet dolore.</p>
        <img src={require("../images/about/aspire.jpg")} width="100%" />
      </div> */}

      <div id="about-4">
        <Fade triggerOnce={true} cascade>
          <h2>Our Services</h2>
        </Fade>
        <div className="left-1">
          <Fade triggerOnce={true} direction="left">
            <img src={require("../images/about/interior-design.jpg")} width="100%" alt="Interior Design" />
          </Fade>
        </div>
        <div className="right-1">
          <Fade triggerOnce={true} cascade direction="right">
            <div className="right-p">
              <h2>Interior Design</h2>
              <p>Let our design teams seamlessly integrate with your project delivery teams to deliver designs that perform beyond current standards of efficiency, connectivity and well-being.</p>
            </div>
          </Fade>
        </div>
        <div className="right-2">
          <Fade triggerOnce={true} cascade direction="left">
            <div className="right-p">
              <h2>Our Build Capabilities</h2>
              <p>Let us manage your entire project life-cycle or simply build your project for you. Our holistic and integrated design approach brings together a comprehensive team of multi-disciplinary experts in design, planning, procurement, M&E, carpentry, project management and construction to offer you a single source of accountability for your project.</p>
            </div>
          </Fade>
        </div>
        <div className="left-2">
          <Fade triggerOnce={true} direction="right">
            <img src={require("../images/about/build.jpg")} width="100%" alt="Build Capabilities" />
          </Fade>
        </div>
      </div>



    </div>
  )
}

export default Page
