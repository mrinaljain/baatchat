import React, { lazy, Suspense, useState } from 'react'
import { FaHamburger, FaSearch, FaBell, FaUser, FaPlus, FaPeopleCarry, FaSignOutAlt } from 'react-icons/fa';
import { useNavigate } from "react-router-dom";
import { LayoutLoader } from './Loaders';


const Header = () => {

   const [isMobile, setIsMobile] = useState(false)
   const [isSearch, setSearch] = useState(false)
   const [isNewGroup, setNewGroup] = useState(false)
   const [isNotification, setNotification] = useState(false)
   const SearchDialog = lazy(() => import("../specific/SearchDialog"))
   const NotificationDialog = lazy(() => import("../specific/NotificationDialog"))
   const NewGroupDialog = lazy(() => import("../specific/NewGroupDialog"))

   const navigate = useNavigate();

   function openMobileMenu() {
      setIsMobile((prev) => !prev)
   }
   function openSearchDialog() {
      setSearch((prev) => !prev)
   }
   function addNewGroup() {
      setNewGroup((prev) => !prev);
   }
   function logoutHandeler() { }
   function openNotification() {
      setNotification((prev) => !prev);
   }
   function goToGroup() {
      navigate("/groups")
   }
   return (
      <>
         <header className="flex justify-between items-center p-4 bg-orry text-white">
            {/* Logo Section */}
            <div className="flex items-center">
               <img
                  src="https://via.placeholder.com/40" // Replace with your logo URL
                  alt="Logo"
                  className="h-8 w-8 mr-2"
               />
               <h1 className="text-xl font-bold">MyApp</h1>
            </div>

            {/* Navigation Icons Section */}
            <nav className="flex space-x-4">
               <button onClick={openMobileMenu} >
                  <FaHamburger />
               </button>
               <button onClick={openSearchDialog} >
                  <FaSearch />
               </button>
               <button onClick={addNewGroup} >
                  <FaPlus />
               </button>
               <button onClick={goToGroup} >
                  <FaPeopleCarry />
               </button>
               <button onClick={openNotification}>
                  <FaBell />
               </button>

               <button onClick={logoutHandeler}>
                  <FaSignOutAlt />
               </button>
            </nav>
         </header>
         {isSearch && (
            <Suspense fallback={LayoutLoader} >
               <SearchDialog isOpen={isSearch} onClose={setSearch} />
            </Suspense>
         )}
         {isNotification &&
            <Suspense fallback={<div>Loading ...</div>} >
               <NotificationDialog isOpen={isNotification} onClose={openNotification} />
            </Suspense>
         }
         {isNewGroup &&
            <Suspense fallback={<div>Loading ...</div>} >
               <NewGroupDialog isOpen={isNewGroup} onClose={addNewGroup} />
            </Suspense>
         }
      </>
   )
}

export default Header