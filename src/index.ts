import { XdtShortcodeMedia } from "./types/XdtShortcodeMedia";
import getInstagramData from "./utils/getInstagramData";

/**
 * The function `InstagramDownloader` is an asynchronous function that downloads Instagram data based
 * on a given URL.
 * @param {string} url - The `url` parameter in the `InstagramDownloader` function is a string that
 * represents the URL of an Instagram post that you want to download.
 * @returns {XdtShortcodeMedia} The function `InstagramDownloader` is returning a Promise that resolves to an object of
 * type `XdtShortcodeMedia`.
 *
 * @includeExample src/examples/exampleUsage.ts
 */
const InstagramDownloader = async (url: string): Promise<XdtShortcodeMedia> => {
  return await getInstagramData(url);
};

export default InstagramDownloader;
