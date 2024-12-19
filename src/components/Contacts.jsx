import React from 'react'
import { CONTACT } from '../constants'

const Contacts = () => {
    return (
        <div className="border-b border-neutral-900 pb-20 ">
            <h2 className='my-10 text-center text-4xl'>Get In Touch</h2>
            <div className="text-center tracking-tighter">
                <p className="my-4">I'm currently looking for new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!</p>
                <p className='my-4'>{CONTACT.address}</p>
                <p className='my-4'>{CONTACT.email}</p>
                <p className='my-4'>{CONTACT.phone}</p>
            </div>

        </div>
    )
}

export default Contacts
