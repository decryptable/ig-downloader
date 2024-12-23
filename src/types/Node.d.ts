import type { User } from "./User";

/**
 * Represents a node in a graph.
 * A node is a fundamental unit of a graph structure, containing associated data
 * and coordinates to describe its position in the graph.
 */
export type Node = {
  /**
   * The user associated with the node.
   * This property links the node to a specific user entity.
   * @type {User}
   */
  user: User;

  /**
   * The x-coordinate of the node in the graph.
   * This represents the horizontal position of the node.
   * @type {number}
   */
  x: number;

  /**
   * The y-coordinate of the node in the graph.
   * This represents the vertical position of the node.
   * @type {number}
   */
  y: number;

  /**
   * The unique identifier of the node.
   * This ID is used to distinguish the node from others within the graph.
   * @type {string}
   */
  id: string;
}
