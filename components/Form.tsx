import React from "react";
import ReactDOM from "react-dom";
import { useForm } from "react-hook-form";
import { useUser } from '@auth0/nextjs-auth0';
import Simulator from '../pages/api/simulator';

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
    crypto: CryptoOptions;
}
export const addEuros = async (data) => {
    const response = await simulator.addEuros(data);
    return response;
};

export default function Form(props) {
    const { register, handleSubmit, reset } = useForm<IFormInput>();
    const onSubmit = handleSubmit(async (data: IFormInput) => {
        //data.euros = euros;
        await addEuros(data);
        console.log('SUBMIT');
        console.log(data);
        reset();
    });
    const { user, error, isLoading } = useUser();

    return (

        <form className="w-50 m-auto d-flex flex-row justify-content-center" onSubmit={handleSubmit(onSubmit)}>
            { user && (
                <>
                    <input
                        className="form-control col-xs-2 mr-2"
                        type="number"
                        placeholder="Euros"
                        {...register("euros")}
                    />
                    <select className="form-control col-xs-2 ml-2 mr-2" {...register("crypto")}>
                        <option value="BTC">Bitcoin (BTC)</option>
                        <option value="ETH">Ethereum (ETH)</option>
                        <option value="ADA">Cardano (ADA)</option>
                        <option value="LTC">Litecoin (LTC)</option>
                        <option value="DOT">Polkadot (DOT)</option>
                        <option value="XLM">Stellar (XLM)</option>
                        <option value="BNB">Binance Coin (BNB)</option>
                    </select>
                    <input className="col-2 btn btn-primary" type="submit" />
                </>
            )}
        </form>
    );
}



