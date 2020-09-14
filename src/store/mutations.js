const { SELECT_PACKAGE } = require("./constants");

export const mutations = {
  increment(state) {
    state.count++;
  },
  [SELECT_PACKAGE]: (state, payload) => {
    state.selectedPackage = payload.selectedPackage;
  },
};
