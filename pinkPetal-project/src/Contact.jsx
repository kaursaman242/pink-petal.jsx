import React from 'react'

const Contact = () => {
  return (
    <div className="p-4 flex justify-center">
      <div className="w-full max-w-md">
        <h1 className="text-2xl md:text-3xl text-pink-500 mb-4">Contact Us</h1>
        <input className="w-full border p-2 mb-3" placeholder="Your Name" />
        <input className="w-full border p-2 mb-3" placeholder="Your Email" />
        <textarea className="w-full border p-2 mb-3" placeholder="Message"></textarea>
        <button className="w-full bg-pink-500 text-white py-2 rounded">Send</button>
      </div>
    </div>
  )
}

export default Contact
