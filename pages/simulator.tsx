import React, { useState } from "react";
import Form from '../components/Form';
import { PrimaryLayout } from '../components/layouts/PrimaryLayout';
import { TitleSimulator } from '../components/TitleSimulator';
import { SWRConfig } from "swr";
import { fetcher } from "../pages/api/swr-fetcher";
import { MyChart } from "../components/Chart";
import styled from "styled-components";
import { ButtonGradient } from "../components/ButtonGradient";
import SimulatorService from './api/simulator';

const service = new SimulatorService();

const Card = styled.div`
    h3 {
        font-family: "Montserrat", sans-serif;
        font-size: 1rem;
        line-height: 1.5;
        font-weight: bolder;
        padding: 7% 10%;
        text-align: center;
        color: #5A4FCF;
    }
   span {
       padding: 1% 15%;
        line-height: 1.5;
        font-family: "Montserrat", sans-serif;
        text-align: center;
        color: #696969;
    }
`
type ResolvedData = {
    quantity?: number;
    price?: number;
    cryptocurrency?: string;
    euros?: string;
}

const Simulator = ({ loggedUser }) => {
    const [resolvedData, setResolvedData] = useState<ResolvedData>({});

    const handleSaveClick = () => {
        const userId = loggedUser._id;
        console.log(resolvedData)
        service.saveTransation(resolvedData, userId);
    }

    const renderPrices = () => {
        if (resolvedData.price) {
            return (
                <Card className="card">
                    <h3 className="card-title">Total Euros per Cryptocurrency</h3>
                    <span className="card-body">{resolvedData.quantity}{"   "}{resolvedData.cryptocurrency}{"  / "}{resolvedData.euros}{"  €"}</span>
                    <span className="card-body">{resolvedData.price}{"   "}{resolvedData.cryptocurrency}{"   / €"}</span>
                    <ButtonGradient onClick={handleSaveClick}>{"Save data"}</ButtonGradient>
                </Card>
            )
        } else {
            return null;
        }
    }

    return (
        <div>
            <PrimaryLayout>
                <TitleSimulator />
                <div className="container">
                    <Form setResolvedData={setResolvedData} />
                    {renderPrices()}
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