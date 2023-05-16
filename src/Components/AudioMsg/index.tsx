import { FC } from "react";
import { useAudioMsg } from "hooks";
import { convertTime } from "utils";

// Assets
import whiteWaves from "assets/img/waves-white.svg";
import blueWaves from "assets/img/waves-blue.svg";

import * as C from "./style";

interface IAudioMsgProps {
  audio: any;
  isMe: boolean;
}

export const AudioMsg: FC<IAudioMsgProps> = ({ audio, isMe }) => {
  // Custom hook for handling audio events
  const { audioElem, meta, togglePlay } = useAudioMsg();
  // Audio meta data
  const { isPlaying, progress, currentTime } = meta;

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
