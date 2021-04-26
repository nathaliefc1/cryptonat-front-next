import { Menu } from "../components/Menu";
import Head from "next/head";

const App = ({ Component, pageProps }) => (
    <div >
        <Head>
            <title>HOLA 2</title>
            <link
                href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css"
                rel="stylesheet"
                integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6"
                crossOrigin="anonymous"
            />
            <script
                src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/js/bootstrap.bundle.min.js"
                integrity="sha384-JEW9xMcG8R+pH31jmWH6WWP0WintQrMb4s7ZOdauHnUtxwoG2vI5DkLtS3qm9Ekf"
                crossOrigin="anonymous"
            />
        </Head>
        <div className="container">
            <Menu />
            <div style={{ padding: "20px 0", textAlign: "center" }}>
                <h1>Bienvenido a CRIPTO NAT</h1>
                <Component {...pageProps} />
            </div>
            <footer>
                <p>Gracias! &copy; 2021 - CRIPTO NAT</p>
            </footer>
        </div>
    </div>
);

export default App;