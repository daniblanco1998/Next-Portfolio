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
    title: 'Task Manager(CRUD API requests).',
    github: 'https://github.com/daniblanco1998',
    demo: '/tasksApi'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Image search engine(requests to external APIs)',
    github: 'https://github.com/daniblanco1998',
    demo: '/proyectoImage'
  },
  {
    id: 4,
    image: IMG4,
    title: 'Mock login',
    github: 'https://github.com/daniblanco1998',
    demo: '/loginDemo'
  },
]

export const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h4>My Recent Work</h4>
      <h2>PROYECTS</h2>

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
                  <Link href={demo} className='btn'>
                    <a href={demo} className='btn'>Live demo</a>
                  </Link>
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
