import React from "react"
const Video = (props) => {
  console.log(props.videoSrcURL);
  return (
    <div className="video">
      <iframe
        src={props.videoSrcURL}
        title={props.videoTitle}
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        frameBorder="0"
        webkitallowfullscreen="true"
        mozallowfullscreen="true"
        allowFullScreen
        width="560" height="315" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      />
    </div>
  )
}

export default Video