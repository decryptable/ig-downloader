/**
 * The function `getShortCode` extracts the unique identifier from an Instagram URL.
 * @param {string} url - The `getShortCode` function takes a URL as input and extracts the shortcode
 * from an Instagram URL. The shortcode is typically found in Instagram URLs for posts, reels, etc.
 * @returns {string} shortcode - The function `getShortCode` returns the shortcode extracted from the Instagram URL provided
 * as input. If a valid shortcode is found in the URL, it is returned. Otherwise, it returns `null`.
 */
const getShortCode = (url: string): string => {
  const regex =
    /instagram.com\/(?:[A-Za-z0-9_.]+\/)?(p|reel)\/([A-Za-z0-9-_]+)/;
  const match = url.match(regex);
  return match && match[2] ? match[2] : null;
};

export default getShortCode;
