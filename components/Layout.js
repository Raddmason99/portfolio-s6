//import components
import Meta from './Meta'
import Header from './Header'
import Footer from './Footer'

//construct Page Layout
const Layout = ({ children }) => {
    return (
        <>
            <Meta />
            <Header />
            <main>
                {children}
            </main>
            <Footer />
        </>
    );
}

//export module as
export default Layout;