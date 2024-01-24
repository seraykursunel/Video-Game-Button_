import "@/styles/globals.css";
import { useRef, useState } from "react";

export default function App() {
  const [gameRunning, setGameRunning] = useState(false);
  const videoRef=useRef(null)

 const handleClick=()=>{
if(videoRef.current) {
  if(gameRunning) {
    videoRef.current.pause()
  } else {
    videoRef.current.play()
  }
  setGameRunning(!gameRunning)
}
}

  return (
  <div className="container" style={gameRunning ? {backgroundColor:"#a0d2eb"} : null }>
    <video ref={videoRef} width="500" height="400" controls>
    <source src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4" type="video/mp4" />
    </video>
    <div>
    <button onClick={handleClick} class="button-35" role="button">{gameRunning ? "Pause" : "Play" }</button>
    </div>
    </div>
  )
}
