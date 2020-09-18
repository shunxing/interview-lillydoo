import { SELECT_PACKAGE, FETCH_PACKAGES } from "./constants";

export const actions = {
  [SELECT_PACKAGE]: ({ commit }, selectedPackage) => {
    commit(SELECT_PACKAGE, { selectedPackage });
  },
  [FETCH_PACKAGES]: async ({ commit }) => {
    const response = await fetch(
      "http://127.0.0.1:8081/data/packages.json",
      {}
    );
    const packages = await response.json();
    commit(FETCH_PACKAGES, { packages });
  },
};
