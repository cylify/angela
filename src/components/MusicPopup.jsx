import React, { useState, useRef } from "react";

const songs = [
  {
    name: "Perfect",
    artist: "Ed Sheeran",
    url: "/songs/perfect.mp3",
  },
  {
    name: "Say You Won't Let Go",
    artist: "James Arthur",
    url: "/songs/say_you_wont_let_go.mp3",
  },
  {
    name: "All of Me",
    artist: "John Legend",
    url: "/songs/all_of_me.mp3",
  },
];

function MusicPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentSong, setCurrentSong] = useState(null);
  const [volume, setVolume] = useState(1);
  const [muted, setMuted] = useState(false);
  const audioRef = useRef(null);

  const togglePlay = (song) => {
    if (currentSong?.url === song.url) {
      if (audioRef.current.paused) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
    } else {
      setCurrentSong(song);
      setTimeout(() => {
        audioRef.current.play();
      }, 0);
    }
  };

  const toggleMute = () => {
    const newMuted = !muted;
    setMuted(newMuted);
    audioRef.current.muted = newMuted;
  };

  const handleVolumeChange = (e) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    audioRef.current.volume = newVolume;
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {/* Floating music bars icon */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-pink-500 hover:bg-pink-600 text-white px-3 py-2 rounded shadow bg-center"
      >
        ≡
      </button>

      {/* Popup UI */}
      {isOpen && (
        <div className="bg-white border border-pink-200 rounded shadow p-4 mt-2 max-w-xs w-72">
          <h3 className="text-pink-600 font-bold mb-2">Music</h3>

          {/* Songs list with scroll */}
          <div className="max-h-48 overflow-y-auto space-y-2">
            {songs.map((song, idx) => (
              <div
                key={idx}
                className="flex justify-between items-center border-b pb-1"
              >
                <div>
                  <p className="font-medium">{song.name}</p>
                  <p className="text-xs text-gray-500">{song.artist}</p>
                </div>
                <button
                  onClick={() => togglePlay(song)}
                  className="text-pink-500 hover:text-pink-700 text-sm"
                >
                  {currentSong?.url === song.url && !audioRef.current?.paused ? "⏸️" : "▶️"}
                </button>
              </div>
            ))}
          </div>

          {/* Volume controls */}
          <div className="flex items-center mt-3 space-x-2">
            <button onClick={toggleMute} className="text-pink-500 hover:text-pink-700">
              {muted ? "🔇" : "🔊"}
            </button>
            <input
              type="range"
              min="0"
              max="1"
              step="0.01"
              value={volume}
              onChange={handleVolumeChange}
              className="flex-grow accent-pink-500"
            />
          </div>
        </div>
      )}

      {/* Audio player (always mounted) */}
      <audio ref={audioRef} src={currentSong?.url} />
    </div>
  );
}

export default MusicPopup;