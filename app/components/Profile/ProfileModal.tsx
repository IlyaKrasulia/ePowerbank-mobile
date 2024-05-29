import React from 'react';
import {Alert, StyleSheet, View} from 'react-native';
import {Typography} from '../Base/Typography';
import {ModalWrapper} from '../Base/ModalWrapper';
import {ButtonWrapper} from '../Button/ButtonWrapper';
import {Colors} from '../../utils/styles';
import {useDispatch} from 'react-redux';
import {signOut} from '../../redux/authSlice';
import {firebase} from '@react-native-firebase/auth';

interface IProps {
  state: boolean;
  setState: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ProfileModal = ({state, setState}: IProps) => {
  const dispatch = useDispatch();

  const handleSignOut = () => {
    Alert.alert(
      'Підтвердіть дію',
      'Ви дійсно бажаєте покинуть свій обліковий запис?',
      [
        {text: 'Скасувати'},
        {
          text: 'Підтвердити',
          onPress: () => {
            firebase
              .auth()
              .signOut()
              .then(() => {
                dispatch(signOut());
              });
          },
          isPreferred: true,
        },
      ],
    );
  };

  return (
    <ModalWrapper isVisible={state} close={() => setState(false)}>
      <View style={styles.modalContainer}>
        <ButtonWrapper onPress={handleSignOut}>
          <Typography variant="p2Medium" color={Colors.ERROR}>
            Видалити обліковий запис
          </Typography>
        </ButtonWrapper>
        <View style={styles.line}></View>
        <ButtonWrapper onPress={handleSignOut}>
          <Typography variant="p2Medium">Вийти з додатку</Typography>
        </ButtonWrapper>
      </View>
    </ModalWrapper>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    paddingBottom: 20,
    paddingTop: 60,
    paddingHorizontal: 30,
    justifyContent: 'flex-end',
  },
  line: {
    borderColor: Colors.BG,
    borderWidth: 1,
    width: '100%',
    marginVertical: 20,
  },
});
