import { expect, it } from "vitest";
import { mount } from "@vue/test-utils";
import Banner from "./Banner.vue";

describe("Banner component initiate", () => {
  const wrapper = mount(Banner);

  it("Component mounted verify", () => {
    expect(wrapper.vm).toBeTruthy();
  });

  it("Component style verify", () => {
    expect(wrapper.classes()).toContain("banner");
  });
});
