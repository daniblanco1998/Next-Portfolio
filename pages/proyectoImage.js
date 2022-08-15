import { useState } from 'react';
import {Formik, Form, Field} from 'formik'
import stylesArticles from '../styles/pimg_articles.module.css'
import stylesContent from '../styles/pimg_content.module.css'
import stylesHeader from '../styles/pimg_header.module.css'
import {BiSearchAlt2} from 'react-icons/bi'
import styled from 'styled-components'


const Button = styled.button`
  max-width: 30%;
  padding: 5px 13px;
  color: #fff;
  font-weight: 600;
  text-transform: uppercase;
  background: transparent;
  border: none;
  outline: 0;
  cursor: pointer;
  margin-top: 0.6rem;
  margin-right: 20px;
  position: absolute;
`

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
            <Button type="submit">
              <BiSearchAlt2/>
            </Button>
          </Form>
        </Formik>
      </header>
      <div className={stylesContent.container}>
        <div className={stylesContent.center}>
          {photos.map(photo => <article className={stylesArticles.article} key={photo.id} onClick={() => open(photo.links.html)}>
            <img src={photo.urls.regular}/>
            <p>{[photo.description, photo.alt_description].join(' - ')}</p>
          </article>)}
        </div>
      </div>
    </div>
  );
}

export default App;


