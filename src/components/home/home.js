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
import ContactMe from '../ContactMe/ContactMe'
import Resume from '../Resume/Resume'
import AboutMe from '../AboutMe/AboutMe'
import Work from '../Work/Work'
import './home.css'

// necessary IDs for emailjs
const publicKey = 'GkM4bwcKqa8tEBMpi'
const serviceID = 'service_qjchtld'
const templateID = 'template_de9rsgd'

export default function Home(){

    const form = useRef()

    const [submission, setSubmission] = useState({name:'', email:'', message:''})
    const [bodyIndex, setBodyIndex] = useState(3)

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

    const handleBodyIndex = (index)=>{
        setBodyIndex(index)
    }
    return(
        
        <main>
            {bodyIndex===0 && (<Resume />)}
            {bodyIndex===1 && (<ContactMe />)}
            {bodyIndex===2 && (<Work />)}
            {bodyIndex===3 && (<AboutMe />)}
        </main>
    )
}