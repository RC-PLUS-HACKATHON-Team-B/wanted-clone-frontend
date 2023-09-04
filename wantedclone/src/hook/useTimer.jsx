import { useState, useEffect } from "react";

function useTimer(initialTime = 300) {
  const [timer, setTimer] = useState(null);
  const [showTimer, setShowTimer] = useState(false);

  useEffect(() => {
    let timerId;
    if (showTimer) {
      let timeLeft = initialTime;
      timerId = setInterval(() => {
        timeLeft -= 1;
        setTimer(
          `${Math.floor(timeLeft / 60)}:${String(timeLeft % 60).padStart(
            2,
            "0"
          )}`
        );
        if (timeLeft <= 0) {
          clearInterval(timerId);
          setShowTimer(false);
        }
      }, 1000);
    }
    return () => clearInterval(timerId);
  }, [showTimer, initialTime]);

  return [timer, showTimer, setShowTimer];
}

export default useTimer;
