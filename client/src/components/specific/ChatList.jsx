import React from 'react'
import ChatItem from '../shared/ChatItem'
import { useParams } from 'react-router-dom';

const ChatList = ({
   chats = [],
   chatId,
   onlineUsers = [],
   newMessagesAlert = [{ chatId: "", count: 0 }],
   handleDeleteChat }
) => {
   const params = useParams();
   chatId = params.chatId;
   return (
      chats.map((chat, index) => {
         const { avatar, _id, name, groupChat, members } = chat;

         const newMessageAlert = newMessagesAlert.find(({ chatId }) => chatId === _id);

         const isOnline = members?.some((member) => onlineUsers.includes(_id))

         return <ChatItem
            index={index}
            key={_id}
            newMessageAlert={newMessageAlert}
            isOnline={isOnline}
            avatar={avatar}
            name={name}
            _id={_id}
            groupChat={groupChat}
            sameSender={chatId === _id}
            handleDeleteChat={handleDeleteChat}
         />;
      })
   )
}

export default ChatList;