//import NextJS libraries
import Head from 'next/head'

const APP_NAME = 'S6 Portfolio'
const APP_DESCRIPTION = '6th Semester Media Design Portfolio'

//construct general Meta Data
const Meta = ({ children }) => {
    return (
        <Head>
            <link rel="manifest" href="/manifest.json" />

            <meta name='twitter:card' content='summary' />
            <meta name='twitter:url' content='https://portfolio.fluxpuck.com/' />
            <meta name='twitter:title' content={APP_NAME} />
            <meta name='twitter:description' content={APP_DESCRIPTION} />
            <meta name='twitter:image' content='https://fhict-fluxpuck.vercel.app/app_icons/icon-192x192.png' />
            <meta name='twitter:creator' content='@Fluxpuck' />
            <meta property='og:type' content='website' />
            <meta property='og:title' content={APP_NAME} />
            <meta property='og:description' content={APP_DESCRIPTION} />
            <meta property='og:site_name' content='portfolio.fluxpuck.com' />
            <meta property='og:url' content='https://portfolio.fluxpuck.com/' />
            <meta property='og:image' content='https://fhict-fluxpuck.vercel.app/app_icons/icon-256x256.png' />

            {children}
        </Head>
    );
}

//export module as
export default Meta;