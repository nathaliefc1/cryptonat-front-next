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

const Card = styled.div`
    h1 {
        font-family: "Montserrat", sans-serif;
        font-size: 3rem;
        line-height: 1.5;
        font-weight: bolder;
        padding: 2% 10%;
        text-align: center;
        color: #5A4FCF;
    }
    p {
       padding: 1% 10%;
        line-height: 1.5;
        font-family: "Montserrat", sans-serif;
        text-align: center;
        color: #696969;
    }
   
`

const Simulator = () => {



    return (
        <div>
            <PrimaryLayout>
                <Card>
                    <h1>Your Cryptocurrency</h1>
                    <p>Check out all the price check you save!</p>
                </Card>
            </PrimaryLayout>
        </div>
    );
};

export default Simulator;