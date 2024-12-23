/**
 * Represents the dimensions of a media item, such as its width and height in pixels.
 * This interface is commonly used to describe the size of images, videos, or other media.
 */
export interface Dimensions {
  /**
   * The height of the media item, measured in pixels.
   * @type {number}
   */
  height: number;

  /**
   * The width of the media item, measured in pixels.
   * @type {number}
   */
  width: number;
}
