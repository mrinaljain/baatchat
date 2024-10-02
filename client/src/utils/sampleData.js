export const sampleChats = [
  {
    avatar: ["https://via.placeholder.com/50"],
    name: "Alice Johnson",
    groupChat: false,
    sameSender: false,
    isOnline: true,
    newMessageAlert: false,
    members: ["1", "2"],
    _id: "10",
    handleDeleteChatOpen: () => console.log("Delete chat with Alice"),
  },
  {
    avatar: ["https://via.placeholder.com/50"],
    name: "Bob Smith",

    groupChat: true,
    sameSender: false,
    isOnline: false,
    newMessageAlert: true,
    members: ["1", "2"],
    _id: "1",
    handleDeleteChatOpen: () => console.log("Delete chat with Bob"),
  },
  {
    avatar: ["https://via.placeholder.com/50"],
    name: "Charlie Brown",

    groupChat: false,
    sameSender: true,
    isOnline: true,
    newMessageAlert: false,
    members: ["1", "2"],
    _id: "2",
    handleDeleteChatOpen: () => console.log("Delete chat with Charlie"),
  },
  {
    avatar: ["https://via.placeholder.com/50"],
    name: "Diana Prince",

    groupChat: false,
    sameSender: false,
    isOnline: false,
    newMessageAlert: true,
    members: ["1", "2"],
    _id: "3",
    handleDeleteChatOpen: () => console.log("Delete chat with Diana"),
  },
  {
    avatar: ["https://via.placeholder.com/50"],
    name: "Edward Norton",

    groupChat: true,
    sameSender: true,
    isOnline: true,
    newMessageAlert: false,
    members: ["1", "2"],
    _id: "4",
    handleDeleteChatOpen: () => console.log("Delete chat with Edward"),
  },
  {
    avatar: ["https://via.placeholder.com/50"],
    name: "Fiona Green",

    groupChat: false,
    sameSender: false,
    isOnline: true,
    newMessageAlert: false,
    members: ["1", "2"],
    _id: "5",
    handleDeleteChatOpen: () => console.log("Delete chat with Fiona"),
  },
  {
    avatar: ["https://via.placeholder.com/50"],
    name: "George Michael",

    groupChat: false,
    sameSender: true,
    isOnline: false,
    newMessageAlert: true,
    members: ["1", "2"],
    _id: "6",
    handleDeleteChatOpen: () => console.log("Delete chat with George"),
  },
  {
    avatar: ["https://via.placeholder.com/50"],
    name: "Hannah Baker",

    groupChat: true,
    sameSender: false,
    isOnline: true,
    newMessageAlert: false,
    members: ["1", "2"],
    _id: "7",
    handleDeleteChatOpen: () => console.log("Delete chat with Hannah"),
  },
  {
    avatar: ["https://via.placeholder.com/50"],
    name: "Isaac Newton",
    groupChat: false,
    sameSender: true,
    isOnline: false,
    newMessageAlert: true,
    members: ["1", "2"],
    _id: "8",
    handleDeleteChatOpen: () => console.log("Delete chat with Isaac"),
  },
  {
    avatar: ["https://via.placeholder.com/50"],
    name: "Jack Daniels",

    groupChat: true,
    sameSender: false,
    isOnline: true,
    newMessageAlert: false,
    members: ["1", "2"],
    _id: "9",
    handleDeleteChatOpen: () => console.log("Delete chat with Jack"),
  },
];

export const sampleUsers = [
  {
    name: "John Doe",
    _id: "1a2b3c4d5e6f7g8h9i0j",
    avatar: "https://example.com/avatars/johndoe.png",
  },
  {
    name: "Jane Smith",
    _id: "2b3c4d5e6f7g8h9i0j1a",
    avatar: "https://example.com/avatars/janesmith.png",
  },
  {
    name: "Alice Johnson",
    _id: "3c4d5e6f7g8h9i0j1a2b",
    avatar: "https://example.com/avatars/alicejohnson.png",
  },
  {
    name: "Bob Brown",
    _id: "4d5e6f7g8h9i0j1a2b3c",
    avatar: "https://example.com/avatars/bobbrown.png",
  },
  {
    name: "Charlie Davis",
    _id: "5e6f7g8h9i0j1a2b3c4d",
    avatar: "https://example.com/avatars/charliedavis.png",
  },
];

