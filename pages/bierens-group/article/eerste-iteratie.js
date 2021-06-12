//import NextJS dependencies
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'

//import styling
import article_style from '../../../styles/Article.module.scss'
import err_style from '../../../styles/Error.module.scss'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


//construct return page-elements
const article = () => {

    //setup routing
    const router = useRouter()
    const routePath = router.asPath.split('#')[1]

    return (
        <>
            <Head>
                <title>Bierens Group | Eerste Iteratie</title>
            </Head>
            <main className="body_container">

                <div className={article_style.nav_container}>
                    <nav className={article_style.nav_block}>
                        <p onClick={() => router.back()}><FontAwesomeIcon icon={faArrowLeft} />&nbsp;Back</p>
                    </nav>
                </div>

                <div className={err_style.error_container}>
                    <img className={err_style.error_image}
                        src='/illustrations/undraw_Notify_re_65on.svg'
                    />
                    <div className={err_style.error_text}>
                        <h2>Wow! Hier valt nog niks te zien!</h2>
                        <p>Deze pagina wordt binnenkort gevuld met nogmeer leesvermaak!</p>
                    </div>
                </div>


            </main>
        </>
    );
}
//export page-elements
export default article;