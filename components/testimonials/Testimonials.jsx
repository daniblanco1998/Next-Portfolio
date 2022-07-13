import styles from '../../styles/testimonials.module.css'
import AVTR1 from '../../public/avatar1.jpg'
import AVTR2 from '../../public/avatar2.jpg'
import AVTR3 from '../../public/avatar3.jpg'
import AVTR4 from '../../public/avatar4.jpg'
import Image from 'next/image'
import Button from './modalButton'
import ModalContainer from './modalContainer'
import Modal from './modal'

import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const data = [
  {
    avatar: AVTR1,
    name: 'Mileva Maric',
    review: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit Aut omnis at dolor,exercitationem nulla sapiente dolorem alias sit consequatur, repellat molestiae id. Animi'
  },
  {
    avatar: AVTR2,
    name: 'Marie Curie',
    review: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit Aut omnis at dolor,exercitationem nulla sapiente dolorem alias sit consequatur, repellat molestiae id. Animi'
  },
  {
    avatar: AVTR3,
    name: 'Albert Einstein',
    review: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit Aut omnis at dolor,exercitationem nulla sapiente dolorem alias sit consequatur, repellat molestiae id. Animi'
  },
  {
    avatar: AVTR4,
    name: 'Nicola Tesla',
    review: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit Aut omnis at dolor,exercitationem nulla sapiente dolorem alias sit consequatur, repellat molestiae id. Animi'
  }
]

export const Testimonials = () => {
  return (
    <>
      <section id='testimonials'>
        <h5>Review from clients</h5>
        <h2>COMENTARIOS</h2>

        <Swiper id='container' className={styles.testimonials__container}
          modules={[Pagination]}
          spaceBetween={40}
          slidesPerView={2}
          pagination={{ clickable: true }}>
          {
            data.map(({ avatar, name, review }, index) => {
              return (
                <>
                  <SwiperSlide key={index} className={styles.testimonial}>
                    <div className={styles.client__avatar}>
                      <Image src={avatar} alt='avatar-img' />
                    </div>
                    <h5 className={styles.client__name}>{name}</h5>
                    <small className={styles.client__review}>{review}</small>
                  </SwiperSlide>
                </>
              )
            })
          }
        </Swiper>
        <ModalContainer>
          <Button>Comentar</Button>
        </ModalContainer>
      </section>
      
      
    </>
  )
}

export default Testimonials
