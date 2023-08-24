import react from 'react'
import './header.css'

export default function header(){
    return(
        <header>
            <div className="relative-box">
                <span className="title">Corbin Spence</span>
                <nav>
                    <a href="#About Me" className='navLinks'>About Me</a>
                    <a href="#Work" className='navLinks'>Work</a>
                    <a href="#Contact Info" className='navLinks'>Contact Me</a>
                    <a href="#Resume" className='navLinks'>Resume</a>
                </nav>
            </div>
        </header>
    )
}