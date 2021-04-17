//import NextJS dependencies
import Head from 'next/head'
import Link from 'next/link'

//import styling
import frst_style from '../../styles/First.module.scss'
import home_style from '../../styles/Home.module.scss'

//construct return page-elements
const First_page = () => {
    return (
        <>
            <Head>
                <title></title>
            </Head>
            <main className="body_container">

                <nav className={home_style.nav_block}>
                    <Link href="#inleiding"><p>Inleiding</p></Link>
                    <Link href="#proces"><p>Proces</p></Link>
                    <Link href="#product"><p>Product</p></Link>
                    <Link href="#conclusie"><p>Inleiding</p></Link>
                    <Link href="#reflectie"><p>Reflectie</p></Link>
                </nav>


                <section id="inleiding">
                    <p>
                        kaas is baas
</p>
                </section>
                <section id="proces">
                    <p>
                        kaas is baas
</p>
                </section>
                <section id="product">
                    <p>
                        kaas is baas
</p>
                </section>
                <section id="conclusie">
                    <p>
                        kaas is baas
</p>
                </section>
                <section id="reflectie">
                    <p>
                        kaas is baas
</p>
                </section>

            </main>
        </>
    );
}
//export page-elements
export default First_page;