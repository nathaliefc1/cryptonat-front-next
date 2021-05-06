import React from "react";
import ReactDOM from "react-dom";
import { useForm } from "react-hook-form";

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
    firstName: String;
    crypto: CryptoOptions;
}

export default function Formm() {
    const { register, handleSubmit } = useForm<IFormInput>();
    const onSubmit = (data: IFormInput) => console.log(data);

    return (
        <div className="container flex-display">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group">
                    <label>First Name</label>
                    <input
                        className="form-control"
                        placeholder="Enter full name"
                        {...register("firstName")}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="option" >Cryptocurrency selection</label>
                    <select className="Form-control" {...register("crypto")} htmlFor="option">
                        <option value="BTC">BTC</option>
                        <option value="ETH">Ethereum (ETH)</option>
                        <option value="ADA">Cardano (ADA)</option>
                        <option value="LTC">Litecoin (LTC)</option>
                        <option value="DOT">Polkadot (DOT)</option>
                        <option value="DOT">Stellar (XLM)</option>
                        <option value="BNB">Binance Coin (BNB)</option>
                    </select>
                    <input className="form-control btn btn-primary" type="submit" />
                </div>
            </form>
        </div>
    );
}