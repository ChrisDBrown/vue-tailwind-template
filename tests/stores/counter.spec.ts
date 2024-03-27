import { describe, beforeEach, it, expect } from "vitest";

import { setActivePinia, createPinia } from "pinia";
import { useCounterStore } from "@/stores/counter";

describe("Counter Store", () => {
  beforeEach(() => {
    // creates a fresh pinia and makes it active
    // so it's automatically picked up by any useStore() call
    // without having to pass it to it: `useStore(pinia)`
    setActivePinia(createPinia());
  });

  it("increments", () => {
    const counter = useCounterStore();
    expect(counter.count).toBe(0);
    counter.increment();
    expect(counter.count).toBe(1);
  });

  it("increments multiple times", () => {
    const counter = useCounterStore();
    counter.increment();
    counter.increment();
    counter.increment();
    expect(counter.count).toBe(3);
    expect(counter.doubleCount).toBe(6);
  });
});
