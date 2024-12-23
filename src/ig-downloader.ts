import { XdtShortcodeMedia } from "./types/XdtShortcodeMedia";
import getInstagramData from "./utils/getInstagramData";

/**
 * The function `IgDownloader` is an asynchronous function that downloads Instagram data based
 * on a given URL.
 * @public
 * @param {string} url - The `url` parameter in the `IgDownloader` function is a string that
 * represents the URL of an Instagram post that you want to download.
 * @returns {Promise<import(XdtShortcodeMedia)>} The function `IgDownloader` is returning a Promise that resolves to an object of
 * type `XdtShortcodeMedia`.
 *
 * @includeExample src/examples/exampleUsage.ts
 */
const IgDownloader = async (url: string): Promise<XdtShortcodeMedia> => {
  return await getInstagramData(url);
};

export { IgDownloader };
