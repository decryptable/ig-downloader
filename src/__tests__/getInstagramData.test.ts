import getInstagramData from "../utils/getInstagramData";
import getShortCode from "../utils/getShortCode";
import generatePayload from "../utils/generatePayload";
import getGraphqlResponse from "../utils/getGraphqlResponse";

jest.mock("../utils/getShortCode");
jest.mock("../utils/generatePayload");
jest.mock("../utils/getGraphqlResponse");

describe("getInstagramData", () => {
  const mockGetShortCode = getShortCode as jest.Mock;
  const mockGeneratePayload = generatePayload as jest.Mock;
  const mockGetGraphqlResponse = getGraphqlResponse as jest.Mock;

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should return Instagram data for a valid URL", async () => {
    const url = "https://www.instagram.com/reel/DD7cpI2vEKO/";
    const shortCode = "DD7cpI2vEKO";
    const payload = new URLSearchParams();
    const mockResponse = {
      status: "ok",
      data: {
        xdt_shortcode_media: {
          id: "12345",
          media_url: "https://example.com/media.jpg",
        },
      },
    };

    mockGetShortCode.mockReturnValue(shortCode);
    mockGeneratePayload.mockReturnValue(payload);
    mockGetGraphqlResponse.mockResolvedValue(mockResponse);

    const result = await getInstagramData(url);

    expect(mockGetShortCode).toHaveBeenCalledWith(url);
    expect(mockGeneratePayload).toHaveBeenCalledWith(shortCode);
    expect(mockGetGraphqlResponse).toHaveBeenCalledWith(payload);
    expect(result).toEqual(mockResponse.data.xdt_shortcode_media);
  });

  it("should throw an error for an invalid Instagram URL", async () => {
    const url = "https://www.invalid.com/";

    mockGetShortCode.mockReturnValue(null);

    await expect(getInstagramData(url)).rejects.toThrow(
      "Invalid Instagram URL"
    );
    expect(mockGetShortCode).toHaveBeenCalledWith(url);
    expect(mockGeneratePayload).not.toHaveBeenCalled();
    expect(mockGetGraphqlResponse).not.toHaveBeenCalled();
  });

  it("should throw an error if no data is received from Instagram", async () => {
    const url = "https://www.instagram.com/p/ABC123/";
    const shortCode = "ABC123";
    const payload = new URLSearchParams();

    mockGetShortCode.mockReturnValue(shortCode);
    mockGeneratePayload.mockReturnValue(payload);
    mockGetGraphqlResponse.mockResolvedValue({ status: "error" });

    await expect(getInstagramData(url)).rejects.toThrow(
      "No data received from Instagram"
    );
    expect(mockGetShortCode).toHaveBeenCalledWith(url);
    expect(mockGeneratePayload).toHaveBeenCalledWith(shortCode);
    expect(mockGetGraphqlResponse).toHaveBeenCalledWith(payload);
  });

  it("should throw an error if Instagram data is invalid", async () => {
    const url = "https://www.instagram.com/p/ABC123/";
    const shortCode = "ABC123";
    const payload = new URLSearchParams();
    const mockResponse = { status: "ok", data: null };

    mockGetShortCode.mockReturnValue(shortCode);
    mockGeneratePayload.mockReturnValue(payload);
    mockGetGraphqlResponse.mockResolvedValue(mockResponse);

    await expect(getInstagramData(url)).rejects.toThrow(
      "Error fetching Instagram data: Cannot read properties of null (reading 'xdt_shortcode_media')"
    );
    expect(mockGetShortCode).toHaveBeenCalledWith(url);
    expect(mockGeneratePayload).toHaveBeenCalledWith(shortCode);
    expect(mockGetGraphqlResponse).toHaveBeenCalledWith(payload);
  });

  it("should handle unexpected errors gracefully", async () => {
    const url = "https://www.instagram.com/p/ABC123/";

    mockGetShortCode.mockImplementation(() => {
      throw new Error("Unexpected error");
    });

    await expect(getInstagramData(url)).rejects.toThrow(
      "Error fetching Instagram data: Unexpected error"
    );
    expect(mockGetShortCode).toHaveBeenCalledWith(url);
    expect(mockGeneratePayload).not.toHaveBeenCalled();
    expect(mockGetGraphqlResponse).not.toHaveBeenCalled();
  });
});
