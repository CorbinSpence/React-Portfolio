import react from 'react'
import {Link} from 'react-router-dom'
import './header.css'

export default function header(){
    return(
        <header>
            <span className="title">Corbin Spence</span>
            <nav>
                <Link to="/React-Portfolio/aboutme"><a className='navLinks'>About Me</a></Link>
                <Link to="/React-Portfolio/work"><a className='navLinks'>Work</a></Link>
                <Link to="/React-Portfolio/contactme"><a className='navLinks'>Contact Me</a></Link>
                <Link to="/React-Portfolio/resume"><a className='navLinks'>Resume</a></Link>
            </nav>
        </header>
    )
}