import styles from '../../styles/header.module.css'
import CTA from './CTA'
import SocialNetworks from './SocialNetworks'
import {FaReact} from 'react-icons/fa'
import {TbBrandNextjs} from 'react-icons/tb'
import {DiNodejsSmall} from 'react-icons/di'
import {TbBrandCss3} from 'react-icons/tb'





export const Header = () => {
  return (
    <div className={styles.sectionHeader}>
      <header className={styles.header}>
        <div id='container' className={styles.header__Container}>
          <h5>Hi, I'm</h5>
          <h1>Daniel Blanco</h1>
          <h5 className="text-light">FullStack Developer</h5>
          <CTA/>
          <SocialNetworks />
          <div className={styles.cube__container}>
            <div className={styles.cube}> 
              <div className={styles.cubeTop}></div>
              <div className={styles.ejeCube}>
                <span  id='span0' className={styles.spanCube}><FaReact className={styles.iconReact}/></span>
                <span  id='span1' className={styles.spanCube}><TbBrandNextjs className={styles.iconReact}/></span>
                <span  id='span2' className={styles.spanCube}><DiNodejsSmall className={styles.iconReact}/></span>
                <span  id='span3' className={styles.spanCube}><TbBrandCss3 className={styles.iconReact}/></span>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  )
}

export default Header
