// export interface IChatData {
//   id: number;
//   name: string;
//   userType: string;
//   lastSeen: string;
//   lastActive: string;
//   online: boolean;
//   lastMessage?: string;
//   unread?: number;
//   recent: boolean;
// }

export interface IMessage {
  id: string;
  chatId: number;
  senderId: number;
  text: string;
  media?: string;
  status: "seen" | "delivered" | "false";
  timestamp: string;
}

export interface IChatListItem {
  id: number;
  otherParticipants: IUser | IUser[];
  groupName?: string;
  lastMessage?: string;
  unread: number;
  recent: boolean;
}

// export interface IChat {
//   id: number;
//   participants: IUser[];
//   messages: IMessage[];
//   lastMessage?: string;
//   isGroupChat: boolean;
//   unread: number;
//   recent: boolean;
// }

export interface IChat {
  id: number;
  participants: number[];
  messages: IMessage[];
  lastMessage?: string;
  isGroupChat: boolean;
  groupName?: string;
  unread: number;
  recent: boolean;
}

export interface IUser {
  id: number;
  name: string;
  userType: string;
  lastSeen: string;
  lastActive: string;
  online: boolean;
  avatar?: any;
}

// export interface IMessageData {
//   chatId: number;
//   message: IChatMessage[];
// }

// export interface IChatMessage {
//   id: number;
//   text: string;
//   image?: unknown;
//   messageType: "received" | "sent";
//   timeStamp: string;
// }
