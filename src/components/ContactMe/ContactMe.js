import React, {useState, useRef} from 'react'
import emailjs from '@emailjs/browser';
import './ContactMe.css'

const publicKey = 'GkM4bwcKqa8tEBMpi'
const serviceID = 'service_qjchtld'
const templateID = 'template_de9rsgd'

export default function ContactMe(){
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
    return (
        <main>
            <div id="Contact Info" className='flexContainer contact'>
                <div className='flexContainer formBox flexContainer flexCol'>
                    <form className='contactForm flexContainer flexAlignCenter flexJustifyCenter flexCol' ref={form}>
                        <h2 className='main-header'>Leave a Message</h2>
                        <div className='form-data'>
                            <label htmlFor='name'>Name:</label>
                            <input type='text' placeholder='name' id='name'></input>
                        </div>
                        <br></br>
                        <br></br>
                        <div className='form-data'>
                            <label htmlFor='email'>Email:</label>
                            <input type='email' placeholder='abc@gmail.com' id='email'></input>
                        </div>
                        <br></br>
                        <br></br>
                        <div className='form-data'>
                            <label className='textareaLabel' htmlFor='message'>Message:</label>
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