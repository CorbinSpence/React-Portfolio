import './Work.css'
export default function Work(){
    return (
        <main>
            <div className='work-bg'>
                <h2 className='main-header'>My Work</h2>
                <div id="Work" className="flexContainer"> 
                    <div className="gridContainer">
                        <div className="primaryProject">
                            <a href="https://github.com/CorbinSpence/Zenify">
                                <div className="mainWorkBlock zenify">
                                    <div className="subtitleBlock floatLeft">
                                        <h2>Zenify</h2>
                                        <h4>GraphQL/MERN</h4>
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
                                        <a href="https://github.com/CorbinSpence/Ride-Share-App">
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
                                        <a href="https://github.com/CorbinSpence/FoodWillBeerUsApart">
                                            <div className="workBlock placeholder FoodBeerSearch">
                                                <div className="subtitleBlock floatLeft">
                                                    <h2>Food Will Beer Us Apart</h2>
                                                    <h4>API/JavaScript/jQuery</h4>
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
                                        <a href="https://github.com/CorbinSpence/Code-Quiz">
                                            <div className="workBlock codeQuiz">
                                                <div className="subtitleBlock floatLeft">
                                                    <h2>Code Quiz</h2>
                                                    <h4>html/CSS/JavaScript</h4>
                                                </div>
                                            </div>
                                        </a>
                                        {/* <div class="secondary-desc">
                                            This is an a prototype website that helps teach users about proper dieting. It uses HTML and CSS.
                                        </div> */}
                                    </td>
                                    <td>
                                        <a href="https://github.com/CorbinSpence/movie_booking_system">
                                            <div className="workBlock movie-booking-sys">
                                                <div className="subtitleBlock floatLeft">
                                                    <h2>Movie Booking System</h2>
                                                    <h4>html/CSS/django</h4>
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
            </div>
        </main>
    )
}