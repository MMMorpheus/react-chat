import React, { useState, useEffect, useRef } from "react";
import { convertTime } from "@/utils";
import whiteWaves from "@/assets/img/waves-white.svg";
import blueWaves from "@/assets/img/waves-blue.svg";

import * as C from "./style";

const AudioMsg = ({ audio, isMe }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState("");
  const [currentTime, setCurrentTime] = useState(0);
  
  const audioElem = useRef(null);

  function togglePlay() {
    if (!isPlaying) {
      audioElem.current.play();
    } else {
      audioElem.current.pause();
    }
  }

  useEffect(() => {
    audioElem.current.addEventListener(
      "playing",
      () => {
        setIsPlaying(true);
      },
      false
    );
    audioElem.current.addEventListener(
      "pause",
      () => {
        setIsPlaying(false);
      },
      false
    );
    audioElem.current.addEventListener(
      "ended",
      () => {
        setIsPlaying(false);
        setProgress("0");
        setCurrentTime(0);
      },
      false
    );
    audioElem.current.addEventListener("timeupdate", () => {
      setCurrentTime(audioElem.current.currentTime);
      setProgress(
        (audioElem.current.currentTime / audioElem.current.duration) * 100 + "%"
      );
    });
  }, []);
  return (
    <C.AudioBubble $isMe={isMe}>
      <audio ref={audioElem} src={audio} />
      <C.AudioProgressBar $width={progress} />
      <C.AudioControls $isMe={isMe} onClick={togglePlay}>
        {!isPlaying ? <C.PlayBtn $isMe={isMe} /> : <C.PauseBtn $isMe={isMe} />}
      </C.AudioControls>
      <C.AudioWaves>
        <img src={isMe ? blueWaves : whiteWaves} alt="audio-waveC.svg" />
      </C.AudioWaves>
      <C.AudioDuration>{convertTime(currentTime)}</C.AudioDuration>
    </C.AudioBubble>
  );
};

export default AudioMsg;