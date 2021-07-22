import React from 'react'
import convertTime from './ConvertTime'
import './message.scss'

function MessageItem({message, user}) {

    return (
        
        <div className="messageItem">
            {user?.displayName !== message.sender ?(
            <div className="income">
          <div className="textSection">
            <img src="./imgs/avatar.png" alt="Avatar" className="avatarImg" />
            <div className="messageContext">
              <p className="messageIncome">
                {message.message}
              </p>
              <span className="time">{convertTime(message?.timestamp?.seconds)}</span>
            </div>
          </div>
        </div>
            ):(
        <div className="outcome">
          <p className="messageOutcome">
            {/* I'm having breakfest right now, can't you wait for 10 minutes? */}
            {message.message}
          </p>
          <span className="time">{convertTime(message?.timestamp?.seconds )}</span>
        </div>
            )}
        </div>
    )
}

export default MessageItem
