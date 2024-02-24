import React from 'react'
import ChatHeader from '../message/ChatHeader'
import ChatDisplay from '../message/ChatDisplay'
import MatchesDisplay from '../message/MatchesDisplay'
const ChatContainer = () => {
  return (
    <div className="chat-sontainer">
    <ChatHeader />
    <div>
        <button className="option">Matches</button>
        <button className="option">Chat</button>

    </div>
    <MatchesDisplay />
    <ChatDisplay />
  
</div>
  )
}

export default ChatContainer
