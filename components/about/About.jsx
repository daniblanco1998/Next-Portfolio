import styles from '../../styles/about.module.css'
import Image from 'next/image'
import COHETE from '../../public/me-about.png'
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
        </div>

        <div className={styles.about__content}>

          <div className={styles.about__cards}>
            <article className={styles.about__card}>
              <BsClipboardCheck className={styles.about__icon} />
              <h5>Experience</h5>
              <small>1+ Year</small>
            </article>

            <article className={styles.about__card}>
              <FiUsers className={styles.about__icon} />
              <h5>University studies</h5>
              <small>1 Year in progress</small>
            </article>

            <article className={styles.about__card}>
              <BiCodeBlock className={styles.about__icon} />
              <h5>Personal projects</h5>
              <small>3+ Proyectos</small>
            </article>


          </div>

          <p>
          I am a computer engineering student, focused on software development, 
          testing and IT project management, self-taught, disciplined, passionate 
          about challenges and learning, with an enormous curiosity. I enjoy working 
          in a team, I consider myself a sociable, observant, participatory and responsible 
          person. I seek to make available my problem solving skills within the field 
          of IT development.
          </p>

          <a href="#contact" className='btn btn-primary'>Let's talk!</a>
        </div>

      </div>
    </section>
  )
}

export default About
