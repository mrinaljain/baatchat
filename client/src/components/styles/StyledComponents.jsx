import React from 'react';


// Visually Hidden Input
export function VisuallyHiddenInput({ type, onChange }) {
   return (
      <input
         className="sr-only"
         type={type} onch
         onChange={() => onChange()}
      />
   );
}

export const Link = () => {

}