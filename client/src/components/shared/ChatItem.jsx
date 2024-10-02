import React, { memo } from 'react'
import { Link } from 'react-router-dom';
import AvatarCard from './AvatarCard';

const ChatItem = ({
   avatar = [],
   name,
   _id,
   groupChat = false,
   sameSender,
   isOnline,
   newMessageAlert,
   index = 0,
   handleDeleteChat
}) => {
   const mesageStyle = {
      display: "flex",
      gap: "1rem",
      alignItems: "center",
      padding: "1rem",
      backgroundColor: sameSender ? "black" : "unset",
      color: sameSender ? "white" : "unset",
      position: "relative",
   }
   return (
      <Link
         to={`/chat/${_id}`}
         onContextMenu={(e) => handleDeleteChat(e, _id, groupChat)}>
         <div style={mesageStyle}>

            <AvatarCard avatar={avatar} />
            <span>{name}</span>
            {newMessageAlert && (<span>{newMessageAlert.count} New Message</span>)}

            {isOnline && (<span>Green Light</span>)}

         </div>
      </Link>
   )
}

export default memo(ChatItem);