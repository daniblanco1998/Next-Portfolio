import styles from '../../styles/footer.module.css'
import {BsLinkedin} from 'react-icons/bs'
import {GrInstagram} from 'react-icons/gr'
import {IoLogoWhatsapp} from 'react-icons/io'


export const Footer = () => {
  return (
    <footer id='footer' className={styles.footer}>
      <a href="./#" className={styles.footer__logo}>PORTFOLIO</a>

      <ul className={styles.permalinks}>
        <li><a href="./#">Home</a></li>
        <li><a href="#about">About Me</a></li>
        <li><a href="#experience">My Skill</a></li>
        <li><a href="#services">Portfolio development</a></li>
        <li><a href="#portfolio">Proyects</a></li>
        <li><a href="#testimonials">Certificate</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className={styles.footer__socials}>
        <a href="https://www.linkedin.com/in/luisblanco-developper" target='_blank' rel="noreferrer"><BsLinkedin/></a> 
        <a href="https://www.instagram.com/danielblanco_sc/" target='_blank' rel="noreferrer"><GrInstagram/></a>
        <a href="https://api.whatsapp.com/send/?phone=5491124099365" target='_blank' rel="noreferrer"><IoLogoWhatsapp/></a>
      </div>

      <div className={styles.footer__copyright}>
        <small>&copy; All rights reserved to Luis Daniel Blanco Oropeza</small>
      </div>
    </footer>
  )
}

export default Footer

