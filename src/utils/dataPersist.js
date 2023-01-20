import AsyncStorage from '@react-native-async-storage/async-storage';

export const storage = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (error) {
    console.log(error);
  }
};

export const retrieval = async key => {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value) {
      return value;
    }
  } catch (error) {
    return false;
  }
};
