// Home.js

import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { DataContext } from '../context/DataContext'

const Home = () => {
  const { state } = useContext(DataContext)
  const { categories } = state

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-semibold mb-4">Categories</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {categories.map((category) => (
          <Link to={`/videos/${category.category}`} key={category._id}>
            <div className="bg-gray-200 p-4 rounded-lg shadow-md">
              <img
                src={category.thumbnail}
                alt={category.category}
                className="w-full h-40 object-cover rounded-lg"
              />
              <p className="text-xl font-semibold mt-2">{category.category}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Home
