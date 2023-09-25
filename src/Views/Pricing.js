import React, { Component } from 'react'
import logoLV from '../Assets/Images/LVlogo.png';
import logoPO from '../Assets/Images/POlogo.png';
import logoKR from '../Assets/Images/KRlogo.png';

export default class Pricing extends Component {
    render() {
        return (
        <div className='Pricing'>
            <div className='Pricing_Hero'>
                <div className='Pricing_Hero_Text'>
                    <h1>Plans & Pricing</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipiscing elit
                        tortor eu egestas morbi sem vulputate etiam facomer dolor 
                        siet amet consectur dolor.
                    </p>
                    <div className='Pricing_Hero_Clients'>
                        <img src={logoLV}/>
                        <img src={logoPO}/>
                        <img src={logoKR}/>
                    </div>
                </div>
                <div className='Pricing_Hero_Cards'>
                    <div className='Pricing_Hero_Card'>
                        <h4>Start</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipiscing elit tortor eu egestas</p>
                        <input type='button' value='->  Get started'/>
                    </div>
                    <div className='Pricing_Hero_Card'>
                        <h4>Professional</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipiscing elit tortor eu egestas</p>
                        <input type='button' value='->  Get started'/>
                    </div>
                    <div className='Pricing_Hero_Card'>
                        <h4>Unlimited</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipiscing elit tortor eu egestas</p>
                        <input type='button' value='->  Get started'/>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}
