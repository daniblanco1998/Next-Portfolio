import Container_home from '../components/Container_home'
import Header from '../components/header/Header'
import About from '../components/about/About'
import Experience from '../components/experience/Experience'
import Services from '../components/services/Services'
import Portfolio from '../components/portfolio/Portfolio'
import Testimonials from '../components/testimonials/Testimonials'
import Contact from '../components/contact/Contact'



const Index = () => {
    return(        
        <Container_home >
            <Header/>
            <About/>
            <Experience/>
            <Services/>
            <Portfolio/>
            <Testimonials/>
            <Contact/>
        </Container_home>
    )
}

export default Index

