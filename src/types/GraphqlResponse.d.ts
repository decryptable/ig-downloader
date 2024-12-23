import type { Data } from "./Data";
import type { Extensions } from "./Extensions";

/**
 * Represents the response from a GraphQL query.
 * This interface encapsulates the main data, additional metadata, and
 * status information returned by the GraphQL API.
 */
export type GraphqlResponse = {
  /**
   * The data returned by the GraphQL query.
   * This contains the primary payload requested by the client.
   * @type {Data}
   */
  data: Data;

  /**
   * Additional information about the GraphQL response.
   * This includes metadata or supplementary details, such as whether
   * the response is final or contains more information.
   * @type {Extensions}
   */
  extensions: Extensions;

  /**
   * The status of the GraphQL response.
   * Indicates the outcome or state of the query, such as "ok" or "error."
   * @type {string}
   */
  status: string;
}
