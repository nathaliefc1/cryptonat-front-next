import axios from "axios";

export default class Simulator {
  service: any;
  constructor() {
    this.service = axios.create({ baseURL: process.env.NEXT_PUBLIC_BASE_URL });
  }

  addEuros = (data) => this.service.post("/api/simulator", data);
}
