import React from 'react'

//state receiving
const Child= ({message, setMessage}) => {
  setMessage("hello")
  return (
    <div>
      {/* state consumption */}
      <p>Your message: {message}</p>
      </div>
  )
}
/* child cannot mutate itself.The parent must use a mutator function to change any value of a function. otherwise the virtual dom of react can not keep the track of data. */
export default Child