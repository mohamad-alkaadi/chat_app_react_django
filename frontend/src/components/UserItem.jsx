import { Avatar, ListItem, ListItemAvatar, ListItemText } from "@mui/material"
import React from "react"
import { Link } from "react-router-dom"

const UserItem = (props) => {
  const userProfileURL = `/user/${props.id}`
  return (
    <>
      <Link to={userProfileURL}>
        <ListItem>
          <ListItemAvatar>
            <Avatar></Avatar>
          </ListItemAvatar>
          <ListItemText
            primary={props.name}
            secondary={props.email}
          ></ListItemText>
        </ListItem>
      </Link>
    </>
  )
}

export default UserItem
