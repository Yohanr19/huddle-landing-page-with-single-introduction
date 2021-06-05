import React from 'react'
import logo from './images/logo.svg'
import mockups from './images/illustration-mockups.svg'
import './HuddleIntro.css'

const HuddleIntro = () => {
    return (
        <div className="intro-wrapper">
         <div className='logo-container'>
            <img src={logo} alt='logo'className='logo' ></img>
         </div>
         <div className='mockups-contanier'>
            <img src={mockups} alt='mockups' className='mockups'></img>
         </div>
        </div>
    )
}
export default HuddleIntro


