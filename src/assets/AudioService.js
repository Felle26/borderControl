class AudioService {
  constructor() {
    this.backgroundMusic = null;
    this.sounds = new Map();
    this.isMuted = false;
  }

  initBackgroundMusic() {
    if (!this.backgroundMusic) {
      this.backgroundMusic = new Audio("./music/Mesmerizing Galaxy Loop.mp3");
      this.backgroundMusic.loop = true;
      this.backgroundMusic.volume = 0.1;
    }
    return this.backgroundMusic;
  }

  async playBackgroundMusic() {
    if (!this.backgroundMusic) {
      this.initBackgroundMusic();
    }
    if (!this.isMuted) {
      try {
        await this.backgroundMusic.play();
        return true;
      } catch (error) {
        console.log("Background music playback failed:", error);
        return false;
      }
    }
    return false;
  }

  stopBackgroundMusic() {
    if (this.backgroundMusic) {
      this.backgroundMusic.pause();
      this.backgroundMusic.currentTime = 0;
    }
  }

  playSound(soundId, soundPath) {
    if (this.isMuted) return;

    let sound = this.sounds.get(soundId);
    if (!sound) {
      sound = new Audio(soundPath);
      sound.volume = 0.1;
      this.sounds.set(soundId, sound);
    }

    // Reset the sound to the beginning if it's already playing
    sound.currentTime = 0;
    sound.play().catch((error) => {
      console.log(`Sound ${soundId} playback failed:`, error);
    });
  }

  toggleMute() {
    this.isMuted = !this.isMuted;

    // Mute/unmute background music
    if (this.backgroundMusic) {
      this.backgroundMusic.muted = this.isMuted;
    }

    // Mute/unmute all sound effects
    this.sounds.forEach((sound) => {
      sound.muted = this.isMuted;
    });

    return this.isMuted;
  }

  isCurrentlyMuted() {
    return this.isMuted;
  }
}

// Create a singleton instance
const audioService = new AudioService();
export default audioService;
