import React from 'react'
import TripItem from './TripItem'

const TripList = () => {
    const a = [1,2,3]

  return (
    <div>
      <section className="flex flex-col gap-6">
        {
            a.map((item) => (
                <TripItem/>
            ))
        }
      </section>
    </div>
  )
}

export default TripList
