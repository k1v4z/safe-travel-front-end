import React from 'react'
import TripHeader from './TripHeader'
import TripList from './TripList'

const TripContainer = () => {
  return (
    <div className="container mx-auto px-10 py-8">
      <TripHeader/>
      <TripList/>
    </div>
  )
}

export default TripContainer
