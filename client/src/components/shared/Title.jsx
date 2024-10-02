import React from 'react'
import { Helmet } from 'react-helmet-async'

function Title({ title = "BaatChat", description = "Chat App" }) {
   return (
      <Helmet>
         <title>{title}</title>
         <meta name='descripton' content={description} />
      </Helmet>
   )
}

export default Title;