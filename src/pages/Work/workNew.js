import React, { useRef, useEffect, useState } from 'react'
import '../../styles/blog.css'
import axios from 'axios'
// import moment, { updateLocale } from 'moment'
import { Fade } from 'react-awesome-reveal'
import Slider from "react-slick";
import { Link, withRouter } from "react-router-dom";
import ReactPlayer from 'react-player'
import {Parallax, ParallaxLayer} from 'react-spring/renderprops-addons'

const Page = (props) => {

  const [work, setWork] = useState(null)
  const [upNext, setUpNext] = useState(null)
  const [isShown, setIsShown] = useState(false);
  const [typeIndex, setIndex] = useState(false);
  const paraRef = useRef()

  useEffect(() => {
    onStart()
    window.scrollTo(0, 0)

  }, []);




  const onStart = async () => {
    props.setLoading(true)
    let work_res = await axios.get(`http://id21.wunderfauks.com/wp/wp-json/wp/v2/work?slug=${props.match.params.slug}`)
    let work = work_res.data

    //console.log(work_res)

    setWork(work[0])
    //props.setLoading(false)
    // setTimeout(() => {

    // }, 6000)

    // let up_next_res = await axios.get(`http://id21.wunderfauks.com/wp/wp-json/wp/v2/work`)
    // let items = up_next_res.data
    // let newItems = [];
    // for (var i = 0; i < 3; i++) {
    //   var idx = Math.floor(Math.random() * items.length);
    //   newItems.push(items[idx]);
    //   items.splice(idx, 1);
    // }
    //if ("related_id" in work[0]) 
    {
      let nextIds = work[0].related_ids
      if (nextIds)
      {
        let nextString = '';
        let nextArr = nextIds.split(',');
        nextArr.map((item, index) => (
          nextString += "include[]=" + item + "&"
        ))
        nextString = nextString.slice(0, -1)
        
        let up_next_res = await axios.get(`http://id21.wunderfauks.com/wp/wp-json/wp/v2/work/?${nextString}`)
        let items = up_next_res.data
  
        setUpNext(items)
      }
      
    }


  }

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block" }}
        onClick={onClick}
      >NEXT</div>
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block"}}
        onClick={onClick}
      >PREV</div>
    );
  }

  var settings = {
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "20%",
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    prevArrow: <SamplePrevArrow/>,
    nextArrow: <SampleNextArrow/>,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: .9,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          centerPadding: "20px"
        }
      },
    ],
    appendDots: (dots, i) => {
      return (
        <div id="banner-right-bottom">
          <ul style={{}}> {dots} </ul>
          <div id="brb-1" >
            {dots && dots.map((item, index) => (
              <div key={index}>
                {item.props.className === "slick-active" &&
                  <span>{index + 1}</span>
                }
              </div>
            ))}
            <div id="brb-3">

              {dots && dots.map((item, index) => (
                <div key={index} className="homeBannerBars">
                  {item.props.className === "slick-active" &&
                    <span style={{ width: ((index + 1) / dots.length) * 100 + '%' }}></span>
                  }
                </div>
              ))}

            </div>
            <span >{dots.length}</span>
          </div>
        </div>
      )
      //   return (
      //     <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingRight: 80, paddingLeft: 80 }}>
      //       <ul style={{}}> {dots} </ul>
      //       <div style={{ marginRight: 50, display: 'flex', alignItems: 'center' }} >
      //         {dots && dots.map((item, index) => (
      //           <div>
      //             {item.props.className == "slick-active" &&
      //             <h1>{index + 1}</h1>
      //           }
      //         </div>
      //       ))}
      //       <div style={{ width: 13, backgroundColor: '#828486', height: 4, margin: 10 }} />
      //       <h1>{dots.length}</h1>
      //     </div>
      //   </div>
      // )
    },
    customPaging: i => (
      <div style={{}} >
        <div
          style={{
            width: "3px",
            height: "9px",
            backgroundColor: "#828486",
            borderRadius: 15,
            marginRight: 2
          }}
        >

        </div>
      </div>
    )
  };

  const showType = (bol, index) => {

    setIsShown(bol)
    setIndex(index)
  }

  const backToAll = () => {
    props.history.goBack()
  }

  return (

    <div id="work-detail" className="pages">
      <div className='page-banner' >
        <div className="header-bg" style={{ backgroundImage: `url(${require("../../images/expertise/image.jpg")})` }} >
          <div className="overlay" />
        </div>
        <div className="header-cont" >
          <Link to="/work" id="bta">BACK TO ALL</Link>
          <h1 className="header-text">{work && work.title.rendered}</h1>
          <div className='ind' >
            <div className='_ind' >
              <div id='line' />
              <p id='industry' >{work && work.acf.industry}</p>
            </div>
          </div>
        </div>
      </div>

      {work &&
        <div id="work-1">
          <Fade triggerOnce={true} bottom>
            <img src={work.acf.image} alt={work.title.rendered} />
          </Fade>
        </div>
      }


      {work ?
        <div id="work-2">
          <Parallax ref={ref => paraRef} pages={work.acf.work_content_items.length+1}>
          {work.acf.work_content_items && work.acf.work_content_items.map((item, index) => (
            <div style={{ width: '100%' }} key={index}>
              {item.acf_fc_layout === "image_full_image_full" &&
                  
                  <div className="imagefull_imagefull" >
                    <ParallaxLayer offset={index} speed={.7} style={{ pointerEvents: 'none', width: '50%' }}>
                    <img style={{ marginRight: 10, marginTop: 90 }} src={item.image_1} alt={work.title.rendered} />
                    </ParallaxLayer>
                    <ParallaxLayer offset={index} speed={.8} style={{ pointerEvents: 'none', width: '50%', marginLeft: '50%' }}>
                    <img style={{ marginLeft: 10 }} src={item.image_2} alt={work.title.rendered} />
                    </ParallaxLayer>
                  </div>
                  
              }

              {item.acf_fc_layout === "simple_text_" &&
                  <ParallaxLayer offset={index} speed={.6} style={{ pointerEvents: 'none' }}>
                  <div className="simple-text" >
                    <h1 >{item.title}</h1>
                    <p >{item.detail}</p>
                  </div>
                  </ParallaxLayer>
              }

              {item.acf_fc_layout === "simple_image" && item.image &&
                  <ParallaxLayer offset={index} speed={.5} style={{ pointerEvents: 'none',width:'80%' }}>
                  
                    <img src={item.image} alt={work.title.rendered} />
                  
                  </ParallaxLayer>
              }

              {item.acf_fc_layout === "image_full_text" &&
                
                   
                  <div className="image-fulltext" >
                    {(item.image &&
                    <ParallaxLayer offset={index} speed={-.3} style={{ pointerEvents: 'none',width: '48%' }} className="img">
                        
                        <img style={{ marginTop: 90 }} src={item.image} alt={work.title.rendered} />
                        <hr id='block-line' />
                       
                      </ParallaxLayer>
                    )}
                    <ParallaxLayer offset={index} speed={.5} style={{ pointerEvents: 'none', width: '48%', marginLeft: '52%' }}>
                      
                        <h1 className='light block-title' >{item.title}</h1>
                        <p className='light'>{item.detail}</p>
                      
                    
                    </ParallaxLayer>
                  </div>
                
              }

              {item.acf_fc_layout === "text_image_full" &&
                
                  
                  <div className="text-imagefull" >
                  <ParallaxLayer offset={index} speed={-.2} style={{ pointerEvents: 'none',width: '48%' }} >
                        <h1 className='light block-title'>{item.title}</h1>
                        <p className='light'>{item.detail}</p>
                    </ParallaxLayer>
                    {(item.right_image &&
                       <ParallaxLayer offset={index} speed={.4} style={{ pointerEvents: 'none',width: '48%', marginLeft: '52%' }}>
                        <img style={{ marginTop: 90 }} src={item.right_image} alt={work.title.rendered} />
                        <hr id='block-line' />
                        </ParallaxLayer>
                    )}
                  </div>
                
              }

              {item.acf_fc_layout === "text_image_half" &&
                
                  <div className="text-imagehalf" >
                  <ParallaxLayer offset={index} speed={.1} style={{ pointerEvents: 'none',width: '48%' }} >
                      <div style={{ width: '80%' }} >
                        <h1 className='light block-title'>{item.title}</h1>
                        <p className='light'>{item.detail}</p>
                      </div>
                    </ParallaxLayer>
                    {(item.image &&
                     <ParallaxLayer offset={index} speed={.7} style={{ pointerEvents: 'none',width: '48%', marginLeft:'52%' }}>
                        <img src={item.image} alt={work.title.rendered} />
                        <hr id='block-line' />
                      </ParallaxLayer>
                    )}
                  </div>
                
              }

              {item.acf_fc_layout === "image_half_text" &&
              
                  <div className="image-helf-text" >
                    {(item.item &&
                       <ParallaxLayer offset={index} speed={.1} style={{ pointerEvents: 'none',width: '48%' }} >
                        <img src={item.image} />
                        <hr id='block-line' />
                      </ParallaxLayer>
                    )}
                    <ParallaxLayer offset={index} speed={.7} style={{ pointerEvents: 'none',width: '48%', marginLeft:'52%' }} >
                      <div style={{ width: '80%' }} >
                        <h1 className='light block-title'>{item.title}</h1>
                        <p className='light'>{item.detail}</p>
                      </div>
                    </ParallaxLayer>
                  </div>
                
              }

              {item.acf_fc_layout === "image_full_image_half" &&
                
                  <div className="imagefull-imagehalf">
                    {(item.image_1 &&
                      <ParallaxLayer offset={index} speed={.1} style={{ pointerEvents: 'none',width: '48%' }} >
                        <img src={item.image_1} alt={work.title.rendered} />
                        </ParallaxLayer>
                    )}
                    {(item.image_2 &&
                     <ParallaxLayer offset={index} speed={.8} style={{ pointerEvents: 'none',width: '48%',marginLeft: '52%' }} >
                        <img src={item.image_2} alt={work.title.rendered} />
                      </ParallaxLayer>
                    )}
                  </div>
                
              }
              {item.acf_fc_layout === "image_half_image_full" &&
             
                  <div className="imagefull-imagehalf" >
                    {(item.image_1 &&
                      <ParallaxLayer offset={index} speed={.2} style={{ pointerEvents: 'none',width: '48%' }} >
                        <img src={item.image_1} alt={work.title.rendered} />
                      </ParallaxLayer>
                    )}
                    {(item.image_2 &&
                      <ParallaxLayer offset={index} speed={.65} style={{ pointerEvents: 'none',width: '48%',marginLeft: '52%' }} >
                        <img src={item.image_2} alt={work.title.rendered} />
                        </ParallaxLayer>
                    )}
                  </div>
             
              }
              {item.acf_fc_layout === "carousel" &&
                <ParallaxLayer offset={index} speed={0} style={{ pointerEvents: 'none',width: '100%' }} >
                  <div className="carousel-container">
                    <div className="carousel" >
                      <Slider {...settings}>
                        {item.images.map((img, i) => (
                          <div key={i} >
                            {(img.image &&
                              <img style={{ height: 550, objectFit: 'contain' }} src={img.image} alt={work.title.rendered} />
                            )}
                            <div id="over-lay" />
                          </div>
                        ))}
                      </Slider>
                    </div>
                  </div>
                  </ParallaxLayer>
              }
              {item.acf_fc_layout === "hear_from_them" &&
              <ParallaxLayer offset={index} speed={0} style={{ pointerEvents: 'none',width: '100%' }} >
                <div id='h-f' >
                  <div className="hear-from-bg" style={{ backgroundImage: `url(${require("../../images/hear-from.jpg")})` }} >
                    <div className='overlay' />
                    <div id='hear-from' style={{ paddingRight: item.video_link || item.video ? 0 : 130 }}  >
                      <Fade triggerOnce={true} bottom>
                        <p id='title' >{item.title}</p>
                      </Fade>
                      <div id='_hear-from' >
                        <Fade triggerOnce={true} cascade bottom delay={500}>
                          <div id='_hear-body' >
                            {(item.video_link || item.video) &&
                              <div id='body-1'  >
                                <p id='subtitle' >{item.subtitle}</p>
                              </div>
                            }
                            {item.video_link || item.video ?
                              <div id='body-2' >
                                <p id='detail' >{item.detail}</p>
                              </div>
                              :

                              <div id='non-video-body-2' >
                                <p id='non-video-detail' >{item.detail}</p>
                                <p>{item.subtitle}</p>
                              </div>

                            }

                          </div>
                        </Fade>
                      </div>
                    </div>
                  </div>

                  {(item.video_link || item.video) &&
                    <div id='video' >
                      <Fade triggerOnce={true} cascade bottom delay={800}>
                        <div id='v1' >
                          <p id='watch' >WATCH VIDEO</p>
                          <div id='watch-line' />
                        </div>
                        {item.video_link ?
                          <div className="video-wrapper">
                            <div id='v2' >
                              {/* <iframe width="560" height="315" src={item.video_link} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}
                              <ReactPlayer width="100%" height="100%" url={item.video_link} />
                            </div>
                          </div>
                          :
                          <div className="video-wrapper">
                            <div id='v2' >
                              <video width="100%" height="100%" controls >
                                <source src={item.video} type="video/mp4" />
                              </video>
                            </div>
                          </div>
                        }
                      </Fade>
                    </div>
                  }
                </div>
                </ParallaxLayer>
              }

              {index == work.acf.work_content_items.length-1 && 
              upNext &&
              <ParallaxLayer offset={index+1} speed={0} style={{ pointerEvents: 'none',width: '100%' }} >
                <div id='up-next' >
                  <div className='up-next-bar' >
                    <p id='up-next-text' >UP NEXT</p>
                    <p onClick={backToAll} id='back-to-all' >BACK TO ALL</p>
                  </div>
      
                  {upNext.map((item, index) => (
                    <Link to={`/work/${item.slug}`} className="link-work-item" key={index}>
      
                      <div className='grid-item'
                        onMouseEnter={() => showType(true, index)}
                        onMouseLeave={() => showType(false, index)}  >
                        <div className="p10" >
                          <div className="work-inner-cont">
                            {(item.acf.image &&
                              <img src={item.acf.image} width="100%" height="auto" alt={item.title.rendered} />
                            )}
                            <div id="over-lay" />
                            <h2 id="title" >{item.title.rendered}</h2>
                            < p id="type"  > {item.acf.industry}</p>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
                </ParallaxLayer>
              }
              
            </div>
          ))}
          </Parallax>
        </div>
        :

        <div id="loader">
          <div className="lds-facebook"><div></div><div></div><div></div></div>
        </div>

      }
      {/* <div id="blog-3">
<div>
<p>PREV</p>
</div>
<div>
<p>NEXT</p>
</div>
</div> */}

     
        

      


    </div >
  )
}



export default withRouter(Page)
