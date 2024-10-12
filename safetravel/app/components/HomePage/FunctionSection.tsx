import React from 'react'

import { functionAttributes } from '@/app/constants/sectionAttribute'
import FunctionItem from './FunctionItem'

const FunctionSection = () => {
  return (
    <div className="flex flex-wrap justify-center my-20 mx-4 md:mx-20 gap-10">
        {
            functionAttributes.map((functionAtt, index) => {
                return <FunctionItem key={index} imgSrc={functionAtt.IMG_SRC} text={functionAtt.TEXT}/>
            })
        }
      </div>
  )
}

export default FunctionSection
