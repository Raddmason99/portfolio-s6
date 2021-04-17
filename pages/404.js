//import NextJS dependencies
import Head from 'next/head'

//import other dependencies
import { useEffect } from 'react'
import { useRouter } from 'next/router'

//import styling
import err_style from '../styles/Error.module.scss'

//construct return page-elements
const NotFound_page = () => {

    //construct re-direct timer
    useEffect(() => {
        let seconds = 5
        let el = document.getElementById('seconds-counter');
        let refreshTimer = setInterval(function () {
            if (seconds <= 0) { clearInterval(refreshTimer) }
            seconds--
            el.innerText = "Redirecting in " + seconds + " ...";
        }, 1000);
    })

    //construct router
    const router = useRouter()
    useEffect(() => {
        setTimeout(() => {
            router.back()
        }, 4000)
    }, [])

    return ( //return page-elements
        <>
            <Head>
                <title></title>
            </Head>
            <main className="body_container">

                <div className={err_style.error_container}>
                    <img className={err_style.error_image}
                        src='/illustrations/undraw_Faq_re_31cw.svg'
                    />
                    <div className={err_style.error_text}>
                        <h2>Oops! Page was not Found.</h2>
                        <p>You will be automatically redirected back to the previous page...</p>
                        <p id='seconds-counter'>Redirecting in 5 ...</p>
                    </div>
                </div>

            </main>
        </>
    );
}
//export page-elements
export default NotFound_page;