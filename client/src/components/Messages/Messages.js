
import React from 'react';
import ScrollToButtom from 'react-scroll-to-bottom'
import './Messages.css';
import Message from '../Message/Message';
const Messages = ({ messages, name }) => (
    <ScrollToButtom className='messages'>
        {messages.map((message, i) => <div key={i}><Message message={message} name={name} /></div>)}
    </ScrollToButtom>
)
export default Messages;       