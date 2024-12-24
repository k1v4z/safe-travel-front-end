// cloudinary.ts
export const uploadToCloudinary = async (file: File): Promise<string> => {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", "forum"); // Thay bằng preset của bạn

  try {
    const response = await fetch("https://api.cloudinary.com/v1_1/dp6swieko/upload", {
      method: "POST",
      body: formData,
    });

    if (!response.ok) {
      throw new Error("Failed to upload image to Cloudinary");
    }

    const data = await response.json();
    return data.secure_url; // Trả về URL công khai của ảnh
  } catch (error) {
    console.error("Cloudinary upload error:", error);
    throw error; // Ném lỗi để biết có gì sai
  }
};
