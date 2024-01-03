import NavigationHeader from "../NavigationHeader"
import Search from "./Search"
import UserOptions from "./userOption/UserOptions"


const Navbar = () => {
  return (
    <div className="fixed w-full bg-stone-950 z-20 h-16 sm:px-2 px-1 flex flex-row justify-between items-center">
       <NavigationHeader/>
       <Search/>
       <UserOptions/>
        </div>
  )
}

export default Navbar