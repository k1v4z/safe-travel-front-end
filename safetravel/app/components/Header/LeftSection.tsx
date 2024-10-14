import React from 'react'
import Image from 'next/image'

const LeftSection = () => {
  return (
    <div className="flex-shrink-0 flex items-center">
        <Image width={100} height={100} src="/pictures/logo-removebg-preview.png" alt="Logo" className="w-35 brightness-0" />
    </div>
  )
}

export default LeftSection
