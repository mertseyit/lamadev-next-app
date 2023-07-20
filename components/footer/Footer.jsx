import React from 'react'

const Footer = () => {
  return (
    <div className='flex justify-between items-center lg:'>
      &#169;{new Date().getFullYear()}. All right reserved
    </div>
  )
}

export default Footer