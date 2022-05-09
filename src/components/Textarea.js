import React from 'react'

const Textarea = ({value,onChange}) => {
  return (
    <div >
         <textarea
        className="resize-none bg-violet-700  p-2 outline-none rounded-md inputGeneral  text-white w-full"
        value={value}
        onChange={onChange}
        placeholder="ToDo"
        rows="4"
        cols="4"
      />
    </div>
  )
}

export default Textarea