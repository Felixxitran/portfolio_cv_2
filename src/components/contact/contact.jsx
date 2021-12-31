import React from 'react'
import './contact.scss'
const Contact = () => {
  return (
    <div className='contact' id='contact'>
      {/* <video
        src='https://css-tricks-post-videos.s3.us-east-1.amazonaws.com/708209935.mp4'
        autoPlay
        loop
        muted
      ></video> */}
      <div className='background'>
        <div className='container'>
          <div className='heading'>CONTACT</div>
          <ul>
            <li>
              <input type='text' placeholder='Name' />
            </li>
            <li>
              <input type='text' placeholder='Email' />
            </li>
            <li>
              <textarea
                type='text'
                placeholder='Message'
                className='input-text'
              />
            </li>
            <li>
              <button type='button' className='btn'>
                Send
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Contact
