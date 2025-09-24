import { useState, useEffect } from 'react';

export const useDeviceType = (width) => {
  const [deviceType, setDeviceType] = useState('');

  useEffect(() => {
    if (width < 768) {
      setDeviceType('Mobile');
    } else if (width >= 768 && width < 1024) {
      setDeviceType('Tablet');
    } else {
      setDeviceType('Desktop');
    }
  }, [width]);

  return deviceType;
};