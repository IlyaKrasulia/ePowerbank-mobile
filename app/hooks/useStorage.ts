import {useState, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const useStorage = (key: any, initialValue?: any) => {
  const [storedValue, setStoredValue] = useState(initialValue);

  useEffect(() => {
    const getStoredValue = async () => {
      try {
        const jsonValue = await AsyncStorage.getItem(key);
        if (jsonValue != null) {
          setStoredValue(JSON.parse(jsonValue));
        } else {
          setStoredValue(initialValue);
        }
      } catch (error) {
        console.error('Error retrieving data from AsyncStorage:', error);
      }
    };

    getStoredValue();
  }, [key, initialValue]);

  const setValue = async (value: any) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem(key, jsonValue);
      setStoredValue(value);
    } catch (error) {
      console.error('Error setting data to AsyncStorage:', error);
    }
  };

  const removeValue = async () => {
    try {
      await AsyncStorage.removeItem(key);
      setStoredValue(initialValue);
    } catch (error) {
      console.error('Error removing data from AsyncStorage:', error);
    }
  };

  return [storedValue, setValue, removeValue];
};

export default useStorage;
