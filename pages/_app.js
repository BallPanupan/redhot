import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/index.scss'
import '../components/buttons/BtnWarning/BtnWarning.scss'

import Layout from '../components/layout'

function MyApp({ Component, pageProps }) {
    return (
        <Layout><Component {...pageProps} /></Layout>
    )
}

export default MyApp