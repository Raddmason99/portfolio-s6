//import NextJS dependencies
import Head from 'next/head'
import Link from 'next/link'

//import styling
import sec_style from '../../styles/Second.module.scss'
import err_style from '../../styles/Error.module.scss'

//construct return page-elements
const Second_page = () => {
    return (
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
                        <h2>Wow! Hier valt nog niks te zien!</h2>
                        <p>Deze pagina wordt binnenkort gevuld met nogmeer leesvermaak!</p>
                    </div>
                </div>


            </main>
        </>
    );
}
//export page-elements
export default Second_page;