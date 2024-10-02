import React, { memo } from 'react'
import { sampleNotifications } from '../../utils/sampleData';

const NotificationsDialog = ({ isOpen, onClose }) => {
   const friendRequestHandler = ({ _id, accept }) => {
      console.log("handle request");

   }
   return (
      <>
         {isOpen && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
               <div className="bg-white rounded-lg shadow-lg max-w-sm w-full p-6">
                  <h2 className="text-lg font-bold mb-4">Notifications</h2>
                  <p className="mb-4">This is a simple modal dialog using React and Tailwind CSS.</p>

                  <hr />
                  {sampleNotifications.length > 0 ? sampleNotifications.map((notification) => <NotificationItem
                     sender={notification.sender}
                     _id={notification._id}
                     handler={friendRequestHandler}
                     key={notification._id} />) : (<span>No New Notification</span>)}

                  <button
                     onClick={() => onClose()}
                     className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                  >
                     Close
                  </button>
               </div>
            </div>
         )}
      </>
   )
}

export default NotificationsDialog;


const NotificationItem = memo(({ sender, _id, handler }) => {
   return <div className="flex items-center justify-between p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
      <div className="flex items-center space-x-4">
         <img className="inline-block h-12 w-12 rounded-full ring-2 ring-gray-300" src={sender.avatar} alt={sender.name} />
         <div>
            <span className="text-gray-800 font-semibold">{sender.name}</span>
            <p className="text-gray-500 text-sm">wants to be your friend</p>
         </div>
      </div>
      <div className="flex space-x-2">
         <button
            className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-all"
            onClick={() => handler({ _id, accept: true })}
         >
            Accept
         </button>
         <button
            className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-all"
            onClick={() => handler({ _id, accept: false })}
         >
            Reject
         </button>
      </div>
   </div >;
});  