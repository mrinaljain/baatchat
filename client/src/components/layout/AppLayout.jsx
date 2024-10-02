import React from 'react'
import Header from './Header'
import Profile from '../specific/Profile'
import Title from '../shared/Title'
import ChatList from '../specific/ChatList'
import { sampleChats } from '../../utils/sampleData'


const AppLayout = () => (WrappedComponent) => {

   return (props) => {
      const handleDeleteChat = (e, _id, groupChat) => {
         e.preventDefault();
         console.log("Delete Chat", _id, groupChat);

      }
      return (
         <>
            <Title title='Chat App' description='Description' />
            <Header />
            <div className="grid grid-cols-12 h-[100vh-64px]">
               <div className='md:col-span-3 sm:col-span-4 xs:hidden'>
                  <ChatList
                     chats={sampleChats}
                     newMessagesAlert={[{ chatId: 1, count: 7 }]}
                     onlineUsers={["1", "2"]}
                     handleDeleteChat={(e, _id, groupChat) => {
                        e.preventDefault();
                        console.log("Delete Chat", _id, groupChat);

                     }}

                  />
               </div>
               <div className='md:col-span-6 xs:col-span-12'>
                  <WrappedComponent {...props} />
               </div>
               <div className='md:col-span-3 xs:hidden bg-slate-100'>
                  <Profile />
               </div>
            </div>
         </>
      );
   }
}



export default AppLayout;
