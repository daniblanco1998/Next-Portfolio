import styles from '../../styles/portfolio.module.css'
import Image from 'next/image'
import IMG1 from '../../public/portfolio1.png' 
import IMG2 from '../../public/portfolio2.png'
import IMG3 from '../../public/portfolio3.png' 
import IMG4 from '../../public/portfolio4.jpg' 
import IMG5 from '../../public/portfolio5.png' 
import IMG6 from '../../public/portfolio6.jpg' 
import Link from 'next/link'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Gestor de tareas(CRUD).',
    github: 'https://github.com/daniblanco1998',
    demo: '/tasksApi'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Calculadora de interes compuesto.',
    github: 'https://github.com/daniblanco1998',
    demo: '/proyectoCalculadora'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Figma dashboard UI kit fror data desing wed apps',
    github: 'https://github.com/daniblanco1998',
    demo: '/proyectoImage'
  },
  {
    id: 4,
    image: IMG4,
    title: 'Maintaining tasks and tracking progress',
    github: 'https://github.com/daniblanco1998',
    demo: '/loginDemo'
  },
  {
    id: 5,
    image: IMG5,
    title: 'Charts templates & infographics in Figma',
    github: 'https://github.com/daniblanco1998',
    demo: '/proyectoCalculadora'
  },
  {
    id: 6,
    image: IMG6,
    title: 'Charts templates & infographics in Figma',
    github: 'https://github.com/daniblanco1998',
    demo: '/proyectoCalculadora'
  }
]

export const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>MY PROYECTS</h2>

      <div id='container' className={styles.portfolio__container}>
        {
          data.map(({id, image, title, github, demo}) => {
            return(
              <article key = {id} className={styles.portfolio__item}>
                <div className={styles.portfolio__item_image}>
                  <Image src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <p>descripcion</p>
                <div className={styles.portfolio__item_cta}>
                  <a href={github} className='btn'target='blank'>Github</a>
                  <Link href={demo} className='btn btn-primary' target='blank'>Live Demo</Link>
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio
