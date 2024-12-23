import type { GraphqlResponse } from "../types/GraphqlResponse";

/**
 * The function `getGraphqlResponse` sends a POST request to the Instagram GraphQL API with a payload
 * and returns the response data.
 * @param {URLSearchParams} payload - The `payload` parameter in the `getGraphqlResponse` function is
 * expected to be a `URLSearchParams` object containing the data to be sent in the POST request to the
 * Instagram GraphQL API endpoint. This data typically includes the query parameters required for the
 * GraphQL query.
 * @returns The function `getGraphqlResponse` is returning the data received from the GraphQL query to
 * the Instagram API. If the request is successful, it will return the GraphQL response data. If there
 * is an error during the request, it will log an error message to the console.
 */
const getGraphqlResponse = async (payload: URLSearchParams) => {
  try {
    const response = await fetch("https://www.instagram.com/graphql/query", {
      method: "POST",
      body: payload,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      }
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data: GraphqlResponse = (await response.json()) as GraphqlResponse;

    return data;
  } catch (error) {
    console.error("Error fetching Instagram data:", error);
  }
};

export default getGraphqlResponse;
