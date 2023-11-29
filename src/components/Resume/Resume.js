import resumeImg from '../../images/Resume_Screenshot.PNG'
import resumeDoc from '../../downloads/Corbin Spence Resume.pdf'
import './Resume.css'
export default function Resume(){
    return (
        <main>
            <div id="Resume" className="flexContainer resume flexCol flexAlignCenter flexJustifyContent night-sky-bridge">
                <h2 className='main-header'>Downloadable Resume</h2>
                    <a href={resumeDoc} download="Corbin Spence Resume.pdf"><img src={resumeImg} alt="resume"className='resumeImg' /></a>
            </div>
        </main>
    )
}