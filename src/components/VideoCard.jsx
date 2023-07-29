// VideoCard.js

import React, { useContext } from 'react'
import { DataContext } from '../context/DataContext'

const VideoCard = ({ video }) => {
  const { state, dispatch } = useContext(DataContext)
  const { watchLater } = state

  const isAddedToWatchLater = watchLater.includes(video._id)

  const handleToggleWatchLater = () => {
    if (isAddedToWatchLater) {
      dispatch({ type: 'REMOVE_FROM_WATCH_LATER', payload: video._id })
    } else {
      dispatch({ type: 'ADD_TO_WATCH_LATER', payload: video._id })
    }
  }

  return (
    <div className="bg-gray-200 p-4 rounded-lg shadow-md">
      <img
        src={video.thumbnail}
        alt={video.title}
        className="w-full h-40 object-cover rounded-lg"
      />
      <p className="text-xl font-semibold mt-2">{video.title}</p>
      <p className="text-gray-600">Views: {video.views}</p>
      <p className="text-gray-600">Author: {video.creator}</p>
      <button
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
        onClick={handleToggleWatchLater}
      >
        {isAddedToWatchLater ? 'Remove from Watch Later' : 'Add to Watch Later'}
      </button>
    </div>
  )
}

export default VideoCard
