import getCurrentSubscriptions from "@/actions/getCurrentSubscriptions"
import Navbar from "./navbar/Navbar"
import Sidebar from "./sidebar/Sidebar"

  


const Navigation = async () => {
  const subscriptions = await getCurrentSubscriptions() 
 
  return (
 <>
 <Sidebar subscribedChannels={subscriptions}/>
 <Navbar/></>
  )
}

export default Navigation