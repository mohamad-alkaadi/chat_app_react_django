import React, { useEffect, useState } from "react"
import WithAuthentication from "../utils/WithAuthentication.jsx"
import axios from "axios"
import { Box, LinearProgress, List } from "@mui/material"
import UserItem from "./UserItem.jsx"

const Sidebar = () => {
  const BASE_URL = "http://127.0.0.1:8000/"
  const [userList, setUserList] = useState([])
  const [userLoader, setUserLoader] = useState(true)
  const getAuthTokenFromCookie = () => {
    const cookies = document.cookie.split(";")

    for (const cookie of cookies) {
      const [name, value] = cookie.trim().split("=")
      if (name === "token") {
        return value
      }
    }

    return null
  }

  useEffect(() => {
    console.log("in effect")

    const authToken = getAuthTokenFromCookie()
    console.log(authToken)
    if (authToken) {
      axios
        .get(`${BASE_URL}api/users/`, {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        })
        .then((response) => {
          setUserList(response.data)
          setUserLoader(false)
          console.log(userList)
        })
        .catch((error) => {
          console.log("Error making API request:", error)
        })
    }
  }, [])

  return (
    <div className="sidebar">
      {userLoader ? (
        <Box sx={{ width: "100%" }}>
          <LinearProgress />
        </Box>
      ) : (
        <List
          sx={{ width: "100%", maxWidth: 360, bgcolor: "Background.paper" }}
        >
          {userList.map((user, index) => (
            <UserItem
              key={index}
              email={user.email}
              name={`${user.first_name} ${user.last_name}`}
              id={user.id}
            />
          ))}
        </List>
      )}
    </div>
  )
}

export default WithAuthentication(Sidebar)
