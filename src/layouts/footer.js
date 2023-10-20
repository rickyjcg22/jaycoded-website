import Logo from '../assets/logo.png';
import Github from '../assets/github.png';
import LinkedIn from '../assets/linkedin.png';
import Instagram from '../assets/instagram.png';

const Footer = () =>{

    return(
        
        <footer>
            <div className='footer__main'>
                <img src={Logo} alt="jaycoded logo" className='footer__logo'/>
                <p className="footer__p">Copyright © 2023 Jaycoded. All rights reserved.</p>
                <p className="footer__p">This site is a work in progress.</p>
                
                <div className='footer__spacer'></div>

                <div className='footer__socials'>
                    <p className='footer__follow'>Let's connect on socials!</p>
                    <div className='social' id="social">
                        <a href="https://github.com/rickyjcg22" className='social__link' target='_blank' rel="noreferrer"><img src={Github} alt="github logo" className='social__img'/></a>
                        <a href="https://linkedin.com/in/rickyjcg22" className='social__link' target='_blank' rel="noreferrer"><img src={LinkedIn} alt="github logo" className='social__img'/></a>
                        <a href="https://instagram.com/jaycoded_" className='social__link' target='_blank' rel="noreferrer"><img src={Instagram} alt="github logo" className='social__img'/></a>
                    </div>
                    
                </div>

            </div>

        </footer>

    )
}

export default Footer