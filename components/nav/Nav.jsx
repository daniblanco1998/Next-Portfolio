import styles from '../../styles/nav.module.css'
import { FaHome } from 'react-icons/fa'
import { RiUser2Fill } from 'react-icons/ri'
import { MdWorkOutline } from 'react-icons/md'
import { RiServiceLine } from 'react-icons/ri'
import { AiOutlineMessage } from 'react-icons/ai'
import { useState } from 'react'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('/')

  return (
    <nav className={styles.nav}>
      <ul className='ul'>
        <li className={activeNav === '/experience' ? `${styles.active}` : ''}>
          <a href='#experience' onClick={() => setActiveNav('/experience')}>
            <span className={styles.icon__nav}><RiServiceLine /></span>
            <span className={styles.text}>Experience</span>
          </a>
        </li>
        
        <li className={activeNav === '/about' ? `${styles.active}` : ''}>
          <a href='#about' onClick={() => setActiveNav('/about')} >
            <span className={styles.icon__nav}><RiUser2Fill /></span>
            <span className={styles.text}>About</span>
          </a>
        </li>
        <li className={activeNav === '/' ? `${styles.active}` : ''}>
          <a href='./#' onClick={() => setActiveNav('/')}>
            <span className={styles.icon__nav}> <FaHome /></span>
            <span className={styles.text}>Home</span>
          </a>
        </li>
        <li className={activeNav === '/portfolio' ? `${styles.active}` : ''}>
          <a href='#portfolio' onClick={() => setActiveNav('/portfolio')}>
            <span className={styles.icon__nav}><MdWorkOutline /></span>
            <span className={styles.text}>Proyects</span>
          </a>
        </li>
        <li className={activeNav === '/contact' ? `${styles.active}` : ''}>
          <a href='#contact' onClick={() => setActiveNav('/contact')}>
            <span className={styles.icon__nav}><AiOutlineMessage /></span>
            <span className={styles.text}>Contact</span>
          </a>
        </li>
        
        <div className={styles.indicator}></div>
      </ul>

    </nav>
  )
}

export default Nav
