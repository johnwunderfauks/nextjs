import React, { useEffect, useState } from 'react'
import '../styles/contact.css'
import Select from 'react-select'
import chroma from 'chroma-js';
import { Fade } from 'react-awesome-reveal'
import Dropzone from 'react-dropzone'
// import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";
import GoogleMapReact from 'google-map-react';
import ReCAPTCHA from "react-google-recaptcha";
// const { MarkerWithLabel } = require("react-google-maps/lib/components/addons/MarkerWithLabel");

// const { compose } = require("recompose");
const recaptchaRef = React.createRef();
const options = [
    { value: '1', label: 'I’m a potential client' },
    { value: '2', label: "I’m a job candidate" },
    { value: '3', label: 'I’m from Media' },
    { value: '4', label: 'Others' }
]

const id21MapStyles = [
    {
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#f5f5f5"
            }
        ]
    },
    {
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#616161"
            }
        ]
    },
    {
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "color": "#f5f5f5"
            }
        ]
    },
    {
        "featureType": "administrative.land_parcel",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#bdbdbd"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#eeeeee"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#757575"
            }
        ]
    },
    {
        "featureType": "poi.business",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "poi.business",
        "elementType": "labels.icon",
        "stylers": [
            {
                "saturation": -100
            },
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "poi.business",
        "elementType": "labels.text",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "poi.business",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "poi.park",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#e5e5e5"
            }
        ]
    },
    {
        "featureType": "poi.park",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#9e9e9e"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#ffffff"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#757575"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#dadada"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#616161"
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#9e9e9e"
            }
        ]
    },
    {
        "featureType": "transit.line",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#e5e5e5"
            }
        ]
    },
    {
        "featureType": "transit.station",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#eeeeee"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#c9c9c9"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#9e9e9e"
            }
        ]
    }
];

const defaultProps = {
    center: {
        lat: 1.2931432,
        lng: 103.8323873
    },
    zoom: 17
};

const Marker = (props) => {
    const { color, name, id } = props;
    return (
        <img src={require('../images/logo.png')} style={{"width":"60px"}}/>
    );
};


function renderMarkers(map, maps) {
    // let marker = new maps.Marker({
    //     position: { lat: 1.2931432, lng: 103.8323873 },
    //     map,
    //     title: 'ID21'
    // });
}

const RenderFile = (props) => {
    const { uploadFiles } = props
    const onDeleteFile = (index) => {
        uploadFiles.splice(index, 1)
        props.setUploadFiles([...uploadFiles])
    }
    return (
        <ul>{
            uploadFiles.map((file, index) => (<li key={file.path}>{file.path} - {file.size} bytes<button onClick={() => onDeleteFile(index)} className="remove-btn">X</button></li>))
        }
        </ul>
    )
}

const Warning = (props) => {
    const { error } = props
    if (error)
        return (
            <p className="warning"><img src={require("../images/icons/warning.png")} />This field is required</p>
        )
    else
        return (
            <div></div>
        )
}

