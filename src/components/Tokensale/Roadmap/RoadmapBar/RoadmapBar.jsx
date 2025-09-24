'use client'
import { useState } from 'react';
import s from './RoadmapBar.module.scss';
import Portal from '@/components/Common/Portal/Portal';

const getDayOfYear = (dateStr) => {
  const date = new Date(dateStr);
  const start = new Date(date.getFullYear(), 0, 0);
  const diff = date - start;
  const oneDay = 1000 * 60 * 60 * 24;
  let dayOfYear = Math.floor(diff / oneDay);

  const isLeapYear = new Date(date.getFullYear(), 1, 29).getDate() === 29;
  if (isLeapYear && dayOfYear > 59) { 
    dayOfYear -= 1;
  }

  return dayOfYear;
}

const RoadmapBar = ({ event }) => {
  const [tooltip, setTooltip] = useState({ show: false, x: 0, y: 0 });
  const { className, startDay, endDay, name, startTooltip, endTooltip } = event;
  
  const firstDay = getDayOfYear(startDay);
  const lastDay = getDayOfYear(endDay);

  const startOffset = (firstDay - 1) * 6.4;
  const duration = (lastDay - firstDay + 1) * 6.4;

  const handleMouseMove = (e) => {
    setTooltip({
      show: true,
      x: e.pageX,
      y: e.pageY
    });
  };

  const handleMouseLeave = () => {
    setTooltip({ show: false, x: 0, y: 0 });
  };

  return (
    <div
      className={`${s.bar} ${s[className]}`} 
      style={{ left: `${startOffset}px`, width: `${duration}px` }}
      onMouseEnter={handleMouseMove}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}

    >
      {duration >= 70 ? name : ''}

      <Portal>
        <div 
          className={`${s.tooltip} ${tooltip.show ? s['tooltipVisible'] : ''}`}
          style={{ top: `${tooltip.y + 10}px`, left: `${tooltip.x + 10}px` }}
        >
          {event.name}
            <br />
          From: {startTooltip}
          <br />
          To: {endTooltip}
        </div>
      </Portal>
    </div>
  )
}

export default RoadmapBar