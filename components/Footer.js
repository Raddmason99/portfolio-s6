//import NextJS dependencies
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

//import styling
import ftr_style from '../styles/Footer.module.scss'

//construct return page-elements
const Footer = () => {

    //filter router
    const router = useRouter()
    const path = router.pathname

    useEffect(() => {
        //get element by Id
        let flux_footer = document.getElementById("flux_footer");

        //change footer on path
        if (path == '/') {
            flux_footer.classList.add(ftr_style.absolute)
        } else {
            flux_footer.classList.remove(ftr_style.absolute)
        }
    })

    return (
        <>
            <footer id='flux_footer' className={ftr_style.footer_container}>
                <p>Build with &#10084; by Fluxpuck</p>
                <p>© Copyright Fluxpuck 2021</p>
            </footer>
        </>
    );
}
//export page-elements
export default Footer;