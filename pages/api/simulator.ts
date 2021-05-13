import axios from "axios";

export default class Simulator {
  service: any;
  constructor() {
    this.service = axios.create({ baseURL: process.env.NEXT_PUBLIC_BASE_URL });
  }

  saveTransation = (data, userId) =>
    this.service.post(`/api/simulator/${userId}`, data);

  getSavedCrypto = (userId) => this.service.get(`/api/simulator/${userId}`);
}
