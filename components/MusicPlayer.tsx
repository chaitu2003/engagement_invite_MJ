"use client";

import { useEffect, useRef, useState } from "react";

const MUSIC_SRC = "/music/background.mp3";

export default function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isAvailable, setIsAvailable] = useState(true);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = 0.45;
    const playPromise = audio.play();

    if (playPromise !== undefined) {
      playPromise
        .then(() => setIsPlaying(true))
        .catch(() => setIsPlaying(false));
    }
  }, []);

  const toggleMusic = async () => {
    const audio = audioRef.current;
    if (!audio || !isAvailable) return;

    try {
      if (audio.paused) {
        await audio.play();
        setIsPlaying(true);
      } else {
        audio.pause();
        setIsPlaying(false);
      }
    } catch {
      setIsPlaying(false);
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-[60]">
      <audio
        ref={audioRef}
        src={MUSIC_SRC}
        loop
        preload="none"
        onError={() => setIsAvailable(false)}
      />

      <button
        type="button"
        onClick={toggleMusic}
        disabled={!isAvailable}
        aria-label={isPlaying ? "Pause background music" : "Play background music"}
        className="rounded-full border border-wine/15 bg-white/80 px-4 py-3 text-xs font-semibold text-cocoa shadow-soft backdrop-blur-md transition hover:-translate-y-0.5 hover:text-wine disabled:cursor-not-allowed disabled:opacity-50"
      >
        {isAvailable ? (isPlaying ? "Pause Music" : "Play Music") : "Add Song"}
      </button>
    </div>
  );
}
