import { Navbar } from "./Navbar"
import Head from "next/head";

export const Layout = ({children}) => {
    return(
        <>
            <Head>
                <link rel="icon" href="/lamp-svgrepo-com.svg" />
                <title>Task</title>
            </Head>
            <Navbar/>
            {children}
        </>
    )
}