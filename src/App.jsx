import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Explore from './components/Explore'
import VideoListing from './components/VideoListing'
import SingleVideo from './components/SingleVideo'
import WatchLater from './components/WatchLater'
import SearchVideo from './components/SearchVideo'
import Sidebar from './components/Sidebar'

function App() {
  return (
    <div className="flex">
      <div className="sticky top-0 h-screen flex-none">
        <Sidebar />
      </div>

      <div className="m-auto flex-auto">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/videos/:category" element={<VideoListing />} />
          <Route path="/video/:id" element={<SingleVideo />} />
          <Route path="/watch-later" element={<WatchLater />} />
          <Route path="/search" element={<SearchVideo />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
