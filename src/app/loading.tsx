'use client'
import { useState, useEffect } from 'react';
import { Progress } from '@nextui-org/react';

export default function PreLoader() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const loader = setInterval(() => {
      if (count >= 100) {
        clearInterval(loader);
      } else {
        setCount((prevCount) => prevCount + Math.random() * 25 + 1);
      }
    }, 500);
    return () => clearInterval(loader);
  }, [count]);

  return (
    <div className="h-screen text-white bg-black">
      <Progress size="md" aria-label="Loading..." value={count} />
    </div>
  );
}