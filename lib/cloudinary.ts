import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

export default cloudinary;

/**
 * Generate Cloudinary URL with transformations
 */
export function getCloudinaryUrl(
  publicId: string,
  options?: {
    width?: number;
    height?: number;
    crop?: string;
    quality?: string | number;
  }
) {
  const { width, height, crop = "fill", quality = "auto" } = options || {};

  return cloudinary.url(publicId, {
    transformation: [
      { width, height, crop, quality, fetch_format: "auto" }
    ]
  });
}

/**
 * Sign Cloudinary upload request
 */
export function signUpload(params: Record<string, any>) {
  return cloudinary.utils.api_sign_request(
    params,
    process.env.CLOUDINARY_API_SECRET!
  );
}
