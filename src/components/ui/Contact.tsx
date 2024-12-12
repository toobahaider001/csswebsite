import React from 'react'
import { CiMail } from 'react-icons/ci'
import { FaLocationDot } from 'react-icons/fa6'
import { MdAddIcCall } from 'react-icons/md'

const Contact = () => {
  return (
    <div className='contact'>
        <div className='leftcon'>
            <div className='contxt'>
            <h2>Contact Information</h2>
            <p>Say something to get in contact!</p>
            </div>
            <div className='con'>
                <div className='call'>
                <MdAddIcCall />
                    <h4>+90122345689</h4>
                </div>
                <div className='email'>
                <CiMail />
                    <h4>demo@gmail.com</h4>
                </div>
                <div className='location'>
                <FaLocationDot />
                <h4>123 Dartmoth Street Boston, <br />Massachusetts 12156 United States</h4>
                </div>

            </div>
        </div>
        <div className='right'>
            <div className='name'>
                <div className='first'>
                    <h3>First Name</h3>
                    <input type="text" placeholder='Enter your first name' className='firstname' />
                </div>
                <div className='last'>
                    <h3>Last Name</h3>
                    <input type="text" placeholder='Enter your last name ' className='firstname' />
                </div>
            </div>
            <div className='name'>
                <div className='first'>
                    <h3>Email</h3>
                    <input type="text" placeholder='Enter your Email' className='firstname' />
                </div>
                <div className='phone'>
                    <h3>Phone Number</h3>
                    <input type="text" placeholder='Enter your phone number ' className='firstname' />
                </div>
            </div>
            <div className='message'>
                <h2>Message</h2>
                <textarea name="" id="" placeholder='Write your message' className='mes'></textarea>
                
            </div>
        </div>
    </div>
  )
}

export default Contact