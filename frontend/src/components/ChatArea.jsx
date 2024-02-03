import React from "react"
import Message from "./Message"
import MessageInput from "./MessageInput"
import WithAuthentication from "../utils/WithAuthentication.jsx"
const ChatArea = () => {
  console.log("im renderd")
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

export default WithAuthentication(ChatArea)
// export default ChatArea
