import generatePayload from "../utils/generatePayload";

describe("generatePayload", () => {
  it("should generate a URLSearchParams object with the correct parameters", () => {
    const shortCode = "ABC123";
    const payload = generatePayload(shortCode);

    // Convert URLSearchParams to an object for easier assertions
    const payloadObject: Record<string, string> = {};
    payload.forEach((value, key) => {
      payloadObject[key] = value;
    });

    expect(payloadObject).toEqual({
      doc_id: "8845758582119845",
      variables: JSON.stringify({ shortcode: shortCode }),
    });
  });

  it("should include the correct shortcode in the variables parameter", () => {
    const shortCode = "XYZ789";
    const payload = generatePayload(shortCode);

    expect(payload.get("variables")).toBe(
      JSON.stringify({ shortcode: shortCode })
    );
  });
});
