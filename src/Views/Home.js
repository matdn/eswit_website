import React, { Component } from 'react';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import HeroDark from '../Assets/Images/HeroDark.png';
import ShadowHero from '../Assets/Images/ShadowHero.png';
import ContactLogo from '../Assets/Images/ContactLogo.png';
import logoLV from '../Assets/Images/LVMH Logo.jpg';
import logoPO from '../Assets/Images/POlogo.png';
import logoKR from '../Assets/Images/KRlogo.png';
import Pres from '../Assets/Images/PRESimg.png';
import AssetColor from '../Assets/Images/AssetColor.png';
import EnhancedSecurity from '../Assets/Images/EnhancedSecurity.png';
import AdvancedAutomation from '../Assets/Images/AdvancedAutomation.png';
import VerifiedCompliance from '../Assets/Images/VerifiedCompliance.png';
import iconCHAT from '../Assets/Images/icon _chat.svg';
import iconMEDAL from '../Assets/Images/icon _medal.svg';
import iconROCKET from '../Assets/Images/icon _rocket.svg';
import iconTOOLS from '../Assets/Images/icon _tools.svg';

import { Link } from 'react-router-dom';
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedNumber: null,
            formData: {
                firstName: '',
                lastName: '',
                email: ''
            },
            slideIndex: 0 ,
            activeSlide: 0
        };
        this.sliderRef = React.createRef();
    }
    handleNumberClick = (number) => {
        this.setState({ selectedNumber: number });
    };
    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState(prevState => ({
            formData: {
                ...prevState.formData,
                [name]: value
            }
        }));
    };
    handleSubmit = (e) => {
        e.preventDefault();
        console.log(`Selected Number: ${this.state.selectedNumber}`);
        console.log(`Form Data: ${JSON.stringify(this.state.formData, null, 2)}`);
    };
    goToSlide = (index) => {
        this.setState({ slideIndex: index });
        this.sliderRef.current.slickGoTo(index); // change le slide du carrousel
    }
    render() {
        const { selectedNumber, formData, slideIndex } = this.state;
        const settings = {
            dots: true,
            infinite: true,
            autoplay: true,
            speed: 1200,
            autoplaySpeed: 15000,
            slidesToShow: 1,
            slidesToScroll: 1,
            afterChange: current => this.setState({ activeSlide: current, slideIndex: current })
        };
        
        return (
            <div className='Home'>
                <div className='Home_Hero'>
                    <div className='Home_Hero_Text'>
                        <h2>Welcome to <br/><span>eSWIT</span> !</h2>
                        <h4>We believe that using SAP <br/>should be simple and enjoyable.</h4>
                        <Link to="/products"><input className="Button" type='button' value='->  Discover our products'/></Link>
                    </div>
                    <div className='Home_Hero_Img'>
                        <img className='ShadowHero' src={ShadowHero}/>
                        <img className='HeroDark' src={HeroDark}/>
                    </div>
                </div>
                <div className='Home_Collaborateurs'>
                    <div className='Home_Collaborateurs_Text'>
                        <h4>Don't just take our word for it – <br/>
                            our <span>satisfied customers</span> include </h4>
                    </div>
                    <div className='Home_Collaborateurs_Img'>
                        <img src={logoLV}/>
                        <img src={logoPO}/>
                        <img src={logoKR}/>
                    </div>
                </div>
                <div className='Home_Presentation'>
                    <div className='Home_Presentation_Img'>
                        <img src={Pres}/>
                    </div>
                    <div className='Home_Presentation_Text'>
                        <h3>As SAP experts, 
                            we understand both the software <br/> and your business needs.</h3>
                        <p>We know how to create experiences that simplify your most frequent tasks on SAP
                            and we expand the SAP coverage with modern features.
                            <br/><br/>
                            But what really sets us apart is our commitment to helping our customers.
                            We truly care about your success and are always here to help. <br/>That's what makes eSWIT relevant and valuable to our customers.
                        </p>
                    
                    </div>
                </div>
                <div className='Home_Quality_Header'>
                    <h2>Magnify your experience</h2>
                    <h3>At eSWIT, we are committed to delivering the best experience</h3>
                    <div className="carousel-controls">
                        {['Enhanced Security', 'Advanced Automation','Verified Compliance', 'Quality readiness' ].map((solution, index) => (
                            <button 
                                key={index}
                                style={this.state.activeSlide === index ? { color: '#0057FF', cursor: 'pointer' } : { cursor: 'pointer' }}
                                onClick={() => this.goToSlide(index)}
                            >
                                {solution} 
                            </button>
                        ))}
                    </div>
                </div>
                <Slider {...settings}  ref={this.sliderRef}>
                    
                    <div className='Home_EnhancedSecurity'>
                        <div className='Home_EnhancedSecurity_Content'>
                            <div className='Home_EnhancedSecurity_Img'>
                                <img src={EnhancedSecurity}/>
                            </div>
                            <div className='Home_EnhancedSecurity_Text'>
                                <h3>Enhanced security</h3>
                                <h4>
                                    eSWIT helps you keep your SAP system secure,<br/> protecting your business and its data.
                                </h4>
                                <div className='Home_EnhancedSecurity_Text_Content'>
                                    <img src={iconCHAT}/>
                                    <div>
                                        <h5>Secured access</h5>
                                        <p>Provides secure access to your SAP system, <br/>protecting against unauthorized access.</p>
                                    </div>
                                </div>
                                <div className='Home_EnhancedSecurity_Text_Content'>
                                    <img src={iconMEDAL}/>
                                    <div>
                                        <h5>Data protection</h5>
                                        <p>eSWIT helps you protect your data on SAP, <br/>keeping it safe from external threats.</p>
                                    </div>
                                </div>
                                <div className='Home_EnhancedSecurity_Text_Content'>
                                    <img src={iconROCKET}/>
                                    <div>
                                        <h5>Compliance</h5>
                                        <p>eSWIT ensures that you are compliant with <br/>relevant security regulations and standards.</p>
                                    </div>
                                </div>
                                <div className='Home_EnhancedSecurity_Text_Content'>
                                    <img src={iconTOOLS}/>
                                    <div>
                                        <h5>Regular updates</h5>
                                        <p>We release regular updates to eSWIT that include security enhancements,<br/> helping to keep your SAP system secure.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='Home_AdvancedAutomation'>
                        <div className='Home_AdvancedAutomation_Text'>
                            <h3>Advanced automation</h3>
                            <h4>
                                eSWIT helps you automate many of your most frequent tasks on SAP,<br/> saving you time and effort.
                            </h4>
                            <div className='Home_AdvancedAutomation_Text_Content'>
                                <img src={iconCHAT}/>
                                <div>
                                    <h5>Secure access</h5>
                                    <p>Provides secure access to your SAP system, <br/>protecting against unauthorized access.</p>
                                </div>
                            </div>
                            <div className='Home_AdvancedAutomation_Text_Content'>
                                <img src={iconMEDAL}/>
                                <div>
                                    <h5>Data protection</h5>
                                    <p>eSWIT helps you protect your data on SAP, <br/>keeping it safe from external threats.</p>
                                </div>
                            </div>
                            <div className='Home_AdvancedAutomation_Text_Content'>
                                <img src={iconROCKET}/>
                                <div>
                                    <h5>Compliance</h5>
                                    <p>eSWIT ensures that you are compliant with <br/>relevant security regulations and standards.</p>
                                </div>
                            </div>
                            <div className='Home_AdvancedAutomation_Text_Content'>
                                <img src={iconTOOLS}/>
                                <div>
                                    <h5>Regular updates</h5>
                                    <p>We release regular updates to eSWIT that include security enhancements,<br/> helping to keep your SAP system secure.</p>
                                </div>
                            </div>
                        </div>
                        <div className='Home_AdvancedAutomation_Img'>
                            <img src={AdvancedAutomation}/>
                        </div>
                    </div>
                    <div className='Home_VerifiedCompliance'>
                        <div className='Home_VerifiedCompliance_Img'>
                            <img src={VerifiedCompliance}/>
                        </div>
                        <div className='Home_VerifiedCompliance_Text'>
                            <h3>Verified compliance</h3>
                            <h4>
                            eSWIT has been thoroughly tested and reviewed, ensuring that it meets the highest standards of quality.
                            </h4>
                            <div className='Home_VerifiedCompliance_Text_Content'>
                                <img src={iconCHAT}/>
                                <div>
                                    <h5>Extensive testing</h5>
                                    <p>eSWIT has undergone extensive testing to ensure that it is reliable and effective</p>
                                </div>
                            </div>
                            <div className='Home_VerifiedCompliance_Text_Content'>
                                <img src={iconMEDAL}/>
                                <div>
                                    <h5>Expert review</h5>
                                    <p>eSWIT has been reviewed by SAP experts, ensuring that it meets the highest standards of quality.</p>
                                </div>
                            </div>
                            <div className='Home_VerifiedCompliance_Text_Content'>
                                <img src={iconROCKET}/>
                                <div>
                                    <h5>Customer feedback</h5>
                                    <p>We value our customers' feedback and use it to continually improve eSWIT</p>
                                </div>
                            </div>
                            <div className='Home_VerifiedCompliance_Text_Content'>
                                <img src={iconTOOLS}/>
                                <div>
                                    <h5>Regular updates</h5>
                                    <p>We release regular updates to eSWIT, ensuring that it stays up-to-date and effective.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='Home_AdvancedAutomation'>
                        <div className='Home_AdvancedAutomation_Text'>
                            <h3>Quality readiness</h3>
                            <h4>
                            eSWIT has been thoroughly tested and reviewed, ensuring that it meets the highest standards of quality.
                            </h4>
                            <div className='Home_AdvancedAutomation_Text_Content'>
                                <img src={iconCHAT}/>
                                <div>
                                    <h5>Extensive testing</h5>
                                    <p>eSWIT has undergone extensive testing to ensure that it is reliable and effective</p>
                                </div>
                            </div>
                            <div className='Home_AdvancedAutomation_Text_Content'>
                                <img src={iconMEDAL}/>
                                <div>
                                    <h5>Expert review</h5>
                                    <p>eSWIT has been reviewed by SAP experts, ensuring that it meets the highest standards of quality.</p>
                                </div>
                            </div>
                            <div className='Home_AdvancedAutomation_Text_Content'>
                                <img src={iconROCKET}/>
                                <div>
                                    <h5>Customer feedback</h5>
                                    <p>We value our customers' feedback and use it to continually improve eSWIT</p>
                                </div>
                            </div>
                            <div className='Home_AdvancedAutomation_Text_Content'>
                                <img src={iconTOOLS}/>
                                <div>
                                    <h5>Regular updates</h5>
                                    <p>We release regular updates to eSWIT that include security enhancements,<br/> helping to keep your SAP system secure.</p>
                                </div>
                            </div>
                        </div>
                        <div className='Home_AdvancedAutomation_Img'>
                            <img src={AdvancedAutomation}/>
                        </div>
                    </div>
                </Slider>
                    
                
                <div className='Home_Contact'>
                    <form onSubmit={this.handleSubmit}>
                        <h2>Wish to know more about eSWIT ?</h2>
                        <p>From a scale of 1 - 10, how satisfied are you with your SAP internal processes and experience ?</p>
                        <div className="number-buttons">
                            {Array.from({ length: 10 }, (_, i) => i + 1).map((number) => (
                            <button
                                type="button"
                                key={number}
                                className={`number-button ${selectedNumber === number ? 'active' : ''}`}
                                onClick={() => this.handleNumberClick(number)}
                            >
                                {number}
                            </button>
                            ))}
                        </div>
                        <p>Please leave us your contact information, so that we can keep you posted.</p>
                        <div className="name-inputs">
                            <div>
                                <label for="firstName">Enter your first name: </label>
                                <input
                                    type="text"
                                    name="firstName"
                                    placeholder="First Name"
                                    value={formData.firstName}
                                    onChange={this.handleChange}
                                />
                            </div>
                            <div>
                                <label for="lastName">Enter your last name: </label>
                                <input
                                    type="text"
                                    name="lastName"
                                    placeholder="Last Name"
                                    value={formData.lastName}
                                    onChange={this.handleChange}
                                />
                            </div>
                        </div>
                        <label for="email">Enter your email: </label>
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={formData.email}
                            onChange={this.handleChange}
                        />
                        <button type="submit">Submit</button>
                        <p>✌️ We promise not to spam !</p>
                    </form>
                    <div className='Home_Contact_Img'>
                        <img src={ContactLogo}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;