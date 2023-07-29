// DataContext.js

import React, { createContext, useReducer } from 'react'
import { categories, videos, playlists, watchLater } from './Data'

const initialState = {
  categories: categories,
  videos: videos,
  playlists: playlists,
  watchLater: watchLater,
}

export const DataContext = createContext()

const dataReducer = (state, action) => {
  switch (action.type) {
    default:
      return state
  }
}

export const DataProvider = ({ children }) => {
  const [state, dispatch] = useReducer(dataReducer, initialState)

  return (
    <DataContext.Provider value={{ state, dispatch }}>
      {children}
    </DataContext.Provider>
  )
}
