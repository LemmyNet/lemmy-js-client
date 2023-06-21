export const VERSION = "v3";

export interface UploadImage {
  image: File | Buffer;
  /**
   * Optional if cookie with jwt set is already present. Otherwise, auth is required.
   */
  auth?: string;
}

export interface UploadImageResponse {
  /**
   * Is "ok" if the upload was successful; is something else otherwise.
   */
  msg: string;
  files?: ImageFile[];
  url?: string;
  delete_url?: string;
}

export interface ImageFile {
  file: string;
  delete_token: string;
}
