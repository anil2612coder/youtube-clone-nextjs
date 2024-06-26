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
import { CurrentChannelContext } from "@/context/CurrentChannelContext"
import { useRouter } from "next/navigation"
import { CreateChannelModalContext } from "@/context/CreateChannelModelContext"


const UserOptions = () => {
  const currentUser = useContext(CurrentUserContext)
  const currentChannel = useContext(CurrentChannelContext)
  const createChannelModal = useContext(CreateChannelModalContext)
  const [menuOpen,setMenuOpen] = useState(false)
  const router = useRouter();

  const handleUploadClick = () => {
    if (!currentChannel) createChannelModal?.onOpen();
    else router.push("/studio/upload");
  };

 
  return currentUser? <>
  <div className="flex items-center gap-4 mr-4">
    <IconButton onClick={handleUploadClick}><MdOutlineVideoCall className="h-7 w-7"/></IconButton>
    
     <Avatar
          size={AvatarSize.small}
          imageSrc={currentUser.image}
          onClick={() => {setMenuOpen(true)}}
        />
        </div>
        {menuOpen ? <UserMenu onClose={()=>setMenuOpen(false)}/>:null}
        </>:  <SignInButton/>
  
 
    
  
}

export default UserOptions