/**
 * Represents information about music attribution for clips, including
 * details about the audio used in the clip, such as the artist, song name,
 * and audio handling settings.
 */
export interface ClipsMusicAttributionInfo {
  /**
   * The name of the artist whose music is attributed in the clip.
   * @type {string}
   */
  artist_name: string;

  /**
   * The name of the song used in the clip.
   * @type {string}
   */
  song_name: string;

  /**
   * Indicates whether the clip uses original audio.
   * If `true`, the audio is original and not sourced from an external track.
   * @type {boolean}
   */
  uses_original_audio: boolean;

  /**
   * Indicates whether the audio in the clip should be muted.
   * This might occur due to copyright or platform restrictions.
   * @type {boolean}
   */
  should_mute_audio: boolean;

  /**
   * The reason why the audio should be muted, if applicable.
   * For example, it could be a copyright issue or content policy restriction.
   * @type {string}
   */
  should_mute_audio_reason: string;

  /**
   * The unique identifier of the audio track associated with the clip.
   * This can be used to look up additional metadata about the audio.
   * @type {string}
   */
  audio_id: string;
}
