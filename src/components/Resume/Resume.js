import resumeImg from '../../images/Resume_Screenshot.PNG'
import './Resume.css'
export default function Resume(){
    return (
        <main>
            <div id="Resume" className="flexContainer resume">
                <aside>
                    <h1>Resume</h1>
                </aside>
                <div className='flexContainer flexJustifyCenter resumeBox'>
                    <img src={resumeImg} alt="resume"className='resumeImg' />
                </div>
            </div>
        </main>
    )
}