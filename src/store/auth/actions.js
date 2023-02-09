import { SET_AUTH_DATA, SET_LOADING } from "@/store/auth/types";
import { loginAxios } from "@/services/authServices";

/**
 *
 * @param commit
 * @param {{email:string, password:string}} payload
 */
export async function login({ commit }, payload) {
  commit(SET_LOADING, true);
  try {
    let data = await loginAxios(payload);
    commit(SET_AUTH_DATA, data);
    commit(SET_LOADING, true);
  } catch (err) {
    console.log(err);
    commit(SET_LOADING, true);
  }
}
