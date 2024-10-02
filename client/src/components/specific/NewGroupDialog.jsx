import React, { useState } from 'react'
import { sampleUsers } from '../../utils/sampleData';
import UserItem from '../shared/UserItem';
import { FaSearch } from 'react-icons/fa';

const NewGroupDialog = ({ isOpen, onClose }) => {
   const [groupName, setGroupName] = useState("")
   const [members, setMembers] = useState(sampleUsers);
   const [selectedMembers, setSetselectedMembers] = useState([])
   const selectMemberHandler = (id) => {
      setSetselectedMembers(prev => prev.includes(id) ? prev.filter(currentElement => currentElement !== id) : [...prev, id]);

   }
   console.log(selectedMembers);

   const submitHandler = () => { }
   return (
      <>
         {isOpen && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
               <div className="bg-white rounded-lg shadow-lg max-w-sm w-full p-6">
                  <h2 className="text-lg font-bold mb-4">New Group</h2>
                  <div className="relative mt-2 rounded-md shadow-sm">
                     <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                        <span className="text-gray-500 sm:text-sm">
                           <FaSearch />
                        </span>
                     </div>
                     <input
                        name="search"
                        type="text"
                        placeholder=""
                        value={groupName}
                        onChange={(e) => setGroupName(e.value)}
                        className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                     />
                  </div>
                  <span>Members</span>
                  <hr />
                  {members.map((user) =>
                     <UserItem
                        user={user}
                        handler={selectMemberHandler}
                        isAdded={selectedMembers.includes(user._id)}
                     />)}
                  <button
                     onClick={onClose}
                     className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                  >
                     Close
                  </button>
                  <button
                     onClick={submitHandler}
                     className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                  >
                     Create
                  </button>
               </div>
            </div>
         )}
      </>
   )
}

export default NewGroupDialog