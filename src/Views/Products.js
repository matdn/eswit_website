import React, { useState, useEffect } from "react";
import productsHero from '../Assets/Images/productsHero.png';
import Pres from '../Assets/Images/PRESimg.png';
import ProductAsset1 from '../Assets/Images/ProductAsset1.png';
import ProductAsset2 from '../Assets/Images/ProductAsset2.png';
import ProductAsset3 from '../Assets/Images/ProductAsset3.png';
export default function Products() {
    return (
        <div className='Products'>
            
            <div className='section' id="hero">
                <div className='Products_Hero'>
                    <div className='Products_Hero_Text'>
                        <h1>Products</h1>
                        <h4>At eSWIT, we believe that using SAP  should be simple and enjoyable !</h4>
                        <h2>That's why we've developed a product porfolio that brings back simplicity and user delight  to the SAP experience.</h2>
                        <input className="Button" type='button' value='->  Discover our offers' />
                    </div>
                    <div className='Products_Hero_Img'>
                        <img className='HeroDark' src={productsHero} />
                    </div>
                </div>
            </div>
            <div className='section' id="grc" >
                <div className='Products_GRC'>
                    <div className='Products_GRC_Content'>
                        <div className='Products_GRC_Text'>
                            <h3>Governance Risk and Compliance</h3>
                            <div className='interligne'></div>
                            <p>A one-stop-shop for managing user access and risk within your SAP system and none SAP applications.
                            </p>
                        </div>
                        <div className='Products_GRC_Img'>
                            <img src={ProductAsset1} />
                        </div>
                    </div>
                </div>
            </div>
            <div className='section' id="finance">
                <div className='Products_Finance'>
                    <div className='Products_Finance_Content'>
                        <div className='Products_Finance_Img'>
                            <img src={Pres} />
                        </div>
                        <div className='Products_Finance_Text'>
                            <h3>Finance Compliance </h3>
                            <div className='interligneBlack'></div>
                            <p>provides a comprehensive and flexible solution for managing VAT compliance within your SAP system.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='section' id="apiBridge">
                <div className='Products_GRC'>
                    <div className='Products_GRC_Content'>
                        <div className='Products_GRC_Text'>
                            <h3>API Bridge</h3>
                            <div className='interligne'></div>
                            <p>offers a flexible and scalable solution for orchestrating data and automating processes within your SAP eco-system.
                            </p>
                        </div>
                        <div className='Products_GRC_Img'>
                            <img src={ProductAsset3} />
                        </div>
                    </div>
                </div>
            </div>
            <div className='section' id="mdg">
                <div className='Products_Finance'>
                    <div className='Products_Finance_Content'>
                        <div className='Products_Finance_Img'>
                            <img src={ProductAsset2} />
                        </div>
                        <div className='Products_Finance_Text'>
                            <h3>MDG </h3>
                            <div className='interligneBlack'></div>
                            <p>Master Data Governance (MDG) provides a central application to manage and consolidate your master data in a user-friendly way.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="section footer" id="ftr">
                    <Footer/>
                </div> */}
        </div>
    )
}

