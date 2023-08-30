import { expect, it, expectTypeOf } from "vitest";
import { mount } from "@vue/test-utils";
import Input from "./Input.vue";

describe("Input component initiate", () => {
  const wrapper = mount(Input);

  it("Component mounted verify", () => {
    expect(wrapper.vm).toBeTruthy();
  });

  it("Component event verify", async () => {
    await wrapper.find("input").trigger("change");
    expect(wrapper.emitted("change")).toBeTruthy();
  });
});
