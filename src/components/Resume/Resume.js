import resumeImg from '../../images/Resume_Screenshot.PNG'
import resumeDoc from '../../downloads/Corbin Spence Resume.pdf'
import './Resume.css'
export default function Resume(){
    return (
        <main>
            <div id="Resume" className="flexContainer resume">
                <aside>
                    <h1>Resume</h1>
                </aside>
                <div className='flexContainer flexJustifyCenter resumeBox'>
                    <a href={resumeDoc} download="Corbin Spence Resume.pdf"><img src={resumeImg} alt="resume"className='resumeImg' /></a>
                </div>
            </div>
        </main>
    )
}