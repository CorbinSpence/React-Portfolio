import './Work.css'
export default function Work(){
    return (
        <main>
            <h2 className='main-header'>My Work</h2>
            <div id="Work" className="flexContainer"> 
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
        </main>
    )
}