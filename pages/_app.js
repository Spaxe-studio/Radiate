import Layout from "../layout";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <div className="bg-home">
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  );
}

export default MyApp;
