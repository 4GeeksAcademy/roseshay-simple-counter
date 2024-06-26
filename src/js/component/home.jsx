import React, { useState, useEffect } from 'react';

const SecondsCounter = ({ seconds }) => {
  const [currentSeconds, setCurrentSeconds] = useState(seconds);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentSeconds((prevSeconds) => prevSeconds + 1);
    }, 1000);

    return () => clearInterval(intervalId);

  }, []);

  return (
    <div>
      <i className="fas fa-clock"></i> {currentSeconds}
    </div>
  );
};

// Example usage in your React app
const App = () => {
  return (
    <div>
      <h1>Seconds Counter</h1>
      <SecondsCounter seconds={0} />
    </div>
  );
};

export default App;
