import { SELECT_PACKAGE } from "./constants";

export const actions = {
  [SELECT_PACKAGE]: ({ commit }, selectedPackage) => {
    console.log(selectedPackage);
    commit(SELECT_PACKAGE, { selectedPackage });
  },
};
