import { IChat, IUser } from "../interface/index";
import { getCurrentTime } from "./helperFunction";

export const SubscriptionBenefit1: string[] = [
  "Access to all basic features",
  "Basic reporting and analytics",
  "Up to 10 individual users",
  "20GB individual data each user",
  "Basic chat and email support",
];

export const SubscriptionBenefit2: string[] = [
  "200+ integrations",
  "Advanced reporting and analytics",
  "Up to 20 individual users",
  "40GB individual data each user",
  "Priority chat and email support",
];

export const SubscriptionBenefit3: string[] = [
  "Advanced custom fields",
  "Audit log and data history",
  "Unlimited individual users",
  "Unlimited individual data",
  "Personalised+priotity service",
];

export const UsersData: IUser[] = [
  {
    id: 0,
    name: "Odisi Emmanuel",
    userType: "Shippper",
    lastActive: "Active 1h ago",
    online: false,
    lastSeen: "10:29",
  },

  {
    id: 1,
    name: "John Doe",
    userType: "Reciever",
    lastActive: "Active 2h ago",
    online: true,
    lastSeen: "10:29",
  },

  {
    id: 2,
    name: "Jospeh Emmanuel",
    userType: "Shipper/Reciver",
    lastActive: "Active 2h ago",
    online: true,
    lastSeen: "10:29",
  },

  {
    id: 3,
    name: "James Doe",
    userType: "Reciever",
    lastActive: "Active 4h ago",
    online: true,
    lastSeen: "10:29",
  },

  {
    id: 4,
    name: "Lankiman James",
    userType: "Reciever",
    lastActive: "Active 6h ago",
    online: true,
    lastSeen: "10:29",
  },

  {
    id: 5,
    name: "Evelyn Bond",
    userType: "Reciever",
    lastActive: "Active 3h ago",
    online: true,
    lastSeen: "10:29",
  },
];

export let ChatData: IChat[] = [
  {
    id: 0,
    participants: [0, 18],
    messages: [
      {
        id: "m1",
        chatId: 0,
        text: "how are you",
        senderId: 0,
        timestamp: "10:29",
        status: "seen",
      },

      {
        id: "m2",
        chatId: 0,
        text: "how are you",
        senderId: 18,
        timestamp: "10:28",
        status: "seen",
      },
    ],
    isGroupChat: false,
    unread: 0,
    recent: true,
  },

  {
    id: 1,
    participants: [3, 18],
    messages: [
      {
        id: "m1",
        chatId: 1,
        text: "how are you",
        senderId: 3,
        timestamp: "10:30",
        status: "delivered",
      },
      {
        id: "m2",
        chatId: 1,
        text: "Hi, I like your contents and i’m i follow you now ❤️😍 Hi, I like your contents and i’m i follow you now ❤️😍",
        senderId: 18,
        timestamp: "10:32",
        status: "seen",
      },
      {
        id: "m3",
        chatId: 1,
        text: "I’ve sent the image I’ve sent the image I’ve sent the image",
        senderId: 18,
        media: "/images/chat-image-1.svg",
        timestamp: "10:58",
        status: "delivered",
      },
    ],
    isGroupChat: false,
    unread: 0,
    recent: true,
  },
];
