import React, { memo } from 'react'
import moment from 'moment';
import { fileFormat } from '../../lib/features';
import Attachment from './Attachment';

const MessageComponent = ({ message, user }) => {
   const { sender, content, attachments = [], createdAt } = message;

   const sameSender = sender._id === user._id;
   const timeAgo = moment(createdAt).fromNow();
   return (
      <div
         className={`flex  space-x-4 p-4 ${sameSender ? 'justify-end' : 'items-start'
            }`}
      >
         {/* Avatar - Visible only for receiver */}
         {!sameSender && (
            <img
               className="h-10 w-10 rounded-full object-cover"
               src={message.sender.avatar}
               alt={message.sender.name}
            />
         )}

         {/* Message Content */}
         <div
            className={`flex flex-col space-y-1 max-w-xs ${sameSender ? 'bg-blue-500 text-white self-end' : 'bg-gray-100 text-gray-800'
               } rounded-lg p-3`}
         >
            {!sameSender && (
               <span className="font-semibold text-gray-900">
                  {sender.name}
               </span>
            )}
            <div>{content}</div>
            {attachments.length > 0 && attachments.map((attachment) => {
               const url = attachment.url;
               const file = fileFormat(url);
               return <div className='card'>
                  <a href={url} target='_blank' download rel="noreferrer">
                     <Attachment file={file} url={url} />
                  </a>
               </div>;
            })}
            <span className="text-xs text-gray-500 text-right">
               {timeAgo}
            </span>
         </div>

         {/* Avatar - Visible only for sender */}
         {sameSender && (
            <img
               className="h-10 w-10 rounded-full object-cover"
               src={sender.avatar}
               alt={sender.name}
            />
         )}
      </div>
   )
}

export default memo(MessageComponent);