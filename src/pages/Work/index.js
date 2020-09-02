import React, { useEffect, useState } from 'react'
import '../../styles/work.css'
// import Truncate from 'react-truncate';
import axios from 'axios'
// import moment from 'moment'
import { Link } from "react-router-dom";
import Select from 'react-select'
import { Fade } from 'react-awesome-reveal'
import InfiniteScroll from 'react-infinite-scroller';

const options = [
    { value: 'all', label: 'All Industries' },
    { value: 'interior-design', label: 'Interior Design' },
    { value: 'project-delivery', label: 'Project Delivery' },
    { value: 'workplace-understanding', label: 'Workplace Understanding' }
]



const Page = (props) => {


    const [isShown, setIsShown] = useState(false);
    const [typeIndex, setIndex] = useState(false);

    const [works, setWorks] = useState(null)
    const [hasMoreItems, setHasMoreItems] = useState(true)
    const [worksFilterCat, setWorksFilterCat] = useState(null)
    const [worksFilterAward, setWorksFilterAward] = useState(false)

    const [page, setPage] = useState(1)
    const [end, setEnd] = useState(false)
    const [styleType, setStyle] = useState('grid-item')

    useEffect(() => {
        //onStart()
        window.scrollTo(0, 0)
    }, []);




    const onStart = async () => {

        // let blogs_res = await axios.get(`http://id21.wunderfauks.com/wp/wp-json/wp/v2/work?page=${page}&per_page=6`)
        // let blogs = blogs_res.data
        // console.log(blogs_res)
        // // setPage(page + 1)
        // setBlogs(blogs)

    }

    const toList = (d) => {
        setStyle(d)
    }

    const showType = (bol, index) => {

        setIsShown(bol)
        setIndex(index)
    }

    const loadItems = () => {
        //http://id21.wunderfauks.com/wp/wp-json/wp/v2/work?page=${page}&per_page=6
        axios.get(`http://id21.wunderfauks.com/wp/wp-json/wp/v2/work?_fields=slug,title,acf.image,acf.industry,acf.is_featured&page=${page}&per_page=6`)
            .then((response) => {
                console.log(page)
                console.log(response.data);
                if (response.data) {

                    if (page == 1) {
                        setWorks(response.data);
                    }
                    else {
                        let _works = response.data;
                        setWorks([...works, ..._works])
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

    const loader = 
    <React.Fragment><div id="loader"><div className="lds-facebook"><div></div><div></div><div></div></div></div></React.Fragment>
    

    const filterWorkAward = () => {
        // console.log(worksFilterAward)
        setWorksFilterAward(!worksFilterAward);
    }

    const filterWorkCat = (selectedOption) => {
        // console.log(selectedOption)
        setWorksFilterCat(selectedOption.value);
    }

    function renderWorks() {
        var filteredWorks = works;
        if (worksFilterCat != null && worksFilterCat !== "all") {
            filteredWorks = works.filter((tempWorkItem, index) => (tempWorkItem.acf && tempWorkItem.acf.industry == worksFilterCat))
        }
        if (worksFilterAward) {
            filteredWorks = filteredWorks.filter((tempWorkItem, index) => (tempWorkItem.acf && tempWorkItem.acf.is_featured === true))
        }

        if (filteredWorks && filteredWorks.length === 0) {
            return (
                <div className="nif">
                    Please select another category..
                </div>
            )
        }
        
        return (
            works && filteredWorks.map((item, index) => (
                <Link to={`/work/${item.slug}`} className="link-work-item" key={index}>

                    <div className={styleType}
                        onMouseEnter={() => showType(true, index)}
                        onMouseLeave={() => showType(false, index)}  >
                        <div className="p10" >
                            <div className="work-inner-cont">
                                {(item.acf &&
                                    <img src={item.acf.image} width="100%" height="auto" alt={item.title.rendered} />
                                )}
                                <div id="over-lay" />
                                {(item.title &&
                                    <h2 id="title" dangerouslySetInnerHTML={{ __html: item.title.rendered }}></h2>
                                )}
                                {(item.acf &&
                                    < p id="type"  > {item.acf.industry}</p>
                                )}
                            </div>
                        </div>
                    </div>
                </Link>
            ))
        )
    }


    return (


        <div id="work" className="pages">
            <div className='page-banner' >
                <div className="header-bg" style={{ backgroundImage: `url(${require("../../images/works/ourworks-bg.jpg")})` }} />
                <div className="header-cont">
                    <Fade triggerOnce={true} cascade bottom >
                        <h1 className="header-text">
                            Inspired by innovation, our designs <br /> transform spaces to <span className="font-yellow" >suit your every need</span>.
                    </h1>
                        <h3 className="header-subtitle"></h3>
                    </Fade>
                </div>
            </div>

            <Fade triggerOnce={true} delay={300} cascade bottom>
                <div className="work-wrapper">
                    <div className="works-1-pad">
                        <div className="works-filter-lbl" >
                            <h2 >FILTER PROJECTS</h2>
                        </div>
                        <div id="bar">
                            <div>
                                <Select classNamePrefix="idSelect" isSearchable={false} placeholder="Industries" options={options}
                                    onChange={filterWorkCat}
                                    theme={theme => ({
                                        ...theme,
                                        border: "#858789",
                                        borderRadius: 0,
                                        colors: {
                                            ...theme.colors,
                                            primary25: '#ffc300',
                                            primary: 'black',
                                        },
                                    })}
                                />
                            </div>
                            <div className="bar-inner">
                                <div id='award' >
                                    <label className="label-cb">
                                        <input type="checkbox" className="award-check" onChange={filterWorkAward} />
                                        <h2 >AWARD-WINNING</h2>
                                    </label>
                                </div>
                                <div id="view-as" >
                                    <div onClick={() => toList("grid-item")} id="grid" >
                                        {styleType === "grid-item" ?
                                            <img src={require(`../../images/icons/block-highlight.png`)} />
                                            :
                                            <img src={require(`../../images/icons/block.png`)} />
                                        }
                                    </div>
                                    <div onClick={() => toList("list-item")} id="list" >
                                        {styleType === "list-item" ?
                                            <img src={require(`../../images/icons/list-highlight.png`)} />
                                            :
                                            <img src={require(`../../images/icons/list.png`)} />
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="works-1" >
                        <InfiniteScroll
                            pageStart={0}
                            initialLoad={false}
                            loadMore={loadItems}
                            hasMore={hasMoreItems}
                            loader={loader}>
                            {renderWorks()}
                        </InfiniteScroll>
                    </div>
                </div>


            </Fade>
        </div >

    )
}

export default Page
