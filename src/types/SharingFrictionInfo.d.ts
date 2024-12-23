/**
 * Represents information about sharing friction, which refers to
 * restrictions or conditions applied to sharing content within an application.
 */
export interface SharingFrictionInfo {
  /**
   * Indicates whether sharing friction should be applied.
   * If `true`, the user may encounter restrictions or prompts when attempting to share content.
   * @type {boolean}
   */
  should_have_sharing_friction: boolean;

  /**
   * A URL associated with the application's custom sharing restrictions or instructions.
   * This will be `null` if no URL is provided or applicable.
   * @type {null | string}
   */
  bloks_app_url: null | string;
}
