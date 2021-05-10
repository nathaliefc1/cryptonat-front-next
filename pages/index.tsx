import { PrimaryLayout } from "../components/layouts/PrimaryLayout";
import { CryptoTile } from '../components/CryptoTile';
import { MyChart } from '../components/Chart';
import { Title } from '../components/Title';
import { Calltoaction } from '../components/Calltoaction';
import { Instructions } from '../components/Instruction';
import Form from '../components/Form';
import styled from 'styled-components';

const Div = styled.div`
    background: linear-gradient(180deg,#FD749B 0%, #5A4FCF 100%);
    color: #fff;
    padding: 7% 15%;
    text-align: center;
    font-family: 'Montserrat', sans-serif;
    border-radius: 40px;
`

const IndexPage = (props) => {
    // const CryptoTile: ({ title, rate, fluctuation });
    return (
        <div>
            <PrimaryLayout>

                <Title />
                <Instructions />
                <Div className="container">
                    <div className="card-group">
                        <div className="card col-2">
                            <CryptoTile />
                        </div>
                    </div>
                </Div>
                <div className="container" style={{ padding: '20px', width: '400px', height: '300px' }}>
                    {/* <h3 >
                    My chart
                </h3> 
                <MyChart />*/}

                </div>
                <div>
                    <Form />
                </div>
            </PrimaryLayout>
            <Calltoaction />
        </div>


    );
};

export default IndexPage;