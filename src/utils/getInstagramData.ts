import { XdtShortcodeMedia } from "../types/XdtShortcodeMedia";
import generatePayload from "./generatePayload";
import getGraphqlResponse from "./getGraphqlResponse";
import getShortCode from "./getShortCode";

/**
 * The function `getInstagramData` fetches Instagram data using a provided URL and handles errors
 * appropriately.
 * @param {string} url - The `url` parameter in the `getInstagramData` function is a string that
 * represents the URL of an Instagram post from which you want to fetch data.
 * @returns {XdtShortcodeMedia} The function `getInstagramData` is returning the `xdtShortcodeMedia` data from the
 * Instagram API response after processing the provided URL.
 */
const getInstagramData = async (url: string): Promise<XdtShortcodeMedia> => {
  try {
    const shortCode = getShortCode(url);

    if (!shortCode) {
      throw new Error("Invalid Instagram URL");
    }

    const payload = generatePayload(shortCode);

    const instagramData = await getGraphqlResponse(payload);

    if (!instagramData || instagramData.status !== "ok") {
      throw new Error("No data received from Instagram");
    }

    const data = instagramData.data;
    return data.xdt_shortcode_media;
  } catch (error) {
    throw new Error(
      `Error fetching Instagram data: ${(error as Error).message}`
    );
  }
};

export default getInstagramData;
