import { mount } from "@vue/test-utils";
import DeliveryInformations from "@/components/Content/DeliveryInformations.vue";

describe("DeliveryInformations.vue", () => {
  it("should render correctly", () => {
    const wrapper = mount(DeliveryInformations);
    expect(wrapper).toMatchSnapshot();
  });
});
