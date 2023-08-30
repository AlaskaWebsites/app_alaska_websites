import { expect, it, expectTypeOf } from "vitest";
import { mount } from "@vue/test-utils";
import Button from "./Button.vue";

describe("Button component initiate", () => {
  const wrapper = mount(Button);

  it("Component mounted verify", () => {
    expect(wrapper.vm).toBeTruthy();
  });

  it("Component props verify", () => {
    expect(wrapper.props().textButton).toBeUndefined();
  });

  it("Component type verify", () => {
    expectTypeOf(wrapper.props().textButton).toEqualTypeOf(String);
  });

  it("Component event verify", async () => {
    await wrapper.find("button").trigger("click");
    expect(wrapper.emitted("click")).toBeTruthy();
  });
});
