import { useState, useEffect } from 'react';

export const useBlockchainDeviceType = (width) => {
  const [deviceType, setDeviceType] = useState('');

  useEffect(() => {
    const updateDeviceType = () => {
      if (width < 768) {
        setDeviceType('Mobile');
      } else {
        setDeviceType('Desktop');
      }
    };

    updateDeviceType();
  }, [width]);

  return deviceType;
};