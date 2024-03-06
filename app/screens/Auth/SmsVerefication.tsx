import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
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
import {ScreenEnum} from '../../utils/types';

const CELL_COUNT = 6;
export const SmsVerification = () => {
  const [code, setCode] = useState('');
  const ref = useBlurOnFulfill({value: code, cellCount: CELL_COUNT});
  const [codeProps, getCellOnLayoutHandler] = useClearByFocusCell({
    value: code,
    setValue: setCode,
  });
  const {second, startTimer} = useTimer();
  const {goBack, navigate} = useNavigation();

  const resendCode = async () => {
    startTimer();
  };

  return (
    <>
      <AppLayout>
        <KeyboardAvoidingLayout>
          <SView style={styles.container}>
            <SHeader rightAction={() => goBack()} />
            <SView style={styles.header}>
              <Typography variant="p1SemiBold" textAlign="center">
                Введіть код з SMS
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
              <TouchableOpacity
                style={styles.resendCode}
                onPress={resendCode}
                disabled={second > 0}>
                <Typography
                  color={second > 0 ? Colors.BLACK : Colors.PRIMARY}
                  variant="p1"
                  textAlign="center">
                  {second > 0
                    ? `Якщо код не прийшов відправте повторно через ${second} сукенд`
                    : 'Відправити повторно'}
                </Typography>
              </TouchableOpacity>
            </SView>
            <CustomButton
              disabled={code.length !== 6}
              text={'Перейди до останнього кроку'}
              onPress={() => navigate(ScreenEnum.AddAdditionalInfo)}
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
