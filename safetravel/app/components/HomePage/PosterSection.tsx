import { postAttribute } from '@/app/constants/sectionAttribute'
import React from 'react'
import PosterItem from './PosterItem'

const PosterSection = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mx-4 md:mx-20 ">
       {
        postAttribute.map((post) => {
            return <PosterItem title={post.title} background={post.background} content={post.content} buttonText={post.buttonText} buttonImg={post.buttonIcon}/>
        })
       }
    </div>
  )
}

export default PosterSection
