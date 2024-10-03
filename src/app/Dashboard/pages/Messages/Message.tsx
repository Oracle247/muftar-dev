import ChatCard from "../../../../components/messages/ChatCard";
import ImageComp from "../../../../components/Image";
import { useEffect, useState } from "react";
import ReceiveMessage from "../../../../components/messages/ReceiveMessage";
import SentMessage from "../../../../components/messages/SentMessage";
import SentImage from "../../../../components/messages/SentImage";
import Modal from "../../../../components/Modal";
import ModalCardHeader from "../../../../components/ModalCardHeader";
import { IChat, IUser } from "../../../../interface/index";
import { ChatData, UsersData } from "../../../../helpers/data";
import ReceiveImage from "../../../../components/messages/ReceiveImage";
import { getCurrentTime } from "../../../../helpers/helperFunction";
import { useDebounce } from "../../../../hooks/useDebounce";
import ConfirmModal from "./ConfirmModal";

const Message = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showAttachment, setShowAttachment] = useState(false);
  const [showMessageSearch, setShowMessageSearch] = useState(false);
  const [addMessageSearchList, setAddMessageSearchList] = useState<IUser[]>([]);
  const [allMessagesSearchList, setAllMessagesSearchList] = useState<IChat[]>(
    [],
  );
  const [currentChat, setCurrentChat] = useState(ChatData[0]);
  const [isRecent, setIsRecent] = useState(true);
  const [isMessages] = useState<boolean>(ChatData.length > 0);
  const [messageInput, setMessageInput] = useState("");
  const [messageModalSearchInput, setMessageModalSearchInput] = useState("");
  const [allMessagesSearchInput, setAllMessagesSearchInput] = useState("");
  const [showActionModal, setShowActionModal] = useState(false);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [confirmModalUsage, setConfirmModalUsage] = useState<
    "delete" | "block" | "none"
  >("none");

  const debouncedMessageModalSearchTerm = useDebounce(
    messageModalSearchInput,
    500,
  );

  const debouncedAllMessageSearchTerm = useDebounce(
    allMessagesSearchInput,
    500,
  );

  const currentUserId = 18;

  useEffect(() => {
    const resent = ChatData.some((data) => data.recent == true);
    setIsRecent(resent);
    setCurrentChat(ChatData[0]);
    console.log(ChatData);
  }, [ChatData]);

  useEffect(() => {
    if (debouncedMessageModalSearchTerm.debouncedValue !== "") {
      const filteredResults = UsersData.filter((user) =>
        user.name
          .toLowerCase()
          .includes(
            debouncedMessageModalSearchTerm.debouncedValue.toLowerCase(),
          ),
      );
      setAddMessageSearchList(filteredResults);
    }
  }, [debouncedMessageModalSearchTerm, UsersData]);

  useEffect(() => {
    if (debouncedAllMessageSearchTerm.debouncedValue !== "") {
      const filteredResults = ChatData.filter((chat) => {
        const chatDetails = getNonGroupChatParticipant(chat);
        return (
          chatDetails &&
          chatDetails.name
            .toLowerCase()
            .includes(
              debouncedAllMessageSearchTerm.debouncedValue.toLowerCase(),
            )
        );
      });

      setAllMessagesSearchList(filteredResults);
    }
  }, [debouncedAllMessageSearchTerm, ChatData]);

  const showAttachmentHandler = () => {
    setShowAttachment(!showAttachment);
  };

  const showMessageSearchHandler = () => {
    setShowMessageSearch(!showMessageSearch);
  };

  const showActionModalHandler = () => {
    setShowActionModal(!showActionModal);
  };

  const showConfirmModalHandler = (usage: "delete" | "block") => {
    setShowConfirmModal(!showConfirmModal);
    setConfirmModalUsage(usage);
    setShowActionModal(false);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const getNonGroupChatParticipant = (chat: IChat): IUser => {
    const chatParticipantId = chat.participants.find(
      (participantId) => participantId !== currentUserId,
    );
    const chatParticipantDetails = UsersData.find(
      (user) => user.id === chatParticipantId,
    );
    return chatParticipantDetails as IUser;
  };

  const sendMessage = (chatId: number) => {
    const chatIndex = ChatData.findIndex((chat) => chat.id === chatId);
    if (chatIndex !== -1 && messageInput.trim() !== "") {
      ChatData[chatIndex].messages.push({
        id: `m${ChatData[chatIndex].messages.length + 1}`,
        chatId: chatId,
        text: messageInput,
        senderId: currentUserId,
        timestamp: getCurrentTime(),
        status: "delivered",
      });

      setMessageInput("");
    }
  };

  const addNewChat = (userId: number) => {
    const chat: IChat = {
      id: ChatData.length + 1,
      isGroupChat: false,
      participants: [currentUserId, userId],
      messages: [],
      recent: true,
      unread: 0,
    };
    ChatData.push(chat);
    setCurrentChat(chat);
  };

  return (
    <div className="flex h-[90vh] items-center justify-center overflow-y-hidden bg-white px-4 pb-4 md:px-16">
      <ConfirmModal
        isOpen={showConfirmModal}
        closeModal={showConfirmModalHandler}
        chat={currentChat}
        user={getNonGroupChatParticipant(currentChat)}
        usage={confirmModalUsage}
      />

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
                value={messageModalSearchInput}
                onChange={(e) => setMessageModalSearchInput(e.target.value)}
                className="h-full w-full bg-inherit text-xs text-app-gray-300 placeholder:text-base placeholder:text-app-gray-500 focus:outline-none"
                placeholder="Search"
              />
            </div>
          </div>
          <ul className="scrollbar flex h-[31rem] flex-none flex-col space-y-4 overflow-y-auto overflow-x-hidden">
            {debouncedMessageModalSearchTerm.debouncedValue !== "" &&
              addMessageSearchList.length < 1 && (
                <p className="px-6 font-semibold text-app-gray-300">
                  No account found
                </p>
              )}

            {messageModalSearchInput !== "" &&
              addMessageSearchList.length > 0 &&
              addMessageSearchList.map((user: IUser) => (
                <li
                  key={user.id}
                  className="flex w-full cursor-pointer items-center justify-between px-6 py-2 hover:bg-[#F2F4F7]"
                  onClick={() => {
                    addNewChat(user.id);
                    closeModal();
                  }}
                >
                  <div className="flex items-center gap-2">
                    <div className="relative">
                      <ImageComp
                        image="/images/chat-avatar.svg"
                        styles="rounded-full"
                        width={56}
                        height={56}
                      />
                      {user.online && (
                        <ImageComp
                          image="/images/online-indicator.svg"
                          styles="rounded-full absolute right-[0.2rem] bottom-[0.3rem]"
                          width={6}
                          height={6}
                        />
                      )}
                    </div>
                    <div className="flex w-full justify-between">
                      <div className="flex flex-col gap-1">
                        <p className="text-sm font-semibold text-app-gray-300">
                          {user.name}
                        </p>
                        <div className="flex gap-1">
                          <p className="text-sm text-app-blue-100">Muftar</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <span className="hidden h-6 rounded-2xl bg-app-gray-bg px-2.5 py-0.5 text-sm font-medium text-app-gray-300 md:flex">
                    {user.userType}
                  </span>
                </li>
              ))}

            {messageModalSearchInput === "" && (
              <p className="px-6 font-semibold text-app-gray-300">Recent</p>
            )}
            {!isRecent && messageModalSearchInput === "" && (
              <p className="text-center">No Recent Chats </p>
            )}
            {isRecent &&
              messageModalSearchInput === "" &&
              ChatData.map((chat: IChat) => (
                <li
                  key={chat.id}
                  className="flex w-full cursor-pointer items-center justify-between px-6 py-2 hover:bg-[#F2F4F7]"
                  onClick={() => {
                    setCurrentChat(chat);
                    closeModal();
                  }}
                >
                  <div className="flex items-center gap-2">
                    <div className="relative">
                      <ImageComp
                        image="/images/chat-avatar.svg"
                        styles="rounded-full"
                        width={56}
                        height={56}
                      />
                      {getNonGroupChatParticipant(chat).online && (
                        <ImageComp
                          image="/images/online-indicator.svg"
                          styles="rounded-full absolute right-[0.2rem] bottom-[0.3rem]"
                          width={6}
                          height={6}
                        />
                      )}
                    </div>
                    <div className="flex w-full justify-between">
                      <div className="flex flex-col gap-1">
                        <p className="text-sm font-semibold text-app-gray-300">
                          {chat.isGroupChat
                            ? chat.groupName
                            : getNonGroupChatParticipant(chat).name}
                        </p>
                        <div className="flex gap-1">
                          <p className="text-sm text-app-blue-100">Muftar</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <span className="hidden h-6 rounded-2xl bg-app-gray-bg px-2.5 py-0.5 text-sm font-medium text-app-gray-300 md:flex">
                    {chat.isGroupChat
                      ? chat.groupName
                      : getNonGroupChatParticipant(chat).userType}
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
                  value={allMessagesSearchInput}
                  onChange={(e) => setAllMessagesSearchInput(e.target.value)}
                  className="w-full bg-inherit text-xs text-[#464647] focus:outline-none"
                  placeholder="Search or start a new chat"
                />
              </div>
            </div>
            <div className="flex flex-grow flex-col space-y-4">
              {/* Items */}
              <div className="scroller h-10 flex-grow space-y-4 overflow-y-auto overflow-x-hidden bg-white">
                {isMessages &&
                  debouncedAllMessageSearchTerm.debouncedValue === "" &&
                  ChatData.map(
                    (chat) =>
                      !chat.isGroupChat &&
                      chat.messages.length > 0 && (
                        <div
                          key={chat.id}
                          className={
                            chat.id === currentChat.id ? "bg-[#F2F4F7]" : ""
                          }
                        >
                          <ChatCard
                            online={getNonGroupChatParticipant(chat).online}
                            name={getNonGroupChatParticipant(chat).name}
                            lastMessage={""}
                            lastSeen={getNonGroupChatParticipant(chat).lastSeen}
                            unRead={chat.unread ?? 0}
                            onClick={() => setCurrentChat(chat)}
                            image="/images/chat-avatar.svg"
                          />
                        </div>
                      ),
                  )}

                {isMessages &&
                  debouncedAllMessageSearchTerm.debouncedValue !== "" &&
                  allMessagesSearchList.map(
                    (chat) =>
                      !chat.isGroupChat &&
                      chat.messages.length > 0 && (
                        <div
                          key={chat.id}
                          className={
                            chat.id === currentChat.id ? "bg-[#F2F4F7]" : ""
                          }
                        >
                          <ChatCard
                            online={getNonGroupChatParticipant(chat).online}
                            name={getNonGroupChatParticipant(chat).name}
                            lastMessage={""}
                            lastSeen={getNonGroupChatParticipant(chat).lastSeen}
                            unRead={chat.unread ?? 0}
                            onClick={() => setCurrentChat(chat)}
                            image="/images/chat-avatar.svg"
                          />
                        </div>
                      ),
                  )}
                {isMessages &&
                  debouncedAllMessageSearchTerm.debouncedValue !== "" &&
                  allMessagesSearchList.length < 1 && (
                    <p className="text-center">No Chat Found</p>
                  )}
                {!isMessages && <p className="text-center">No Messages</p>}
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
                  {getNonGroupChatParticipant(currentChat)?.name}
                </p>
                <p className="text-xs text-app-gray-200">
                  {getNonGroupChatParticipant(currentChat)?.online
                    ? "online"
                    : getNonGroupChatParticipant(currentChat)?.lastActive}
                </p>
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
              <div className="w-fit cursor-pointer">
                <svg
                  onClick={() => showActionModalHandler()}
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="black"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="lucide lucide-ellipsis-vertical cursor-pointer"
                >
                  <circle cx="12" cy="12" r="1" />
                  <circle cx="12" cy="5" r="1" />
                  <circle cx="12" cy="19" r="1" />
                </svg>
              </div>
            </div>

            {showActionModal && (
              <div className="absolute right-[2rem] top-[4rem] z-40 w-[10rem] rounded-lg bg-white p-4 text-sm font-semibold text-red-500 shadow-md">
                <div
                  onClick={() => showConfirmModalHandler("block")}
                  className="cursor-pointer hover:bg-gray-100"
                >
                  Block Contact
                </div>
                <div
                  onClick={() => showConfirmModalHandler("delete")}
                  className="mt-2 cursor-pointer hover:bg-gray-100"
                >
                  Delete Conversion
                </div>
              </div>
            )}

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
                  {getNonGroupChatParticipant(currentChat).name}
                </p>
                <p className="text-sm font-medium text-app-blue-100">Muftar</p>
                <p className="rounded-2xl bg-app-gray-bg px-2.5 py-0.5 text-sm font-medium text-app-gray-300">
                  {getNonGroupChatParticipant(currentChat).userType}
                </p>
              </div>
            </div>
            {currentChat.messages
              .sort((a, b) => {
                const timeA = new Date(
                  `1970-01-01T${a.timestamp}:00`,
                ).getTime();
                const timeB = new Date(
                  `1970-01-01T${b.timestamp}:00`,
                ).getTime();

                return timeA - timeB;
              })
              .map((message) =>
                message.senderId !== currentUserId ? (
                  message.media ? (
                    <ReceiveImage
                      key={message.id}
                      media={message.media}
                      time={message.timestamp}
                      message={message.text}
                    />
                  ) : (
                    <ReceiveMessage
                      key={message.id}
                      message={message.text}
                      time={message.timestamp}
                    />
                  )
                ) : message.media ? (
                  <SentImage
                    key={message.id}
                    media={message.media}
                    time={message.timestamp}
                    message={message.text}
                  />
                ) : (
                  <SentMessage
                    key={message.id}
                    seen={message.status == "seen"}
                    message={message.text}
                    time={message.timestamp}
                  />
                ),
              )}

            {/* <ChatDate date="FEB 01, 2024 AT 21:22" /> */}
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
                onKeyDown={(e) => {
                  if (e.key === "Enter" && messageInput.trim() !== "") {
                    sendMessage(currentChat.id);
                  }
                }}
                value={messageInput}
                onChange={(e) => setMessageInput(e.target.value)}
                placeholder="Input messages"
                className="w-full rounded-3xl border border-[#D0D5DD] bg-inherit px-3.5 py-2.5 text-black placeholder:text-app-gray-placeholder focus:outline-none"
                style={{ boxShadow: "0px 1px 2px 0px #1018280D" }}
              />
              <button
                onClick={() => sendMessage(currentChat.id)}
                className="relative cursor-pointer overflow-hidden rounded-lg bg-app-blue-100 px-4 py-2.5 text-white before:absolute before:inset-0 before:bg-white before:opacity-0 before:transition-opacity disabled:before:opacity-50"
                disabled={messageInput === ""}
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
