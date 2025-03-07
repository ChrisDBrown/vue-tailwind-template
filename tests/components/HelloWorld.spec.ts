import { describe, it, expect, vi } from "vitest";
import { createTestingPinia } from "@pinia/testing";

import { mount } from "@vue/test-utils";
import HelloWorld from "@/components/HelloWorld.vue";

describe("HelloWorld", () => {
  it("renders properly", () => {
    const wrapper = mount(HelloWorld, {
      props: { msg: "Hello Vitest" },
      global: { plugins: [createTestingPinia({ createSpy: vi.fn })] },
    });
    expect(wrapper.text()).toContain("Hello Vitest");
  });
});
