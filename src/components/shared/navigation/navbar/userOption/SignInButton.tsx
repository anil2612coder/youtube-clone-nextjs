"use client"

import { MdOutlineAccountCircle } from "react-icons/md"
const SignInButton = () => {
  return (
    <button className="flex flex-row gap-1 items-center border-[1px] border-slate-700 rounded-full overflow-hidden sm:px-3 px-1.5 py-1 sm:py-1.5 text-blue-400 cursor-pointer"><MdOutlineAccountCircle className="h-6 w-6"/>Sign In</button>
  )
}

export default SignInButton