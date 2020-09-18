import { SELECT_PACKAGE, FETCH_PACKAGES } from "@/store/constants";
import { actions } from "@/store/actions";

describe("Vuex store - actions", () => {
  it(SELECT_PACKAGE, () => {
    const { [SELECT_PACKAGE]: selectPackage } = actions;
    const commit = jest.fn();
    selectPackage({ commit }, "testSelectedPackage");
    expect(commit).toHaveBeenCalled();
  });

  it(FETCH_PACKAGES, async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve([{ testPackage: "testPackageValue" }]),
      })
    );
    const { [FETCH_PACKAGES]: fetchPackages } = actions;
    const commit = jest.fn();
    await fetchPackages({ commit });
    expect(global.fetch).toHaveBeenCalledTimes(1);
    expect(commit).toHaveBeenCalledTimes(1);
    expect(commit).toHaveBeenCalledWith(FETCH_PACKAGES, {
      packages: [{ testPackage: "testPackageValue" }],
    });
  });
});
