/**
 * Represents additional information about the GraphQL response.
 * This interface provides metadata or supplementary details that may
 * accompany the main response data.
 */
export interface Extensions {
  /**
   * Indicates whether the response is final.
   * If `true`, the response is considered complete and no further updates
   * or modifications are expected.
   * @type {boolean}
   */
  is_final: boolean;
}
