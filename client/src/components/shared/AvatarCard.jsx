import React from 'react'

const AvatarCard = ({ avatar = [], max = 4 }) => {
   return (
      <div className="flex -space-x-1 overflow-hidden">
         {avatar.map((avt) => {
            return (<img alt={"userName"} src={avt} className="inline-block h-6 w-6 rounded-full ring-2 ring-white"
            />);
         })}

      </div>

   )
}

export default AvatarCard