/**
 * Represents a preview of media edges in a graph-based structure.
 * This interface provides information about the total count of media edges
 * and a preview of those edges.
 */
export type EdgeMediaPreview = {
  /**
   * The total count of media edges.
   * This property represents the total number of media-related connections
   * in the graph structure.
   * @type {number}
   */
  count: number;

  /**
   * An array containing a preview of media edges.
   * Each edge represents a connection to a media node or object.
   * The array contains a subset of the total edges for preview purposes.
   * @type {any[]}
   */
  edges: any[];
}
