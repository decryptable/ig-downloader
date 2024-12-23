/**
 * Represents a coauthor producer, providing details about a contributor
 * or collaborator associated with a piece of content.
 */
export type CoauthorProducer = {
  /**
   * The unique identifier of the coauthor producer.
   * This ID is used to distinguish the coauthor from other users.
   * @type {string}
   */
  id: string;

  /**
   * Indicates whether the coauthor producer's account is verified.
   * A verified account typically signifies authenticity or recognition.
   * @type {boolean}
   */
  is_verified: boolean;

  /**
   * The URL of the coauthor producer's profile picture.
   * This is typically a link to an image resource representing the coauthor.
   * @type {string}
   */
  profile_pic_url: string;

  /**
   * The username of the coauthor producer.
   * This is the unique handle or name associated with the coauthor's account.
   * @type {string}
   */
  username: string;
}
