//import NextJS dependencies
import Head from 'next/head'
import Link from 'next/link'

//import styling
import ftr_style from '../styles/Footer.module.scss'

//construct return page-elements
const Footer = () => {
    return (
        <>
            <footer className={ftr_style.footer_container}>
                <p>Build with &#10084; by Fluxpuck</p>
                <p>© Copyright Fluxpuck 2021</p>
            </footer>
        </>
    );
}
//export page-elements
export default Footer;