import React from 'react'

import notFound from '../assets/404.svg'

const NotFound = () => {
  return (
    <div className='h-[80vh] flex items-center justify-center' >
      <img className='h-[100%] w-[100%]' src={notFound} alt="Not found image" />
    </div>
  )
}

export default NotFound