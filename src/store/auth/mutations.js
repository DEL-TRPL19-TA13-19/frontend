import { SET_AUTH_DATA, SET_LOADING } from "@/store/auth/types";

export default {
  [SET_AUTH_DATA](state, data) {
    state.authData = data;
  },
  [SET_LOADING](state, data) {
    state.loading = data;
  },
};
