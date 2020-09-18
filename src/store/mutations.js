import { SELECT_PACKAGE, FETCH_PACKAGES } from "./constants";

export const mutations = {
  [SELECT_PACKAGE]: (state, payload) => {
    state.selectedPackage = payload.selectedPackage;
  },
  [FETCH_PACKAGES]: (state, payload) => {
    console.log(payload.packages);
    state.packages = payload.packages;
  },
};
