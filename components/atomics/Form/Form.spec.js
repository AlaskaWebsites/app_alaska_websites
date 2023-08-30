import { expect, it, expectTypeOf } from "vitest";
import { mount } from "@vue/test-utils";
import Form from "./Form.vue";

describe("Form component initiate", () => {
  const wrapper = mount(Form);

  it("Component mounted verify", () => {
    expect(wrapper.vm).toBeTruthy();
    expect(wrapper.find("label")).toBeTruthy();
  });

  it("Component props verify", () => {
    expect(wrapper.props().textForm).toBeUndefined();
  });

  it("Component type verify", () => {
    expectTypeOf(wrapper.props().textForm).toEqualTypeOf(String);
  });
});
