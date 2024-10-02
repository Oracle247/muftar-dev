import React, { useState } from "react";
import ModalCardHeader from "../../../../../components/ModalCardHeader";
import ImageComp from "../../../../../components/Image";
import Modal from "../../../../../components/Modal";
import { FormInput, FormTextArea } from "../../../../../components/Input";
import DynamicInputFields from "./PollInput";
import FileInputButton from "./PostImageUpload";

interface CreatePostProps {
  isOpen: boolean;
  closeModal: () => void;
}

const CreatePost = ({ isOpen, closeModal }: CreatePostProps) => {
  const [textModal, setTextModal] = useState<Boolean>(true);
  const [pollModal, setPollModal] = useState<Boolean>(false);
  const [imageModal, setImageModal] = useState<Boolean>(false);
  const [image, setImage] = useState<File | null>(null);
  // const [isOpen, setIsOpen] = useState<boolean>(true);

  const pollModlHandler = () => {
    setPollModal(true);
    setTextModal(false);
    setImageModal(false);
  };

  const imageModalHandler = () => {
    setImageModal(true);
    setPollModal(false);
    setTextModal(false);
  };

  const textModalHandler = () => {
    setImageModal(false);
    setPollModal(false);
    setTextModal(true);
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      // console.log("Selected file:", files[0]);
    }
  };
  return (
    <Modal
      isOpen={isOpen}
      closeModal={() => closeModal()}
      className="flex items-center justify-center"
    >
      <div
        className="w-full max-w-[640px] rounded-2xl bg-white"
        onClick={(e) => e.stopPropagation()}
      >
        <ModalCardHeader
          title="Create a post"
          closeHandler={() => closeModal()}
        />
        {textModal && !pollModal && !imageModal && (
          <div className="flex items-center space-x-2 px-4 py-3">
            <div className="flex w-full flex-col space-y-4">
              <FormInput
                name="Header"
                placeholder="Header"
                type="text"
                id="header"
                header={false}
              />
              <div className="flex w-full flex-col space-y-3">
                <FormTextArea
                  id="body"
                  placeholder="Body text"
                  header={false}
                />
                <div className="flex items-center justify-between py-5">
                  <div className="flex items-center gap-6">
                    <div
                      className={`${pollModal && "bg-app-border"} flex h-10 w-10 items-center justify-center rounded-full hover:bg-app-border`}
                      onClick={pollModlHandler}
                    >
                      <ImageComp
                        image="/images/poll-icon.svg"
                        styles="cursor-pointer"
                      />
                    </div>
                    <div
                      className={`${imageModal && "bg-app-border"} flex h-10 w-10 items-center justify-center rounded-full hover:bg-app-border`}
                      onClick={imageModalHandler}
                    >
                      <ImageComp
                        image="/images/image-icon.svg"
                        styles="cursor-pointer"
                      />
                    </div>
                  </div>
                  <button
                    className="relative cursor-pointer overflow-hidden rounded-lg bg-app-blue-100 px-4 py-2.5 text-white before:absolute before:inset-0 before:bg-white before:opacity-0 before:transition-opacity disabled:before:opacity-50"
                    disabled={true}
                  >
                    post
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
        {pollModal && !textModal && !imageModal && (
          <div className="flex items-center space-x-2 px-4 py-3">
            <div className="flex w-full flex-col space-y-4">
              <FormTextArea
                id="body"
                placeholder="Share your experience or get advice from other professionals"
                height="h-[100px]"
                header={false}
              />
              <div className="flex w-full flex-col space-y-3">
                <div className="flex w-full flex-col space-y-6 rounded-lg bg-app-gray-bg p-4">
                  <DynamicInputFields />
                  <div className="w-1/2">
                    <FormInput name="Poll duration" placeholder="1 day" />
                  </div>
                  <span
                    className="cursor-pointer text-center text-base font-semibold text-app-error"
                    onClick={textModalHandler}
                  >
                    Remove Poll
                  </span>
                </div>

                <div className="flex items-center justify-between py-5">
                  <div className="flex items-center gap-6">
                    <div
                      className={`${pollModal && "bg-app-border"} flex h-10 w-10 items-center justify-center rounded-full transition-colors hover:bg-app-border`}
                      onClick={pollModlHandler}
                    >
                      <ImageComp
                        image="/images/poll-icon.svg"
                        styles="cursor-pointer"
                      />
                    </div>
                    <div
                      className={`${imageModal && "bg-app-border"} flex h-10 w-10 items-center justify-center rounded-full transition-colors hover:bg-app-border`}
                      onClick={imageModalHandler}
                    >
                      <ImageComp
                        image="/images/image-icon.svg"
                        styles="cursor-pointer"
                      />
                    </div>
                  </div>
                  <button
                    className="relative cursor-pointer overflow-hidden rounded-lg bg-app-blue-100 px-4 py-2.5 text-white before:absolute before:inset-0 before:bg-white before:opacity-0 before:transition-opacity disabled:before:opacity-50"
                    disabled={true}
                  >
                    post
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
        {!pollModal && !textModal && imageModal && (
          <div className="flex items-center space-x-2 px-4 py-3">
            <div className="flex w-full flex-col space-y-3">
              <div className="px-5 py-0 md:py-[52px]">
                <FileInputButton onFileChange={handleFileChange} />
              </div>
              <div className="flex items-center justify-between py-5">
                <div className="flex items-center gap-6">
                  <div
                    className={`${pollModal && "bg-app-border"} flex h-10 w-10 items-center justify-center rounded-full transition-colors hover:bg-app-border`}
                    onClick={pollModlHandler}
                  >
                    <ImageComp
                      image="/images/poll-icon.svg"
                      styles="cursor-pointer"
                    />
                  </div>
                  <div
                    className={`${imageModal && "bg-app-border"} flex h-10 w-10 items-center justify-center rounded-full transition-colors hover:bg-app-border`}
                    onClick={imageModalHandler}
                  >
                    <ImageComp
                      image="/images/image-icon.svg"
                      styles="cursor-pointer"
                    />
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <button
                    className="relative cursor-pointer overflow-hidden rounded-lg border border-app-border bg-white px-4 py-2.5 text-sm font-semibold text-app-gray-300"
                    onClick={textModalHandler}
                  >
                    Back
                  </button>
                  <button
                    className="relative cursor-pointer overflow-hidden rounded-lg bg-app-blue-100 px-4 py-2.5 text-sm font-semibold text-white before:absolute before:inset-0 before:bg-white before:opacity-0 before:transition-opacity disabled:before:opacity-50"
                    disabled={true}
                  >
                    Next
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </Modal>
  );
};

export default CreatePost;
