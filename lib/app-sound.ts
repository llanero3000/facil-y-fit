export type AppSettings = {
  tapSound: boolean;
  backgroundMusic: boolean;
  vibration: boolean;
};

const defaultSettings: AppSettings = {
  tapSound: true,
  backgroundMusic: false,
  vibration: true,
};

let tapAudio: HTMLAudioElement | null = null;
let backgroundAudio: HTMLAudioElement | null = null;

export function getAppSettings(): AppSettings {
  if (typeof window === "undefined") return defaultSettings;

  const stored = localStorage.getItem("macrofit-settings");

  if (!stored) return defaultSettings;

  return {
    ...defaultSettings,
    ...JSON.parse(stored),
  };
}

export function saveAppSettings(settings: AppSettings) {
  localStorage.setItem("macrofit-settings", JSON.stringify(settings));
}

export function playTapSound() {
  if (typeof window === "undefined") return;

  const settings = getAppSettings();

  if (!settings.tapSound) return;

  if (!tapAudio) {
    tapAudio = new Audio("/audio/tap.mp3");
    tapAudio.volume = 0.35;
  }

  tapAudio.currentTime = 0;
  tapAudio.play().catch(() => {});
}

export function vibrateTap() {
  if (typeof window === "undefined") return;

  const settings = getAppSettings();

  if (!settings.vibration) return;

  if ("vibrate" in navigator) {
    navigator.vibrate(20);
  }
}

export function playInteraction() {
  playTapSound();
  vibrateTap();
}

export function startBackgroundMusic() {
  if (typeof window === "undefined") return;

  if (!backgroundAudio) {
    backgroundAudio = new Audio("/audio/background.mp3");
    backgroundAudio.loop = true;
    backgroundAudio.volume = 0.18;
  }

  backgroundAudio.play().catch(() => {});
}

export function stopBackgroundMusic() {
  if (backgroundAudio) {
    backgroundAudio.pause();
    backgroundAudio.currentTime = 0;
  }
}

export function syncBackgroundMusic() {
  if (typeof window === "undefined") return;

  const settings = getAppSettings();

  if (settings.backgroundMusic) {
    startBackgroundMusic();
  } else {
    stopBackgroundMusic();
  }
}