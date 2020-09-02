import React, { useEffect, useState } from 'react'
import '../../styles/blog.css'
import axios from 'axios'
import moment from 'moment'
import { Link } from "react-router-dom";
import { Fade } from 'react-awesome-reveal'
import { EmailShareButton, FacebookShareButton, LinkedinShareButton, TwitterShareButton } from "react-share";

const Page = (props) => {

  const [blog, setBlog] = useState(null)
  const [upNext, setUpNext] = useState(null)

  useEffect(() => {
    onStart()
    window.scrollTo(0, 0)
  }, []);

  const onStart = async () => {

    let blog_res = await axios.get(`http://id21.wunderfauks.com/wp/wp-json/wp/v2/blog?slug=${props.match.params.slug}`)
    let blog = blog_res.data
    console.log(blog_res)

    setBlog(blog[0])
    //if ("related_ids" in blog[0]) 
    {
      let nextIds = blog[0].related_ids
      let nextString = '';
      let nextArr = nextIds.split(',');
      nextArr.map((item, index) => (
        nextString += "include[]=" + item + "&"
      ))
      nextString = nextString.slice(0, -1)
      console.log(nextString)
      let up_next_res = await axios.get(`http://id21.wunderfauks.com/wp/wp-json/wp/v2/blog/?${nextString}`)
      let items = up_next_res.data
      // console.log(items)
      // let newItems = [];
      // for (var i = 0; i < 3; i++) {
      //   var idx = Math.floor(Math.random() * items.length);
      //   newItems.push(items[idx]);
      //   items.splice(idx, 1);
      // }

      console.log(items)
      setUpNext(items)
    }
  }

  return (

    <div id="blog" className="pages">
      <div className='page-banner' >

        <div className="header-bg" style={{ backgroundImage: `url(${require("../../images/expertise/image.jpg")})` }} >
          <div className="overlay" />
        </div>

      </div>

      <div className='header-cont' >
        <Fade triggerOnce={true} bottom cascade>
          <Link to="/blog" id="bta">BACK TO ALL</Link>
          <span className="sub-cat">NEWS</span>
          <h1 className="header-text" dangerouslySetInnerHTML={{ __html: blog && blog.title.rendered }}></h1>
        </Fade>
      </div>
      <div id="blog-1">


        <Fade triggerOnce={true} bottom delay={500}>
          <img src={blog && blog.acf.image} width="100%" alt={blog && blog.title.rendered} />
        </Fade>
      </div>

      {blog ?

        <div id="blog-2">
          <div className="inner-left" >
            <Fade triggerOnce={true} cascade bottom>
              <div className="div-1" >
                <p className="p-1" >AUTHOR</p>
                <h2 className="p-2" >{blog.acf.author}</h2>
              </div>
              <div className="div-1" >
                <p className="p-1">DATE</p>
                <h2 className="p-2">{moment(blog.date).format('DD MMM YYYY')}</h2>
              </div>
            </Fade>
          </div>
          <div id="right-div" >
            <Fade triggerOnce={true} cascade bottom delay={500}>
              {(blog && blog.content &&
                <p dangerouslySetInnerHTML={{ __html: blog && blog.content.rendered }}></p>
              )}
              {/* (blog && blog.acf.description && 
              <p dangerouslySetInnerHTML={ { __html: blog && blog.acf.description }}></p>
              ) */}
            </Fade>
            <div className="share-cont mobile-hide">
              <Fade triggerOnce={true} cascade bottom delay={800}>
                <div id='share' >SHARE</div>
              </Fade>
              <div className="share-buttons">
                <Fade triggerOnce={true} cascade bottom delay={1000}>
                  <FacebookShareButton url={window.location.href}>
                    <img src={require("../../images/icons/facebook-grey.jpg")} width="10" alt="facebook" />
                  </FacebookShareButton>
                  <LinkedinShareButton title={blog.title.rendered} url={window.location.href}>
                    <img style={{ marginLeft: 30 }} src={require("../../images/icons/linked-in-grey.jpg")} width="20" alt="linked in" />
                  </LinkedinShareButton>
                  <TwitterShareButton url={window.location.href}>
                    <img style={{ marginLeft: 30 }} src={require("../../images/icons/twitter-grey.jpg")} width="20" alt="twitter" />
                  </TwitterShareButton>
                  <EmailShareButton url={window.location.href}
                    subject={"ID21 - " + blog.title.rendered}
                    body="Just came across this, check it out."
                  >
                    <img style={{ marginLeft: 30 }} src={require("../../images/icons/mail-grey.jpg")} width="20" alt="email" />
                  </EmailShareButton>
                </Fade>
              </div>
            </div>
          </div>
          <div className="share-cont desktop-hide">
            <div id='share' >SHARE</div>
            <div className="share-buttons">
              <Fade triggerOnce={true} cascade bottom delay={1000}>
                <FacebookShareButton url={window.location.href}>
                  <img src={require("../../images/icons/facebook-grey.jpg")} width="10" alt="facebook" />
                </FacebookShareButton>
                <LinkedinShareButton title={blog.title.rendered} url={window.location.href}>
                  <img style={{ marginLeft: 30 }} src={require("../../images/icons/linked-in-grey.jpg")} width="20" alt="linked in" />
                </LinkedinShareButton>
                <TwitterShareButton url={window.location.href}>
                  <img style={{ marginLeft: 30 }} src={require("../../images/icons/twitter-grey.jpg")} width="20" alt="twitter" />
                </TwitterShareButton>
                <EmailShareButton url={window.location.href}
                  subject={"ID21 - " + blog.title.rendered}
                  body="Just came across this, check it out."
                >
                  <img style={{ marginLeft: 30 }} src={require("../../images/icons/mail-grey.jpg")} width="20" alt="email" />
                </EmailShareButton>
              </Fade>
            </div>
          </div>
        </div>


        :

        <div id="loader">
          <div className="lds-facebook"><div></div><div></div><div></div></div>
        </div>

      }



      {/* <div id="blog-3">
        <div>
          <p>
            {(blog && blog.custom_fields.prev_post &&
              <Link to={"/blog/" + blog.custom_fields.prev_post}>PREV</Link>
            )}
          </p>
        </div>
        <div>
          <p>
            {(blog && blog.custom_fields.next_post &&
              <Link to={"/blog/" + blog.custom_fields.next_post}>NEXT</Link>
            )}
          </p>
        </div>
      </div> */}

      <Fade triggerOnce={true} delay={300} cascade bottom>
        {upNext &&
          <div id='up-next' >
            <div className='up-next-bar' >
              <p id='up-next-text' >UP NEXT</p>
              <Link to="/blog" id='back-to-all' >BACK TO ALL</Link>
            </div>

            {upNext.map((item, index) => (
              <Link to={`/blog/${item.slug}`} className="link-work-item" key={index}>

                <div className='grid-item'  >
                  <div className="p10" >
                    <div className="work-inner-cont">
                      {(item.acf.image &&
                        <img src={item.acf.image} width="100%" height="auto" alt={item.title.rendered} />
                      )}
                      <div id="over-lay" />
                      <h2 id="title" >{item.title.rendered}</h2>
                    </div>
                  </div>
                </div>
              </Link>
            ))}

          </div>
        }
      </Fade>



    </div>
  )
}



export default Page
