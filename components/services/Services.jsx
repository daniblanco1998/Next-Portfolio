import styles from '../../styles/services.module.css'
import {GrCheckmark} from 'react-icons/gr'

export const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>
        
      <div id='container' className={styles.services__container}>
        
        <article className={styles.service}>
          <div className={styles.service__head}>
            <h3>WED DEVELOPMENT</h3>
          </div>

          <ul className= {styles.service__list}>
            <li>
              <GrCheckmark className={styles.service__list_icon}/>
              <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <GrCheckmark className={styles.service__list_icon}/>
              <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <GrCheckmark className={styles.service__list_icon}/>
              <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <GrCheckmark className={styles.service__list_icon}/>
              <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <GrCheckmark className={styles.service__list_icon}/>
              <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>
          </ul>
        </article>
        
        
       
        {/*WED DEVELOPMENT*/}

        <article className={styles.service}>
          <div className={styles.service__head}>
            <h3>QUALITY ASSURANCE</h3>
          </div>

          <ul className= {styles.service__list}>
            <li>
              <GrCheckmark className={styles.service__list_icon}/>
              <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <GrCheckmark className={styles.service__list_icon}/>
              <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <GrCheckmark className={styles.service__list_icon}/>
              <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <GrCheckmark className={styles.service__list_icon}/>
              <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <GrCheckmark className={styles.service__list_icon}/>
              <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>
          </ul>
        </article>
        {/*QUALITY ASSURANCE*/}

        <article className={styles.service}>
          <div className={styles.service__head}>
            <h3>PROJECT MANAGEMENT</h3>
          </div>

          <ul className= {styles.service__list}>
            <li>
              <GrCheckmark className={styles.service__list_icon}/>
              <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <GrCheckmark className={styles.service__list_icon}/>
              <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <GrCheckmark className={styles.service__list_icon}/>
              <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <GrCheckmark className={styles.service__list_icon}/>
              <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <GrCheckmark className={styles.service__list_icon}/>
              <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>
          </ul>
        </article>
        
        {/*PROJECT MANAGEMENT*/}
      </div>
     

    </section>

  )
  
}

export default Services
