import React, {useState, useRef} from 'react'
import codeQuizImg from '../../images/CodeQuiz_screenshot.PNG'
import dashboardImg from '../../images/Dashboard.jpg'
import fwbuaImg from '../../images/FoodWillBeerUsApart_screenshot.jpg'
import openingImg from '../../images/Opening_Image.jpg'
import profileImg from '../../images/Profile_Picture.jpg'
import resumeImg from '../../images/Resume_Screenshot.PNG'
import rideShareImg from '../../images/RideShare_screenshot.png'
import shapeUpImg from '../../images/ShapeUp_Screenshot.PNG'
import placeholderImg from '../../images/Stock_Image.jpg'
import emailjs from '@emailjs/browser';
import './home.css'

// necessary IDs for emailjs
const publicKey = 'GkM4bwcKqa8tEBMpi'
const serviceID = 'service_qjchtld'
const templateID = 'template_de9rsgd'

export default function Home(){

    const form = useRef()

    const [submission, setSubmission] = useState({name:'', email:'', message:''})

    const handleSubmission = (e) => {
        e.preventDefault()
        const name = document.getElementById('name').value
        const email = document.getElementById('email').value
        const message = document.getElementById('message').value

        const emailRegex = /[a-z|A-Z|1-9]+@[a-z|A-Z|1-9]+\.[a-z|A-Z|1-9]+/

        console.log(name+' '+email+' '+message)

        if(name===''||email===''||message===''||!email.match(emailRegex)){
            console.log('input not valid')
            document.getElementById('error').style.display = 'block'
        }else{
            console.log('input is valid')
            document.getElementById('name').value = ''
            document.getElementById('email').value = ''
            document.getElementById('message').value = ''
        }
        var params ={
            name:name,
            email:email,
            message:message,
            note:"Message from portfolio"

        }
        emailjs.send(serviceID, templateID, params, publicKey)
        .then((data)=>console.log(data.text))
        .catch((err)=>console.log(err))
        setSubmission({name:'', email:'', message:''})
    }

    return(
        
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

            <div id="Work" className="flexContainer">
                <aside>
                    <h1>Work</h1>
                </aside>
                <div className="gridContainer">
                    <div className="primaryProject">
                        <a href="https://stbuiemory.github.io/FoodWillBeerUsApart/">
                            <div className="mainWorkBlock FoodBeerSearch">
                                <div className="subtitleBlock floatLeft">
                                    <h2>Food Will Beer Us Apart</h2>
                                    <h4>Javascript/API's</h4>
                                </div>
                            </div>
                        </a>
                        {/* <div class="primary-desc">
                            This is a web app that allows users to search from an api to find the perfect beer to drink with a given food. It uses HTML, CSS, Bulma, JavaScript, jQuery, and API querying.
                        </div> */}
                    </div>
                    
                    <table>
                        <tbody>
                            <tr>
                                <td>
                                    <a href="https://github.com/CorbinSpence/Mobile_Dev_Final_Project">
                                        <div className="workBlock rideShare">
                                            <div className="subtitleBlock floatLeft">
                                            <h2>Ride Share App</h2>
                                            <h4>Android Studio/Firebase</h4>
                                            </div>
                                        </div>
                                    </a>
                                    {/* <div class="secondary-desc">
                                        This is an android mobile app designed to simulate a ride share app. It uses java, xml, and Google Firebase.
                                    </div> */}
                                </td>
                                <td>
                                    <a href="https://corbinspence.github.io/Code-Quiz/">
                                        <div className="workBlock placeholder codeQuiz">
                                            <div className="subtitleBlock floatLeft">
                                                <h2>Coding Quiz</h2>
                                                <h4>Javascript/jQuery</h4>
                                            </div>
                                        </div>
                                    </a>
                                    {/* <div class="secondary-desc">
                                        This is a web app that lets users play a coding quiz and save their final score. It uses HTML, CSS, Javascript, and jQuery.
                                    </div> */}
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <a href="https://corbinspence.github.io/ShapeUp_Website/">
                                        <div className="workBlock ShapeUp">
                                            <div className="subtitleBlock floatLeft">
                                                <h2>Shape Up</h2>
                                                <h4>HTML/CSS</h4>
                                            </div>
                                        </div>
                                    </a>
                                    {/* <div class="secondary-desc">
                                        This is an a prototype website that helps teach users about proper dieting. It uses HTML and CSS.
                                    </div> */}
                                </td>
                                <td>
                                    <a href="https://github.com/CorbinSpence/Drawing-Board">
                                        <div className="workBlock Dashboard">
                                            <div className="subtitleBlock floatLeft">
                                                <h2>Drawingboard</h2>
                                                <h4>Express/SQL/MVC</h4>
                                            </div>
                                        </div>
                                    </a>
                                    {/* <div class="secondary-desc">
                                        This is a prototype social media website for aspiring inventors and engineers. It uses HTML, CSS, JavaScript, MySQL, MVC, Node.js, and Express.js.
                                    </div> */}
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div id="Resume" className="flexContainer resume">
                <aside>
                    <h1>Resume</h1>
                </aside>
                <div className='flexContainer flexJustifyCenter resumeBox'>
                    <img src={resumeImg} alt="resume"className='resumeImg' />
                </div>
            </div>
            <div id="Contact Info" className='flexContainer contact'>
                <aside>
                    <h1>Contact</h1>
                </aside>
                <div className='flexContainer formBox flexContainer flexAlignCenter flexCol'>
                    <form className='contactForm flexContainer flexAlignCenter flexCol' ref={form}>
                        <h2>Leave a Message</h2>
                        <div>
                            <label className='textAlignRight' htmlFor='name'>Name:</label>
                            <input type='text' placeholder='name' id='name'></input>
                        </div>
                        <br></br>
                        <div>
                            <label className='textAlignRight' htmlFor='email'>Email:</label>
                            <input type='email' placeholder='abc@gmail.com' id='email'></input>
                        </div>
                        <br></br>
                        <div>
                            <label className='textAlignRight textareaLabel' htmlFor='message'>Message:</label>
                            <textarea placeholder='Type message here...' id='message'></textarea>
                        </div>
                        <br></br>
                        <div>
                            <input type='button' value='Send' id='send' className='sendButton' onClick={handleSubmission}></input>
                        </div>
                        <div className='errorMessage' id='error'>The input is incorrect.</div>
                    </form>
                </div>
            </div>
        </main>
    )
}