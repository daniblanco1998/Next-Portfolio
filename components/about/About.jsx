import styles from '../../styles/about.module.css'
import Image from 'next/image'

import COHETE from '../../public/astrojupiter.png'
import { BsClipboardCheck } from 'react-icons/bs'
import { FiUsers } from 'react-icons/fi'
import { BiCodeBlock } from 'react-icons/bi'


export const About = () => {
  return (
    <section id='about'>
      <h4>know a little</h4>
      <h2>About Me</h2>

      <div id='container' className={styles.about__container}>
        <div className={styles.about__me}>
          <div className={styles.about__me_image}>
            <Image src={COHETE} alt="aboutImage" />
          </div>
          <div>
            <a href="https://www.freepik.es/vector-gratis/astronauta-sentado-planeta-agitando-mano-dibujos-animados-vector-icono-ilustracion-concepto-icono-tecnologia-ciencia-aislado-vector-premium-estilo-dibujos-animados-plana_16953182.htm#query=astronauta%20png&position=27&from_view=keyword&track=ais&uuid=650af17d-5171-4ae2-85a2-b0947ca7889c"
            className='catalyststuff'>
              <small >&copy; Imagen de catalyststuff</small>
            </a>
          </div>
          
        </div>
        


        <div className={styles.about__content}>

          <div className={styles.about__cards}>
            <article className={styles.about__card}>
              <BsClipboardCheck className={styles.about__icon} />
              <h5>Experience</h5>
              <p>1+ Year</p>

            </article>

            <article className={styles.about__card}>
              <FiUsers className={styles.about__icon} />
              <h5>University studies</h5>
              <p>1 Year in progress</p>
            </article>

            <article className={styles.about__card}>
              <BiCodeBlock className={styles.about__icon} />
              <h5>Personal projects</h5>
              <p>3+ Proyectos</p>
            </article>


          </div>

          <p>
          Computer Engineering student and Database Analyst by profession, specialized in SQL, 
          Python and visualization tools such as Power BI. He experienced in developing web 
          applications with JavaScript, React.js and Node.js.
          <br></br><br></br>
          Committed collaborator, oriented to teamwork and providing creative solutions.
           Effective communication, adaptability and responsibility in project management.
           <br></br><br></br>
          Looking for opportunities to apply my technical skills in data management and my 
          proactive approach to contribute to the growth of dynamic teams. Let's connect to 
          explore possibilities in the exciting world of technological development!
          </p>

          <a href="#contact" className='btn btn-primary'>Let's talk!</a>
        </div>

      </div>
    </section>
  )
}

export default About
