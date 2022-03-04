import React, { useEffect, useState } from 'react';

const ColorPage = () => {
  const [color, setColor] = useState([]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setColor(new URLSearchParams(document.location.search).get('value'));
    }
  }, [])

  return <div style={{
    height: '100vh',
    background: `#${color}`
  }} />
}

export default ColorPage;
