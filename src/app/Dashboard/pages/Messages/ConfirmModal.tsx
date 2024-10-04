import { IChat, IUser } from "../../../../interface/index";
import Modal from "../../../../components/Modal";
import { ChatData, UsersData } from "../../../../helpers/data";
import { useState } from "react";
import NotificationBar from "../../../../components/NotificationBar";

interface ActionModalProps {
  usage: "delete" | "block" | "none" | "delete_message";
  closeModal?: (param?: any) => void;
  isOpen?: boolean;
  user?: IUser;
  chat: IChat;
  messageId?: string;
  refreshChat: (param: IChat) => void;
}

const ConfrimModal = ({
  usage,
  closeModal,
  isOpen,
  chat,
  user,
  messageId,
  refreshChat,
}: ActionModalProps) => {
  // const [blockUser, setBlockUser] = useState(false);

  const deleteConversation = (chatId: number) => {
    const chatIndex = ChatData.findIndex((chat) => chat.id === chatId);
    if (chatIndex !== -1) {
      ChatData.splice(chatIndex, 1);
    }
    refreshChat(ChatData[0]);
  };

  // const deleteMessage = (id: string) => {
  //   const index =
  //     chat && chat.messages.findIndex((message) => message.id === id);
  //   if (index && index !== -1 && chat) {
  //     chat.messages.splice(index, 1);
  //   }
  //   refreshChat(chat);
  //   console.log(chat);
  // };

  const deleteMessage = (id: string) => {
    const messageIndex = chat.messages.findIndex(
      (message) => message.id === id,
    );

    if (messageIndex !== -1 && chat) {
      chat.messages.splice(messageIndex, 1);

      const chatIndex = ChatData.findIndex((c) => c.id === chat.id);
      if (chatIndex !== -1) {
        ChatData[chatIndex] = { ...chat };
      }

      refreshChat({ ...chat });
    }
  };

  return (
    <div>
      {usage !== "none" && usage !== "delete_message" && (
        <Modal
          isOpen={isOpen}
          className="flex items-center justify-center"
          closeModal={() => closeModal && closeModal("none")}
        >
          <div className="flex w-full max-w-[25rem] flex-col gap-2 rounded-2xl bg-white p-4 pb-6">
            {/* modal tittle */}
            <div className="flex w-full flex-none items-center">
              <svg
                onClick={() => closeModal && closeModal("none")}
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="lucide lucide-chevron-left cursor-pointer"
              >
                <path d="m15 18-6-6 6-6" />
              </svg>

              {usage === "delete" && (
                <p className="m-auto text-center text-sm text-black">
                  Delete Conversation
                </p>
              )}

              {usage === "block" && (
                <p className="m-auto text-center text-sm text-black">
                  Block User
                </p>
              )}
            </div>

            {/* modal warning */}

            <div className="h-[7rem] w-full rounded-lg border border-yellow-300 bg-red-50 p-4 text-app-error">
              <div className="mb-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="lucide lucide-triangle-alert"
                >
                  <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3" />
                  <path d="M12 9v4" />
                  <path d="M12 17h.01" />
                </svg>
              </div>
              {usage === "block" && (
                <p>You're about to block this user "{user?.name}"</p>
              )}
              {usage === "delete" && (
                <p>You're about to delete this conversation "{user?.name}"</p>
              )}
            </div>

            {/* modal body */}

            <div>
              {usage === "delete" && (
                <p className="text-sm text-gray-800">Reason for deleting</p>
              )}
              {usage === "block" && (
                <p className="text-sm text-gray-800">Reason for Blocking</p>
              )}
              <textarea
                draggable="false"
                className="mt-1 h-[10rem] w-full rounded-md border bg-white p-2 text-sm outline-none"
                placeholder="Enter a Description"
              />
            </div>

            {/* modal confimmation */}
            <div className="flex w-full gap-2">
              <button
                onClick={() => closeModal && closeModal("none")}
                className="ceholder w-full rounded-md border px-4 py-1 text-sm text-black"
              >
                Cancel to Go back
              </button>

              {usage === "delete" && (
                <button
                  onClick={() => deleteConversation(chat?.id ?? 0)}
                  className="w-full rounded-md border bg-red-500 px-4 py-1 text-white"
                >
                  Proceed to delete
                </button>
              )}

              {usage === "block" && (
                <button className="w-full rounded-md border bg-red-500 px-4 py-1 text-white">
                  Proceed to block
                </button>
              )}
            </div>
          </div>
        </Modal>
      )}
      {/* <NotificationBar
        type="success"
        title=""
        message="user blocked sucessfully"
      /> */}

      {usage !== "none" && usage === "delete_message" && (
        <Modal
          isOpen={isOpen}
          className="flex items-center justify-center"
          closeModal={() => closeModal && closeModal("none")}
        >
          <div className="flex w-full max-w-[28rem] flex-col gap-2 rounded-2xl bg-white p-4 pb-6">
            {/* modal tittle */}
            <div className="flex w-full flex-col items-center justify-center">
              <p className="m-auto text-center text-sm text-black">
                You're about to delete this message
              </p>
              <p className="m-auto text-center text-xs text-gray-400">
                click on Go back to cancel this action or click on delete to
                proceed
              </p>
            </div>

            {/* modal confimmation */}
            <div className="flex w-full gap-2">
              <button
                onClick={() => closeModal && closeModal("none")}
                className="ceholder w-full rounded-md border px-1 py-1 text-xs text-black"
              >
                Cancel
              </button>

              <button
                // onClick={() => deleteConversation(chat?.id ?? 0)}
                className="w-full rounded-md border border-red-100 bg-red-50 px-1 py-1 text-xs text-red-600"
              >
                Unsend for you
              </button>

              <button
                onClick={() => deleteMessage(messageId ?? "")}
                className="w-full rounded-md bg-red-500 px-1 py-1 text-xs text-white"
              >
                Unsend for everyone
              </button>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default ConfrimModal;
