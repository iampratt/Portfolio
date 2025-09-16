import { useEffect, useRef } from 'react';

interface UseAudioProps {
  src: string;
  volume?: number; // 0.0 - 1.0
  loop?: boolean;
  isPlaying: boolean;
}

export function useAudio({ src, volume = 1, loop = false, isPlaying }: UseAudioProps) {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (!audioRef.current) {
      audioRef.current = new Audio(src);
    } else {
      audioRef.current.src = src;
    }
    audioRef.current.loop = loop;
    audioRef.current.volume = volume;
  }, [src, loop, volume]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.play();
    } else {
      audio.pause();
      audio.currentTime = 0;
    }
    return () => {
      audio.pause();
      audio.currentTime = 0;
    };
  }, [isPlaying]);

  return audioRef;
}