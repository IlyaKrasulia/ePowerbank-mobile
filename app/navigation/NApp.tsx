import React, {useEffect, useState} from 'react';
import {useDispatch} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {AuthNavigation} from './AuthNavigation';
import {ScreenEnum} from '../utils/types';
import {AppNavigation} from './AppNavigation';
import {firebase} from '@react-native-firebase/auth';
import {setUserData} from '../redux/authSlice';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import useStorage from '../hooks/useStorage';
import i18n from '../i18n/i18n';

export const NApp = () => {
  const dispatch = useDispatch();
  const {changeLanguage} = i18n;

  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();
  const [language, setLanguage] = useStorage('language');

  function onAuthStateChanged(userD: any) {
    setUser(userD);
    firestore()
      .collection('Users')
      .doc(firebase.auth().currentUser?.uid)
      .onSnapshot(documentSnapshot => {
        if (documentSnapshot.exists) {
          dispatch(setUserData(documentSnapshot.data()));
          setUser(userD);
        }
      });
    if (initializing) {
      setInitializing(false);
    }
  }

  useEffect(() => {
    changeLanguage(language);
  }, [changeLanguage, language, setLanguage]);

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (initializing) return null;

  return (
    <NavigationContainer>
      {user ? (
        <AppNavigation />
      ) : (
        <AuthNavigation initialRoute={ScreenEnum.CreateProfile} />
      )}
    </NavigationContainer>
  );
};
