import { useState, useEffect } from 'react';

// === USEINTROPLAYED ===
const INTRO_PLAYED_KEY = 'introPlayed';

export function useIntroPlayed() {
  const [introPlayed, setIntroPlayed] = useState(() => {
    return sessionStorage.getItem(INTRO_PLAYED_KEY) === 'true';
  });

  const markIntroPlayed = () => {
    sessionStorage.setItem(INTRO_PLAYED_KEY, 'true');
    setIntroPlayed(true);
  };

  return [introPlayed, markIntroPlayed];
}
