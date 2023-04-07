import { api } from "@/api/config";
import { endpoint } from "@/api/endpoint";

class TPSServices {
  getAll() {
    return api.get(endpoint.tps);
  }

  getByID(id) {
    return api.get(`${endpoint.tps}/${id}`);
  }

  createTPS(payload) {
    return api.post(endpoint.tps, payload);
  }
}

export default new TPSServices();
