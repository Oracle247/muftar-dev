import ImageComp from "src/components/Image";
import React, { useState } from "react";

const FileUploader: React.FC = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files ? event.target.files[0] : null;
    setSelectedFile(file);
    if (file) {
      console.log("Selected file:", file);
    }
  };

  return (
    <div className="relative">
      <div className="flex items-center gap-1">
        <ImageComp image="/images/upload-icon.svg" />
        {selectedFile ? (
          <p className="text-sm text-muftar-gray-600">{selectedFile.name}</p>
        ) : (
          <p className="text-muftar-app-800 text-sm">
            <span className="font-medium text-app-blue-100">Replace image</span>{" "}
            or drag and drop
          </p>
        )}

        <input
          type="file"
          className="absolute inset-0 cursor-pointer opacity-0"
          accept="image/*"
          onChange={handleChange} // Attach handleChange to input's onChange event
        />
      </div>
    </div>
  );
};

export default FileUploader;
