import { endpoint } from "@/api/endpoint";
import { api } from "@/api/config";

class AHPServices {
  getCriteria() {
    return api.get(`${endpoint.ahp}/criteria`);
  }
  getScoresByCollectionID(collectionID) {
    return api.get(`${endpoint.ahp}/scores/${collectionID}`);
  }
  getFinalScoresByCollectionID(collectionID) {
    return api.get(`${endpoint.ahp}/final_scores/${collectionID}`);
  }

  calculateScoreByCollectionID(collectionID) {
    return api.get(`${endpoint.ahp}/scores/calculate/${collectionID}`);
  }
  calculateFinalScoreByCollectionID(collectionID) {
    return api.get(`${endpoint.ahp}/final_scores/calculate/${collectionID}`);
  }
}

export default new AHPServices();
