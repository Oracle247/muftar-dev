import React, { useRef, useState } from "react";
import ImageComp from "../../../../../components/Image";

interface FileInputButtonProps {
  onFileChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const FileInputButton: React.FC<FileInputButtonProps> = ({ onFileChange }) => {
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
        } else {
          setError(null);
          setUploadedFile(file);
          uploadFile(file);
          setUploadComp(true);
        }
      };
    }
    onFileChange(event);
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
  };
  //   console.log(uploadProgress.toFixed(0));
  //   console.log(uploadedFile);

  return (
    <>
      {!uploadComp && (
        <>
          <div
            className={`${error ? "border-app-error border-2" : "border-1 border-app-border"} flex cursor-pointer flex-col items-center gap-4 rounded-xl border px-6 py-4`}
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
            <div className="text-app-error mt-4 flex justify-center">
              <p className="text-center text-sm">{error}</p>
            </div>
          )}
        </>
      )}
      {uploadComp && (
        <div className="flex min-w-[388px] flex-col gap-2.5 rounded-xl">
          <div className="flex justify-end gap-6">
            <div className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-app-gray-400">
              <ImageComp image="/images/post-image-edit.svg" />
              <input
                type="file"
                ref={fileInputRef}
                className="hidden"
                onChange={handleFileUpload}
              />
            </div>
            <div className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-app-gray-400">
              <ImageComp
                image="/images/post-image-delete.svg"
                handleClick={handleDelete}
              />
            </div>
          </div>
          <ImageComp
            image={(uploadedFile && URL.createObjectURL(uploadedFile)) || ""}
            styles="rounded-2xl h-full max-h-[300px] w-full object-cover"
          />
        </div>
      )}
    </>
  );
};

export default FileInputButton;
