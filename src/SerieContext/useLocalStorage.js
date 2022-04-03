import React, { useState } from "react";

// Custom hook for to get or set any item in localstorage.
function useLocalStorage(itemName, initialValue) {
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(true);
    const [item, setItem] = useState(initialValue);
    
    React.useEffect(() => {
      // Simulating API request time
      setTimeout(() => {
        try {
          const localStorageItem = localStorage.getItem(itemName);
          let parsedItem;
        
          if (localStorageItem) {
            parsedItem = JSON.parse(localStorageItem);
          } else {
            localStorage.setItem(itemName, JSON.stringify(initialValue));
            parsedItem = initialValue;
          }
  
          setItem(parsedItem);
          setLoading(false);
        } catch (error) {
          setError(error);
        }
      }, 2000);
    });
    
    const saveItem = (newItemList) => {
      try {
        localStorage.setItem(itemName, JSON.stringify(newItemList));
        setItem(newItemList);
      } catch (error) {
        setError(error);
      }
    };
  
    return {
      item,
      saveItem,
      loading,
      error,
    };
} // end custom hook

export {useLocalStorage};