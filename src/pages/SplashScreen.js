
import waiting from '../images/pale-waiting.png'
import multitask from '../images/clip-fatal-error.png'
import { Link } from "react-router-dom";

import React from 'react'

export default function SplashScreen() {
    return (
        <div className='page-container'>
            <header className='title-container'>
                <h1 className='work-well'><span>W</span>ORK <span>W</span>ELL</h1>
                <div className='btn-container'>
                    <Link className='signup' to={'/signup'}>Sign up</Link>
                    <Link className='login' to={'/login'}>Log in</Link>
                </div>
            </header>
            <div className='img-container'>
                <div className='section'>
                    <img src={waiting} alt="A girl waiting" />
                    <p><span className='bold'>Manage</span> better your time and get <span className='bold'>motivated</span></p>
                </div>
                <div className='section'>
                    <img src={multitask} alt='A lot of multitasking' />
                    <p>Forget <span className='bold'>multitasking</span> and focus on completing <span className='bold'>little tasks</span></p>
                </div>
            </div>
        </div>
    )
}
