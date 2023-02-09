// import { createStore } from "vuex";
//
// const store = createStore({
//   state() {
//     return {
//       count: 0,
//     };
//   },
//   mutations: {
//     increment(state) {
//       state.count++;
//     },
//   },
// });
//
// export default store;

import { createLogger, createStore } from "vuex";
import auth from "@/store/auth";

const debug = process.env.NODE_ENV !== "production";
export const store = createStore({
  modules: {
    auth,
  },
  plugins: debug ? [createLogger()] : [],
  strict: debug,
});
