import React from 'react'
import styles from '../../styles/./experience.module.css'
import { BsPatchCheckFill } from 'react-icons/bs'

export const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div id='container' className={styles.experience__container}>
        <div className={styles.experience__frontend}>

          <h3>Frontend Development</h3>
          <div className={styles.experience__content}>
            <article className={styles.experience__details}>
              <BsPatchCheckFill className={styles.experience__details_icon} />
              <div>
                <h4>HTML</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className={styles.experience__details}>
              <BsPatchCheckFill className={styles.experience__details_icon} />
              <div>
                <h4>CSS</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className={styles.experience__details}>
              <BsPatchCheckFill className={styles.experience__details_icon} />
              <div>
                <h4>JavaScript</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className={styles.experience__details}>
              <BsPatchCheckFill className={styles.experience__details_icon} />
              <div>
                <h4>React.JS</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
          </div>

        </div>
        {/*END of FRONTEND*/}
        <div className={styles.experience__backend}>

          <h3>Backend Development</h3>
          <div className={styles.experience__content}>
            <article className={styles.experience__details}>
              <BsPatchCheckFill className={styles.experience__details_icon} />
              <div>
                <h4>Node.JS</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className={styles.experience__details}>
              <BsPatchCheckFill className={styles.experience__details_icon} />
              <div>
                <h4>MongoDB</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className={styles.experience__details}>
              <BsPatchCheckFill className={styles.experience__details_icon} />
              <div>
                <h4>Python 3</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>

            <article className={styles.experience__details}>
              <BsPatchCheckFill className={styles.experience__details_icon} />
              <div>
                <h4>Postman</h4>
                <small className="text-light">Basic</small>
              </div>
            </article>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Experience

