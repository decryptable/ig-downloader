import { PageInfo } from "./PageInfo";

/**
 * Represents edges to parent comments in a graph-based structure.
 * This interface provides information about the comments on a media item,
 * including their count, pagination details, and individual comment edges.
 */
export interface EdgeMediaToParentComment {
  /**
   * The total count of parent comments on the media item.
   * This property represents the number of top-level comments.
   * @type {number}
   */
  count: number;

  /**
   * Pagination information for the parent comments.
   * This includes details on whether more comments are available and the cursor for fetching them.
   * @type {PageInfo}
   */
  page_info: PageInfo;

  /**
   * An array containing the edges of parent comments.
   * Each edge represents a connection to a comment node or object.
   * @type {any[]}
   */
  edges: any[];
}
