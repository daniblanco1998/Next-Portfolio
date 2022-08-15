import styles from '../../styles/header.module.css'
import { BsLinkedin } from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa'
import { IoLogoWhatsapp } from 'react-icons/io'


export const SocialNetworks = () => {

    return (
        <div className={styles.header__socials}>

            <a
                href="https://www.linkedin.com/in/luisblanco-developper"
                target='_blank'
                rel="noreferrer">
                <BsLinkedin />
            </a>

            <a
                href="https://github.com/daniblanco1998"
                target='_blank'
                rel="noreferrer">
                <FaGithub />
            </a>
            <a
                href="https://api.whatsapp.com/send/?phone=5491124099365"
                target='_blank'
                rel="noreferrer">
                <IoLogoWhatsapp />
            </a>
        </div>
    )
}

export default SocialNetworks
