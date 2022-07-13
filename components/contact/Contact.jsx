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
    sendAddres:'enviar un correo',
    icon: <MdOutlineMarkEmailUnread className={styles.contact__option_icon}/>
  },
  {
    media:'Linkedin',
    addres:"https://www.linkedin.com/in/luisblanco-developper",
    nameAddres: 'linkedin.com/in/luisblanco-developper', 
    sendAddres:'Ir al feed',
    icon: <BsLinkedin className={styles.contact__option_icon}/>
  },
  {
    media:'Whatsapp',
    addres:"https://api.whatsapp.com/send/?phone=5491124099365",
    nameAddres: '+5491124099365', 
    sendAddres:'Enviar whatsapp',
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
      <h5>Get In Touch</h5>
      <h2>CONTACTAME</h2>

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
              .required('Campo Obligatorio!')
              .typeError('Solo se puede ingresar texto!'),
            email: Yup
              .string()
              .email('Correo invalido')
              .required('Campo Obligatorio!'),
            message: Yup
              .string()
              .required('Campo Obligatorio!')
              .min(20, 'Debe escribir minimo 20 caracteres!')
              .max(200, 'Existe un limite de 200 caracteres para este campo!')
          })}
          onSubmit={() =>{
            cambiarFormularioEnviado (true)
          }}
        >
          <Form onSubmit={sendEmail}>
            <InputContact type="text" name='name' placeholder='Nombre y apellido' className='input'/>
            <InputContact type="email" name='email' placeholder='Correo' className='input'/>
            <InputContact as='textarea' name="message" rows="7" placeholder='Mensaje...' className='input'/>
            <button type='submit' className='btn btn-primary'>Enviar mensaje</button>
          </Form>
        </Formik>
      </div>
    </section>
  )
}

export default Contact
