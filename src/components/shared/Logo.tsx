"use client"

import Image from "next/image"
import Link from "next/link"



const Logo = () => {
  return (
    <Link href="/">
        <Image src="/images/logo.png" alt="logo" className=" cursor-pointer  " height={50} width={120}/>
    </Link>
  )
}

export default Logo