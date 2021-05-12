import axios from 'axios';
import Form from '../components/Form'
import { PrimaryLayout } from '../components/layouts/PrimaryLayout';
import { TitleSimulator } from '../components/TitleSimulator';
import { SWRConfig } from "swr";
import { fetcher } from "../pages/api/swr-fetcher";
import { MyChart } from "../components/Chart";

const Simulator = (props, { Component, pageprops }) => {
    return (
        <div>
            <PrimaryLayout>
                <TitleSimulator />
                <div className="container">
                    <Form />
                </div>
                <div className="container" style={{ padding: "50px" }}>
                    <SWRConfig
                        value={{
                            refreshInterval: 10 * 1000,
                            fetcher,
                        }}
                    >
                        <MyChart />
                    </SWRConfig>
                </div>

            </PrimaryLayout>
        </div>
    );
};

export default Simulator;

