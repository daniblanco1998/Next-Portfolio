import styles from '../../styles/about.module.css'
import Image from 'next/image'
import COHETE from '../../public/me-about.png'
import { BsClipboardCheck } from 'react-icons/bs'
import { FiUsers } from 'react-icons/fi'
import { BiCodeBlock } from 'react-icons/bi'


export const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>MI CARRERA</h2>

      <div id='container' className={styles.about__container}>
        <div className={styles.about__me}>
          <div className={styles.about__me_image}>
            <Image src={COHETE} alt="aboutImage" />
          </div>
        </div>

        <div className={styles.about__content}>

          <div className={styles.about__cards}>
            <article className={styles.about__card}>
              <BsClipboardCheck className={styles.about__icon} />
              <h5>Experiencia</h5>
              <small>1+ Año Trabajando</small>
            </article>

            <article className={styles.about__card}>
              <FiUsers className={styles.about__icon} />
              <h5>Referencias</h5>
              <small>1+ Contacto</small>
            </article>

            <article className={styles.about__card}>
              <BiCodeBlock className={styles.about__icon} />
              <h5>Proyectos</h5>
              <small>6+ Proyectos Completados</small>
            </article>


          </div>

          <p>
            Soy un estudiante de ingeniería informática, enfocado en el desarrollo de software,
            testing y gestión de proyectos IT, autodidacta, disciplinado, apasionado por los desafíos
            y el aprendizaje, con una enorme curiosidad. Disfruto trabajar en equipo, me considero
            una persona sociable, observadora, participativa y responsable. Busco poner a disposición
            mis habilidades para la resolución de problemas dentro del campo del desarrollo IT.
          </p>

          <a href="#contact" className='btn btn-primary'>Charlemos!</a>
        </div>

      </div>
    </section>
  )
}

export default About
