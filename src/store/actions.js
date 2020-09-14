import { SELECT_PACKAGE } from "./constants";

export const actions = {
  [SELECT_PACKAGE]: ({ commit }, selectedPackage) => {
    commit(SELECT_PACKAGE, { selectedPackage });
  },
};
