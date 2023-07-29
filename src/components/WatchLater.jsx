// WatchLater.js

import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { DataContext } from '../context/DataContext'

const WatchLater = () => {
  const { state, dispatch } = useContext(DataContext)
  const { videos, watchLater } = state

  const filteredVideos = videos.filter((video) =>
    watchLater.includes(video._id)
  )

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-semibold mb-4">Watch Later</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredVideos.map((video) => (
          <Link to={`/video/${video._id}`} key={video._id}>
            <div className="bg-gray-200 p-4 rounded-lg shadow-md">
              <img
                src={video.thumbnail}
                alt={video.title}
                className="w-full h-40 object-cover rounded-lg"
              />
              <p className="text-xl font-semibold mt-2">{video.title}</p>
              <p className="text-gray-600">Views: {video.views}</p>
              <p className="text-gray-600">Author: {video.creator}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default WatchLater
