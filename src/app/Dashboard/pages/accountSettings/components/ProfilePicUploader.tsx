import ImageComp from "src/components/Image";
import React, { useRef, useState } from "react";

interface FileInputButtonProps {
  onFileChange: (file: File | null) => void;
}

const ProfilePicUploader: React.FC<FileInputButtonProps> = ({
  onFileChange,
}) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [uploadComp, setUploadComp] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      const file = files[0];
      const validTypes = ["image/png", "image/jpeg"];
      if (!validTypes.includes(file.type)) {
        setError("Invalid file type. Only PNG or JPG files are allowed.");
        setUploadedFile(null);
        onFileChange(null);
        return;
      }

      const img = new Image();
      img.src = URL.createObjectURL(file);
      img.onload = () => {
        if (img.width > 800 || img.height > 400) {
          setError(
            "Invalid file dimensions. Maximum allowed dimensions are 800x400px.",
          );
          setUploadedFile(null);
          onFileChange(null);
        } else {
          setError(null);
          setUploadedFile(file);
          setUploadComp(true);
          onFileChange(file); // Sending the file through the prop
        }
      };
    }
  };

  return (
    <div className="flex items-center">
      <input
        accept="image/*"
        type="file"
        ref={fileInputRef}
        className="hidden"
        id="image-upload" // Add id to link the label correctly
        onChange={handleFileUpload}
      />
      <label
        htmlFor="image-upload"
        className="flex cursor-pointer items-center"
      >
        <ImageComp image="/images/upload-icon.svg" />
        <p className="ml-2 text-sm text-muftar-gray-600">
          <span className="font-bold text-app-blue-100">Replace image</span> or
          drag and drop
        </p>
      </label>
      {error && <p className="mt-2 text-sm text-red-500">{error}</p>}
    </div>
  );
};

export default ProfilePicUploader;
