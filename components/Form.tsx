import React from "react";
import ReactDOM from "react-dom";
import { useForm } from "react-hook-form";
import { useUser } from '@auth0/nextjs-auth0';
import styled from 'styled-components';
import { ButtonGradient } from "./ButtonGradient";
import Binance from '../pages/api/binance';
import moment from 'moment';

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
    euros: string;
    cryptocurrency: CryptoOptions;
    checkDate: Date;
}

export default function Form(props) {
    const { register, handleSubmit } = useForm<IFormInput>();

    const onSubmit = handleSubmit(async ({ checkDate, euros, cryptocurrency }: IFormInput) => {
        const start = moment(checkDate, 'YYYY-MM-DD').startOf('day').unix() * 1000;
        const end = moment(checkDate, 'YYYY-MM-DD').endOf('day').unix() * 1000;
        const response = await binance.getCryptoPrice(cryptocurrency, start, end);
        const price = parseFloat(response.data[0][4]) || 0;
        const fiat = parseFloat(euros) || 0;
        const quantity = fiat / price;
        props.setResolvedData({
            price,
            quantity,
            cryptocurrency,
            euros,
            dateRecorded: moment(checkDate, 'YYYY-MM-DD').toDate()
        });
    });

    const { user, error, isLoading } = useUser();

    return (
        <div>
            <Title> Let's Start </Title>
            {!user && (
                <>
                    <h3>Please Loggin or create an account to continue</h3>
                    <ButtonGradient link="/api/auth/login" >{"Login"}</ButtonGradient>
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
                        <input className="form-control col-xs-2 mr-2"
                            type="date"
                            placeholder="Notification date"
                            {...register("checkDate")}
                        />
                        <input className="col-2 btn btn-primary" type="submit" />
                    </>
                )}
            </form>
        </div>
    );
}



