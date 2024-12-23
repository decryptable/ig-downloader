/**
 * Represents a display resource, such as an image or video rendition,
 * typically used for rendering media in different resolutions or formats.
 */
export interface DisplayResource {
  /**
   * The source URL of the display resource.
   * This URL points to the image or video file for this specific resource.
   * @type {string}
   */
  src: string;

  /**
   * The width configuration of the display resource, measured in pixels.
   * This defines the horizontal resolution of the resource.
   * @type {number}
   */
  config_width: number;

  /**
   * The height configuration of the display resource, measured in pixels.
   * This defines the vertical resolution of the resource.
   * @type {number}
   */
  config_height: number;
}
