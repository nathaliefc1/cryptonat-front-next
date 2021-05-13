import axios from "axios";

export default class Binance {
  service: any;
  constructor() {
    this.service = axios.create({ baseURL: "https://api.binance.com" });
  }

  getCryptoPrice = (symbol, start, end) =>
    this.service.get(
      `/api/v3/klines?symbol=${symbol}EUR&interval=1d&startTime=${start}&endTime=${end}`
    );
}
