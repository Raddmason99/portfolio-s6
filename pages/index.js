//import NextJS dependencies
import Head from 'next/head'
import Link from 'next/link'
import { useEffect } from 'react'

//import styling
import home_style from '../styles/Home.module.scss'

//construct return page-elements
const Home_page = () => {
  return (
    <>
      <Head>
        <title>Portfolio | Home</title>
      </Head>
      <main className="body_container">

        <section className={home_style.home_top_box}>
          <div className={home_style.home_top_text}>
            <h2>Media Design Student</h2>
            <p>6th Semester portfolio</p>
          </div>
          <img className={home_style.home_top_image}
            src="/illustrations/undraw_Code_thinking_re_gka2.svg" />
        </section>

        <section className={home_style.home_nav_box}>
          <div className={home_style.nav_container}>
            <nav className={home_style.nav_block}>
              <Link href="/race-to-resilience"><p>Race-to-Resilience</p></Link>
              <Link href="/second"><p>Second Part</p></Link>
            </nav>
          </div>
        </section>

      </main>
    </>
  );
}
//export page-elements
export default Home_page;