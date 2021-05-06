import { PrimaryLayout } from "../components/layouts/PrimaryLayout";
import { CryptoTile } from '../components/layouts/CryptoTile';
import { MyChart } from '../components/layouts/Chart';
import { Title } from '../components/Title';
import { Calltoaction } from '../components/Calltoaction';
import { Instructions } from '../components/Instruction';
import Formm from '../components/Form';


const IndexPage = () => {
    // const CryptoTile: ({ title, rate, fluctuation });
    return (
        <div>
            <PrimaryLayout>

                <Title />
                <Instructions />
                <div className="container">
                    <div className="card-group">
                        <div className="card col-2">
                            <CryptoTile />
                        </div>
                    </div>
                </div>
                <div className="container" style={{ padding: '20px', width: '400px', height: '300px' }}>
                    {/* <h3 >
                    My chart
                </h3> 
                <MyChart />*/}

                </div>
                <div>
                    <Formm />
                </div>
            </PrimaryLayout>
            <Calltoaction />
        </div>


    );
};

export default IndexPage;