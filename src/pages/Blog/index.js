import React, { useEffect, useState } from 'react'
import '../../styles/blog.css'
// import Truncate from 'react-truncate';
import axios from 'axios'
import moment from 'moment'
import { Link } from "react-router-dom";
import { Fade } from 'react-awesome-reveal'
// import Select from 'react-select'
import TextTruncate from 'react-text-truncate';
import InfiniteScroll from 'react-infinite-scroller';
// const options = [
//     { value: 'latest-date', label: 'LATEST DATE' },

// ]

const Page = (props) => {

    const [blogs, setBlogs] = useState(null)
    const [page, setPage] = useState(1)
    const [end, setEnd] = useState(false)

    const [hasMoreItems, setHasMoreItems] = useState(true)
    const [blogsFilterCat, setBlogsFilterCat] = useState("all")

    useEffect(() => {
        // onStart()
        window.scrollTo(0, 0)
    }, []);
    const onStart = async () => {

        // let blogs_res = await axios.get(`http://id21.wunderfauks.com/wp/wp-json/wp/v2/blog?page=${page}&per_page=6`)
        // let blogs = blogs_res.data
        // console.log(blogs_res)
        // setPage(page + 1)
        // setBlogs(blogs)

    }

    // const loadMore = async () => {
    //     try {
    //         let blogs_res = await axios.get(`http://id21.wunderfauks.com/wp/wp-json/wp/v2/blog?page=${page}&per_page=6`)
    //         let _blogs = blogs_res.data
    //         setPage(page + 1)
    //         console.log(blogs_res)
    //         setBlogs([...blogs, ..._blogs])
    //     } catch (e) {

    //         if (e.response.status === 400) {
    //             setEnd(true)
    //         }
    //     }
    // }

    const loadItems = () => {
        //http://id21.wunderfauks.com/wp/wp-json/wp/v2/work?page=${page}&per_page=6
        axios.get(`http://id21.wunderfauks.com/wp/wp-json/wp/v2/blog?_fields=slug,title,acf.image,acf.date,acf.description,acf.type&page=${page}&per_page=6`)
            .then((response) => {
                // console.log(response)
                if (response.data) {

                    if (page == 1) {
                        setBlogs(response.data);
                    }
                    else {
                        let _blogs = response.data;
                        setBlogs([...blogs, ..._blogs])
                    }


                    setPage(page + 1)

                    if (response.data.length == 0) {
                        setHasMoreItems(false)
                    }
                    else {
                        setHasMoreItems(true)
                    }
                }

            }, (error) => {
                setHasMoreItems(false)
                //console.log(error);
            });
    }

    const loader = <div id="loader"><div className="lds-facebook"><div></div><div></div><div></div></div></div>;

    function handleCatClick(selectedOption) {
        //console.log(selectedOption)
        setBlogsFilterCat(selectedOption);
    }

    function renderBlogs() {
        
        if (blogs) {
            let filteredBlogs = blogs;
            //console.log(blogsFilterCat)
            if (blogsFilterCat != null && blogsFilterCat != "all") {

                filteredBlogs = filteredBlogs.filter((tempBlogItem, index) => (tempBlogItem.acf && tempBlogItem.acf.type == blogsFilterCat))

            }
            if (filteredBlogs && filteredBlogs.length === 0) {
                return (
                    <div className="nif">
                        Please select another category..
                    </div>
                )
            }
            return (
                filteredBlogs && filteredBlogs.map((item, index) => (
                    <Link to={`/blog/${item.slug}`} key={index}>

                        <div className="blog-item"  >
                            <div className="p10" >
                                {(item.acf && item.acf.image &&
                                    <img src={item.acf.image} width="100%" alt={item.title.rendered} />
                                )}
                                <h4 className="type">{item.acf.type}</h4>
                                <h2 className='blog-title' dangerouslySetInnerHTML={{ __html: item.title.rendered }}></h2>
                                <div className="snippet" >
                                    <TextTruncate
                                        line={1}
                                        element="span"
                                        truncateText="…"
                                        text={item.acf.description}
                                    // textTruncateChild={<a href="#">Read on</a>}
                                    />
                                </div>
                                {/* <p>{item.acf.snippet}...</p> */}
                                <h2 id='date' >{moment(item.date).format('DD MMM YYYY')}</h2>
                            </div>
                        </div>


                    </Link>
                ))
            )
        }
    }

    return (

        <div id="blogs" className="pages">
            <div className='page-banner' >
                <div className="header-bg" style={{ backgroundImage: `url(${require("../../images/blog/background.jpg")})` }} />
                <div className="header-cont">
                    <Fade triggerOnce={true} cascade bottom>
                        <h1 className="header-text">
                            Lorem ipsum dolor sit amet, consectrtuer <br /> adipiseing dlit, sed diam nonummy nibh <br /> euismod tincudunt
                        </h1>
                    </Fade>
                </div>
            </div>

            <Fade triggerOnce={true} cascade delay={300} bottom>

                <div id="blogs-1" >
                    <div id='bar' >
                        {/* <div>
                                <Select isSearchable={false} placeholder="LATEST DATE" options={options} />
                            </div> */}
                        <div id='category'>
                            <a data-bbq={blogsFilterCat} className={blogsFilterCat == "all" ? "active" : ""} onClick={() => { handleCatClick("all") }}>All</a>
                            <a className={blogsFilterCat == "news" ? "active" : ""} onClick={() => { handleCatClick("news") }}>News</a>
                            <a className={blogsFilterCat == "blog" ? "active" : ""} onClick={() => { handleCatClick("blog") }}>Blog</a>
                            <a className={blogsFilterCat == "media" ? "active" : ""} onClick={() => { handleCatClick("media") }}>Media</a>
                        </div>
                    </div>
                    <InfiniteScroll
                        pageStart={0}
                        initialLoad={false}
                        loadMore={loadItems}
                        hasMore={hasMoreItems}
                        loader={loader}>
                        {renderBlogs()}
                    </InfiniteScroll>
                </div>

            </Fade>

        </div>
    )
}

export default Page
