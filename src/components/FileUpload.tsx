import React, { useEffect, useRef, useState } from "react";
import ImageComp from "./Image";

interface FileInputButtonProps {
  onFileChange: (file: File | null) => void;
  resetFile?: boolean;
}

const FileInputButton: React.FC<FileInputButtonProps> = ({
  onFileChange,
  resetFile,
}) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [uploadProgress, setUploadProgress] = useState<number>(0);
  const [uploading, setUploading] = useState<boolean>(false);
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [uploadComp, setUploadComp] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleDivClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      const file = files[0];
      const validTypes = [
        "image/svg+xml",
        "image/png",
        "image/jpeg",
        "image/gif",
      ];

      if (!validTypes.includes(file.type)) {
        setError(
          "Invalid file type. Only SVG, PNG, JPG, or GIF files are allowed.",
        );
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
          uploadFile(file);
        }
      };
    }
  };

  const uploadFile = (file: File) => {
    const formData = new FormData();
    formData.append("file", file);

    const xhr = new XMLHttpRequest();
    xhr.open("POST", "YOUR_UPLOAD_URL_HERE");

    xhr.upload.onprogress = (event) => {
      if (event.lengthComputable) {
        const progress = (event.loaded / event.total) * 100;
        setUploadProgress(progress);
      }
    };

    xhr.onloadstart = () => {
      setUploading(true);
      setUploadProgress(0);
    };

    xhr.onloadend = () => {
      setUploading(false);
    };

    xhr.send(formData);
  };

  const handleDelete = () => {
    setUploadedFile(null);
    setUploadComp(false);
    onFileChange(null); // Resetting the prop when the file is deleted
  };

  useEffect(() => {
    resetFile && handleDelete();
  }, [resetFile]);

  return (
    <>
      {!uploadComp && (
        <>
          <div
            className={`${error ? "border-2 border-app-error" : "border-1 border-app-border"} flex cursor-pointer flex-col items-center gap-4 rounded-xl border px-6 py-4`}
            onClick={handleDivClick}
          >
            <img
              src="/images/upload-icon.svg"
              alt="Upload Icon"
              className="h-10 w-10"
            />
            <div className="flex flex-col items-center gap-1">
              <p className="text-sm font-semibold text-[#6941C6]">
                Click to upload{" "}
                <span className="font-normal text-app-gray-200">
                  or drag and drop
                </span>
              </p>
              <p className="text-xs leading-[18px] text-app-gray-200">
                SVG, PNG, JPG or GIF (max. 800x400px)
              </p>
            </div>
            {uploading && (
              <div className="h-2.5 w-full rounded-full bg-gray-200 dark:bg-gray-700">
                <div
                  className="h-2.5 rounded-full bg-blue-600"
                  style={{ width: `${uploadProgress}%` }}
                ></div>
              </div>
            )}
            <input
              type="file"
              ref={fileInputRef}
              className="hidden"
              onChange={handleFileUpload}
            />
          </div>
          {error && (
            <div className="mt-4 flex justify-center text-app-error">
              <p className="text-center text-sm">{error}</p>
            </div>
          )}
        </>
      )}
      {uploadComp && (
        <div className="min-w-[388px] rounded-xl border border-[#EAECF0] p-4">
          <div className="mb-1 flex items-center justify-between">
            <div className="flex items-start gap-4">
              <ImageComp image="/images/file-upload-icon.svg" />
              <p className="text-sm font-medium text-app-gray-300">
                {uploadedFile?.name}
                <br></br>
                <span className="font-normal text-app-gray-300">{`${uploadedFile?.size && (uploadedFile?.size / 1024).toFixed(0)} KB`}</span>
              </p>
            </div>
            <div onClick={handleDelete}>
              <ImageComp
                image="/images/delete-icon.svg"
                styles="cursor-pointer"
              />
            </div>
          </div>
          <div className="flex w-full items-center gap-3">
            <div className="h-2 w-[90%] rounded-lg bg-[#EAECF0]">
              <div
                className={`h-full w-[${uploadProgress.toFixed(0)}%] rounded-lg bg-[#7F56D9]`}
              ></div>
            </div>
            <p className="text-sm font-medium">{`${uploadProgress.toFixed(0)}%`}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default FileInputButton;
