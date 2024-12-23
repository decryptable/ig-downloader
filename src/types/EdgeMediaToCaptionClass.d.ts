import { Edge } from "./Edge";

/**
 * Represents a class for edges that connect media items to their captions
 * in a graph-based structure. This interface provides information about
 * the connections between media and caption nodes.
 */
export interface EdgeMediaToCaptionClass {
  /**
   * An array of edges connecting media to captions.
   * Each edge represents a relationship between a media item and its corresponding caption.
   * @type {Edge[]}
   */
  edges: Edge[];
}
