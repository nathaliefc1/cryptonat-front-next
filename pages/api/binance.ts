import axios from "axios";

export default class Binance {
  service: any;
  constructor() {
    this.service = axios.create({ baseURL: "https://api.binance.com" });
  }

  getCryptoPrice = (symbol) =>
    this.service.get(`/api/v3/ticker/price?symbol=${symbol}EUR`);
}
