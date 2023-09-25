import React, { Component } from 'react'
import LogoBlack from '../Assets/Images/LogoBlack.png';
export default class Footer extends Component {
    render() {
        return (
        <footer className='Footer'>
            <img className='logo' src={LogoBlack} alt="Logo" />
            <p> © copyright eSWIT 2023</p>
        </footer>
        )
    }
}
