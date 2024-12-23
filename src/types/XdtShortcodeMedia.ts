import { ClipsMusicAttributionInfo } from "./ClipsMusicAttributionInfo";
import { CoauthorProducer } from "./CoauthorProducer";
import { DashInfo } from "./DashInfo";
import { Dimensions } from "./Dimensions";
import { DisplayResource } from "./DisplayResource";
import { EdgeMediaPreview } from "./EdgeMediaPreview";
import { EdgeMediaToCaptionClass } from "./EdgeMediaToCaptionClass";
import { EdgeMediaToParentComment } from "./EdgeMediaToParentComment";
import { Owner } from "./Owner";
import { SharingFrictionInfo } from "./SharingFrictionInfo";

/**
 * Represents the media object for a shortcode in Instagram.
 * This interface contains all metadata and related information
 * about a media item, such as videos, photos, or reels.
 */
export interface XdtShortcodeMedia {
  /**
   * The typename of the media object.
   * Typically indicates the type of media (e.g., "GraphImage", "GraphVideo").
   * @type {string}
   */
  __typename: string;

  /**
   * The interface type of the media object.
   * Used for distinguishing media subtypes.
   * @type {string}
   */
  __isXDTGraphMediaInterface: string;

  /**
   * The unique identifier of the media.
   * @type {string}
   */
  id: string;

  /**
   * The shortcode of the media, which is a unique alphanumeric code used in URLs.
   * @type {string}
   */
  shortcode: string;

  /**
   * The URL of the thumbnail image for the media.
   * @type {string}
   */
  thumbnail_src: string;

  /**
   * The dimensions of the media item, including width and height.
   * @type {Dimensions}
   */
  dimensions: Dimensions;

  /**
   * Gating information for the media, if any.
   * Represents restrictions or controls applied to the media.
   * @type {null | any}
   */
  gating_info: null | any;

  /**
   * Overall rating from fact-checking processes, if applicable.
   * @type {null | string}
   */
  fact_check_overall_rating: null | string;

  /**
   * Additional fact-checking information, if any.
   * @type {null | string}
   */
  fact_check_information: null | string;

  /**
   * Sensitivity friction information, if the media has sensitive content.
   * @type {null | any}
   */
  sensitivity_friction_info: null | any;

  /**
   * Sharing friction information, which restricts or controls how the media can be shared.
   * @type {SharingFrictionInfo}
   */
  sharing_friction_info: SharingFrictionInfo;

  /**
   * Media overlay information, such as filters or stickers applied to the media.
   * @type {null | any}
   */
  media_overlay_info: null | any;

  /**
   * The media preview string (usually a base64-encoded preview).
   * @type {string}
   */
  media_preview: string;

  /**
   * The URL of the media's main display image or video.
   * @type {string}
   */
  display_url: string;

  /**
   * Array of display resources, which are different versions of the media for varying resolutions.
   * @type {DisplayResource[]}
   */
  display_resources: DisplayResource[];

  /**
   * Accessibility caption for the media, if provided, to improve screen reader compatibility.
   * @type {null | string}
   */
  accessibility_caption: null | string;

  /**
   * Dash information for video playback, if the media is a video.
   * @type {DashInfo}
   */
  dash_info: DashInfo;

  /**
   * Indicates whether the media contains audio.
   * @type {boolean}
   */
  has_audio: boolean;

  /**
   * The URL of the video file, if the media is a video.
   * @type {string}
   */
  video_url: string;

  /**
   * The view count for the video.
   * @type {number}
   */
  video_view_count: number;

  /**
   * The play count for the video.
   * @type {number}
   */
  video_play_count: number;

  /**
   * Encoding status of the media, if applicable.
   * @type {null | string}
   */
  encoding_status: null | string;

  /**
   * Indicates whether the media is published.
   * @type {boolean}
   */
  is_published: boolean;

  /**
   * The product type of the media (e.g., "feed", "story", "reels").
   * @type {string}
   */
  product_type: string;

  /**
   * The title of the media, if provided.
   * @type {null | string}
   */
  title: null | string;

  /**
   * The duration of the video in seconds, if the media is a video.
   * @type {number}
   */
  video_duration: number;

  /**
   * Music attribution information for clips or reels.
   * @type {ClipsMusicAttributionInfo}
   */
  clips_music_attribution_info: ClipsMusicAttributionInfo;

