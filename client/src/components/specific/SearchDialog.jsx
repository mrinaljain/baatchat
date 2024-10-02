import React, { useState } from 'react'
import { FaSearch } from "react-icons/fa";
import { useInputValidation } from "6pp";
import UserItem from '../shared/UserItem';
import { sampleUsers } from '../../utils/sampleData';

const SearchDialog = ({ isOpen, onClose }) => {

   const [users, setusers] = useState(sampleUsers);
   let isLoadingSendFriendRequest = false;

   const addFriendHandler = (id) => {
      console.log(id);

   }
   const search = useInputValidation("");
   return (
      <>
         {isOpen && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
               <div className="bg-white rounded-lg shadow-lg max-w-sm w-full p-6">
                  <h2 className="text-lg font-bold mb-4">Find People</h2>
                  <p className="mb-4">This is a simple modal dialog using React and Tailwind CSS.</p>
                  <div className="relative mt-2 rounded-md shadow-sm">
                     <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                        <span className="text-gray-500 sm:text-sm">
                           <FaSearch></FaSearch>
                        </span>
                     </div>
                     <input
                        id="search"
                        name="search"
                        type="text"
                        placeholder=""
                        value={search.value}
                        onChange={search.changeHandler}
                        className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                     />
                  </div>
                  <hr />
                  {users.map((user) =>
                     <UserItem
                        user={user}
                        handler={addFriendHandler}
                        isLoadingSendFriendRequest={isLoadingSendFriendRequest} />)}
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

export default SearchDialog;