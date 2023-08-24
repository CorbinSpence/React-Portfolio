import openingImg from '../../images/Opening_Image.jpg'
import profileImg from '../../images/Profile_Picture.jpg'
import './AboutMe.css'
export default function AboutMe(){
    return (
        <main>
            <img src={openingImg} alt="Opening image" className="opener"/>

            <article id="About Me" className="flexContainer">
                <aside>
                <h1>About Me</h1>
                </aside>
                <section className="articleSection">
                    <img src={profileImg} alt="profile picture" className='articleImg' />
                    <p>
                        I am a detail-oriented, focused worker with a knack for problem solving. My skills include, but are not limited to, working with HTML, CSS, JavaScript, Node.js, and MySQL. I've always had an interest in technology whether it is with animation, 3D 
                        modeling, or game modding. I have come to really enjoy web development because it allows me to express my creative and strategic skills. I'm 
                        currently looking work, and I'm readily available for interviews.
                    </p>
                </section>
            </article>
        </main>
    )
}