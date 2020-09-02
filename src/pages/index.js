import React, { useEffect, useState, useRef } from 'react'
import { TweenMax } from 'gsap'
import '../styles/home.css'
import axios from 'axios'
import moment from 'moment'
import { Link } from "react-router-dom";
import { Link as SmoothScroll, animateScroll as scroll } from "react-scroll";
import Slider from "react-slick";
import { PreLoader } from '../components'
import { Fade } from 'react-awesome-reveal'
// import bodyScrollLock from 'body-scroll-lock'
// import Pace from 'react-pace-progress'

function Page(props) {
  // const [isPaceLoading, setPaceLoading] = useState(true)
  const [blogs, setBlogs] = useState(null)
  const [projects, setProjects] = useState(null)
  const [projectsLarge, setProjectsLarge] = useState(null)
  const [projectsSmall, setProjectsSmall] = useState(null)

  const [projects1, setProjects1] = useState(null)
  const [projects2, setProjects2] = useState(null)
  const [projects3, setProjects3] = useState(null)
  const [projects4, setProjects4] = useState(null)
  const [projects5, setProjects5] = useState(null)
  const [projects6, setProjects6] = useState(null)

  const [awards, setAwards] = useState(null)
  const [page, setPage] = useState(1)
  let slider = useRef(null)
  // let project_slider = useRef(null)
  let project_sliderLarge = useRef(null)
  let project_sliderSmall = useRef(null)
  let project_slider2 = useRef(null)
  let noone_slider = useRef(null)

  let project1_ref = useRef(null)
  let project2_ref = useRef(null)
  let project3_ref = useRef(null)
  let project4_ref = useRef(null)
  let project5_ref = useRef(null)
  let project6_ref = useRef(null)

  const [isLoading, setLoading] = useState(true)

  const b1 = useRef(null), b2 = useRef(null), b3 = useRef(null), b4 = useRef(null), b5 = useRef(null), b6 = useRef(null)
  const [show, doShow] = useState({
    itemOne: false,
    itemTwo: false,
    itemThree: false
  });
  // const [scrolls, setScrolls] = useState([b1, b2, b3, b4, b5, b6])
  // const [scroll, setScroll] = useState(false)
  // const [top, setTop] = useState(false)

  const firstAnimate = () => {

    TweenMax.to('#home .slick-active.slick-current .header-title-2', 0.3, { top: 0, opacity: 1, delay: 1 })
    TweenMax.to('#home .slick-active.slick-current .header-title-1', 0.3, { top: 0, opacity: 1, delay: 1.5 })
    TweenMax.to('#home .page-banner .prev-next button:first-child', .3, { bottom: '90px', opacity: 1, delay: 2 })
    TweenMax.to('#home .page-banner .prev-next button:last-child', .3, { bottom: '90px', opacity: 1, delay: 2 })
    TweenMax.to('#home .page-banner a.home-scroll-btn', .3, { bottom: '75px', opacity: 1, delay: 2.2 })

    TweenMax.to('#banner-right-bottom #brb-2', .3, { bottom: '0', opacity: 1, delay: 2 })
    TweenMax.to('#banner-right-bottom .brb-no', .3, { bottom: '0', opacity: 1, delay: 2 })
    TweenMax.to('#banner-right-bottom #brb-3', .3, { bottom: '0', opacity: 1, delay: 2 })
    TweenMax.to('#banner-right-bottom .homeBannerBars', .3, { bottom: '0', opacity: 1, delay: 2 })

  }

  const firstClick = () => {
    setLoading(false)
    firstAnimate();
    window.removeEventListener("click", firstClick);
  }

  useEffect(() => {
    onStart()
    window.scrollTo(0, 0)
    // setTimeout(() => {
    //   setLoading(false)
    // }, 8000);

    window.addEventListener("click", firstClick);
    if (window.sessionStorage.getItem("firstLoadDone") === null) {


      window.sessionStorage.setItem("firstLoadDone", 1);

      // setTimeout(() => {
      //   window.addEventListener("scroll", onScroll);
      //   return () => window.removeEventListener("scroll", onScroll);
      // }, 2000);


    }
    else {

      // setLoading(false)

      // setTimeout(() => {
      //   firstAnimate();
      // }, 500)
    }



    // const topPos = element => element.getBoundingClientRect().top;
    // const div1Pos = topPos(b1.current),
    //   div2Pos = topPos(b2.current),
    //   div3Pos = topPos(b3.current);
    // // console.log(div1Pos, div2Pos, div3Pos)

    // const onScroll = () => {
    //   const scrollPos = window.scrollY + window.innerHeight;
    //   if (div1Pos < scrollPos) {
    //     doShow(state => ({ ...state, itemOne: true }));
    //   } else if (div2Pos < scrollPos) {
    //     doShow(state => ({ ...state, itemTwo: true }));
    //   } else if (div3Pos < scrollPos) {
    //     doShow(state => ({ ...state, itemThree: true }));
    //   }
    // };

    // setTimeout(() => {
    //   Scroll()
    // }, 5000)

    // const handleScroll = () => {
    //   let pageY = window.pageYOffset
    //   if (props.history.location.pathname == '/')
    //     console.log(pageY)
    //   if (pageY > 50 && pageY < 140) {
    //     if (scrolls[1].current) {
    //       scrolls[1].current.scrollIntoView()
    //     }
    //   }
    // }
    // window.addEventListener('scroll', handleScroll);
    // const handleScroll = () => {
    //   console.log(scroll)
    //   if (!scroll && window.pageYOffset < 1000) {
    //     console.log("bottom", scroll)
    //     window.scrollTo(0, 1000)
    //     setScroll(true)
    //   }
    //   if (scroll && window.pageYOffset == 1000 && !top) {
    //     console.log("_up", scroll)
    //     window.scrollTo(0, 0)
    //     setScroll(true)
    //     setTop(true)
    //   }
    //   if (scroll && window.pageYOffset > 1000) {
    //     console.log("up", scroll)
    //     setScroll(false)
    //   }
    // }
  }, [])

  // const Scroll = () => {
  //   console.log(scrolls[1])
  //   scrolls[1].current.scrollIntoView()
  // }

  function chunk(arr, len) {

    var chunks = [],
      i = 0,
      n = arr.length;

    while (i < n) {
      chunks.push(arr.slice(i, i += len));
    }

    return chunks;
  }

  const onStart = async () => {
    // setPaceLoading(true);
    await axios.get(`http://id21.wunderfauks.com/wp/wp-json/wp/v2/blog?page=${page}&per_page=9`)
      .then((response) => {

        setBlogs(response.data)

      }, (error) => {
        console.log(error);
      });


    await axios.get(`http://id21.wunderfauks.com/wp/wp-json/wp/v2/awards?featured=1&orderby=menu_order&order=asc`)
      .then((response) => {
        const awardsList = response.data.filter((awardItems, index) => awardItems.acf.isfeatured === true)
        setAwards(awardsList)
      }, (error) => {
        console.log(error)
      }
      )


    await axios.get(`http://id21.wunderfauks.com/wp/wp-json/wp/v2/work?page=${page}&per_page=60`)
      .then((response) => {

        let projects = response.data
        setProjects(projects)

        let tempChunks = chunk(response.data, 6)
        console.log(tempChunks)

        for (var i = 0; i < tempChunks.length; i++) {
          if (i == 0)
            setProjects1(tempChunks[i])
          else if (i == 1)
            setProjects2(tempChunks[i])
          else if (i == 2)
            setProjects3(tempChunks[i])
          else if (i == 3)
            setProjects4(tempChunks[i])
          else if (i == 4)
            setProjects5(tempChunks[i])
          else if (i == 5)
            setProjects6(tempChunks[i])
        }

        // setPaceLoading(false);

      }, (error) => {
        console.log(error);
      });
    //let projects = projects_res.data

    //const evens = projects.filter(item => item % 2 === 0);
    //const odd = projects.filter(item => item % 2 === 1);


  }

  var banner_settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: false,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    appendDots: (dots, i) => {
      return (
        <div id="banner-right-bottom">
          <ul style={{}}> {dots} </ul>
          <div id="brb-1" >

            <span id="brb-2">ID21 OFFICE</span>
            {dots && dots.map((item, index) => (
              <div key={index}>
                {item.props.className === "slick-active" &&
                  <span className="brb-no" style={{ color: '#ffffff' }}>{index + 1}</span>
                }
              </div>
            ))}
            <div id="brb-3">

              {dots && dots.map((item, index) => (
                <div key={index} className="homeBannerBars">
                  {item.props.className === "slick-active" &&
                    <span className="brb-bars" style={{ width: ((index + 1) / dots.length) * 100 + '%' }}></span>
                  }
                </div>
              ))}

            </div>
            <span className="brb-no" style={{ color: '#ffffff' }}>{dots.length}</span>
          </div>
        </div>
      )
    },
    beforeChange: (current, next) => {
      TweenMax.to('#home .slick-slide .header-title-2', 0, { top: "-40px", opacity: 0, delay: 0 })
      TweenMax.to('#home .slick-slide .header-title-1', 0, { top: "-40px", opacity: 0, delay: 0 })
    },
    afterChange: current => {
      TweenMax.to('#home .slick-active.slick-current .header-title-2', 0.3, { top: 0, opacity: 1, delay: .3 })
      TweenMax.to('#home .slick-active.slick-current .header-title-1', 0.3, { top: 0, opacity: 1, delay: .6 })
      TweenMax.to('#banner-right-bottom .brb-no', .3, { bottom: '0', opacity: 1, delay: 0 })
    }
  };

  const next = () => {
    slider.slickNext();

    TweenMax.to('#banner-right-bottom .brb-no', 0, { bottom: '0', opacity: 1 })
  }
  const previous = () => {
    slider.slickPrev();

    TweenMax.to('#banner-right-bottom .brb-no', 0, { bottom: '0', opacity: 1 })
  }

  var projects_settings = {

    dots: false,
    infinite: true,
    speed: 1250,
    centerMode: true,
    centerPadding: 0,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: false,
    autoplaySpeed: 4000,
    pauseOnHover: true,
  };

  const pNext = () => {
    console.log("next")
    // project_sliderLarge.slickNext();
    // project_sliderSmall.slickNext();
    if (projects1) {
      project1_ref.slickNext();
    }
    if (projects2 != null) {
      project2_ref.slickNext();
    }
    if (projects3) {
      project3_ref.slickNext();
    }
    if (projects4) {
      project4_ref.slickNext();
    }
    if (projects5 != null) {
      project5_ref.slickNext();
    }
    if (projects6 != null) {
      project6_ref.slickNext();
    }
  }
  const pPrev = () => {
    if (projects1) {
      project1_ref.slickPrev();
    }
    if (projects2 != null) {
      project2_ref.slickPrev();
    }
    if (projects3) {
      project3_ref.slickPrev();
    }
    if (projects4) {
      project4_ref.slickPrev();
    }
    if (projects5 != null) {
      project5_ref.slickPrev();
    }
    if (projects6 != null) {
      project6_ref.slickPrev();
    }
    // project_sliderLarge.slickPrev();
    // project_sliderSmall.slickNext();
  }

  const pNext2 = () => {
    console.log("next")
    project_slider2.slickNext();
  }
  const pPrev2 = () => {
    project_slider2.slickPrev();
  }

  var settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    appendDots: (dots, i) => {
      return (
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', bottom: '-75px' }}>
          <ul style={{ marginLeft: '-33px' }}> {dots} </ul>
          <div style={{ marginRight: 5, display: 'flex', alignItems: 'center', letterSpacing: '5px' }} >
            <Link to="/blog" className="view-all">VIEW ALL</Link>
          </div>
        </div>
      )
    },
    customPaging: i => (
      <div>
        <div
          style={{
            width: "5px",
            height: "20px",
            backgroundColor: "#ffffff",
            borderRadius: 15,
            marginLeft: 0
          }}
        >
        </div>
      </div>
    ),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
    ]
  };

  var awards_settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000,
    // autoplay: true,
    pauseOnHover: true,
    appendDots: (dots, i) => {
      return (
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'absolute' }}>
          <ul style={{ marginLeft: '-40px' }} className="blog-dots"> {dots} </ul>
          <div style={{ marginRight: 5, display: 'flex', alignItems: 'center', letterSpacing: '5px' }} >
            <Link to={{
              pathname: "/why-us",
              state: {
                fromaward: 1
              }
            }} className="view-all blog-view-all">VIEW ALL</Link>
          </div>
        </div>
      )
    },
    customPaging: i => (
      <div>
        <div
          style={{
            width: "5px",
            height: "20px",
            backgroundColor: "#ffffff",
            borderRadius: 15,
            marginLeft: 0
          }}
        >
        </div>
      </div>
    ),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
    ]
  };

  const overBlogItem = () => {
    // TweenMax.to('.blog-dots', 0.3, { opacity: 0 })
    // TweenMax.to('.blog-view-all', 0.3, { opacity: 0 })
  }
  const leaveBlogItem = () => {
    // TweenMax.to('.blog-dots', 0.3, { opacity: 1 })
    // TweenMax.to('.blog-view-all', 0.3, { opacity: 1 })
  }

  var noone_settings = {
    dots: true,
    infinite: true,
    speed: 1250,
    centerMode: true,
    centerPadding: 0,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: false,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    customPaging: i => (
      <div className="pagingBars"></div>
    )
  };

  function renderAwards() {

    let rowContents = [];
    const contents = awards.map((item, i) => {
      var tempContent = (<div className="blog-item" onMouseOver={overBlogItem} onMouseLeave={leaveBlogItem} key={i}>
      <Fade triggerOnce={true} cascade bottom >
        {(item.acf.logo &&
          <img src={item.acf.logo} className="img-1" alt={item.title.rendered} />
        )}
        {(item.acf.logo &&
          <img src={item.acf.logohover} className="img-hover" alt={item.title.rendered} />
        )}
      </Fade>
      <div className="p20">
        <Fade triggerOnce={true} cascade bottom >
          <p className="title">{item.title.rendered}</p>
          <h2 className="office">{item.acf.subtitle}</h2>
          {(item.fimg_url &&
            <img src={item.fimg_url} className="img-hover2" />
          )}
        </Fade>
      </div>
    </div>)
      
      if (item.acf.work_link) {
        rowContents.push(<Link to={"/work/" + item.acf.work_link[0].post_name}>{tempContent}</Link>);
      }
      else{
        rowContents.push(tempContent);
      }
    }, [])
    
    return (
      <Slider {...awards_settings}>
        {rowContents}
      </Slider>
    )
  }

  return (
    <div>
      {/* {isPaceLoading ? <Pace color="#FFCC00" /> : null} */}
      <PreLoader isLoading={isLoading} />
      <div id="home" className="pages">
        <div className='page-banner' ref={b1}>

          <div className="carousel">
            <Slider ref={c => (slider = c)} {...banner_settings}>
              <div className="home-slider-item">
                <img src={require("../images/home/000_Home-Container.jpg")} alt="ID21 Office Interior" />
                <div className="home-bg-overlay"></div>
                <div className="header-title">
                  <h3 className="header-title-1">SINCE 1996</h3>
                  <h3 className="header-title-2">TRANSFORMATION <br />AT WORK</h3>
                </div>
              </div>

              <div className="home-slider-item">
                <img src={require("../images/home/000_Home-Container.jpg")} alt="ID21 Office Interior" />
                <div className="home-bg-overlay"></div>
                <div className="header-title">
                  <h3 className="header-title-1">SINCE 1996</h3>
                  <h3 className="header-title-2">TRANSFORMATION <br />AT WORK</h3>
                </div>

              </div>
            </Slider>
          </div>
          <div className="prev-next">
            <button className="button" onClick={previous}>
              PREV
                </button>
            <button className="button btn-next" onClick={next}>
              NEXT
                </button>
          </div>
          <SmoothScroll
            activeClass="active"
            to="page-banner-2"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="home-scroll-btn"
          >
            <span className="home-scroll-btn-text">Scroll</span>
            <span className="home-scroll-btn-bar"></span>
          </SmoothScroll>

        </div>


        <div className="page-banner-2" id="page-banner-2" ref={b2}>
          <Fade triggerOnce={true} cascade bottom>
            <div className="header-bg" style={{ backgroundImage: `url(${require("../images/home/background-2.jpg")})` }} />
          </Fade>
          <div className="header-title">
            <Fade triggerOnce={true} cascade bottom>
              <h3 className="about">ABOUT</h3>
              <h3 className="header-title-2">With <span className="yellow-text">decades of experience</span>, we help<br /> brands navigate through the
                <span className="yellow-text"> rapidly<br /> transforming world</span> of work.</h3>
              <h3 className="read-more"><Link to="/about">READ MORE</Link></h3>
            </Fade>
          </div>

        </div>


        <div className="home-1" ref={b3}>
          <Fade triggerOnce={true} cascade bottom >
            <span className="home-1-title">PHILOSOPHY</span>
            <h1 className="home-1-title-1">There is no one</h1>
            <h1 className="home-1-title-2">size fits all solution.</h1>
            {/* <img src={require("../images/home/1-size-fit-all.jpg")} /> */}
            {/* <iframe src="//yiwenl.github.io/Sketches/experiments/comic/dist/index.html"></iframe> */}
            <div id="show-3d" className="mobile-hide">
              <p className="Message" id="message">Loading Assets ..</p>
              <div className="Loading-Bar" id="loading-bar"></div>
            </div>
            <div id="no-one-slider" className="desktop-hide">
              <Slider ref={c => (noone_slider = c)} {...noone_settings}>
                <div className="noone-slider-item">
                  <Fade triggerOnce={true} cascade bottom >
                    <img src={require("../images/home/No-one-size-1.jpg")} alt="No one size fits all" />
                  </Fade>
                </div>
                <div className="noone-slider-item">
                  <Fade triggerOnce={true} cascade bottom >
                    <img src={require("../images/home/No-one-size-2.jpg")} alt="No one size fits all" />
                  </Fade>
                </div>
                <div className="noone-slider-item">
                  <Fade triggerOnce={true} cascade bottom >
                    <img src={require("../images/home/No-one-size-3.jpg")} alt="No one size fits all" />
                  </Fade>
                </div>
                <div className="noone-slider-item">
                  <Fade triggerOnce={true} cascade bottom >
                    <img src={require("../images/home/No-one-size-4.jpg")} alt="No one size fits all" />
                  </Fade>
                </div>
              </Slider>
            </div>
            <div className="home-1-content">
              <p>From private offices to retail spaces,<br /> ID21 shapes lifestyles by creating the<br /> ideal space you need.</p>
              <div className="why-us">
                <hr className="menu-1-line" />
                <Link to="/why-us">WHY US</Link>
              </div>
            </div>
          </Fade>
        </div>



        <div className="home-2" ref={b4}>

          <div className="bg-img" style={{ backgroundImage: `url(${require("../images/home/background-3.jpg")})` }}>

            <div id='bg-overlay' />
            <div className="home-2-title">
              <Fade triggerOnce={true} cascade bottom >
                <h3 className="header">PROJECTS</h3>
                <h3 className="home-2-title-2">Our multiple <br /><span className="sub-title-2">transformations in a glance.</span></h3>
                <div className="view">
                  <div className="line"></div>
                  <span className="view-all"><Link to="/work">VIEW ALL</Link></span>
                </div>
              </Fade>
            </div>

          </div>


          <div className="banner desktop-hide mobile-projects">
            {(projects && Array.isArray(projects)) ?
              <div>

                <Slider ref={c => (project_slider2 = c)} {...projects_settings}>
                  {projects.map((item, index) => (
                    <Link to={"/work/" + item.slug} key={index}>
                      <div className="project-small">
                        <div className="project-small-inner">
                          <Fade triggerOnce={true} cascade bottom >
                            <img src={item.acf && item.acf.image} width={`100%`} alt={item.title && item.title.rendered} />
                            <div className="overlay-bg">
                              <h2 dangerouslySetInnerHTML={{ __html: item.title.rendered }}></h2>
                              <p id="type"> {item.acf.industry}</p>
                            </div>
                          </Fade>
                        </div>
                      </div>
                    </Link>
                  ))}
                </Slider>
                <div className="prev-next">
                  <div className="btn-left">
                    <div className="line"></div>
                    <button className="button btn-prev" onClick={pPrev2}>PREV</button>
                  </div>
                  <div className="btn-right">
                    <button className="button btn-next" onClick={pNext2}>NEXT</button>
                    <div className="line line-next"></div>
                  </div>
                </div>
              </div>
              :
              <div id="loader">
                <div className="lds-facebook"><div></div><div></div><div></div></div>
              </div>
            }
          </div>

        </div>
        <div className="home-projects mobile-hide">

          {(projects1 && Array.isArray(projects1)) ?
            <div className="banner-projects banner-projects-std ">
              <Slider ref={c => (project1_ref = c)} {...projects_settings}>
                {projects1.map((item, index) => (
                  <Link to={"/work/" + item.slug} key={index}>
                    <div className="project-large">
                      <div className="project-large-inner">
                        <Fade triggerOnce={true} cascade bottom >
                          <img src={item.acf && item.acf.image} width={`100%`} alt={item.title && item.title.rendered} />
                          <div className="overlay-bg">

                            <h2 dangerouslySetInnerHTML={{ __html: item.title.rendered }}></h2>
                            <p id="type"> {item.acf.industry}</p>
                          </div>
                        </Fade>
                      </div>
                    </div>
                  </Link>
                ))}
              </Slider>
            </div>
            :
            <div>-</div>
          }


          {(projects2 && Array.isArray(projects2)) ?
            <div className="banner-projects banner-projects-std ">
              <Slider ref={c => (project2_ref = c)} {...projects_settings}>
                {projects2.map((item, index) => (
                  <Link to={"/work/" + item.slug} key={index}>
                    <div className="project-large">
                      <div className="project-large-inner">
                        <Fade triggerOnce={true} cascade bottom >
                          <img src={item.acf && item.acf.image} width={`100%`} alt={item.title && item.title.rendered} />
                          <div className="overlay-bg">

                            <h2 dangerouslySetInnerHTML={{ __html: item.title.rendered }}></h2>
                            <p id="type"> {item.acf.industry}</p>
                          </div>
                        </Fade>
                      </div>
                    </div>
                  </Link>
                ))}
              </Slider>
            </div>
            :
            <div>-</div>
          }


          {(projects3 && Array.isArray(projects3)) ?
            <div className="banner-projects banner-projects-std ">
              <Slider ref={c => (project3_ref = c)} {...projects_settings}>
                {projects3.map((item, index) => (
                  <Link to={"/work/" + item.slug} key={index}>
                    <div className="project-large">
                      <div className="project-large-inner">
                        <Fade triggerOnce={true} cascade bottom >
                          <img src={item.acf && item.acf.image} width={`100%`} alt={item.title && item.title.rendered} />
                          <div className="overlay-bg">

                            <h2 dangerouslySetInnerHTML={{ __html: item.title.rendered }}></h2>
                            <p id="type"> {item.acf.industry}</p>
                          </div>
                        </Fade>
                      </div>
                    </div>
                  </Link>
                ))}
              </Slider>
            </div>
            :
            <div>-</div>
          }


          {(projects4 && Array.isArray(projects4)) ?
            <div className="banner-projects banner-projects-std ">
              <Slider ref={c => (project4_ref = c)} {...projects_settings}>
                {projects4.map((item, index) => (
                  <Link to={"/work/" + item.slug} key={index}>
                    <div className="project-large">
                      <div className="project-large-inner">
                        <Fade triggerOnce={true} cascade bottom >
                          <img src={item.acf && item.acf.image} width={`100%`} alt={item.title && item.title.rendered} />
                          <div className="overlay-bg">

                            <h2 dangerouslySetInnerHTML={{ __html: item.title.rendered }}></h2>
                            <p id="type"> {item.acf.industry}</p>
                          </div>
                        </Fade>
                      </div>
                    </div>
                  </Link>
                ))}
              </Slider>
            </div>
            :
            <div>-</div>
          }


          {(projects5 && Array.isArray(projects5)) ?
            <div className="banner-projects banner-projects-std ">
              <Slider ref={c => (project5_ref = c)} {...projects_settings}>
                {projects4.map((item, index) => (
                  <Link to={"/work/" + item.slug} key={index}>
                    <div className="project-large">
                      <div className="project-large-inner">
                        <Fade triggerOnce={true} cascade bottom >
                          <img src={item.acf && item.acf.image} width={`100%`} alt={item.title && item.title.rendered} />
                          <div className="overlay-bg">

                            <h2 dangerouslySetInnerHTML={{ __html: item.title.rendered }}></h2>
                            <p id="type"> {item.acf.industry}</p>
                          </div>
                        </Fade>
                      </div>
                    </div>
                  </Link>
                ))}
              </Slider>
            </div>
            :
            <div>-</div>
          }


          {(projects6 && Array.isArray(projects6)) ?
            <div className="banner-projects banner-projects-std ">
              <Slider ref={c => (project6_ref = c)} {...projects_settings}>
                {projects6.map((item, index) => (
                  <Link to={"/work/" + item.slug} key={index}>
                    <div className="project-large">
                      <div className="project-large-inner">
                        <Fade triggerOnce={true} cascade bottom >
                          <img src={item.acf && item.acf.image} width={`100%`} alt={item.title && item.title.rendered} />
                          <div className="overlay-bg">

                            <h2 dangerouslySetInnerHTML={{ __html: item.title.rendered }}></h2>
                            <p id="type"> {item.acf.industry}</p>
                          </div>
                        </Fade>
                      </div>
                    </div>
                  </Link>
                ))}
              </Slider>
            </div>
            :
            <div>-</div>
          }

          {/* <div className="banner-projects banner-projects-large ">
            {(projectsLarge && Array.isArray(projectsLarge)) ?
              <Slider ref={c => (project_sliderLarge = c)} {...projects_settings}>
                {projectsLarge.map((item, index) => (
                  <Link to={"/work/" + item.slug} key={index}>
                    <div className="project-large">
                      <div className="project-large-inner">
                        <Fade triggerOnce={true} cascade bottom >
                          <img src={item.acf && item.acf.image} width={`100%`} alt={item.title && item.title.rendered} />
                          <div className="overlay-bg">

                            <h2 dangerouslySetInnerHTML={{ __html: item.title.rendered }}></h2>
                            <p id="type"> {item.acf.industry}</p>
                          </div>
                        </Fade>
                      </div>
                    </div>
                  </Link>
                ))}
              </Slider>
              :
              <div id="loader">
                <div className="lds-facebook"><div></div><div></div><div></div></div>
              </div>
            }
          </div>
          <div className="banner-projects banner-projects-small ">
            {(projectsSmall && Array.isArray(projectsSmall)) ?

              <Slider ref={c => (project_sliderSmall = c)} {...projects_settings}>

                {projectsSmall.map((item, index) => (
                  <Link to={"/work/" + item.slug} key={index}>
                    <div className="project-small" >
                      <div className="project-small-inner">
                        <img src={item.acf && item.acf.image} width={`100%`} alt={item.title && item.title.rendered} />
                        <div className="overlay-bg">
                          <h2 dangerouslySetInnerHTML={{ __html: item.title.rendered }}></h2>
                          <p id="type"> {item.acf.industry}</p>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </Slider>
              :
              <div id="loader">
                <div className="lds-facebook"><div></div><div></div><div></div></div>
              </div>

            }
          </div> */}
          {/* <div className="home-2-banner-1">
                <div className="home-2-banner-1-img-1">
                  <img src={require("../images/home/one-changi.jpg")} width={`100%`} alt="One @ Changi City" />
                  <h2>One@Changi City</h2>
                </div>
                <div className="home-2-banner-1-img-2">
                  <img src={require("../images/home/jas.jpg")} width={`100%`} alt="JAS Worldwide" />
                  <div className="home-2-banner-1-img-2-title">
                    <h2>JAS Worldwide</h2>
                    <span>Lorem ipsum dolor sit amet consectetuer</span>
                  </div>
                </div>
              </div>
              <div className="home-2-banner-1 home-2-banner-2">
                <div className="home-2-banner-1-img-1">
                  <img src={require("../images/home/trip-advisor.jpg")} width={`100%`} alt="Trip Advisor" />
                  <h2>Trip Advisor</h2>
                </div>
                <div className="home-2-banner-1-img-2">
                  <img src={require("../images/home/bordier.jpg")} width={`100%`} alt="Bordier et Cie @ CapitaGreen" />
                  <h2>Bordier et Cie @ CapitaG...</h2>
                </div>
              </div> */}

          {/* <div>
                    <div className="home-2-banner-1">
                      <div className="home-2-banner-1-img-1">
                        <img src={require("../images/home/one-changi.jpg")} width={`100%`} alt="One @ Changi City" />
                        <h2>One@Changi City</h2>
                      </div>
                      <div className="home-2-banner-1-img-2">
                        <img src={require("../images/home/jas.jpg")} width={`100%`} alt="JAS Worldwide" />
                        <div className="home-2-banner-1-img-2-title">
                          <h2>JAS Worldwide</h2>
                          <span>Lorem ipsum dolor sit amet consectetuer</span>
                        </div>
                      </div>
                    </div>
                    <div className="home-2-banner-1 home-2-banner-2">
                      <div className="home-2-banner-1-img-1">
                        <img src={require("../images/home/trip-advisor.jpg")} width={`100%`} alt="Trip Advisor" />
                        <h2>Trip Advisor</h2>
                      </div>
                      <div className="home-2-banner-1-img-2">
                        <img src={require("../images/home/bordier.jpg")} width={`100%`} alt="Bordier et Cie @ CapitaGreen" />
                        <h2>Bordier et Cie @ CapitaG...</h2>
                      </div>
                    </div>
                  </div> */}

          <div className="prev-next">
            <div className="btn-left">
              <div className="line"></div>
              <button className="button btn-prev" onClick={pPrev}>PREV</button>
            </div>
            <div className="btn-right">
              <button className="button btn-next" onClick={pNext}>NEXT</button>
              <div className="line line-next"></div>
            </div>
          </div>
        </div>

        {/* <div className="banner">
            <div className="home-2-banner-1">
            <div className="home-2-banner-1-img-1">
            <img src={require("../images/home/one-changi.jpg")} width={`100%`} />
            <h2>One@Changi City</h2>
          </div>
          <div className="home-2-banner-1-img-2">
          <img src={require("../images/home/jas.jpg")} width={`100%`} />
          <div className="home-2-banner-1-img-2-title">
          <h2>JAS Worldwide</h2>
          <span>Lorem ipsum dolor sit amet consectetuer</span>
        </div>
      </div>
    </div>
    <div className="home-2-banner-2">
    <div className="home-2-banner-2-img-1">
    <img src={require("../images/home/trip-advisor.jpg")} width={`100%`} />
    <h2>Trip Advisor</h2>
  </div>
  <div className="home-2-banner-2-img-2">
  <img src={require("../images/home/bordier.jpg")} width={`100%`} />
  <h2>Bordier et Cie @ CapitaG...</h2>
</div>
</div>
</div> */}


        <div className="home-3" ref={b5}>


          <div className="news-blog">
            <div className="row">
              <Fade triggerOnce={true} cascade bottom >
                <h3>NEWS & BLOG</h3>
                <h1>Here's what's trending.</h1>
              </Fade>
            </div>

            <div className="home-4">
              {(blogs && Array.isArray(blogs)) ?
                <div id="blogs-1" className="carousel">
                  <Slider {...settings}>

                    {blogs.map((item, index) => (
                      <Link to={`/blog/${item.slug}`} key={index}>
                        <div className="blog-item">
                          <Fade triggerOnce={true} cascade bottom >
                            <img src={item.acf.image} width="100%" alt={item.title.rendered} />
                          </Fade>
                          <div className="p20">
                            <Fade triggerOnce={true} cascade bottom >
                              <h4 className="type" >{item.acf.type}</h4>
                              <h2 dangerouslySetInnerHTML={{ __html: item.title.rendered }}></h2>
                              <p>{item.acf.snippet ? item.acf.snippet : 'Loream ipsum dolor sil amet consecleluer adipiscing clil, ID21 collected top honours, sed ...'}...</p>
                              <h2 id='date' >{moment(item.date).format('DD MMM YYYY')}</h2>
                            </Fade>
                          </div>

                        </div>
                      </Link>
                    ))}
                  </Slider>
                </div>
                :
                <div id="loader">
                  <div className="lds-facebook"><div></div><div></div><div></div></div>
                </div>

              }
            </div>
          </div>

        </div>

        <div className="home-5" ref={b6}>
          <Fade triggerOnce={true} cascade bottom >

            <div className="home-5-title">
              <h2>ACCOLADES</h2>
              <h1>High standards are our way of life.</h1>
            </div>
          </Fade>
          {awards ?
            <div id="blogs-1" className="carousel">
              {renderAwards()}
            </div>
            :
            <div id="loader">
              <div className="lds-facebook"><div></div><div></div><div></div></div>
            </div>
          }


        </div>
      </div>
    </div >
  )
}

export default Page
