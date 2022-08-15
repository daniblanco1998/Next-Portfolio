import styles from '../../styles/contact.module.css'
import { Formik, Form} from 'formik'
import * as Yup from 'yup'
import InputContact from './InputContact'
import {useState} from 'react'
import {MdOutlineMarkEmailUnread} from 'react-icons/md'
import {BsLinkedin} from 'react-icons/bs'
import {IoLogoWhatsapp} from 'react-icons/io'
import emailjs from 'emailjs-com'

const data = [
  {
    media:'Email',
    addres:"mailto:danieloropeza98sc@gmail.com",
    nameAddres: 'danieloropeza98sc@gmail.com', 
    sendAddres:'Send an email',
    icon: <MdOutlineMarkEmailUnread className={styles.contact__option_icon}/>
  },
  {
    media:'Linkedin',
    addres:"https://www.linkedin.com/in/luisblanco-developper",
    nameAddres: 'linkedin.com/in/luisblanco-developper', 
    sendAddres:'Go to feed',
    icon: <BsLinkedin className={styles.contact__option_icon}/>
  },
  {
    media:'Whatsapp',
    addres:"https://api.whatsapp.com/send/?phone=5491124099365",
    nameAddres: '+5491124099365', 
    sendAddres:'Send whatsapp',
    icon: <IoLogoWhatsapp className={styles.contact__option_icon}/>
  }
]


export const Contact = () => {

  const [cambiarFormularioEnviado] = useState(false);

  const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_kya5mrg', 'template_gyd2yfr', e.target, 'GzBKHS3aXgN2xqbtT')
        e.target.reset();
    };

  return (
    <section id='contact'>
      <h4>Here you can</h4>
      <h2>CONTACT ME</h2>

      <div className={styles.contact__container}>
        <div className={styles.contact__options}>
          {data.map(({media, addres, nameAddres, sendAddres, icon}, contactkey) => {
            return(
              <article key={contactkey} className={styles.contact__option}>
                {icon}
                <h4>{media}</h4>
                <h5>{nameAddres}</h5>
                <a href={addres} target='_blank' rel="noreferrer">{sendAddres}</a>
              </article>
            )
          })}
        </div>
        {/*FINAL DE OPCIONES DE CONTACTO*/}
        <Formik className={styles.form}
          initialValues={{name: '', email: '', message: ''}}
          validationSchema={Yup.object({
            name: Yup
              .string()
              .required('Required!')
              .typeError('Solo se puede ingresar texto!'),
            email: Yup
              .string()
              .email('Invalid email')
              .required('Required!!'),
            message: Yup
              .string()
              .required('Required!!')
              .min(20, 'You must write at least 20 characters!')
              .max(200, 'There is a 200 character limit for this field!')
          })}
          onSubmit={() =>{
            cambiarFormularioEnviado (true)
          }}
        >
          <Form onSubmit={sendEmail}>
            <InputContact type="text" name='name' placeholder='Name and lastname' className='input'/>
            <InputContact type="email" name='email' placeholder='Email' className='input'/>
            <InputContact as='textarea' name="message" rows="7" placeholder='Message...' className='input'/>
            <button type='submit' className='btn btn-primary'>Send message</button>
          </Form>
        </Formik>
      </div>
    </section>
  )
}

export default Contact
