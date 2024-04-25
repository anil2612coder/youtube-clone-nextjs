"use client"

import { useRouter } from "next/navigation"
import queryString from "query-string"
import { useState } from "react"
import { MdOutlineSearch } from "react-icons/md"

const Search = () => {
  const [search, setSearch] = useState("")
  const router = useRouter()
  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const query = {
      searchQuery: search,
    };

    const url = queryString.stringifyUrl(
      {
        url: "/search",
        query,
      },
      {
        skipNull: true,
      }
    );

    router.push(url);
  };
  return (
    <form className="flex flex-row border-[1px] border-neutral-700 rounded-full overflow-hidden sm:w-2/5 w-1/2 " onSubmit={handleSearch}>
      <input type="text" placeholder="Search" value={search} className="w-full px-4 py-2 bg-neutral-900" onChange={(e)=>setSearch(e.target.value)} />
      <button type="submit" className="px-3 bg-neutral-800 border-none"><MdOutlineSearch className="h-6 w-6"/></button>
    </form>

  )
}

export default Search