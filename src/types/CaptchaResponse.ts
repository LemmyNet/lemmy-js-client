// This file was generated by [ts-rs](https://github.com/Aleph-Alpha/ts-rs). Do not edit this file manually.

/**
 * A captcha response.
 */
export type CaptchaResponse = {
  /**
   * A Base64 encoded png
   */
  png: string;
  /**
   * A Base64 encoded wav audio
   */
  wav: string;
  /**
   * The UUID for the captcha item.
   */
  uuid: string;
};