export const sampleNotifications = [
  {
    sender: {
      name: "Charlie Davis",
      avatar: "https://example.com/avatars/charliedavis.png",
    },
    _id: "5e6f7g8h9i0j1a2b3c4d",
  },
  {
    sender: {
      name: "Charlie Davis",
      avatar: "https://example.com/avatars/charliedavis.png",
    },
    _id: "5e6f7g8h9i0j1a2b3c4d",
  },
  {
    sender: {
      name: "Charlie Davis",
      avatar: "https://example.com/avatars/charliedavis.png",
    },
    _id: "dsdfsd2424",
  },
  {
    sender: {
      name: "Charlie Davis",
      avatar: "https://example.com/avatars/charliedavis.png",
    },
    _id: "5e6f7g8sdh9i0j1a2b3c4d",
  },
];

export const sampleMessages = [
  {
    attachments: [
      {
        public_id: "attach_001",
        url: "https://example.com/image1.jpg",
      },
    ],
    content: "Hey, check out this image!",
    _id: "msg_001",
    sender: {
      _id: "001",
      name: "Alice Johnson",
    },
    chat: "chat_001",
    createdAt: "2024-09-03T10:00:00Z",
  },
  {
    attachments: [
      {
        public_id: "attach_002",
        url: "https://example.com/document.pdf",
      },
    ],
    content: "Here is the document you requested.",
    _id: "msg_002",
    sender: {
      _id: "001",
      name: "Bob Smith",
    },
    chat: "chat_002",
    createdAt: "2024-09-03T11:30:00Z",
  },
  {
    attachments: [],
    content: "No attachments here, just text.",
    _id: "msg_003",
    sender: {
      _id: "user_003",
      name: "Carol Williams",
    },
    chat: "chat_001",
    createdAt: "2024-09-03T12:45:00Z",
  },
  {
    attachments: [
      {
        public_id: "attach_003",
        url: "https://example.com/video.mp4",
      },
    ],
    content: "Watch this video when you have time.",
    _id: "msg_004",
    sender: {
      _id: "user_004",
      name: "David Brown",
    },
    chat: "chat_003",
    createdAt: "2024-09-03T13:15:00Z",
  },
  {
    attachments: [
      {
        public_id: "attach_004",
        url: "https://pbs.twimg.com/media/FFvnFAuVEAMaRfI.jpg",
      },
      {
        public_id: "attach_005",
        url: "https://pbs.twimg.com/media/FFvnFAuVEAMaRfI.jpg",
      },
    ],
    content: "Here are a couple of pictures from the event.",
    _id: "msg_005",
    sender: {
      _id: "user_005",
      name: "Eve Davis",
    },
    chat: "chat_004",
    createdAt: "2024-09-03T14:20:00Z",
  },
  {
    attachments: [
      {
        public_id: "attach_001",
        url: "https://example.com/image1.jpg",
      },
    ],
    content: "Hey, check out this image!",
    _id: "msg_001",
    sender: {
      _id: "001",
      name: "Alice Johnson",
    },
    chat: "chat_001",
    createdAt: "2024-09-03T10:00:00Z",
  },
  {
    attachments: [
      {
        public_id: "attach_002",
        url: "https://example.com/document.pdf",
      },
    ],
    content: "Here is the document you requested.",
    _id: "msg_002",
    sender: {
      _id: "001",
      name: "Bob Smith",
    },
    chat: "chat_002",
    createdAt: "2024-09-03T11:30:00Z",
  },
  {
    attachments: [],
    content: "No attachments here, just text.",
    _id: "msg_003",
    sender: {
      _id: "user_003",
      name: "Carol Williams",
    },
    chat: "chat_001",
    createdAt: "2024-09-03T12:45:00Z",
  },
  {
    attachments: [
      {
        public_id: "attach_003",
        url: "https://example.com/video.mp4",
      },
    ],
    content: "Watch this video when you have time.",
    _id: "msg_004",
    sender: {
      _id: "user_004",
      name: "David Brown",
    },
    chat: "chat_003",
    createdAt: "2024-09-03T13:15:00Z",
  },
  {
    attachments: [
      {
        public_id: "attach_004",
        url: "https://example.com/image2.jpg",
      },
      {
        public_id: "attach_005",
        url: "https://example.com/image3.jpg",
      },
    ],
    content: "Here are a couple of pictures from the event.",
    _id: "msg_005",
    sender: {
      _id: "user_005",
      name: "Eve Davis",
    },
    chat: "chat_004",
    createdAt: "2024-09-03T14:20:00Z",
  },
];
