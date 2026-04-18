// === INTROOVERLAY ===
// Plays itachi intro video once per session (sessionStorage key: 'introPlayed').
// Full-screen overlay → Skip button top-right → fade out → reveal portfolio.
import { useEffect, useRef, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const INTRO_KEY = 'introPlayed';

export default function IntroOverlay({ onComplete }) {
  const videoRef = useRef(null);
  const [visible, setVisible] = useState(true); // controls AnimatePresence
  const [hasStarted, setHasStarted] = useState(false); // require user interaction for audio

  // Fade out overlay then call onComplete
  const dismiss = useCallback(() => {
    setVisible(false);
    // onComplete is called after the exit animation (500ms)
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleEnded = () => dismiss();
    video.addEventListener('ended', handleEnded);
    return () => video.removeEventListener('ended', handleEnded);
  }, [dismiss]);

  // Called when exit animation finishes
  const handleExitComplete = () => {
    sessionStorage.setItem(INTRO_KEY, 'true');
    onComplete();
  };

  const handleSkip = () => dismiss();

  const handleStart = () => {
    if (videoRef.current) {
      videoRef.current.muted = false;
      videoRef.current.volume = 1.0;
      videoRef.current.play().catch(err => console.warn(err));
    }
    setHasStarted(true);
  };

  return (
    <AnimatePresence onExitComplete={handleExitComplete}>
      {visible && (
        <motion.div
          key="intro-overlay"
          className="fixed inset-0 z-[9999] bg-black overflow-hidden flex items-center justify-center"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
        >
          {/* Full-screen video */}
          <video
            ref={videoRef}
            className="absolute inset-0 w-full h-full object-cover"
            src="/media/videos/ItachiIntro.mp4"
            playsInline
            preload="auto"
            disablePictureInPicture
            controlsList="nodownload nofullscreen noremoteplayback"
          />

          {!hasStarted && (
            <motion.button
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              onClick={handleStart}
              className="
                relative z-50
                px-10 py-5
                bg-[#CC0000] text-white
                font-headline font-black text-sm tracking-[0.3em] uppercase
                transition-all duration-300
                hover:scale-95 hover:bg-[#930000]
                cursor-pointer
                ichor-glow
              "
            >
              VIEW PORTFOLIO
            </motion.button>
          )}

          {/* SKIP button — top-right, styled per HomeReference */}
          <AnimatePresence>
            {hasStarted && (
              <motion.button
                id="intro-skip-btn"
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                onClick={handleSkip}
                className="
                  absolute top-6 right-6 z-50
                  px-6 py-3
                  bg-transparent
                  border border-[#CC0000]
                  text-[#CC0000]
                  font-headline font-bold
                  text-xs tracking-[0.2em] uppercase
                  transition-all duration-300
                  hover:bg-[#CC0000] hover:text-white
                  cursor-pointer
                "
              >
                SKIP
              </motion.button>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
