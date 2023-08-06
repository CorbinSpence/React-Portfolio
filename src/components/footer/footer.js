import react from 'react'
import './footer.css'

export default function footer(){
    return(
        <footer id="Contact Links" className="flex-container">
            <div className="contacts flexContainer flexJustifyCenter">
                <div>
                    <a href="404.433.0268" className='contactLink'>404.433.0268</a>
                </div>
                <div>
                    <a href="corbinspence16@gmail.com" className='contactLink'>corbinspence16@gmail.com</a>
                </div>
                <div>
                    <a href="https://github.com/CorbinSpence" className='contactLink'>Github</a>
                </div>
                <div>
                    <a href="https://www.linkedin.com/in/corbin-spence-0aa1751b0/" className='contactLink'>LinkedIn</a>
                </div>
            </div>
        </footer>
    )
}