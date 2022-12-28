import { describe, expect, it } from "vitest";
import { getGreatestDiscoveryYear } from "../p2e16";
import { data } from "../data/data";

describe("getGreatestDiscoveryYear", () => {
  it("Should exist", () => {
    expect(getGreatestDiscoveryYear).toBeInstanceOf(Function);
  });
  it("Should be the 1847", () => {
    expect(getGreatestDiscoveryYear(data)).toEqual(1847);
  });
});
