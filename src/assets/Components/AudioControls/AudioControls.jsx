import { useEffect, useState } from "react";
import { FaVolumeUp, FaVolumeMute } from "react-icons/fa";
import "./AudioControls.css";
import audioService from "../../AudioService";

export function AudioControls({ onAudioReady }) {
  const [isMuted, setIsMuted] = useState(audioService.isCurrentlyMuted());

  useEffect(() => {
    // Initialize audio service
    audioService.initBackgroundMusic();

    // Expose the start function to parent component
    if (onAudioReady) {
      onAudioReady({
        start: async () => {
          return await audioService.playBackgroundMusic();
        },
        stop: () => {
          audioService.stopBackgroundMusic();
        },
      });
    }

    // Cleanup on unmount
    return () => {
      audioService.stopBackgroundMusic();
    };
  }, [onAudioReady]);

  const toggleMute = () => {
    const newMutedState = audioService.toggleMute();
    setIsMuted(newMutedState);
  };

  return (
    <button
      className="audio-control-button"
      onClick={toggleMute}
      aria-label={isMuted ? "Unmute" : "Mute"}
    >
      {isMuted ? <FaVolumeMute /> : <FaVolumeUp />}
    </button>
  );
}
