import { useState } from 'react';
import {Formik, Form, Field} from 'formik'
import stylesArticles from '../styles/pimg_articles.module.css'
import stylesContent from '../styles/pimg_content.module.css'
import stylesHeader from '../styles/pimg_header.module.css'
import Image from 'next/image';

const App = () => {
  const [photos, setPhotos] = useState([])
  const open = url => window.open(url)
  return (
    <div>
      <header className={stylesHeader.header}>
        <Formik
          initialValues={{ search: '' }}
          onSubmit={async values => {
            const response = await fetch(`https://api.unsplash.com/search/photos?per_page=20&query=${values.search}`, {
              headers:{
                'Authorization': 'Client-ID OPYlQH37XIvyLqxp--_Mx-sbXjpVbMd0muik3H4Hju8'
              }
            })
            
            const data = await response.json()
            // llamar a api de unsplash
            setPhotos(data.results)
          }}
        >
          <Form>
            <Field name='search' className='input' placeholder='Buscar'/>
          </Form>
        </Formik>
      </header>
      <div className={stylesContent.container}>
        <div className={stylesContent.center}>
          {photos.map(photo => <article className={stylesArticles.article} key={photo.id} onClick={() => open(photo.links.html)}>
            <Image src={photo.urls.regular} width={400} height={400}/>
            <p>{[photo.description, photo.alt_description].join(' - ')}</p>
          </article>)}
        </div>
      </div>
    </div>
  );
}

export default App;


