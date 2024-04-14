"use client"
import { useState } from "react"

import { CurrentUserContext } from "@/context/CurrentUserContext"
import SignInButton from "./SignInButton"
import { useContext } from "react"
import IconButton from "@/components/shared/IconButton"
import {MdOutlineVideoCall} from "react-icons/md"
import { signOut } from "next-auth/react"
import Avatar, { AvatarSize } from "@/components/shared/Avatar"
import UserMenu from "./UserMenu"


const UserOptions = () => {
  const currentUser = useContext(CurrentUserContext)
  const [menuOpen,setMenuOpen] = useState(false)
 
  return currentUser? <>
  <div className="flex items-center gap-4 mr-4">
    <IconButton><MdOutlineVideoCall className="h-7 w-7"/><div onClick={()=>signOut()}>Sign Out</div></IconButton>
    
     <Avatar
          size={AvatarSize.small}
          imageSrc={currentUser.image}
          onClick={() => {setMenuOpen(true)}}
        /></div>
        {menuOpen ? <UserMenu onClose={()=>setMenuOpen(false)}/>:null}
        </>:  <SignInButton/>
  
 
    
  
}

export default UserOptions