import Banner from '../assets/banner.png';
import Apache from '../assets/apache-logo.png';
import Git from '../assets/git-logo.png';
import Laravel from '../assets/laravel-logo.png';
import Mysql from '../assets/mysql-logo.png';
import Node from '../assets/node-logo.png';
import ReactLogo from '../assets/react-logo.png';
import Figma from '../assets/figma-logo.png';
import Looker from '../assets/looker-logo.png';
import Tableau from '../assets/tableau-logo.png';
import Excel from '../assets/excel-logo.png';
import GSheets from '../assets/googlesheets-logo.png';
import Bigquery from '../assets/bigquery-logo.png';
import Matlab from '../assets/matlab-logo.png';
import RLogo from '../assets/r-logo.png';
import Python from '../assets/python-logo.png';
import Selfphoto from '../assets/self-pic.png';
import Rightarrow from '../assets/right-arrow.png';
import { Link } from 'react-router-dom';

const Home = () => {

    // document.addEventListener('DOMContentLoaded',function() {
    //     document.getElementById('emailButton').addEventListener('click', function() {
    //         // Email parameters
    //         var to = 'gomezrickyjay@gmail.com';
    //         var subject = 'Saying Hi, Jaycoded!';
    //         var body = 'Dear Jay,\n\nI hope this email finds you well.\n\nI came across your profile online and I saw that we could work together on a great opportunity on web development or data analytics project.\n\nI would love to connect with you and see if we could be a fit on this job.\n\nThanks, I am looking forward to talking with you!\n\nSincerely,\n\n--Insert Your Name Here--';

    //         // Encode the parameters
    //         var emailLink = 'mailto:' + to + '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);

    //         // Create a hidden link and trigger a click event
    //         var emailAnchor = document.createElement('a');
    //         emailAnchor.href = emailLink;
    //         emailAnchor.style.display = 'none';
    //         document.body.appendChild(emailAnchor);
    //         emailAnchor.click();
    //         document.body.removeChild(emailAnchor);
    //     });
    // })

    // document.getElementById('emailButton').addEventListener('click', function() {
    //     // Recipient's email address
    //     var to = 'gomezrickyjay@gmail.com';
    
    //     // Email subject
    //     var subject = 'Saying Hi, Jaycoded!';
    
    //     // Email body or template
    //     var body = 'Dear Jay,\n\nI hope this email finds you well.\n\nI came across your profile online and I saw that we could work together on a great opportunity on web development or data analytics project.\n\nI would love to connect with you and see if we could be a fit on this job.\n\nThanks, I am looking forward to talking with you!\n\nSincerely,\n\n--Insert Your Name Here--';
    
    //     // Encode the subject and body
    //     var subjectEncoded = encodeURIComponent(subject);
    //     var bodyEncoded = encodeURIComponent(body);
    
    //     // Create the mailto link with subject and body
    //     var mailtoLink = 'mailto:' + to + '?subject=' + subjectEncoded + '&body=' + bodyEncoded;

    //     // Inform the user to click the send button in their email client
    //     alert('Please click the send button in your email client to send this email.');
    
    //     // Open the default email client
    //     window.location.href = mailtoLink;
    // });
    

    return(

        <div className="Home">

            <div className="main">
                
                <img src={Banner} className="home__bannerImg" alt="banner background"/>
                
                <div className='home__bannerContent'>
                    {/* <button className='btn1'>I need a developer</button>
                    <div className='btn__spacer'></div>
                    <button className='btn2'>I need a data analyst</button> */}

                    <div className='btn1'><Link to="/developer" className='link__item link__text1'>I need a developer</Link></div>
                    <div className='btn__spacer'></div>
                    <div className='btn2'><Link to="/analyst" className='link__item link__text2'>I need an analyst</Link></div>

                </div>

                <div className='home__intro'>
                    <h1 className='intro__title'>Hi, I'm Jay! 👋</h1>
                    <p className='intro__text'>I only help businesses with two things: establish <b>online credibility</b> and make <b>meaningful business decisions</b> through data.</p>
                    
                    <div className='home__service1'>
                        <div className='service-a service1'>
                            <h1 className='service__title1'>Data Analysis</h1>
                        </div>
                        <div className='service-a service2'>
                            <h1 className='service__title2'>Full-Stack Web Development</h1>
                        </div>
                    </div>
                    
                    <div className='home__service2'>
                        <div className='service-b service3'>
                            <h1 className='service__title1'>EDA</h1>
                        </div>
                        <div className='service-b service4'>
                            <h1 className='service__title1'>ML</h1>
                        </div>
                        <div className='service-b service5'>
                            <h1 className='service__title2'>Frontend</h1>
                        </div>
                        <div className='service-b service6'>
                            <h1 className='service__title2'>Backend</h1>
                        </div>
                    </div>
                    
                    <div className='tech-stack'>
                        <div className='section-title'>Tech Stack</div>
                        <div className='span-line'></div>
                        
                        <div className='home__technology'>
                            <div className='home__technology1'>
                                <img src={Apache} alt="apache logo" className='technology__item1' />
                                <img src={Git} alt="git logo" className='technology__item1' />
                                <img src={Laravel} alt="laravel logo" className='technology__item1' />
                                <img src={Mysql} alt="mysql logo" className='technology__item1' />
                                <img src={Node} alt="node logo" className='technology__item1' />
                                <img src={ReactLogo} alt="react logo" className='technology__item1' />
                                <img src={Figma} alt="figma logo" className='technology__item1' />
                            </div>
                            
                            <div className='home__technology2'>
                                <img src={Looker} alt="looker logo" className='technology__item1' />
                                <img src={Tableau} alt="tableau logo" className='technology__item1' />
                                <img src={Excel} alt="excel logo" className='technology__item1' />
                                <img src={GSheets} alt="Google sheets logo" className='technology__item1' />
                                <img src={Bigquery} alt="bigquery logo" className='technology__item1' />
                                <img src={Matlab} alt="matlab logo" className='technology__item1' />
                                <img src={RLogo} alt="R logo" className='technology__item1' />
                                <img src={Python} alt="python logo" className='technology__item1' />
                            </div>
                        </div>
                    </div>
                    
                    <div className='about-me' id="about-me">
                        <div className='section-title'>About Me</div>
                        <div className='span-line'></div>

                        <div className='home__about'>
                            <div className='home__about-side'>
                                <h1 className='about-me__title'>Chemical Engineer turned into a Code Geek!</h1>
                                <p className='about-me__par'>Hey, my name is Jay. <b className='highlighter'>I'm a full-stack web developer based in Manila, Philippines</b>. Never would I've imagined that my love for data analysis as a Chemical Engineer will lead me to the world of tech. Now, my life has completely changed and I love it!</p>
                                <p className='about-me__par'>On my free time, you could see me either doing research or reading books. I am geek I swear!</p>
                            </div>
                            <div className='home__about-side'>
                                <img src={Selfphoto} alt="me" className="self-photo"/>
                            </div>
                        </div>
                        
                    </div>
                    
                    <div className='contact' id="contact">
                        <div className='section-title'>Say hello</div>
                        <div className='span-line'></div>

                        <div className='home__contact'>
                            <div className='home__contact-side'>
                                <p className='contact__par'>I'm available for data analytics and web development projects! Send me a message for 100% FREE consultation. I'll do my best to revert back to you within 24 hours 😊</p><br/>
                                <p className='contact__par'>If you want me urgently, you can directly contact me at +63 917 147 1876!</p>
                            </div>
                            <div className='home__contact-right'>
                                <img src={Rightarrow} alt="right arrow" className='right-arrow'/>
                                <a href="mailto:gomezrickyjay@gmail.com" className="emailButton">Send me an email!</a>
                            </div>
                        </div>
                        
                    </div>
                    
                </div>

            </div>
        
        </div>

    );

}

export default Home