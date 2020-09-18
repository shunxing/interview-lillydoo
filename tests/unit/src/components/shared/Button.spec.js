import { shallowMount, mount } from "@vue/test-utils";
import Button from "@/components/shared/Button.vue";

describe("Button.vue", () => {
  it("should render a button correctly with no specific props", () => {
    const wrapper = mount(Button);
    expect(wrapper.find(".button").exists()).toBe(true);
    expect(wrapper).toMatchSnapshot();
  });

  it("should render label props when passed", () => {
    const label = "testButtonLabel";
    const wrapper = shallowMount(Button, { props: { label } });
    expect(wrapper.text()).toMatch(label);
  });

  describe("class", () => {
    it("should render active when selected", () => {
      const wrapper = shallowMount(Button, { props: { isSelected: false } });
      expect(wrapper.find(".button").classes()).not.toContain("button--active");
      expect(wrapper.find(".button").classes()).toContain("button");
    });

    it("should render active when selected", () => {
      const wrapper = shallowMount(Button, { props: { isSelected: true } });
      expect(wrapper.find(".button").classes()).toContain("button--active");
      expect(wrapper.find(".button").classes()).toContain("button");
    });
  });
});
