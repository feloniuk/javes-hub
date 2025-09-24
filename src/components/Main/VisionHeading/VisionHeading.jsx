'use client'
import { useRef } from 'react';
import { useVisionHeadingAnimation } from '@/hooks/home/VisionHeadingSection/useVisionHeadingAnimation';
import s from './VisionHeading.module.scss';

const VisionHeading = () => {
  const containerRef = useRef();
  const textRef = useRef();
  const headingRef = useRef();

  useVisionHeadingAnimation(containerRef, headingRef, textRef);

  return (
    <div ref={containerRef} className={s.section}>
      <div className="container">
        <p ref={textRef} className={s.description}>
          Our solutions don&apos;t end here.
        </p>

        <h2 ref={headingRef} className={s.heading}>
          The vision of Javes.
        </h2>
      </div>
    </div>
  )
}

export default VisionHeading