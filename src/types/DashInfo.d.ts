/**
 * Represents information about DASH (Dynamic Adaptive Streaming over HTTP),
 * which is a streaming protocol that allows adaptive bitrate streaming
 * based on the user's network conditions and device capabilities.
 */
export type DashInfo = {
  /**
   * Indicates whether the media is eligible for DASH streaming.
   * If `true`, the media can be streamed using DASH, enabling adaptive bitrate playback.
   * @type {boolean}
   */
  is_dash_eligible: boolean;

  /**
   * The DASH manifest for the video, if available.
   * This manifest provides information about the available video segments and quality levels.
   * It will be `null` if no DASH manifest is associated with the video.
   * @type {null | string}
   */
  video_dash_manifest: null | string;

  /**
   * The number of quality levels available for the video.
   * Higher values indicate more options for resolution and bitrate during playback.
   * @type {number}
   */
  number_of_qualities: number;
}
