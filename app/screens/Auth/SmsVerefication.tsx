import {RouteProp, useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {Alert, StyleSheet, View} from 'react-native';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import {AppLayout} from '../../components/Base/AppLayout';
import {KeyboardAvoidingLayout} from '../../components/Base/KeyboardAvoidingLayout';
import {SView} from '../../components/Base/SView';
import {Typography} from '../../components/Base/Typography';
import {Colors} from '../../utils/styles';
import {CustomButton} from '../../components/Button/CustomButton';
import {useTimer} from '../../hooks/useTimer';
import {SHeader} from '../../components/Header/Header';
import {ScreenEnum, StackParamList} from '../../utils/types';
import auth, {FirebaseAuthTypes, firebase} from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import {useDispatch} from 'react-redux';
import {setUserData} from '../../redux/authSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';
import i18n from '../../i18n/i18n';
import {ButtonWrapper} from '../../components/Button/ButtonWrapper';

interface IProps {
  route: RouteProp<StackParamList, ScreenEnum.SmsVerefication>;
}

const CELL_COUNT = 6;
export const SmsVerification = ({route}: IProps) => {
  const {t} = i18n;
  const dispatch = useDispatch();
  const [confirm, setConfirm] =
    useState<FirebaseAuthTypes.ConfirmationResult | null>(null);
  const [code, setCode] = useState('');
  const ref = useBlurOnFulfill({value: code, cellCount: CELL_COUNT});
  const [codeProps, getCellOnLayoutHandler] = useClearByFocusCell({
    value: code,
    setValue: setCode,
  });
  const {second, startTimer} = useTimer();
  const {goBack, navigate} = useNavigation();
  const {phone} = route.params;

  const fetchUser = () => {
    try {
      const currentUserUid = firebase.auth().currentUser?.uid;
      if (currentUserUid) {
        firestore()
          .collection('Users')
          .doc(currentUserUid)
          .onSnapshot(documentSnapshot => {
            if (documentSnapshot.exists) {
              AsyncStorage.setItem(
                'userData',
                JSON.stringify(documentSnapshot.data()),
              );
              dispatch(setUserData(documentSnapshot.data()));
            } else {
              navigate(ScreenEnum.AddAdditionalInfo);
            }
          });
      }
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  async function signInWithPhoneNumber(phoneNumber: string) {
    const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
    setConfirm(confirmation);
  }

  async function confirmCode() {
    if (confirm) {
      try {
        await confirm.confirm(code).then(() => {
          fetchUser();
        });
      } catch (error) {
        Alert.alert('Invalid code.');
      }
    }
  }

  useEffect(() => {
    signInWithPhoneNumber('+38' + phone);
  }, [phone]);

  const handleResendCode = async () => {
    startTimer();
    await signInWithPhoneNumber('+38' + phone);
  };

  return (
    <>
      <AppLayout>
        <KeyboardAvoidingLayout>
          <SView style={styles.container}>
            <SHeader rightAction={() => goBack()} />
            <SView style={styles.header}>
              <Typography variant="p1SemiBold" textAlign="center">
                {t('register.enterCode')}
              </Typography>
            </SView>
            <SView style={styles.form}>
              <CodeField
                ref={ref}
                {...codeProps}
                value={code}
                onChangeText={setCode}
                cellCount={CELL_COUNT}
                rootStyle={styles.codeFieldRoot}
                keyboardType="number-pad"
                textContentType="oneTimeCode"
                autoFocus
                renderCell={({index, symbol, isFocused}) => (
                  <View style={styles.wrapper} key={index}>
                    <SView style={styles.number}>
                      <Typography
                        onLayout={getCellOnLayoutHandler(index)}
                        variant="h1"
                        color={
                          symbol || isFocused ? Colors.PRIMARY : Colors.BLACK
                        }>
                        {symbol || (isFocused ? <Cursor /> : 0)}
                      </Typography>
                    </SView>
                    {index === 1 || index === 3 ? (
                      <View
                        key={`separator-${index}`}
                        style={[
                          styles.separator,
                          {
                            backgroundColor:
                              (code.length >= 2 && index === 1) ||
                              (code.length >= 4 && index === 3)
                                ? Colors.PRIMARY
                                : Colors.BLACK,
                          },
                        ]}
                      />
                    ) : null}
                  </View>
                )}
              />
              {second > 0 ? (
                <Typography
                  color={Colors.BLACK}
                  variant="p1"
                  textAlign="center">
                  {t('register.resendCode', {seconds: second})}
                </Typography>
              ) : (
                <ButtonWrapper onPress={handleResendCode}>
                  <Typography
                    color={Colors.PRIMARY}
                    variant="p1"
                    textAlign="center">
                    {t('register.resendCodeBtn')}
                  </Typography>
                </ButtonWrapper>
              )}
            </SView>
            <CustomButton
              disabled={code.length !== 6}
              text={t('base.continue')}
              onPress={confirmCode}
              background={Colors.PRIMARY_BUTTON}
            />
          </SView>
        </KeyboardAvoidingLayout>
      </AppLayout>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
    paddingBottom: 24,
    flex: 1,
  },
  backWrapper: {
    position: 'absolute',
    left: 0,
    top: 0,
  },
  header: {
    justifyContent: 'center',
    paddingBottom: 115,
    paddingTop: 80,
  },
  form: {
    flex: 1,
    alignItems: 'center',
  },
  codeFieldRoot: {
    alignItems: 'center',
    marginBottom: 40,
    justifyContent: 'center',
  },
  separator: {
    width: 8,
    height: 4,
    marginHorizontal: 4,
    top: 4,
  },
  resendCode: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  timer: {
    width: 45,
  },
  number: {
    alignItems: 'center',
    width: 25,
    height: 40,
    justifyContent: 'center',
  },
  wrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    height: 24,
  },
});
