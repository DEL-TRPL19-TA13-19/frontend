import state from "@/store/auth/state";
import * as actions from "@/store/auth/actions";
import getters from "@/store/auth/getters";
import mutations from "@/store/auth/mutations";

export default {
  namespaced: true,
  state,
  actions,
  getters,
  mutations,
};
