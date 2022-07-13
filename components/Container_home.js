import Head from "next/head";
import Footer from './footer/Footer'
import Nav from './nav/Nav'


const Container_Home = (props) => {
    return(
        <div className='container_home'>
            <Head>
                <link rel="icon" href="/icons8-larva-del-moscardón-48.png" />
                <title>React-porfolio</title>
            </Head>
            <Nav/>
            {props.children}
            <Footer/>
        </div>
    )
}

export default Container_Home


