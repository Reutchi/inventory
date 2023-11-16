import './footer.scss'
import Logo from '../../assets/logo.webp'
import { SocialIcon } from 'react-social-icons'

function Footer() {
    return (
        <footer className="footer-distributed">
            <div className="footer-left">
              <img src={Logo} alt='logo'/>
                <p className="footer-company-name">Amfiteatru Transilvania</p>
            </div>
            <div className="footer-center">
                <div>
                    <i className="fa fa-map-marker"></i>
                </div>

                <div>
                    <i className="fa fa-phone"></i>
                    <p>+0755 000 999</p>
                </div>

                <div>
                    <i className="fa fa-envelope"></i>
                    <p><a href="mailto:contact@amfiteatrul.ro">contact@amfiteatrul.ro</a></p>
                </div>

            </div>

            <div className="footer-right">

                <p className="footer-company-about">
                    <span>About the company</span>
                    ⛰LEGENDA DINTRE MUNTI⛰<br/>
                    Boutique Resort Imbratisat de Natura
                    Ferma si Gradina proprie. Restaurant cu specific Est European
                </p>

                <div className="footer-icons">
                    <a href="https://www.instagram.com/amfiteatrultransilvania/"><SocialIcon url="https://instagram.com" /></a>
                    <a href="https://www.facebook.com/amfiteatrultransilvania"><SocialIcon url="https://facebook.com" /></a>
                    <a href="https://amfiteatru.com"><SocialIcon url="https://amfiteatru.com" /></a>
                </div>
            </div>
        </footer>
    )
}

export default Footer
