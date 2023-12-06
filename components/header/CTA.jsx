import styles from '../../styles/header.module.css'

export const CTA = () => {
  return (
    <div className={styles.cta}>
        <a href='/BlancoLuis_cv.pdf' download className={styles.a__static1}><span>Download CV</span><li></li></a>
        <a href="#contact" className={styles.a__static2}><span>Contact me</span><li></li></a>
    </div>
  )
}

export default CTA
