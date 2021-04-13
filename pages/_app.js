import Layout from '../comps/Layout'
import styles from '../styles/app.scss'
import { AnimateSharedLayout } from "framer-motion"


function MyApp({ Component, pageProps }) {
  return (
    <AnimateSharedLayout>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AnimateSharedLayout>
  )
}

export default MyApp
