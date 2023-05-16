import { useState, useEffect, useRef } from "react";

export const useAudioMsg = () => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [progress, setProgress] = useState<string>("");
  const [currentTime, setCurrentTime] = useState<number>(0);

  const audioElem = useRef<HTMLAudioElement>(null);

  const togglePlay = () => {
    const { current: audio } = audioElem;
    if (!isPlaying) {
      audio?.play();
    } else {
      audio?.pause();
    }
  };

  const play = () => setIsPlaying(true);
  const pause = () => setIsPlaying(false);
  const end = () => {
    setIsPlaying(false);
    setProgress("0");
    setCurrentTime(0);
  };
  const updateTime = () => {
    const { current: audio } = audioElem;
    if (audio) {
      setCurrentTime(audio.currentTime);
      setProgress((audio.currentTime / audio.duration) * 100 + "%");
    }
  };

  useEffect(() => {
    const { current: audio } = audioElem;

    audio?.addEventListener("playing", play, false);
    audio?.addEventListener("pause", pause, false);
    audio?.addEventListener("ended", end, false);
    audio?.addEventListener("timeupdate", updateTime);

    return () => {
      audio?.removeEventListener("playing", play);
      audio?.removeEventListener("pause", pause);
      audio?.removeEventListener("ended", end);
      audio?.removeEventListener("timeupdate", updateTime);
    };
  }, []);

  const meta = {isPlaying, progress, currentTime}

  return { audioElem, meta, togglePlay };
};
