import { expect, it } from "vitest";
import { mount } from "@vue/test-utils";
import Card from "./Card.vue";

describe("Card component initiate", () => {
  const wrapper = mount(Card);

  it("Component mounted verify", () => {
    expect(wrapper.vm).toBeTruthy();
  });

  it("Component style verify", () => {
    expect(wrapper.classes()).toContain("card");
  });
});
