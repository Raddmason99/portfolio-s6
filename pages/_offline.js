//import NextJS dependencies
import Head from 'next/head'

//import styling
import err_style from '../styles/Error.module.scss'

//construct return page-elements
const Offline_page = () => {
    return ( //return page-elements
        <>
            <Head>
                <title></title>
            </Head>
            <main className="body_container">

                <div className={err_style.error_container}>
                    <img className={err_style.error_image}
                        src='/illustrations/undraw_Notify_re_65on.svg'
                    />
                    <div className={err_style.error_text}>
                        <h2>Oops! You are currently offline!</h2>
                        <p>It seems like you are having connection issues...</p>
                    </div>
                </div>

            </main>
        </>
    );
}
//export page-elements
export default Offline_page;