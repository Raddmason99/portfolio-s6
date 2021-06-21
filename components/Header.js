//import NextJS dependencies
import Link from 'next/link'
import { useRouter } from 'next/router'

//import styling
import hdr_style from '../styles/Header.module.scss'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

//construct return page-elements
const Header = () => {

    //filter router
    const router = useRouter()
    const path = router.pathname

    //change header on path
    let header_element = null
    if (path == '/') {
        header_element = <div className={hdr_style.install_block} id="Install_Button">
            <FontAwesomeIcon icon={faPlus} /><p>Install me!</p>
        </div>
    } else {
        header_element = <nav className={hdr_style.nav_block}>
            <Link href="/race-to-resilience"><p>Race-to-Resilience</p></Link>
            <Link href="/bierens-group"><p>Bierens-group</p></Link>
        </nav>
    }

    return (
        <>
            <section className={hdr_style.header_container}>
                <div className={hdr_style.header_logo}>
                    <Link href="/"><h2>Fluxpuck<span>.</span></h2></Link>
                </div>
                <div className={hdr_style.nav_container}>
                    {header_element}
                </div>
            </section>
        </>
    );
}
//export page-elements
export default Header;