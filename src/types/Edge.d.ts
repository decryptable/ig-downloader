import { Node } from "./Node";

/**
 * Represents an edge in a graph, which connects nodes in the data structure.
 * This interface is typically used in GraphQL responses to represent
 * relationships between nodes.
 */
export interface Edge {
  /**
   * The node at the end of the edge.
   * This property contains the actual data or entity associated with the edge.
   * @type {Node}
   */
  node: Node;
}
