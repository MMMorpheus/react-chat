import React, { useState, useEffect, useRef } from "react";
import { convertTime } from "@/utils";
import whiteWaves from "@/assets/img/waves-white.svg";
import blueWaves from "@/assets/img/waves-blue.svg";

import * as M from "./style";

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
    <M.AudioBubble $isMe={isMe}>
      <audio ref={audioElem} src={audio} />
      <M.AudioProgressBar $width={progress} />
      <M.Controls $isMe={isMe} onClick={togglePlay}>
        {!isPlaying ? <M.PlayBtn $isMe={isMe} /> : <M.PauseBtn $isMe={isMe} />}
      </M.Controls>
      <M.WaveContainer>
        <img src={isMe ? blueWaves : whiteWaves} alt="audio-waves.svg" />
      </M.WaveContainer>
      <M.AudioDuration>{convertTime(currentTime)}</M.AudioDuration>
    </M.AudioBubble>
  );
};

export default AudioMsg;