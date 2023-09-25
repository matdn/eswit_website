import React, { Component } from 'react';
import Hero from '../Assets/Images/Hero.png';
import HeroDark from '../Assets/Images/HeroDark.png';
import productsHero from '../Assets/Images/productsHero.png';
import logoLV from '../Assets/Images/LVlogo.png';
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

export default class Products extends Component {
    render() {
        return (
            <div className='Products'>
                <div className='Products_Hero'>
                    <div className='Products_Hero_Text'>
                        <h1>Products</h1>
                        <h4>At eSWIT, we believe that using SAP should be simple and enjoyable !</h4>
                        <h2>That's why we've developed a product porfolio that brings back simplicity and user delight  to the SAP experience.</h2>
                        <input className="Button" type='button' value='->  Discover our offers'/>
                    </div>
                    <div className='Products_Hero_Img'>
                        <img className='HeroDark' src={productsHero}/>
                        
                    </div>
                </div>
                <div className='Products_GRC'>
                    <div className='Products_GRC_Content'>
                        <div className='Products_GRC_Text'>
                            <h3>Governance Risk and Compliance</h3>
                            <div className='interligne'></div>
                            <p>provides a comprehensive and flexible solution for managing user access and risk within your SAP system.
                            </p>
                            <input className="Button" type='button' value='-> Learn more about us !'/>
                        </div>
                        <div className='Products_GRC_Img'>
                            <img src={Pres}/>
                        </div>
                    </div>
                </div>
                <div className='Products_Finance'>
                    <div className='Products_Finance_Content'>
                    <div className='Products_Finance_Img'>
                            <img src={Pres}/>
                        </div>
                        <div className='Products_Finance_Text'>
                            <h3>Governance Risk and Compliance</h3>
                            <div className='interligne'></div>
                            <p>provides a comprehensive and flexible solution for managing user access and risk within your SAP system.
                            </p>
                            <input className="Button" type='button' value='-> Learn more about us !'/>
                        </div>
                    </div>
                </div>
                
                
            </div>
        )
    }
}
