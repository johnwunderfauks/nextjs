import React, { useEffect } from 'react'
import '../styles/faq.css'
import { Fade } from 'react-awesome-reveal'

const Faq = (props) => {
    useEffect(() => {
        window.scrollTo(0, 0)
        // props.setLoading(false)
        // setTimeout(() => {

        // }, 6000)

    }, []);
    return (
        <div className="pages">
            <div className='page-banner' >
                <div className="header-bg" style={{ backgroundImage: `url(${require("../images/privacy-policy/background.jpg")})` }} />
                <div className="header-cont">
                    <Fade triggerOnce={true} cascade bottom >
                        <h1 className="header-text ">Lorem ipsum dolor sit amet, consectetur<br />adipiscing elit, sed do eiusmod tempor</h1>
                    </Fade>
                </div>
            </div>

            <div className="faq">
                <div className="faq-1">
                    <h3>FREQUENTLY ASKED QUESTIONS</h3>
                    <div className="yellow-line" />
                </div>
                <div className="row">
                    <div className="col">
                        <Fade triggerOnce={true} cascade bottom>
                            <div className="tabs">
                                <div className="tab">
                                    <input type="checkbox" id="chck1" defaultChecked/>
                                    <label className="tab-label" htmlFor="chck1">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</label>
                                    <div className="tab-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla.
                                </div>
                                    <div className="tab-seperator" />
                                </div>
                                <div className="tab">
                                    <input type="checkbox" id="chck2" />
                                    <label className="tab-label" htmlFor="chck2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</label>
                                    <div className="tab-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla.</div>
                                    <div className="tab-seperator" />
                                </div>
                                <div className="tab">
                                    <input type="checkbox" id="chck3" />
                                    <label className="tab-label" htmlFor="chck3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</label>
                                    <div className="tab-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla.</div>
                                    <div className="tab-seperator" />
                                </div>
                                <div className="tab">
                                    <input type="checkbox" id="chck4" />
                                    <label className="tab-label" htmlFor="chck4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</label>
                                    <div className="tab-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla.</div>
                                    <div className="tab-seperator" />
                                </div>
                                <div className="tab">
                                    <input type="checkbox" id="chck5" />
                                    <label className="tab-label" htmlFor="chck5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</label>
                                    <div className="tab-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla.</div>
                                    <div className="tab-seperator" />
                                </div>
                                <div className="tab">
                                    <input type="checkbox" id="chck6" />
                                    <label className="tab-label" htmlFor="chck6">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</label>
                                    <div className="tab-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla.</div>
                                    <div className="tab-seperator" />
                                </div>
                                <div className="tab">
                                    <input type="checkbox" id="chck7" />
                                    <label className="tab-label" htmlFor="chck7">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</label>
                                    <div className="tab-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla.</div>
                                    <div className="tab-seperator" />
                                </div>
                                <div className="tab">
                                    <input type="checkbox" id="chck8" />
                                    <label className="tab-label" htmlFor="chck8">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</label>
                                    <div className="tab-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla.</div>
                                    <div className="tab-seperator" />
                                </div>
                            </div>
                        </Fade>

                    </div>
                </div>
            </div>
        </div>
    )
}
export default Faq
