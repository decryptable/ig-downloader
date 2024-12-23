import type { XdtShortcodeMedia } from "./XdtShortcodeMedia";

/**
 * Represents the data returned by a GraphQL query.
 * This interface contains the main payload for retrieving a media object
 * associated with a specific shortcode in the Instagram platform.
 */
export type Data = {
  /**
   * The media object associated with the given shortcode.
   * This property provides access to all metadata and content information
   * for the queried media.
   * @type {XdtShortcodeMedia}
   */
  xdt_shortcode_media: XdtShortcodeMedia;
}
