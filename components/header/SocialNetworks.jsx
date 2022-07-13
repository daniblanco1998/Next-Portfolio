import styles from '../../styles/header.module.css'
import Link from 'next/link'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {IoLogoWhatsapp} from 'react-icons/io'


export const SocialNetworks = () => {

    return (
        <div className={styles.header__socials}>
            <Link href="https://www.linkedin.com/in/luisblanco-developper"
             target='_blank' 
             rel="noreferrer">
                <a><BsLinkedin/></a>
            </Link>
            <Link href="https://github.com/daniblanco1998"
             target='_blank' 
             rel="noreferrer">
                <a><FaGithub /></a>
            </Link>
            <Link href="https://api.whatsapp.com/send/?phone=5491124099365"
             target='_blank' 
             rel="noreferrer">
                <a><IoLogoWhatsapp /></a>
            </Link>  
        </div>
    )
}

export default SocialNetworks
