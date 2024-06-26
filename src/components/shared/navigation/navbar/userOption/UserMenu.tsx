"use client"
import { signOut } from "next-auth/react";
import MenuItem from "./MenuItem";

import { PiUserSquareBold, PiYoutubeLogo, PiSignOut } from "react-icons/pi";
import { useContext } from "react";
import { CreateChannelModalContext } from "@/context/CreateChannelModelContext";
import { CurrentChannelContext } from "@/context/CurrentChannelContext";
import { useRouter } from "next/navigation";

interface UserMenuProps{
    onClose:()=>void;

}
const UserMenu :React.FC<UserMenuProps>= ({onClose}) => {
  const createChannelModel = useContext(CreateChannelModalContext)
  const currentChannel = useContext(CurrentChannelContext)
  const router = useRouter()
  return (
   <>
   
   <div className="h-screen w-screen fixed z-30" onClick={onClose}/>

  <div className="absolute rounded-md shadow-md w-72 bg-zinc-800 right-2 top-16 text-sm flex flex-col overflow-hidden z-40">
    <MenuItem logo={<PiUserSquareBold className="h-7 w-7 mr-4"/>} label="Your channel"  onClick={() => {
            if (!currentChannel) {
              createChannelModel?.onOpen();
            } else {
              router.push(`/channel/${currentChannel.id}`);
            }

            onClose();
          }}/>
    <MenuItem logo={<PiYoutubeLogo className="h-7 w-7 mr-4"/>} label="Youtube Studio"    onClick={() => {
            if (!currentChannel) {
              createChannelModel?.onOpen();
            } else {
              router.push(`/studio`);
            }

            onClose();
          }}/>
    <MenuItem logo={<PiSignOut className="h-7 w-7 mr-4"/>} label="Sign Out" onClick={()=>{
        signOut()
        onClose()
    }}/>
  </div>
   
    </>
  )
}


export default UserMenu