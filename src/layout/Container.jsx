import React from 'react'

const Container = (props) => {
  return (
    <div className='max-w-[1024px] mx-auto px-3'>
      {props.children}
    </div>
  )
}

export default Container