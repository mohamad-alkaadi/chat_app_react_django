import React from "react"
import Message from "./Message"
import MessageInput from "./MessageInput"
const ChatArea = () => {
  return (
    <div className="chat-area">
      <div className="chat-header"></div>
      <div className="messages">
        <Message text={"hello, how are you"} sent />
        <Message text={"i'm fine"} received />
      </div>
      <div>
        <MessageInput />
      </div>
    </div>
  )
}

export default ChatArea
