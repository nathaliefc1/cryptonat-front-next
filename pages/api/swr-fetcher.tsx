import axios from "axios";

const binance_api = axios.create({ baseURL: "https://api.binance.com/" })

export const fetcher = async (resouce, init) => {
    const res = await binance_api.get(resouce);
    return res.data;
};