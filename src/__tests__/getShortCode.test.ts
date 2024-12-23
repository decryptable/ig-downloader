import getShortCode from "../utils/getShortCode";

describe("getShortCode", () => {
  it("should extract shortcode from a valid Instagram post URL", () => {
    const url = "https://www.instagram.com/reel/DD7cpI2vEKO/";
    const result = getShortCode(url);
    expect(result).toBe("DD7cpI2vEKO");
  });

  it("should extract shortcode from a valid Instagram reel URL", () => {
    const url = "https://www.instagram.com/reel/DD7cpI2vEKO/";
    const result = getShortCode(url);
    expect(result).toBe("DD7cpI2vEKO");
  });

  it("should return null for invalid Instagram URL", () => {
    const url = "https://www.invalid.com/";
    const result = getShortCode(url);
    expect(result).toBeNull();
  });

  it("should return null if no shortcode is present", () => {
    const url = "https://www.instagram.com/";
    const result = getShortCode(url);
    expect(result).toBeNull();
  });

  it("should return null for unrelated URL", () => {
    const url = "https://www.google.com/";
    const result = getShortCode(url);
    expect(result).toBeNull();
  });

  it("should handle URL with extra query parameters", () => {
    const url = "https://www.instagram.com/reel/DD7cpI2vEKO/?utm_source=ig_web_button_share_sheet&igsh=MzRlODBiNWFlZA==";
    const result = getShortCode(url);
    expect(result).toBe("DD7cpI2vEKO");
  });

  it("should handle URL with trailing slashes and extra path segments", () => {
    const url = "https://www.instagram.com/reel/DD7cpI2vEKO/some-extra-path/?utm_source=ig_web_button_share_sheet&igsh=MzRlODBiNWFlZA==";
    const result = getShortCode(url);
    expect(result).toBe("DD7cpI2vEKO");
  });

  it("should return null for malformed URL", () => {
    const url = "not-a-valid-url";
    const result = getShortCode(url);
    expect(result).toBeNull();
  });
});
