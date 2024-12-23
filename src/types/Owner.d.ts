/**
 * Represents the owner of a media item, such as a user or entity that manages the content.
 * This interface defines the properties associated with the owner, including their profile
 * information, account status, and relationships with the viewer.
 */
export type Owner = {
  /**
   * The unique identifier of the owner.
   * @type {string}
   */
  id: string;

  /**
   * The username of the owner.
   * @type {string}
   */
  username: string;

  /**
   * Indicates whether the owner's account is verified.
   * @type {boolean}
   */
  is_verified: boolean;

  /**
   * The URL of the owner's profile picture.
   * @type {string}
   */
  profile_pic_url: string;

  /**
   * Indicates whether the viewer is blocked by the owner.
   * @type {boolean}
   */
  blocked_by_viewer: boolean;

  /**
   * Indicates whether the viewer has restricted the owner.
   * This property will be `null` if no restriction is applied.
   * @type {null}
   */
  restricted_by_viewer: null;

  /**
   * Indicates whether the owner is followed by the viewer.
   * @type {boolean}
   */
  followed_by_viewer: boolean;

  /**
   * The full name of the owner.
   * @type {string}
   */
  full_name: string;

  /**
   * Indicates whether the owner has blocked the viewer.
   * @type {boolean}
   */
  has_blocked_viewer: boolean;

  /**
   * Indicates whether the embedding of the owner's content is disabled.
   * @type {boolean}
   */
  is_embeds_disabled: boolean;

  /**
   * Indicates whether the owner's account is private.
   * @type {boolean}
   */
  is_private: boolean;

  /**
   * Indicates whether the owner's account is unpublished.
   * @type {boolean}
   */
  is_unpublished: boolean;

  /**
   * Indicates whether the viewer has requested to follow the owner.
   * @type {boolean}
   */
  requested_by_viewer: boolean;

  /**
   * Indicates whether the owner has passed the tiering recommendation.
   * @type {boolean}
   */
  pass_tiering_recommendation: boolean;

  /**
   * Represents the timeline media associated with the owner, including details
   * about the media items they own.
   * @type {EdgeFollowedByClass}
   */
  edge_owner_to_timeline_media: EdgeFollowedByClass;

  /**
   * Represents the number of followers the owner has.
   * Includes additional details if provided by the `EdgeFollowedByClass`.
   * @type {EdgeFollowedByClass}
   */
  edge_followed_by: EdgeFollowedByClass;
}
