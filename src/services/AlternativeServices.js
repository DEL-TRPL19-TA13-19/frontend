import { api } from "@/api/config";
import { endpoint } from "@/api/endpoint";

class AlternativeServices {
  getAll() {
    return api.get(`${endpoint.alternative}`);
  }

  getByCollectionID(id) {
    return api.get(`${endpoint.alternative}/collection/${id}`);
  }

  getByID(id) {
    return api.get(`${endpoint.alternative}/${id}`);
  }

  create(payload) {
    return api.post(endpoint.alternative, payload);
  }

  update(payload) {
    return api.patch(endpoint.alternative, payload);
  }

  delete(id) {
    return api.delete(endpoint.alternative + `/${id}`);
  }
}

export default new AlternativeServices();
