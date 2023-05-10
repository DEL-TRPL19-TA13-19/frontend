import { api } from "@/api/config";
import { endpoint } from "@/api/endpoint";

class CriteriaServices {
  getAllCriteria() {
    return api.get(`${endpoint.ahp}/criteria`);
  }

  updateCriteria(payload) {
    return api.patch(`${endpoint.ahp}/criteria`, payload);
  }
}

export default new CriteriaServices();
