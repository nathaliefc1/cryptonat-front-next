import React, { useState, useEffect } from "react";
import { PrimaryLayout } from '../components/layouts/PrimaryLayout';
import styled from "styled-components";
import SimulatorService from './api/simulator';
import moment from "moment";

const Card = styled.div`
    padding: 2%;
    .card-body{
    border:10px;
    border-color: linear-gradient(180deg,#FD749B 5%, #281AC8 100%);
    font-family: "Montserrat", sans-serif;
    }
    h1 {
        font-size: 3rem;
        line-height: 1.5;
        font-weight: bolder;
        padding: 2% 10%;
        text-align: center;
        color: #5A4FCF;
    }
    h3{
        margin: 20px;
        font-size: 1.5rem;
        color: #696969;
    }
    span {
        margin: 6px;
        line-height: 1.5;
        text-align: center;
        color: #696969;
    }
`;

const service = new SimulatorService();

const Simulator = ({ loggedUser }) => {
    const [cryptos, setCryptos] = useState([]);
    const getCryptos = async () => {
        if (!loggedUser) return;
        const response = await service.getSavedCrypto(loggedUser._id);
        setCryptos(response.data);
    }

    useEffect(() => {
        if (!cryptos.length && loggedUser) {
            getCryptos();
        }
    }, [loggedUser])

    const gooddate = () => {
        cryptos.map((el) => (el.dateRecorded))

    }

    return (
        <div>
            <PrimaryLayout >
                <div className="card">
                    <Card className="card-body">
                        <h1>Your Cryptocurrency</h1>
                        <h3>Check out all the price you saved!</h3>

                        {!!cryptos.length && cryptos.map((el) => {
                            const { euros, cryptocurrency, quantity, dateRecorded } = el;
                            if (!euros || !cryptocurrency || !quantity || !dateRecorded) return null;
                            return (
                                <div>
                                    <span>{el.euros}{" €  / "}{el.price}{el.cryptocurrency}</span>
                                    <span style={{ margin: '0 24px' }}>{'='}</span>
                                    <span>{el.quantity}{el.cryptocurrency}</span>
                                    <span>{' at '}</span>
                                    <span>{moment(el.dateRecorded).format('Do MMMM YYYY')}</span>
                                </div>
                            )
                        })}
                    </Card>
                </div>
            </PrimaryLayout>
        </div>
    );
};

export default Simulator;