import React from 'react'

const UserItem = ({ user, handler, handlerIsLoading, isAdded = false }) => {

   const { name, _id, avatar } = user;
   return (
      <div className="flex items-center justify-between p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
         <div className="flex items-center space-x-4">
            <img className="inline-block h-10 w-10 rounded-full ring-2 ring-gray-300" src={avatar} alt={name} />
            <span className="text-gray-800 font-medium">{name}</span>
         </div>
         <button
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
            onClick={() => handler(_id)}
            disabled={handlerIsLoading}
         >
            {isAdded ? "Remove" : "Add"}
         </button>
      </div>

   )
}

export default UserItem;