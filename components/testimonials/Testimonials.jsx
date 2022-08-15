import styles from '../../styles/testimonials.module.css'
import CERT1 from '../../public/certificado1.jpg'
import CERT2 from '../../public/certificado2.jpg'
import CERT3 from '../../public/certificado3.jpg'
import CERT4 from '../../public/certificado4.jpg'
import CERT5 from '../../public/certificado5.jpg'
import CERT6 from '../../public/certificado6.jpg'
import CERT7 from '../../public/certificado7.jpg'
import Image from 'next/image'


import { Navigation, Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/autoplay';

import 'swiper/css/navigation';


const data = [
  {certificate: CERT2},
  {certificate: CERT3},
  {certificate: CERT1},
  {certificate: CERT4},
  {certificate: CERT5},
  {certificate: CERT6},
  {certificate: CERT7}
]

export const Testimonials = () => {
  return (
    <>
      <section id='testimonials'>
        <h4>Some of my</h4>
        <h2>Certificates</h2>

        <Swiper id='container' className={styles.testimonials__container}
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={0}
          slidesPerView={1}
          autoplay={{deplay: 800}}
          navigation
          pagination={{ clickable: true }}>
          {
            data.map(({certificate}, index) => {
              return (
                <>
                  <SwiperSlide key={index} className={styles.testimonial}>
                    <div className={styles.client__avatar}>
                      <Image src={certificate} alt='certificate-img' className={styles.img_certificate} width={800} height={600}/>
                    </div>
                  </SwiperSlide>
                </>
              )
            })
          }
        </Swiper>
        
        
      </section>
      
      
    </>
  )
}

export default Testimonials
