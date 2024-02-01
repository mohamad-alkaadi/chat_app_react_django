import { useState } from "react"
import reactLogo from "./assets/react.svg"
import viteLogo from "/vite.svg"
import "./App.css"
import Register from "./components/Register"
import Login from "./components/Login"
import Navigate from "./components/Navigate"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Sidebar from "./components/Sidebar"
import ChatArea from "./components/ChatArea"
function App() {
  return (
    <>
      <div className="chat-container">
        <Sidebar />
        <ChatArea />
      </div>
      {/* <BrowserRouter>
        <Navigate />
        <Routes>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
        </Routes>
      </BrowserRouter> */}
    </>
  )
}

export default App
