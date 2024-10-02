import ChatCard from "../../../../components/messages/ChatCard";
import ImageComp from "../../../../components/Image";
import React, { useState } from "react";
import ReceiveMessage from "../../../../components/messages/ReceiveMessage";
import SentMessage from "../../../../components/messages/SentMessage";
import ChatDate from "../../../../components/messages/ChatDate";
import SentImage from "../../../../components/messages/SentImage";
import Modal from "../../../../components/Modal";
import ModalCardHeader from "../../../../components/ModalCardHeader";

const Message = () => {
  const [isModalOpen, setIsModalOpen] = React.useState<boolean>(false);
  const [showAttachment, setShowAttachment] = useState(false);
  const [showMessageSearch, setShowMessageSearch] = useState(false);

  const showAttachmentHandler = () => {
    setShowAttachment(!showAttachment);
  };

  const showMessageSearchHandler = () => {
    setShowMessageSearch(!showMessageSearch);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };
  return (
    <div className="flex h-[90vh] items-center justify-center overflow-y-hidden bg-white px-4 pb-4 md:px-16">
      <Modal isOpen={isModalOpen} className="flex items-center justify-center">
        <div className="w-full max-w-[37rem] rounded-2xl bg-white">
          <ModalCardHeader
            title=" Messages"
            closeHandler={() => closeModal()}
          />
          <div className="my-3 flex items-center space-x-2 px-4">
            <div className="flex flex-grow items-center space-x-2 rounded-lg border border-app-border bg-white p-3">
              <ImageComp image="/images/contact-search.svg" />
              <input
                type="text"
                className="w-full text-xs text-app-gray-300 placeholder:text-base placeholder:text-app-gray-500 focus:outline-none"
                placeholder="Search"
              />
            </div>
          </div>
          <ul className="scrollbar flex h-[31rem] flex-none flex-col space-y-4 overflow-y-auto overflow-x-hidden">
            <p className="px-6 font-semibold text-app-gray-300">Recent</p>
            {[1, 2, 3, 4, 5, 6, 7].map(() => (
              <li
                className="flex w-full cursor-pointer items-center justify-between px-6 py-2 hover:bg-[#F2F4F7]"
                //   onClick={onClick}
              >
                <div className="flex items-center gap-2">
                  <div className="relative">
                    <ImageComp
                      image="/images/chat-avatar.svg"
                      styles="rounded-full"
                      width={56}
                      height={56}
                    />

                    <ImageComp
                      image="/images/online-indicator.svg"
                      styles="rounded-full absolute right-[0.2rem] bottom-[0.3rem]"
                      width={6}
                      height={6}
                    />
                  </div>
                  <div className="flex w-full justify-between">
                    <div className="flex flex-col gap-1">
                      <p className="text-sm font-semibold text-app-gray-300">
                        Joseph Emmanuel
                      </p>
                      <div className="flex gap-1">
                        <p className="text-sm text-app-blue-100">Muftar</p>
                      </div>
                    </div>
                  </div>
                </div>
                <span className="hidden h-6 rounded-2xl bg-app-gray-bg px-2.5 py-0.5 text-sm font-medium text-app-gray-300 md:flex">
                  Shipper / Receiver
                </span>
              </li>
            ))}
          </ul>
        </div>
      </Modal>
      <div className="scroller flex h-full w-full overflow-y-hidden">
        {/* Contacts */}
        <div className="flex h-full w-[30rem] flex-none flex-col">
          {/* Header */}
          <div className="flex justify-between bg-white p-6">
            <p className="text-xl font-semibold text-app-gray-300">
              All messages
            </p>
            <div className="flex items-center space-x-8">
              <ImageComp
                image="/images/add-circle.svg"
                styles="cursor-pointer"
                handleClick={() => openModal()}
              />
            </div>
          </div>
          {/* Body */}
          <div className="flex flex-grow flex-col space-y-4 border-l border-t border-app-border">
            {/* List */}
            {/* Search */}
            <div className="mt-4 flex items-center space-x-2 px-4">
              <div className="flex flex-grow items-center space-x-2 rounded-lg border border-app-border bg-white p-3 placeholder:text-base placeholder:text-app-gray-500">
                <ImageComp image="/images/contact-search.svg" />

                <input
                  type="text"
                  className="w-full text-xs text-[#aebac1] focus:outline-none"
                  placeholder="Search or start a new chat"
                />
              </div>
            </div>
            <div className="flex flex-grow flex-col space-y-4">
              {/* Items */}
              <div className="scroller h-10 flex-grow space-y-4 overflow-y-auto overflow-x-hidden bg-white">
                <ChatCard
                  online={true}
                  name="Joseph Emmanuel"
                  lastMessage="My pleasure the chat continuaon of..."
                  lastSeen="10:29"
                  unRead={2}
                  onClick={() => console.log("clicked!!!")}
                  image="/images/chat-avatar.svg"
                />
                <ChatCard
                  online={false}
                  name="Joseph Emmanuel"
                  lastMessage="My pleasure the chat continuaon of..."
                  lastSeen="10:29"
                  unRead={2}
                  onClick={() => console.log("clicked!!!")}
                  image="/images/chat-avatar.svg"
                />
                <ChatCard
                  online={true}
                  name="Joseph Emmanuel"
                  lastMessage="My pleasure the chat continuaon of..."
                  lastSeen="10:29"
                  unRead={0}
                  onClick={() => console.log("clicked!!!")}
                  image="/images/chat-avatar.svg"
                />
                <ChatCard
                  online={true}
                  name="Joseph Emmanuel"
                  lastMessage="My pleasure the chat continuaon of..."
                  lastSeen="10:29"
                  unRead={0}
                  onClick={() => console.log("clicked!!!")}
                  image="/images/chat-avatar.svg"
                />
                {[1, 2, 3, 4, 5].map(() => (
                  <ChatCard
                    online={true}
                    name="Joseph Emmanuel"
                    lastMessage="My pleasure the chat continuaon of..."
                    lastSeen="10:29"
                    unRead={0}
                    onClick={() => console.log("clicked!!!")}
                    image="/images/chat-avatar.svg"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Chat  */}
        <div className="flex flex-grow flex-col overflow-hidden bg-white">
          {/* Header  */}
          <div className="relative flex justify-between bg-white px-10 py-4">
            <div className="flex flex-none items-center space-x-2">
              <ImageComp
                image="/images/chat-avatar.svg"
                styles="rounded-full object-cover"
                width={48}
                height={48}
              />
              <div className="flex flex-col gap-1">
                <p className="font-semibold text-app-gray-300">
                  Joseph Emmanuel
                </p>
                <p className="text-xs text-app-gray-200">Active 11h ago</p>
              </div>
            </div>
            <div
              className={`${showMessageSearch && "bg-[#F2F4F7]"} flex flex-none items-center space-x-8 rounded-md p-[13px]`}
            >
              <ImageComp
                image="/images/chat-search.svg"
                styles="cursor-pointer"
                handleClick={() => showMessageSearchHandler()}
              />
            </div>
            {showMessageSearch && (
              <div
                style={{
                  boxShadow:
                    "0px 8px 8px -4px #10182808, 0px 20px 24px -4px #10182814",
                }}
                className="absolute right-[1rem] top-[4rem] z-40 flex w-[485px] flex-none items-center gap-4 rounded-lg bg-white p-4"
              >
                <div className="flex flex-grow items-center space-x-2 rounded-lg border border-app-border bg-white p-3 placeholder:text-base placeholder:text-app-gray-500">
                  <ImageComp image="/images/contact-search.svg" />

                  <input
                    type="text"
                    className="w-full text-xs text-app-gray-300 focus:outline-none"
                    placeholder="Search within chat"
                  />
                </div>
                <div className="flex items-center gap-6">
                  <ImageComp
                    image="/images/s-up.svg"
                    width={24}
                    height={24}
                    styles="cursor-pointer"
                  />
                  <ImageComp
                    image="/images/s-down.svg"
                    width={24}
                    height={24}
                    styles="cursor-pointer"
                  />
                  <ImageComp
                    image="/images/s-divide.svg"
                    styles="cursor-pointer"
                  />
                  <ImageComp
                    image="/images/s-cancel.svg"
                    width={24}
                    height={24}
                    styles="cursor-pointer"
                    handleClick={() => showMessageSearchHandler()}
                  />
                </div>
              </div>
            )}
          </div>

          {/* Body */}
          <div className="scroller flex w-full flex-grow flex-col space-y-4 overflow-y-auto overflow-x-hidden border-l border-t border-[#D0D5DD] bg-white px-4 py-6 xl:px-6">
            <div className="flex justify-center">
              <div className="flex max-w-[202px] flex-col items-center gap-2 p-3">
                <ImageComp
                  image="/images/chat-avatar.svg"
                  width={80}
                  height={80}
                  styles="rounded-full"
                />
                <p className="text-lg font-semibold text-app-gray-100">
                  Joseph Emmanuel
                </p>
                <p className="text-sm font-medium text-app-blue-100">Muftar</p>
                <p className="rounded-2xl bg-app-gray-bg px-2.5 py-0.5 text-sm font-medium text-app-gray-300">
                  Shipper / Receiver
                </p>
              </div>
            </div>
            <ReceiveMessage
              message="Hi, I like your contents and i’m i follow you now ❤️😍 Hi, I
                  like your contents and i’m i follow you now ❤️😍"
              time="  11:20"
            />

            <SentMessage
              seen={true}
              message="Cc comment tu vas ? "
              time="   11:20"
            />

            <ChatDate date="FEB 01, 2024 AT 21:22" />

            {/* Message One */}
            <ReceiveMessage
              message="Hi, I like your contents and i’m i follow you now ❤️😍 Hi, I
                  like your contents and i’m i follow you now ❤️😍"
              time="  11:20"
            />

            <SentMessage
              seen={true}
              message="Cc comment tu vas ? "
              time="   11:20"
            />

            <ReceiveMessage
              message="Hi, I like your contents and i’m i follow you now ❤️😍 Hi, I
                  like your contents and i’m i follow you now ❤️😍"
              time="  11:20"
            />

            <SentImage
              media="/images/chat-image-1.svg"
              message="I’ve sent the image I’ve sent the image I’ve sent the image"
              time="11:20"
            />
          </div>
          {/* <!-- Body -->
                <!-- Footer --> */}
          <div className="flex flex-none items-center space-x-4 bg-white px-5 py-6">
            <div
              className={`${showAttachment && "bg-[#F2F4F7]"} relative flex cursor-pointer rounded-md p-2.5`}
            >
              <ImageComp
                image="/images/attachment.svg"
                handleClick={() => showAttachmentHandler()}
              />
              {showAttachment && (
                <div
                  className="absolute bottom-[4rem] left-[-1rem] flex w-[220px] flex-grow flex-col rounded-lg border border-[#EAECF0] bg-white"
                  style={{
                    boxShadow:
                      "0px 4px 6px -2px #10182808, 0px 12px 16px -4px #10182814",
                  }}
                >
                  <div className="flex cursor-pointer items-center gap-[15px] p-4 hover:bg-[#F2F4F7]">
                    <ImageComp image="/images/photo.svg" />
                    <span className="font-medium text-app-gray-300">
                      Photos & videos
                    </span>
                  </div>
                  <div className="flex cursor-pointer items-center gap-[15px] p-4 hover:bg-[#F2F4F7]">
                    <ImageComp image="/images/camera.svg" />
                    <span className="font-medium text-app-gray-300">
                      Camera
                    </span>
                  </div>
                  <div className="flex cursor-pointer items-center gap-[15px] p-4 hover:bg-[#F2F4F7]">
                    <ImageComp image="/images/file.svg" />
                    <span className="font-medium text-app-gray-300">
                      Document
                    </span>
                  </div>
                </div>
              )}
            </div>
            <div className="flex flex-grow items-center space-x-4">
              <input
                placeholder="Input messages"
                className="w-full rounded-3xl border border-[#D0D5DD] px-3.5 py-2.5 placeholder:text-app-gray-placeholder focus:outline-none"
                style={{ boxShadow: "0px 1px 2px 0px #1018280D" }}
              />
              <button
                className="relative cursor-pointer overflow-hidden rounded-lg bg-app-blue-100 px-4 py-2.5 text-white before:absolute before:inset-0 before:bg-white before:opacity-0 before:transition-opacity disabled:before:opacity-50"
                disabled={true}
              >
                send
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Message;
