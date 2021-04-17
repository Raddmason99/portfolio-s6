//import NextJS dependencies
import Head from 'next/head'
import Link from 'next/link'

//import styling
import hdr_style from '../styles/Header.module.scss'

//construct return page-elements
const Header = () => {
    return (
        <>
            <section className={hdr_style.header_container}>
                <div className={hdr_style.header_logo}>
                    <Link href="/"><h2>Fluxpuck</h2></Link>
                </div>
                <div className={hdr_style.nav_container}>
                    <nav className={hdr_style.nav_block}>
                        <Link href="/first"><p>Race-to-Resilience</p></Link>
                        <Link href="/second"><p>Second Part</p></Link>

                    </nav>
                </div>
            </section>
        </>
    );
}
//export page-elements
export default Header;