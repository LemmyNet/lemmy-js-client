export const VERSION = "v4";

export interface UploadImage {
  image: File | Buffer;
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

export interface DeleteImage {
  token: string;
  filename: string;
}
