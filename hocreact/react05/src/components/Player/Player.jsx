import { useEffect, useRef } from "react";
import Audio from "./Audio";
const Player = () => {
  const audioRef = useRef();
  const handlePlay = () => {
    audioRef.current.chay();
  };
  const handlePause = () => {
    audioRef.current.dung();
  };
  useEffect(() => {
    console.log(audioRef);
  }, []);
  return (
    <div>
      <Audio ref={audioRef} />
      <hr />
      <button onClick={handlePlay}>Play</button>
      <button onClick={handlePause}>Pause</button>
    </div>
  );
};

export default Player;
