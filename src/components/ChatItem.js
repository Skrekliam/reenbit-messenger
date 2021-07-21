import React from 'react'

function ChatItem({chat}) {
    const date = new Date()
    const time = new Date(chat?.chat.lastUpdated*1000);
    let messageTime = date - time - 86400000 < 0 ? time.getHours() +':'+ ('0' + time.getMinutes()).substr(-2) +':' +('0' + time.getSeconds()).substr(-2) : time.getDate() + '/' + (time.getMonth() + 1) + '/' + (time.getYear() + 1900); 
    console.log(new Date())
    console.log(chat)
    return (
        <div className="chat">
          <div className="messageSection">
            <img src="./imgs/avatar.png" alt="Avatar" className="avatarImg" />
            <div className="text">
              <p className="contact">{chat?.chat.user1}</p>
              <p className="message">{chat?.chat.lastMessage.length > 81 ? chat?.chat.lastMessage.slice(0,81) + '...' : chat?.chat.lastMessage }</p>
            </div>
          </div>
          <div className="time">{messageTime}</div>
        </div>
    )
}

export default ChatItem
