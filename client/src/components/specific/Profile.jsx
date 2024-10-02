import React from 'react'
import { FaMailBulk } from "react-icons/fa";

const Profile = () => {
   return (
      <div className='flex flex-col justify-center items-center'>
         <img
            alt=""
            src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            className="inline-block h-32 w-32 rounded-full ring-2 ring-white"
         />
         <ProfileCard Icon={<FaMailBulk />} heading={"Bio"} text={"asdasndlkasn "} />
         <ProfileCard Icon={<FaMailBulk />} heading={"Bio"} text={"asdasndlkasn "} />
         <ProfileCard Icon={<FaMailBulk />} heading={"Bio"} text={"asdasndlkasn "} />
      </div>
   )
}

export default Profile;

const ProfileCard = ({ text, Icon, heading }) => {
   return <div className=''>
      {Icon && Icon}
      <h3>{text}</h3>
      <p>{heading}</p>
   </div>
}

// TODO: show joining date  using momentjs
// Username
// Full Name 