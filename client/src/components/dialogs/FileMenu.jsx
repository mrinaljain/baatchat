import React, { useState } from 'react';

function FileMenu({ isOpen }) {


   return (
      <div className="relative">
         {/* Dropdown Menu */}
         {isOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
               <ul className="py-1">
                  <li>
                     <button
                        className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
                        onClick={() => console.log('Attach Image')}
                     >
                        📷 Attach Image
                     </button>
                  </li>
                  <li>
                     <button
                        className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
                        onClick={() => console.log('Attach Document')}
                     >
                        📄 Attach Document
                     </button>
                  </li>
                  <li>
                     <button
                        className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
                        onClick={() => console.log('Attach Video')}
                     >
                        🎥 Attach Video
                     </button>
                  </li>
                  <li>
                     <button
                        className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
                        onClick={() => console.log('Attach Audio')}
                     >
                        🎵 Attach Audio
                     </button>
                  </li>
               </ul>
            </div>
         )}
      </div>
   );
}

export default FileMenu;
