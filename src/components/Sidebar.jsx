import React from 'react'
import { Link } from 'react-router-dom'
import {
  AiFillHome,
  AiOutlineCompass,
  AiFillStar,
  AiFillClockCircle,
  AiOutlineSearch,
} from 'react-icons/ai'

const Sidebar = () => {
  return (
    <div className="bg-gray-900 w-16 h-screen flex flex-col items-center justify-center">
      <Link to="/" className="text-white my-4" title="Home">
        <AiFillHome size={24} />
        <span className="sr-only">Home</span>
      </Link>
      <Link to="/explore" className="text-white my-4" title="Explore">
        <AiOutlineCompass size={24} />
        <span className="sr-only">Explore</span>
      </Link>
      <Link to="/watch-later" className="text-white my-4" title="Watch Later">
        <AiFillClockCircle size={24} />
        <span className="sr-only">Watch Later</span>
      </Link>
      <Link to="/search" className="text-white my-4" title="Search">
        <AiOutlineSearch size={24} />
        <span className="sr-only">Search</span>
      </Link>
    </div>
  )
}

export default Sidebar