  /**
   * Indicates whether the media is a video.
   * @type {boolean}
   */
  is_video: boolean;

  /**
   * The tracking token for analytics purposes.
   * @type {string}
   */
  tracking_token: string;

  /**
   * Upcoming event information, if associated with the media.
   * @type {null | any}
   */
  upcoming_event: null | any;

  /**
   * Tagged users in the media.
   * @type {EdgeMediaToCaptionClass}
   */
  edge_media_to_tagged_user: EdgeMediaToCaptionClass;

  /**
   * The owner of the media item.
   * @type {Owner}
   */
  owner: Owner;

  /**
   * Caption information for the media.
   * @type {EdgeMediaToCaptionClass}
   */
  edge_media_to_caption: EdgeMediaToCaptionClass;

  /**
   * Indicates whether the viewer can see insights as a brand account.
   * @type {boolean}
   */
  can_see_insights_as_brand: boolean;

  /**
   * Indicates whether the caption has been edited.
   * @type {boolean}
   */
  caption_is_edited: boolean;

  /**
   * Indicates whether the media has ranked comments.
   * @type {boolean}
   */
  has_ranked_comments: boolean;

  /**
   * Indicates whether like and view counts are disabled.
   * @type {boolean}
   */
  like_and_view_counts_disabled: boolean;

  /**
   * Parent comments associated with the media.
   * @type {EdgeMediaToParentComment}
   */
  edge_media_to_parent_comment: EdgeMediaToParentComment;

  /**
   * Hoisted comments (pinned or featured comments).
   * @type {EdgeMediaToCaptionClass}
   */
  edge_media_to_hoisted_comment: EdgeMediaToCaptionClass;

  /**
   * Preview comments for the media.
   * @type {EdgeMediaPreview}
   */
  edge_media_preview_comment: EdgeMediaPreview;

  /**
   * Indicates whether comments are disabled for the media.
   * @type {boolean}
   */
  comments_disabled: boolean;

  /**
   * Indicates whether commenting is disabled for the viewer.
   * @type {boolean}
   */
  commenting_disabled_for_viewer: boolean;

  /**
   * The timestamp (in seconds) when the media was created.
   * @type {number}
   */
  taken_at_timestamp: number;

  /**
   * Preview likes on the media.
   * @type {EdgeMediaPreview}
   */
  edge_media_preview_like: EdgeMediaPreview;

  /**
   * Sponsored users tagged in the media.
   * @type {EdgeMediaToCaptionClass}
   */
  edge_media_to_sponsor_user: EdgeMediaToCaptionClass;

  /**
   * Indicates whether the media is an affiliate post.
   * @type {boolean}
   */
  is_affiliate: boolean;

  /**
   * Indicates whether the media is a paid partnership.
   * @type {boolean}
   */
  is_paid_partnership: boolean;

  /**
   * Location information, if associated with the media.
   * @type {null | any}
   */
  location: null | any;

  /**
   * NFT asset information, if the media is an NFT.
   * @type {null | any}
   */
  nft_asset_info: null | any;

  /**
   * Indicates whether the viewer has liked the media.
   * @type {boolean}
   */
  viewer_has_liked: boolean;

  /**
   * Indicates whether the viewer has saved the media.
   * @type {boolean}
   */
  viewer_has_saved: boolean;

  /**
   * Indicates whether the viewer has saved the media to a collection.
   * @type {boolean}
   */
  viewer_has_saved_to_collection: boolean;

  /**
   * Indicates whether the viewer is tagged in the media.
   * @type {boolean}
   */
  viewer_in_photo_of_you: boolean;

  /**
   * Indicates whether the viewer can reshare the media.
   * @type {boolean}
   */
  viewer_can_reshare: boolean;

  /**
   * Indicates whether the media is an advertisement.
   * @type {boolean}
   */
  is_ad: boolean;

  /**
   * Related media shown on the web interface.
   * @type {EdgeMediaToCaptionClass}
   */
  edge_web_media_to_related_media: EdgeMediaToCaptionClass;

  /**
   * Coauthors or collaborators for the media.
   * @type {CoauthorProducer[]}
   */
  coauthor_producers: CoauthorProducer[];

  /**
   * Users pinned for the media (e.g., pinned comments or mentions).
   * @type {any[]}
   */
  pinned_for_users: any[];
}
