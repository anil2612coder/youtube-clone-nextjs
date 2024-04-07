"use client"

import { CurrentUserContext } from "@/context/CurrentUserContext"
import SignInButton from "./SignInButton"
import { useContext } from "react"
import IconButton from "@/components/shared/IconButton"
import {MdOutlineVideoCall} from "react-icons/md"


const UserOptions = () => {
  const currentUser = useContext(CurrentUserContext)
  return currentUser? <><div>
    <IconButton><MdOutlineVideoCall/></IconButton></div></>:  <SignInButton/>
  
 
    
  
}

export default UserOptions