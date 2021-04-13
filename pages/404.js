//import NextJS dependencies
import Head from 'next/head'

//import other dependencies
import { useEffect } from 'react'
import { useRouter } from 'next/router'

//import styling
//

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
            <main className={ }>



            </main>
        </>
    );
}
//export page-elements
export default NotFound_page;