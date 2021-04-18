//import NextJS dependencies
import Head from 'next/head'
import Link from 'next/link'

//import styling
import frst_style from '../../styles/First.module.scss'

//construct return page-elements
const First_page = () => {
    return (
        <>
            <Head>
                <title></title>
            </Head>
            <main className="body_container">

                <nav className={frst_style.nav_block}>
                    <Link href="#inleiding"><p>Inleiding</p></Link>
                    <Link href="#proces"><p>Proces</p></Link>
                    <Link href="#product"><p>Product</p></Link>
                    <Link href="#conclusie"><p>Conclusie</p></Link>
                    <Link href="#reflectie"><p>Reflectie</p></Link>
                </nav>



                <section className={frst_style.intro_container}>
                    <div className={frst_style.intro_container_inherit}>
                        <div className={frst_style.intro_container_textbox}>
                            <h2>De ontwikkeling van een gebruiksvriendelijke mobiele interface voor een kennisplatform</h2>
                            <p>United Nation's Race to Resilience Channelge</p>
                        </div>
                    </div>
                </section>



                <section id="inleiding" className={frst_style.inleiding_container}>

                    <article>
                        <h2>Inleiding</h2>
                        <p>Tekst...</p>
                    </article>

                    <article>
                        <h2>De opdracht</h2>
                        <p>Tekst...</p>
                    </article>

                </section>



                <section className={frst_style.inbetween01_container}>
                    <div className={frst_style.inbetween01_box}>
                        <a className={frst_style.inbetween_button01}
                            href="/documents/"
                            target="_blank">
                            Leeswijzer
                        </a>
                        <a className={frst_style.inbetween_button02}
                            href="/documents/"
                            target="_blank">
                            Analyse Opdracht
                        </a>
                        <a className={frst_style.inbetween_button02}
                            href="/documents/"
                            target="_blank">
                            Project Document
                        </a>
                    </div>
                </section>




                <section id="proces">

                    <article>
                        <h2>Proces</h2>
                        <p>Tekst...</p>
                    </article>

                    <article>
                        <h3>Oriëntatiefase</h3>
                        <p>Tekst...</p>
                    </article>

                    <article>
                        <h3>Onderzoekfase</h3>
                        <p>Tekst...</p>
                    </article>

                    <article>
                        <h3>Conceptfase</h3>
                        <p>Tekst...</p>
                    </article>

                    <article>
                        <h3>Testfase</h3>
                        <p>Tekst...</p>
                    </article>

                    <article>
                        <h3>Prototypefase</h3>
                        <p>Tekst...</p>
                    </article>

                    <article>
                        <h3>Overdrachtfase</h3>
                        <p>Tekst...</p>
                    </article>

                </section>



                <section id="product">

                    <article>
                        <h2>Product</h2>
                        <p>Tekst...</p>
                    </article>

                </section>



                <section id="conclusie">

                    <article>
                        <h2>Conclusie</h2>
                        <p>Tekst...</p>
                    </article>

                </section>



                <section id="reflectie">

                    <article>
                        <h2>Reflectie</h2>
                        <p>Tekst...</p>
                    </article>

                </section>

            </main>
        </>
    );
}
//export page-elements
export default First_page;