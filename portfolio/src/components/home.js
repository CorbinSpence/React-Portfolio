import React, {useState} from 'react'
import codeQuizImg from '../images/CodeQuiz_screenshot.PNG'
import dashboardImg from '../images/Dashboard.jpg'
import fwbuaImg from '../images/FoodWillBeerUsApart_screenshot.jpg'
import openingImg from '../images/Opening_Image.jpg'
import profileImg from '../images/Profile_Picture.jpg'
import resumeImg from '../images/Resume_Screenshot.PNG'
import rideShareImg from '../images/RideShare_screenshot.png'
import shapeUpImg from '../images/ShapeUp_Screenshot.PNG'
import placeholderImg from '../images/Stock_Image.jpg'

const rootVar = {
    greyBlack:'#2a2a31',
    fullWidth:'100%',
    workBlockMargins:'15px',
    sectionMargins:'10px',
    workBlockBGColor:'#cccccc',
    navPadding:'17px'
}

const style = {
    subtitleBlock:{
        backgroundColor: 'turquoise',
        color: rootVar.greyBlack,
        minWidth: '150px'
    },
    opener:{
        width:rootVar.fullWidth,
        height: '300px'
    
    },
    workBlock:{
        border: '5px solid turquoise' ,
        backgroundColor: rootVar.workBlockBGColor,
        paddingTop: '65px',
        paddingBottom: '65px',
        height: '70px'
    },
    mainWorkBlock:{
        border: '5px solid turquoise' ,
        backgroundColor: rootVar.workBlockBGColor,
        paddingTop: '150px',
        paddingBottom: '150px',
        height: 'auto',
        marginLeft: rootVar.workBlockMargins,
        marginRight: rootVar.workBlockMargins
    },
    // work-block:hover,
    // main-work-block:hover:{
    //     boxShadow: '0 0 10px black',
    //     backgroundPosition: '20% 20%',
    //     transitionDuration: '1s'
    // }
    Dashboard:{
        backgroundImage: `url(${dashboardImg})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '1% 3%'
    },
    placeholder:{
        backgroundImage: `url(${placeholderImg})`,
        backgroundRepeat: 'no-repeat'
    },
    ShapeUp:{
        backgroundImage: `url(${shapeUpImg})`,
        backgroundRepeat: 'no-repeat'
    },
    FoodBeerSearch:{
        backgroundImage: `url(${fwbuaImg})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '0% 20%'
    },
    codeQuiz:{
        backgroundImage: `url(${codeQuizImg})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '1% 3%'
    },
    rideShare:{
        backgroundImage: `url(${rideShareImg})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '40% 0%'
    },
    flexContainer:{
        display: 'flex',
        flexWrap: 'no-wrap'
    },
    flexJustifyCenter:{
        justifyContent: 'center'
    },
    flexAlignCenter:{
        alignContent: 'center'
    },
    flexCol:{
        flexDirection: 'column'
    },
    gridContainer:{
        display: 'grid',
        gridTemplateColumns: '1 auto auto auto',
        width: '65%'
    },
    table:{
        borderSpacing: rootVar.workBlockMargins
    },
    td:{
        width: '40%'
    },
    
    /* sets up the titles for the different sections */
    aside:{
        width: '12%',
        minWidth: '150px',
        marginRight: '7%',
        paddingRight: '3%',
        borderRight: '4px solid navy',
        textAlign: 'right',
        color: 'navy',
        fontSize: 'x-large'
    },
    
    /* sets up about me section */
    article:{
        width:rootVar.fullWidth,
        marginTop: rootVar.sectionMargins,
        marginBottom: rootVar.sectionMargins
    },
    articleSection:{
        marginLeft: rootVar.workBlockMargins,
        marginRight: rootVar.workBlockMargins,
        width: '65%'
    },
    articleImg:{
        width: '300px',
        height: '300px',
        border: '3px solid black',
        borderRadius: '4px'
    },
    
    main:{
        width:rootVar.fullWidth,
        marginTop: rootVar.sectionMargins,
        marginBottom: rootVar.sectionMargins
    },
    
    /* sets up resume section */
    resume:{
        marginTop: rootVar.sectionMargins,
        marginBottom: rootVar.sectionMargins
    },
    resumeImg:{
        // marginLeft:'8%'
    },
    floatLeft:{
        float: "left"
    },
    contact:{

    },
    contactForm:{
        
    },
    resumeBox:{
        width:'65%',
        minWidth: '733px'
    },
    label:{
        minWidth: '75px',
        display: 'inline-block',
        marginRight: '8px'
    },
    input:{
        border: '2px solid black',
        backgroundColor: '#affaf0'
    },
    textarea:{
        minWidth: '300px'
    },
    textareaLabel:{
        verticalAlign: 'top'
    },
    marginAuto:{
        margin:'auto'
    },
    textAlignRight:{
        textAlign: 'right'
    },
    sendButton:{
        backgroundColor:'#a4a4d5',
        borderRadius: '12px',
        fontWeight: 'bold',
        height: '35px',
        width: '90px',
        border: '3px solid black'
    },
    formBox:{
        minWidth: '733px',
        width: '65%'
    }
}

