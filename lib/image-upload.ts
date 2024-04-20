import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export default async function uploadImage(file: string): Promise<string> {
  if (!file) {
    throw new Error("No image provided");
  }

  try {
    const uploadedResponse = await cloudinary.uploader.upload(file, {
      folder: "acegrit",
      allowed_formats: ["jpg", "png"],
      transformation: [{ width: 500, height: 500, crop: "limit" }],
    });
    return uploadedResponse.secure_url;
  } catch (error: any) {
    throw new Error(`Error uploading image: ${error.message}`);
  }
}