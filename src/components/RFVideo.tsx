import React from 'react'
import bgVideo from "../video/bubble-video.mp4"

const RFVideo = () => {
  return (

      <video id="rfVideo" autoPlay muted loop>
        <source src={bgVideo} type="video/mp4"/>
      </video>

  )
}

export default RFVideo