const Contact = (props) => {
    const formData = new FormData();
    const [selectValue, setSelectValue] = useState(1)
    const [uploadFiles, setUploadFiles] = useState([])
    const [firstNameError, setFirstNameError] = useState(false)
    const [lastNameError, setLastNameError] = useState(false)
    const [comapnyError, setCompanyError] = useState(false)
    const [phoneError, setPhoneError] = useState(false)
    const [emailError, setEmailError] = useState(false)
    const [messageError, setMessageError] = useState(false)
    const [contacts, setContacts] = useState({ firstName: '', lastName: '', company: '', phone: '', email: '', message: '' })
    const [fileRejections, setFileRejections] = useState([])
    props.setLoading(false)
    useEffect(() => {
        window.scrollTo(0, 0)
        // setTimeout(() => {
        //     props.setLoading(false)
        // }, 6000)
    }, []);

    const handleChange = (option) => {
        setSelectValue(option.value)
    };

    const fileRejectionItems = fileRejections.map(({ file, errors }) => (
        <li key={file.path}>
            {file.path} - {file.size} bytes
            <ul>
                {errors.map(e => (
                    // e.message
                    <li key={e.code}>File type must be an image/pdf/ppt</li>
                ))}
            </ul>
        </li>
    ));



    const fileUpload = (acceptedFiles) => {
        console.log(acceptedFiles)
        acceptedFiles.map(file => {
            setUploadFiles(state => [...state, file])
        })
    }

    function onRecapChange(value) {
        console.log("Captcha value:", value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        var isError = false;
        if (contacts.firstName == '') {
            setFirstNameError(true);
            isError = true;
            //return
        }
        if (contacts.lastName == '') {
            setLastNameError(true);
            isError = true;
            //return
        }
        if (contacts.company == '') {
            setCompanyError(true);
            isError = true;
            //return
        }
        if (contacts.phone == '') {
            setPhoneError(true);
            isError = true;
            //return
        }
        if (contacts.email == '') {
            setEmailError(true);
            isError = true;
            //return
        }
        if (contacts.message == '') {
            setMessageError(true);
            isError = true;
            //return
        }
        if (isError)
            return;
        setFirstNameError(false)
        setLastNameError(false)
        setCompanyError(false)
        setPhoneError(false)
        setEmailError(false)
        setMessageError(false)

        const recaptchaValue = recaptchaRef.current.getValue();

        //console.log(contacts, recaptchaValue, uploadFiles)

        let formData = new FormData()
        formData.append("first_name", contacts.firstName)
        formData.append("last_name", contacts.lastName)
        formData.append("company", contacts.company)
        formData.append("phone", contacts.phone)
        formData.append("email", contacts.email)
        formData.append("msg", contacts.message)
        uploadFiles.forEach((uploadedFile) => {
            formData.append('file[]', uploadedFile);
        });
        console.log(formData)
        fetch("http://id21.wunderfauks.com/wp/wp-admin/admin-ajax.php?action=contact_submit", {
            method: "POST",
            body: formData
        })
            .then(async response => {
                const data = await response.json();

                // check for error response
                if (!response.ok) {
                    // get error message from body or default to response status
                    const error = (data && data.message) || response.status;
                    //return Promise.reject(error);
                    console.log(error)
                }
                else {
                    if (data.success === "1" && data.countFiles == uploadFiles.length) {
                        contacts.firstName = ""
                        contacts.lastName = ""
                        contacts.message = ""
                        contacts.phone = ""
                        contacts.email = ""
                        uploadFiles = []
                        console.log("success")
                    }
                    //console.log(data, uploadFiles.length);
                }

                // this.setState({ postId: data.id })
            })
            .catch(error => {
                // this.setState({ errorMessage: error.toString() });
                console.error('There was an error!', error);
            });
        return
    }

    const dot = (color = '#ccc') => ({
        alignItems: 'center',
        display: 'flex',

        ':before': {
            backgroundColor: color,
            borderRadius: 10,
            content: '" "',
            display: 'block',
            marginRight: 8,
            height: 10,
            width: 10,
        },
    });

    const colourStyles = {
        control: styles => ({ ...styles, backgroundColor: 'white' }),
        option: (styles, { data, isDisabled, isFocused, isSelected }) => {
            const color = chroma("#ffc300");
            return {
                ...styles,
                backgroundColor: isDisabled
                    ? null
                    : isSelected
                        ? data.color
                        : isFocused
                            ? color.alpha(0.1).css()
                            : null,
                color: isDisabled
                    ? '#ccc'
                    : isSelected
                        ? chroma.contrast(color, 'white') > 2
                            ? 'white'
                            : 'black'
                        : data.color,
                cursor: isDisabled ? 'not-allowed' : 'default',

                ':active': {
                    ...styles[':active'],
                    backgroundColor: !isDisabled && (isSelected ? "#ffc300" : color.alpha(0.8).css()),
                },
            };
        },
        input: styles => ({ ...styles }),
        placeholder: styles => ({ ...styles }),
        singleValue: (styles, { data }) => ({ ...styles }),
    };

    return (
        <div className="pages" id="contact">
            <div className='page-banner' >
                <div className="header-bg" style={{ backgroundImage: `url(${require("../images/privacy-policy/background.jpg")})` }} />
                <div className="header-cont">
                    <Fade triggerOnce={true} cascade bottom >
                        <h1 className="header-text">We believe we can help every<br />
                    individual work within <span className="yellow-text">agile,<br />balanced and inspiring environments</span>.</h1>
                    </Fade>
                </div>
            </div>

            <Fade triggerOnce={true} cascade bottom>
                <div className="contact-main">
                    {/* <img src={require("../images/expertise/image.jpg")} width="100%" /> */}
                    <div className="google-map">
                        {/* <MapWithAMarkerWithLabel
                            googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyDQPrDMJLbHSSxxzjpbI-PNuB-tTozbtMI&v=3.exp&libraries=geometry,drawing,places"
                            loadingElement={<div style={{ height: `100%` }} />}
                            containerElement={<div style={{ height: `500px` }} />}
                            mapElement={<div style={{ height: `100%` }} />}
                        /> */}
                        <GoogleMapReact
                            bootstrapURLKeys={{ key: "AIzaSyDQPrDMJLbHSSxxzjpbI-PNuB-tTozbtMI&v=3.exp" }}
                            defaultCenter={defaultProps.center}
                            defaultZoom={defaultProps.zoom}
                            onGoogleApiLoaded={({ map, maps }) => renderMarkers(map, maps)}
                            options={{
                                styles: id21MapStyles
                            }}
                        >
                            
                            <Marker
                                lat={ 1.2931432}
                                lng={103.8323873}
                                name="ID21"
                                color="blue"
                            />
                        </GoogleMapReact>
                        {/* <MapWithAMarker
                            googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyDQPrDMJLbHSSxxzjpbI-PNuB-tTozbtMI&v=3.exp&libraries=geometry,drawing,places"
                            loadingElement={<div style={{ height: `100%` }} />}
                            containerElement={<div className="gmap-cont" />}
                            mapElement={<div style={{ height: `100%` }} />}
                        /> */}
                    </div>
                </div>
                <div className="contact-1">
                    <h3>Connect with us.</h3>
                </div>

                <div className="contact-2">
                    <div className="contact-2-1">

                        <div className="contact-2-1-1">
                            <div className="relative">
                                <div className="contact relative">
                                    <img src={require('../images/icons/phone.png')} />
                                    <p><a href="tel:+6562722345">(65) 6272 2345</a></p>
                                </div>

                                <div className="contact relative">
                                    <img src={require("../images/icons/mail.png")} />
                                    <p><a href="mailto:enquiries@id21.com.sg">enquiries@id21.com.sg</a></p>
                                </div>

                                <div className="contact relative">
                                    <img src={require("../images/icons/location.png")} />
                                    <p>1 Kim Seng Promenade<br />Great World City East Tower<br />Unit 16-04/05/06<br />Singapore 237994</p>
                                </div>
                            </div>
                        </div>

                        <div className="contact-2-1-2">
                            <div className="wrapper">
                                <Select classNamePrefix="idSelect2" placeholder="SELECT TYPE OF ENQUIRY" options={options} onChange={handleChange}
                                    styles={colourStyles}
                                />
                                {selectValue == 2 &&
                                    <div>
                                        <div className="contact-info">
                                            <p>If you are creatively motivated to address the future of transformational workplace design, project management and construction,
                                    send us your CV using our contact form.</p>
                                        </div>
                                        <div className="group">
                                            <label className="resume-cv">RESUME/CV</label>
                                        </div>
                                        <Dropzone onDrop={acceptedFiles => fileUpload(acceptedFiles)} maxSize={5242880}
                                            onDropRejected={fileRejections => setFileRejections(fileRejections)}
                                            accept="image/*, application/pdf, application/vnd.ms-powerpoint, application/vnd.openxmlformats-officedocument.presentationml.presentation">
                                            {({ getRootProps, getInputProps }) => (
                                                <section>
                                                    <div {...getRootProps({ className: 'dropzone' })}>
                                                        <input {...getInputProps()} />
                                                        <p>Drag and drop files here</p>
                                                    </div>
                                                </section>
                                            )}
                                        </Dropzone>
                                        <p className="upload-size">Maximum upload file size: 5MB.</p>
                                        {uploadFiles.length > 0 &&
                                            <RenderFile uploadFiles={uploadFiles} setUploadFiles={setUploadFiles} />
                                        }
                                        <ul>{fileRejectionItems}</ul>
                                    </div>
                                }
                                <form onSubmit={handleSubmit} noValidate>
                                    <div className="group">
                                        <input type="text" required="required" value={contacts.firstName} onChange={(event) => setContacts({ ...contacts, firstName: event.target.value })} />
                                        <span className="highlight"></span><span className="bar"></span>
                                        <label>First Name</label>
                                        <Warning error={firstNameError} />
                                        {/* <p className="warning"><img src={require("../images/icons/warning.png")}/>This field is required</p> */}
                                    </div>
                                    <div className="group">
                                        <input type="text" required="required" value={contacts.lastName} onChange={(event) => setContacts({ ...contacts, lastName: event.target.value })} />
                                        <span className="highlight"></span><span className="bar"></span>
                                        <label>Last Name</label>
                                        <Warning error={lastNameError} />
                                    </div>
                                    <div className="group">
                                        <input type="text" required="required" value={contacts.company} onChange={(event) => setContacts({ ...contacts, company: event.target.value })} />
                                        <span className="highlight"></span><span className="bar"></span>
                                        <label>Company</label>
                                        <Warning error={comapnyError} />
                                    </div>
                                    <div className="group">
                                        <input type="text" required="required" value={contacts.phone} onChange={(event) => setContacts({ ...contacts, phone: event.target.value })} />
                                        <span className="highlight"></span><span className="bar"></span>
                                        <label>Phone</label>
                                        <Warning error={phoneError} />
                                    </div>
                                    <div className="group">
                                        <input type="email" required="required" value={contacts.email} onChange={(event) => setContacts({ ...contacts, email: event.target.value })} />
                                        <span className="highlight"></span><span className="bar"></span>
                                        <label>Email*</label>
                                        <Warning error={emailError} />
                                    </div>
                                    <div className="group">
                                        <textarea type="textarea" rows="5" required="required" value={contacts.message} onChange={(event) => setContacts({ ...contacts, message: event.target.value })} >
                                        </textarea><span className="highlight"></span><span className="bar"></span>
                                        <label>Message</label>
                                        <Warning error={messageError} />
                                    </div>
                                    <ReCAPTCHA
                                        ref={recaptchaRef}
                                        sitekey="6LdxzcAZAAAAACaQ3xeDLmwN2oPcwtoXr3vSch73"
                                        onChange={onRecapChange}
                                    />
                                    <div className="btn-box">
                                        <button className="btn btn-submit" type="submit">submit</button>
                                    </div>
                                </form>
                            </div>
                        </div>


                    </div>
                </div>
            </Fade>
        </div>
    )
}
export default Contact