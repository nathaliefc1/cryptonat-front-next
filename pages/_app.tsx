import { UserProvider } from '@auth0/nextjs-auth0';
import { PrimaryLayout } from "../components/layouts/PrimaryLayout";
import { CryptoTile } from '../components/CryptoTile';
import { MyChart } from '../components/Chart';
import { Title } from '../components/Title';
import { Calltoaction } from '../components/Calltoaction';
import { Footer } from '../components/Footer';
import { Menu } from '../components/Menu';




const App = ({ Component, pageProps }) => (
    <UserProvider>
        <Menu />
        <Component {...pageProps} />
        <Footer />
    </UserProvider>
);

export default App;