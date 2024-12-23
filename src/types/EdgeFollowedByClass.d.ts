/**
 * Represents a class for edges that denote followers in a graph-based structure.
 * This is typically used to indicate the number of followers for a user or entity.
 */
export interface EdgeFollowedByClass {
  /**
   * The total count of followers.
   * This property represents the number of users or entities that follow the owner.
   * @type {number}
   */
  count: number;
}
