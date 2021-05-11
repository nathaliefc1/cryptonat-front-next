import axios from "axios";

export default class Profile {
  service: any;
  constructor() {
    this.service = axios.create({ baseURL: process.env.NEXT_PUBLIC_BASE_URL });
  }
  create = (data) => this.service.post("/api/profile", data);
}
