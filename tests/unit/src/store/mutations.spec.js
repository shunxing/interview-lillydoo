import { mutations } from "@/store/mutations";
import { SELECT_PACKAGE, FETCH_PACKAGES } from "@/store/constants";
// destructure assign `mutations`
const {
  [SELECT_PACKAGE]: selectPackage,
  [FETCH_PACKAGES]: fetchPackages,
} = mutations;

describe("Vuex store - mutations", () => {
  it(SELECT_PACKAGE, () => {
    const state = { selectedPackage: 0 };
    const payload = { selectedPackage: 1 };
    selectPackage(state, payload);
    expect(state.selectedPackage).toEqual(1);
  });

  it(FETCH_PACKAGES, () => {
    const state = { packages: [] };
    const payload = { packages: [{ packageTestName: "testValue" }] };
    fetchPackages(state, payload);
    expect(state.packages).toEqual([{ packageTestName: "testValue" }]);
  });
});
