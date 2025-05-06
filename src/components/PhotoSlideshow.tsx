import React, { useState, useEffect, useCallback, useRef } from 'react';
import { ChevronLeft, ChevronRight, Pause, Play, Volume2, VolumeX } from 'lucide-react';
import { photos } from '../data/photos';

interface PhotoSlideshowProps {
  isVisible: boolean;
}

const PhotoSlideshow: React.FC<PhotoSlideshowProps> = ({ isVisible }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [fadeIn, setFadeIn] = useState(true);
  const [isZoomed, setIsZoomed] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  // Autoplay when visible
  useEffect(() => {
    if (isVisible) {
      const audio = audioRef.current;
      if (audio) {
        audio.muted = isMuted;
        audio.play().catch(err => console.warn('Autoplay prevented:', err));
      }
    }
  }, [isVisible, isMuted]);

  const nextSlide = useCallback(() => {
    setFadeIn(false);
    setTimeout(() => {
      setCurrentIndex(prev => (prev + 1) % photos.length);
      setFadeIn(true);
    }, 300);
  }, []);

  const prevSlide = useCallback(() => {
    setFadeIn(false);
    setTimeout(() => {
      setCurrentIndex(prev => (prev - 1 + photos.length) % photos.length);
      setFadeIn(true);
    }, 300);
  }, []);

  // Slide auto-advance when not paused
  useEffect(() => {
    if (isVisible && !isPaused) {
      const interval = setInterval(nextSlide, 5000);
      return () => clearInterval(interval);
    }
  }, [isVisible, isPaused, nextSlide]);

  // Toggle mute
  const handleMuteToggle = () => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.muted = !isMuted;
    setIsMuted(m => !m);
  };

  if (!isVisible) return null;

  return (
    <div className="relative w-full h-[90vh] overflow-hidden">
      <audio
        ref={audioRef}
        src="/music/h.mp3"
        loop
        preload="auto"
        style={{ display: 'none' }}
      />

      <div
        className={`relative bg-black ${fadeIn ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300 w-full h-full cursor-pointer`}
        onClick={() => setIsZoomed(z => !z)}
      >
        <img
          src={photos[currentIndex].url}
          alt={photos[currentIndex].caption}
          className={`absolute inset-0 w-full h-full object-cover ${isZoomed ? 'scale-110' : 'scale-100'} transition-transform duration-300`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
          <p className="text-xl font-semibold text-white">{photos[currentIndex].caption}</p>
          <p className="text-sm mt-1 text-white/80">{photos[currentIndex].date}</p>
        </div>
      </div>

      <button onClick={prevSlide} className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white/20 hover:bg-white/40 p-2 rounded-full z-10">
        <ChevronLeft className="text-white w-6 h-6" />
      </button>
      <button onClick={nextSlide} className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white/20 hover:bg-white/40 p-2 rounded-full z-10">
        <ChevronRight className="text-white w-6 h-6" />
      </button>

      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
        {photos.map((_, idx) => (
          <button
            key={idx}
            onClick={() => {
              setFadeIn(false);
              setTimeout(() => {
                setCurrentIndex(idx);
                setFadeIn(true);
              }, 300);
            }}
            className={`w-3 h-3 rounded-full ${currentIndex === idx ? 'bg-white' : 'bg-white/40 hover:bg-white/60'}`}
          />
        ))}
      </div>

      <div className="absolute top-6 right-6 flex gap-2 z-10">
        {/* Mute/Unmute button */}
        <button onClick={handleMuteToggle} className="bg-white/20 hover:bg-white/40 p-2 rounded-full">
          {isMuted ? (
            <VolumeX className="text-white w-5 h-5" />
          ) : (
            <Volume2 className="text-white w-5 h-5" />
          )}
        </button>
        {/* Pause slides button */}
        <button onClick={() => setIsPaused(p => !p)} className="bg-white/20 hover:bg-white/40 p-2 rounded-full">
          {isPaused ? <Play className="text-white w-5 h-5" /> : <Pause className="text-white w-5 h-5" />}
        </button>
      </div>
    </div>
  );
};

export default PhotoSlideshow;
