import styles from '../../styles/services.module.css'
import {GrCheckmark} from 'react-icons/gr'

export const Services = () => {
  return (
    <section id='services'>
      <h4>Resources used for</h4>
      <h2>Portfolio development</h2>
        
      <div id='container' className={styles.services__container}>
        
        <article className={styles.service}>
          <div className={styles.service__head}>
            <h3>BACKEND</h3>
          </div>

          <ul className= {styles.service__list}>
            <li>
              <GrCheckmark className={styles.service__list_icon}/>
              <p>Node.Js</p>
            </li>
            <li>
              <GrCheckmark className={styles.service__list_icon}/>
              <p>Next.Js</p>
            </li>
            <li>
              <GrCheckmark className={styles.service__list_icon}/>
              <p>MongoDB</p>
            </li>
            <li>
              <GrCheckmark className={styles.service__list_icon}/>
              <p>POO</p>
            </li>
            <li>
              <GrCheckmark className={styles.service__list_icon}/>
              <p>Apis</p>
            </li>
          </ul>
        </article>
      

        <article className={styles.service}>
          <div className={styles.service__head}>
            <h3>FRONDEND</h3>
          </div>

          <ul className= {styles.service__list}>
            <li>
              <GrCheckmark className={styles.service__list_icon}/>
              <p>JavaScript</p>
            </li>
            <li>
              <GrCheckmark className={styles.service__list_icon}/>
              <p>React.Js</p>
            </li>
            <li>
              <GrCheckmark className={styles.service__list_icon}/>
              <p>JSX</p>
            </li>
            <li>
              <GrCheckmark className={styles.service__list_icon}/>
              <p>CSS</p>
            </li>
            <li>
              <GrCheckmark className={styles.service__list_icon}/>
              <p>Styled components</p>
            </li>
          </ul>
        </article>
      

        <article className={styles.service}>
          <div className={styles.service__head}>
            <h3>SERVICIOS</h3>
          </div>

          <ul className= {styles.service__list}>
            <li>
              <GrCheckmark className={styles.service__list_icon}/>
              <p>MongoDB Atlas</p>
            </li>
            <li>
              <GrCheckmark className={styles.service__list_icon}/>
              <p>Vercel</p>
            </li>
            <li>
              <GrCheckmark className={styles.service__list_icon}/>
              <p>React Icons</p>
            </li>
            <li>
              <GrCheckmark className={styles.service__list_icon}/>
              <p>EmailJs Api</p>
            </li>
          </ul>
        </article>
        
        
      </div>
     

    </section>

  )
  
}

export default Services
