import React, { useEffect } from 'react';
import { motion, useAnimation, useMotionValue } from 'framer-motion';
import './CircularText.css';

interface CircularTextProps {
  text: string;
  spinDuration?: number;
  onHover?: 'speedUp' | 'slowDown' | 'pause' | 'goBonkers' | null;
  className?: string;
  children?: React.ReactNode;
}

const CircularText: React.FC<CircularTextProps> = ({
  text,
  spinDuration = 25,
  onHover = 'slowDown',
  className = '',
  children,
}) => {
  const letters = Array.from(text);
  const rotationControls = useAnimation();
  const containerControls = useAnimation();
  const rotation = useMotionValue(0);

  const animateRotation = (duration: number) => {
    const start = rotation.get();
    rotationControls.start({
      rotate: [start, start + 360],
      transition: {
        rotate: {
          ease: 'linear',
          duration: duration,
          repeat: Infinity,
        },
      },
    });
  };

  useEffect(() => {
    animateRotation(spinDuration);
    return () => rotationControls.stop();
  }, [spinDuration, text]);

  const handleHoverStart = () => {
    if (!onHover) return;

    rotationControls.stop();
    let newDuration = spinDuration;
    let newScale = 1.05;

    switch (onHover) {
      case 'slowDown':
        newDuration = spinDuration * 2;
        break;
      case 'speedUp':
        newDuration = spinDuration / 2;
        break;
      case 'pause':
        containerControls.start({ scale: newScale });
        return;
      case 'goBonkers':
        newDuration = spinDuration / 4;
        newScale = 0.95;
        break;
    }
    animateRotation(newDuration);
    containerControls.start({ scale: newScale });
  };

  const handleHoverEnd = () => {
    if (!onHover) return;
    rotationControls.stop();
    animateRotation(spinDuration);
    containerControls.start({ scale: 1 });
  };

  return (
    <motion.div
      className={`circular-text-container ${className}`}
      animate={containerControls}
      onHoverStart={handleHoverStart}
      onHoverEnd={handleHoverEnd}
      initial={{ scale: 1 }}
    >
      <motion.div
        className="circular-text-revolve"
        style={{ rotate: rotation }}
        animate={rotationControls}
      >
        {letters.map((letter, i) => (
          <span
            key={i}
            className="circular-text-letter"
            style={{
              transform: `rotate(${i * (360 / letters.length)}deg)`,
            }}
          >
            {letter === ' ' ? '\u00A0' : letter}
          </span>
        ))}
      </motion.div>
      {children && <div className="circular-text-center">{children}</div>}
    </motion.div>
  );
};

export default CircularText;
