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

export const NApp = () => {
  const dispatch = useDispatch();

  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  function onAuthStateChanged(userD: any) {
    setUser(userD);
    firestore()
      .collection('Users')
      .doc(firebase.auth().currentUser?.uid)
      .onSnapshot(documentSnapshot => {
        if (documentSnapshot.exists) {
          dispatch(setUserData(documentSnapshot.data()));
        }
      });
    if (initializing) {
      setInitializing(false);
    }
  }

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
