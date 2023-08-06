import react from 'react'
import './header.css'

export default function header(){
    return(
        <header>
            <span className="title">Corbin Spence</span>
            <nav>
                <a href="#About Me" className='navLinks'>About Me</a>
                <a href="#Work" className='navLinks'>Work</a>
                <a href="#Contact Info" className='navLinks'>Contact Me</a>
                <a href="#Resume" className='navLinks'>Resume</a>
            </nav>
        </header>
    )
}