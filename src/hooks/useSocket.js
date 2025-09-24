import { useEffect, useState } from 'react';
import io from 'socket.io-client';

const initialState = {
  deals: { value: 0, isActive: false },
  users: { value: 0, isActive: false },
  events: { value: 0, isActive: true }
};

export const useSocket = () => {
  const [data, setData] = useState(initialState);
  const [isDataLoaded, setIsDataLoaded] = useState(false);

  useEffect(() => {
    const socket = io(process.env.NEXT_PUBLIC_SOCKET_URL);
  
    const handleStatLoad = (loadedData) => {
      setData({
        deals: { value: loadedData.deals, isActive: true },
        users: { value: loadedData.users, isActive: false },
        events: { value: loadedData.events, isActive: false }
      });

      setIsDataLoaded(true);
    };
  
    const handleStatUpdate = (updateData) => {
      setData(currentData => {
        const newData = { ...currentData };
        let lastUpdatedKey = null;
    
        for (const key of ['deals', 'users', 'events']) {
          if (key in updateData) {
            newData[key] = { ...newData[key], value: updateData[key] };
            lastUpdatedKey = key;
          }
        }
    
        if (lastUpdatedKey) {
          for (const key of ['deals', 'users', 'events']) {
            newData[key].isActive = key === lastUpdatedKey;
          }
        }
    
        return newData;
      });
    };

    socket.on('stat:load', handleStatLoad);
    socket.on('stat:update', handleStatUpdate);

    return () => {
      socket.off('stat:load', handleStatLoad);
      socket.off('stat:update', handleStatUpdate);
      socket.disconnect();
    };
  }, []);

  return { data, isDataLoaded };
}