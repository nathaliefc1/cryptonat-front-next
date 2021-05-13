import React from "react";
import ReactDOM from "react-dom";
import { useForm } from "react-hook-form";
import { useUser } from '@auth0/nextjs-auth0';
import Simulator from '../pages/api/simulator';
import styled from 'styled-components';
import { ButtonGradient } from "./ButtonGradient";
import Binance from '../pages/api/binance';

const binance = new Binance();

const Title = styled.h1`
    font-family: "Montserrat", sans-serif;
    font-size: 3rem;
    line-height: 1.5;
    font-weight: bolder;
    padding: 7% 10%;
    text-align: center;
    color: #5A4FCF;
`

const simulator = new Simulator();

enum CryptoOptions {
    bitcoin = "BTC",
    etherium = "ETH",
    cardano = "ADA",
    litecoin = "LTC",
    polkadot = "DOT",
    stellar = "XLM",
    binance = "BNB",
    ripple = "XRP",
    dogecoin = "DOGE",
    uniswap = "UNI",
}

interface IFormInput {
    euros: Number;
    cryptocurrency: CryptoOptions;
    checkDate: Date;
}
export const addEuros = async (data) => {
    const response = await simulator.addEuros(data);
    return response;
};

export default function Form(props) {
    const { register, handleSubmit, reset } = useForm<IFormInput>();
    const onSubmit = handleSubmit(async (data: IFormInput) => {
        const response = await binance.getCryptoPrice(data.cryptocurrency);
        await addEuros(data);
        reset();
    });
    const { user, error, isLoading } = useUser();

    return (
        <div>
            <Title> Let's Start </Title>
            {!user && (
                <>
                    <h3>Please Loggin or create an account to continue</h3>
                    <ButtonGradient />
                </>
            )}
            <form className="w-50 m-auto d-flex flex-row justify-content-center" onSubmit={handleSubmit(onSubmit)}>
                {user && (
                    <>
                        <input
                            className="form-control col-xs-2 mr-2"
                            type="number"
                            placeholder="Euros"
                            {...register("euros")}
                        />
                        <select
                            className="form-control col-xs-2 ml-2 mr-2"
                            {...register("cryptocurrency")}>
                            <option value="BTC">Bitcoin (BTC)</option>
                            <option value="ETH">Ethereum (ETH)</option>
                            <option value="ADA">Cardano (ADA)</option>
                            <option value="LTC">Litecoin (LTC)</option>
                            <option value="DOT">Polkadot (DOT)</option>
                            <option value="XLM">Stellar (XLM)</option>
                            <option value="BNB">Binance Coin (BNB)</option>
                            <option value="XRP">Ripple (XRP)</option>
                            <option value="DOGE">Dogecoin (DOGE)</option>
                            <option value="UNI">Uniswap (UNI)</option>
                        </select>

                        <input className="col-2 btn btn-primary" type="submit" />
                        <input className="form-control col-xs-2 mr-2"
                            type="date"
                            placeholder="Notification date"
                            {...register("checkDate")}
                        />
                    </>
                )}
            </form>
        </div>
    );
}



