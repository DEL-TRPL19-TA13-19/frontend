import { api } from "@/api/config";
import { endpoint } from "@/api/endpoint";

class CollectionServices {
  getAll() {
    return api.get(`${endpoint.collection}`);
  }

  getByID(id) {
    return api.get(`${endpoint.collection}/${id}`);
  }

  create(payload) {
    return api.post(endpoint.collection, payload);
  }
}

export default new CollectionServices();
