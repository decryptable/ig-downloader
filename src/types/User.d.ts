/**
 * Represents a user and their basic profile information.
 * This interface provides details about the user's identity, profile, and
 * relationship with the current viewer.
 */
export type User = {
  /**
   * The full name of the user as displayed on their profile.
   * @type {string}
   */
  full_name: string;

  /**
   * Indicates whether the user is followed by the viewer.
   * If `true`, the current viewer is a follower of this user.
   * @type {boolean}
   */
  followed_by_viewer: boolean;

  /**
   * The unique identifier of the user.
   * @type {string}
   */
  id: string;

  /**
   * Indicates whether the user's account is verified.
   * A verified account typically signifies authenticity.
   * @type {boolean}
   */
  is_verified: boolean;

  /**
   * The URL of the user's profile picture.
   * This is typically a link to an image resource.
   * @type {string}
   */
  profile_pic_url: string;

  /**
   * The username of the user.
   * This is the unique handle associated with the user, used for mentions and identification.
   * @type {string}
   */
  username: string;
}
