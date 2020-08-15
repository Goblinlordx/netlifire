import "@fortawesome/fontawesome-free/css/all.css"
import "./layout.css"
import Layout from "../components/layout"

export default ({ Component, pageProps }) => (
  <Layout>
    <Component {...pageProps} />
  </Layout>
)
