//import components
import Meta from './Meta'
import Header from './Header'

//construct Page Layout
const Layout = ({ children }) => {
    return (
        <>
            <Meta />
            <Header />
            <main>
                {children}
            </main>
        </>
    );
}

//export module as
export default Layout;