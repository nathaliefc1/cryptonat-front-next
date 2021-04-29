import { UserProvider } from '@auth0/nextjs-auth0';
import { PrimaryLayout } from "../components/layouts/PrimaryLayout";
import { CryptoTile } from '../components/layouts/CryptoTile';
import { MyChart } from '../components/layouts/Chart';



const App = ({ Component, pageProps }) => (

    <UserProvider>
        <PrimaryLayout>
            <Component {...pageProps} />
            <div className="container">
                <div className="card-group">
                    <div className="card col-2">
                        <CryptoTile />

                    </div>
                    <div className="card col-2">
                        <CryptoTile />
                    </div>
                    <div className="card col-2">
                        <CryptoTile />
                    </div>
                    <div className="card col-2">
                        <CryptoTile />
                    </div>
                    <div className="card col-2">
                        <CryptoTile />
                    </div>
                </div>
                <div className="card-group">
                    <div className="card col-2">
                        <CryptoTile />

                    </div>
                    <div className="card col-2">
                        <CryptoTile />
                    </div>
                    <div className="card col-2">
                        <CryptoTile />
                    </div>
                    <div className="card col-2">
                        <CryptoTile />
                    </div>
                    <div className="card col-2">
                        <CryptoTile />
                    </div>
                </div>
            </div>
            <div className="container" style={{ padding: '20px', width: '400px', height: '300px' }}>
                <h3 >
                    My chart
                </h3>
                <MyChart />
            </div>
        </PrimaryLayout>
    </UserProvider>
);

export default App;