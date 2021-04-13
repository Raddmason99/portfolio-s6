//import NextJS dependencies
import Head from 'next/head'

//import other dependencies
import { useEffect } from 'react'
import { useRouter } from 'next/router'

//import styling
import art_style from '../styles/Error.module.scss'

//construct return page-elements
const NotFound_page = () => {

    //construct router
    const router = useRouter()

    //create automatic re-direct
    useEffect(() => {
        setTimeout(() => {
            router.push('/')
        }, 4000)
    }, [])

    return ( //return page-elements
        <>
            <Head>
                <title></title>
            </Head>
            <main className="body_container">



            </main>
        </>
    );
}
//export page-elements
export default NotFound_page;