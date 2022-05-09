import React from 'react'

const Button = ({onClick,children}) => {
  return (
    <button className='bg-indigo-600 text-white py-2 px-6 my-10 mx-2 rounded hover:bg-pink-500'
    onClick={onClick}>
            {children}
    </button>
  )
}

export default Button