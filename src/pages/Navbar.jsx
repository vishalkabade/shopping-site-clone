import React from 'react'
import "../styles/navbar.css"
function Navbar() {
    return <>
        <div className='main'>
            <div className='inner'>
                <div className='div1'>
                    <h5>SAMBHURAJE</h5>
                </div>
                <div className='div2'>
                    <a href="">Home</a>
                    <a href="">About</a>
                    <a href="">Services</a>
                    <a href="">Portfollo</a>
                    <a href="">Team</a>
                    <a href="">contact</a>
                    <button>Get Started</button>
                </div>
            </div>
            <div className='div3'>
                <h1>Beter Solutions For Your Business </h1>
                <span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci facilis aut earum, iste eum sint?</span>
                <div className='div4'>
                    <button className='div4inner1'>Get Started</button>
                    <button className='div4inner'><img src="/photo/play-button.png" alt="" /> watch video</button>

                </div>
            </div>

        </div>
    </>
}

export default Navbar