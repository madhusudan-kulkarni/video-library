import React, { useState, useContext } from 'react'
import { useParams, Link } from 'react-router-dom'
import { DataContext } from '../context/DataContext'
import {
  AiFillEye,
  AiOutlineClockCircle,
  AiOutlineTag,
  AiOutlineEdit,
} from 'react-icons/ai'
import { RiAddLine } from 'react-icons/ri'
import { FiCheck, FiX } from 'react-icons/fi'

const SingleVideo = () => {
  const { state, dispatch } = useContext(DataContext)
  const { videos, playlists, watchLater } = state
  const { id } = useParams()

  const videoId = parseInt(id)
  const video = videos.find((v) => v._id === videoId)
  const [note, setNote] = useState(video?.note || '')
  const [selectedPlaylist, setSelectedPlaylist] = useState('')
  const [isAddedToWatchLater, setIsAddedToWatchLater] = useState(
    watchLater.includes(id.toString())
  )

  const handleAddNote = () => {
    if (!video) return
    dispatch({
      type: 'ADD_NOTE_TO_VIDEO',
      payload: { videoId: id.toString(), note },
    })
  }

  const handleAddToPlaylist = () => {
    if (!video || !selectedPlaylist) return
    dispatch({
      type: 'ADD_VIDEO_TO_PLAYLIST',
      payload: { playlistId: selectedPlaylist, video: video._id },
    })
  }

  const handleAddToWatchLater = () => {
    if (!video) return
    setIsAddedToWatchLater(!isAddedToWatchLater)
    if (isAddedToWatchLater) {
      dispatch({ type: 'REMOVE_FROM_WATCH_LATER', payload: id.toString() })
    } else {
      dispatch({ type: 'ADD_TO_WATCH_LATER', payload: id.toString() })
    }
  }

  const handleDeletePlaylist = (playlistId) => {
    dispatch({ type: 'REMOVE_PLAYLIST', payload: playlistId })
  }

  const handleRemoveVideoFromPlaylist = (playlistId) => {
    dispatch({
      type: 'REMOVE_VIDEO_FROM_PLAYLIST',
      payload: { playlistId, videoId: id.toString() },
    })
  }

  if (!video) {
    // Video with the specified ID not found, handle the error here
    return <div>Video not found</div>
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-center mb-4">
        <iframe
          title={video.title}
          width="800"
          height="450"
          src={video.src}
          frameBorder="0"
          allowFullScreen
        />
      </div>
      <div className="text-xl font-bold mb-2">{video.title}</div>
      <div className="mb-4 flex items-center text-gray-500">
        <div className="flex items-center mr-4">
          <AiFillEye className="mr-1" /> {video.views}
        </div>
        <div className="flex items-center">
          <AiOutlineTag className="mr-1" /> {video.category}
        </div>
      </div>
      <div className="mb-6">
        <h2 className="text-lg font-bold mb-2">Chips:</h2>
        <div className="flex flex-wrap">
          {video.chips.map((chip, index) => (
            <div
              key={index}
              className="bg-gray-300 text-gray-700 rounded-lg px-2 py-1 mr-2 mb-2"
            >
              {chip}
            </div>
          ))}
        </div>
      </div>
      <div className="mb-6">
        <h2 className="text-lg font-bold mb-2">Creator: {video.creator}</h2>
      </div>
      {/* <div className="mb-6">
        <h2 className="text-lg font-bold mb-2">Notes:</h2>
        <div className="mb-4">
          <textarea
            className="w-full border rounded-lg p-2"
            rows="4"
            value={note}
            onChange={(e) => setNote(e.target.value)}
          />
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded-lg mt-2"
            onClick={handleAddNote}
          >
            <AiOutlineEdit className="mr-1" /> Save Note
          </button>
        </div>
      </div> */}
      {/* <div className="mb-6">
        <h2 className="text-lg font-bold mb-2">Save to Playlist:</h2>
        <div className="flex items-center mb-4">
          <select
            className="border rounded-lg p-2 mr-2"
            value={selectedPlaylist}
            onChange={(e) => setSelectedPlaylist(e.target.value)}
          >
            <option value="">Select a playlist</option>
            {playlists.map((playlist) => (
              <option key={playlist.id} value={playlist.id}>
                {playlist.name}
              </option>
            ))}
          </select>
          <button
            className="bg-green-500 hover:bg-green-600 text-white font-semibold px-4 py-2 rounded-lg"
            onClick={handleAddToPlaylist}
          >
            <RiAddLine className="mr-1" /> Add to Playlist
          </button>
        </div>
        <h3 className="text-lg font-bold mb-2">Your Playlists:</h3>
        {playlists.length === 0 ? (
          <p>You have not created any playlists yet.</p>
        ) : (
          <ul className="mb-4">
            {playlists.map((playlist) => (
              <li key={playlist.id} className="mb-2">
                <span className="mr-2">{playlist.name}</span>
                <button
                  className="bg-red-500 hover:bg-red-600 text-white font-semibold px-2 py-1 rounded-lg"
                  onClick={() => handleDeletePlaylist(playlist.id)}
                >
                  <FiX className="mr-1" /> Delete
                </button>
                {playlist.videos.includes(id.toString()) && (
                  <button
                    className="bg-red-500 hover:bg-red-600 text-white font-semibold px-2 py-1 rounded-lg ml-2"
                    onClick={() => handleRemoveVideoFromPlaylist(playlist.id)}
                  >
                    <FiX className="mr-1" /> Remove Video
                  </button>
                )}
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="mb-6">
        <h2 className="text-lg font-bold mb-2">Watch Later:</h2>
        <button
          className={`bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded-lg ${
            isAddedToWatchLater ? 'bg-red-500' : ''
          }`}
          onClick={handleAddToWatchLater}
        >
          {isAddedToWatchLater ? (
            <>
              <FiCheck className="mr-1" /> Remove from Watch Later
            </>
          ) : (
            <>
              <AiOutlineClockCircle className="mr-1" /> Add to Watch Later
            </>
          )}
        </button>
      </div> */}
    </div>
  )
}

export default SingleVideo
