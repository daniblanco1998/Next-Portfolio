import styles from '../../styles/header.module.css'
import Link from 'next/link'

export const CTA = () => {
  return (
    <div className={styles.cta}>
        <a href='blancoluis_cv .pdf' download className={styles.a__static1}><span>Descargar CV</span><li></li></a>
        <a href="#contact" className={styles.a__static2}><span>Contactame</span><li></li></a>
    </div>
  )
}

export default CTA
