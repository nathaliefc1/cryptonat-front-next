import React from "react";
import ReactDOM from "react-dom";
import { useForm } from "react-hook-form";
import { useUser } from '@auth0/nextjs-auth0';

enum CryptoOptions {
    bitcoin = "BTC",
    etherium = "ETH",
    cardano = "ADA",
    litecoin = "LTC",
    polka = "DOT",
    stellar = "XLM",
    binance = "BNB"
}

interface IFormInput {
    euros: Number;
    crypto: CryptoOptions;
}

export default function Form(props) {
    const { register, handleSubmit } = useForm<IFormInput>();
    const onSubmit = (data: IFormInput) => console.log(data);
    const { user, error, isLoading } = useUser();

    return (
        <form className="w-50 m-auto d-flex flex-row justify-content-center" onSubmit={handleSubmit(onSubmit)}>
            <input
                className="form-control col-xs-2 mr-2"
                type="number"
                placeholder="Euros"
                {...register("euros")}
            />
            <select className="form-control col-xs-2 ml-2 mr-2" {...register("crypto")}>
                <option value="BTC">BTC</option>
                <option value="ETH">Ethereum (ETH)</option>
                <option value="ADA">Cardano (ADA)</option>
                <option value="LTC">Litecoin (LTC)</option>
                <option value="DOT">Polkadot (DOT)</option>
                <option value="XLM">Stellar (XLM)</option>
                <option value="BNB">Binance Coin (BNB)</option>
            </select>
            <input className="col-2 btn btn-primary" type="submit" />
        </form>
    );
}