export default function Home(){
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
        }else{
            console.log('input is valid')
            document.getElementById('name').value = ''
            document.getElementById('email').value = ''
            document.getElementById('message').value = ''
        }
        setSubmission({name:'', email:'', message:''})
    }

    return(
        
        <main>
            <img src={openingImg} alt="Opening image" class="opener" style={style.opener}/>

            <article id="About Me" class="flex-container" style={{...style.article, ...style.flexContainer}}>
                <aside style={style.aside}>
                <h1>About Me</h1>
                </aside>
                <section style={style.articleSection}>
                    <img src={profileImg} alt="profile picture" style={style.articleImg} />
                    <p>
                        I am a detail-oriented, focused worker with a knack for problem solving. My skills include, but are not limited to, working with HTML, CSS, JavaScript, Node.js, and MySQL. I've always had an interest in technology whether it is with animation, 3D 
                        modeling, or game modding. I have come to really enjoy web development because it allows me to express my creative and strategic skills. I'm 
                        currently looking work, and I'm readily available for interviews.
                    </p>
                </section>
            </article>

            <div id="Work" class="flex-container" style={style.flexContainer}>
                <aside style={style.aside}>
                    <h1>Work</h1>
                </aside>
                <div class="grid-container" style={style.gridContainer}>
                    <div class="primary-project">
                        <a href="https://stbuiemory.github.io/FoodWillBeerUsApart/">
                            <div class="main-work-block FoodBeerSearch" style={{...style.mainWorkBlock, ...style.FoodBeerSearch}}>
                                <div class="subtitle-block float-left" style={{...style.subtitleBlock, ...style.floatLeft}}>
                                    <h2>Food Will Beer Us Apart</h2>
                                    <h4>Javascript/API's</h4>
                                </div>
                            </div>
                        </a>
                        {/* <div class="primary-desc">
                            This is a web app that allows users to search from an api to find the perfect beer to drink with a given food. It uses HTML, CSS, Bulma, JavaScript, jQuery, and API querying.
                        </div> */}
                    </div>
                    
                    <table style={style.table}>
                        <tbody>
                            <tr>
                                <td style={style.td}>
                                    <a href="https://github.com/CorbinSpence/Mobile_Dev_Final_Project">
                                        <div class="work-block rideShare" style={{...style.workBlock, ...style.rideShare}}>
                                            <div class="subtitle-block float-left" style={{...style.subtitleBlock, ...style.floatLeft}}>
                                            <h2>Ride Share App</h2>
                                            <h4>Android Studio/Firebase</h4>
                                            </div>
                                        </div>
                                    </a>
                                    {/* <div class="secondary-desc">
                                        This is an android mobile app designed to simulate a ride share app. It uses java, xml, and Google Firebase.
                                    </div> */}
                                </td>
                                <td style={style.td}>
                                    <a href="https://corbinspence.github.io/Code-Quiz/">
                                        <div class="work-block placeholder codeQuiz" style={{...style.workBlock, ...style.codeQuiz}}>
                                            <div class="subtitle-block float-left" style={{...style.subtitleBlock, ...style.floatLeft}}>
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
                                <td style={style.td}>
                                    <a href="https://corbinspence.github.io/ShapeUp_Website/">
                                        <div class="work-block ShapeUp" style={{...style.workBlock, ...style.ShapeUp}}>
                                            <div class="subtitle-block float-left" style={{...style.subtitleBlock, ...style.floatLeft}}>
                                                <h2>Shape Up</h2>
                                                <h4>HTML/CSS</h4>
                                            </div>
                                        </div>
                                    </a>
                                    {/* <div class="secondary-desc">
                                        This is an a prototype website that helps teach users about proper dieting. It uses HTML and CSS.
                                    </div> */}
                                </td>
                                <td style={style.td}>
                                    <a href="https://github.com/CorbinSpence/Drawing-Board">
                                        <div class="work-block Dashboard" style={{...style.Dashboard, ...style.workBlock}}>
                                            <div class="subtitle-block float-left" style={{...style.subtitleBlock, ...style.floatLeft}}>
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
            <div id="Resume" class="flex-container resume" style={{...style.flexContainer, ...style.resume}}>
                <aside style={style.aside}>
                    <h1>Resume</h1>
                </aside>
                <div style={{...style.flexContainer, ...style.flexJustifyCenter, ...style.resumeBox}}>
                    <img src={resumeImg} alt="resume"style={style.resumeImg} />
                </div>
            </div>
            <div id="Contact Info" style={{...style.flexContainer, ...style.contact}}>
                <aside style={style.aside}>
                    <h1>Contact</h1>
                </aside>
                <div style={{...style.flexContainer, ...style.formBox, ...style.flexContainer, ...style.flexAlignCenter, ...style.flexCol}}>
                    <form style={{...style.contactForm, ...style.flexContainer, ...style.flexAlignCenter, ...style.flexCol}}>
                        <h2>Leave a Message</h2>
                        <div>
                            <label style={{...style.label, ...style.textAlignRight}} htmlFor='name'>Name:</label>
                            <input type='text' placeholder='name' id='name' style={style.input}></input>
                        </div>
                        <br></br>
                        <div>
                            <label style={{...style.label, ...style.textAlignRight}} htmlFor='email'>Email:</label>
                            <input type='email' placeholder='abc@gmail.com' id='email' style={style.input}></input>
                        </div>
                        <br></br>
                        <div>
                            <label style={{...style.label, ...style.textAlignRight, ...style.textareaLabel}} htmlFor='message'>Message:</label>
                            <textarea placeholder='Type message here...' id='message' style={{...style.input, ...style.textarea}}></textarea>
                        </div>
                        <br></br>
                        <div>
                            <input type='button' value='Send' id='send' style={style.sendButton} onClick={handleSubmission}></input>
                        </div>
                    </form>
                </div>
            </div>
        </main>
    )
}