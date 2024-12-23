/**
 * The function `generatePayload` creates a URLSearchParams object with specific key-value pairs based
 * on the input shortCode.
 * @param {string} shortCode - The `shortCode` parameter is a string value that represents a shortcode
 * used in the payload generation function.
 * @returns {URLSearchParams} payload - The function `generatePayload` is returning a URLSearchParams object with the specified
 * parameters such as lsd, doc_id, variables, fb_api_req_friendly_name, fb_api_caller_class, and __hsi.
 * The variables parameter contains a JSON stringified object with a key `shortcode` that has the value
 * of the `shortCode` parameter passed to the function.
 */
const generatePayload = (shortCode: string) => {
  const payload = new URLSearchParams({
    doc_id: "8845758582119845",
    variables: JSON.stringify({
      shortcode: shortCode,
    }),
  });

  return payload;
};

export default generatePayload;
