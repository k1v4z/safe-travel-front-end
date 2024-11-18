export const uploadImage = async (imageFile: File, folderName: string = "default-folder") => {
    const formData = new FormData();
    formData.append("images", imageFile);
    formData.append("folderName", folderName);

    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/upload`, {
            method: "POST",
            body: formData,
        });

        const result = await response.json();
        if (response.ok) {
            return result.imageUrl[0]?.url; 
        } else {
            throw new Error(`Upload failed: ${result.message}`);
        }
    } catch (error) {
        console.error("Error uploading image:", error);
        throw error;
    }
};
