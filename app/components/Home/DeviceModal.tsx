import React from 'react';
import {ModalWrapper} from '../Base/ModalWrapper';
import {StyleSheet, View} from 'react-native';
import {PowerbankType, ScreenEnum} from '../../utils/types';
import {Typography} from '../Base/Typography';
import {Colors} from '../../utils/styles';
import {MastercardIcon, SuccessIcon} from '../../assets/images/base';
import {SView} from '../Base/SView';
import {Line} from '../Base/Line';
import SelectDropdown from 'react-native-select-dropdown';
import {CustomButton} from '../Button/CustomButton';
import {ButtonWrapper} from '../Button/ButtonWrapper';
import {useNavigation} from '@react-navigation/native';

interface IProps {
  onClose: () => void;
  handleCloseStationModal: () => void;
  data: PowerbankType | null;
  docId: string;
}

const temp = [{value: '537541*08'}, {value: '537541*11'}];

export const DeviceModal = ({
  onClose,
  data,
  handleCloseStationModal,
  docId,
}: IProps) => {
  const {navigate} = useNavigation();

  const status = () => {
    switch (data?.status) {
      case 'free':
        return 'Готовий до використування';
      case 'busy':
        return 'Використовується іншим користувачем';
      case 'isServed':
        return 'Тимчасово недоступний';
      default:
        break;
    }
  };
  return (
    <ModalWrapper close={onClose} isVisible={Boolean(data)}>
      <View style={styles.modalContainer}>
        <Typography variant="h3">ID: {data?.id}</Typography>
        <Typography variant="p2SemiBold" marginTop={20}>
          Ємкість: {data?.capacity.toLocaleString('uk')} mAh
        </Typography>
        <Typography variant="p2SemiBold" marginTop={5}>
          Заряд: {data?.charge}%
        </Typography>
        <SView flexDirection="row" alignItems="center" gap={5}>
          <Typography
            variant="p2SemiBold"
            marginTop={5}
            color={
              status() === 'Готовий до використування'
                ? Colors.SUCCESS
                : Colors.ERROR
            }>
            Статус: {status()}
          </Typography>
          <SuccessIcon width={15} height={15} style={{top: 2}} />
        </SView>
        <Line />
        <Typography variant="p3SemiBold">Виберіть платіжну картку</Typography>
        <SelectDropdown
          data={temp}
          onSelect={(selectedItem, index) => {
            console.log(selectedItem, index);
          }}
          defaultValue={temp[0]}
          renderButton={selectedItem => {
            return (
              <View style={styles.linkWrapper}>
                <SView flexDirection="row" gap={10} alignItems="center">
                  <MastercardIcon height={20} width={20} />
                  <Typography variant="p3SemiBold">
                    {(selectedItem && selectedItem.value) || 'Select your mood'}
                  </Typography>
                </SView>
              </View>
            );
          }}
          renderItem={(item, index, isSelected) => {
            return (
              <View
                style={{
                  ...styles.dropdownItemStyle,
                  ...(isSelected && {backgroundColor: '#D2D9DF'}),
                }}>
                <MastercardIcon width={20} height={20} />
                <Typography variant="p3SemiBold">{item.value}</Typography>
              </View>
            );
          }}
          showsVerticalScrollIndicator={false}
          dropdownStyle={styles.dropdownMenuStyle}
        />
        <CustomButton
          onPress={() => {
            onClose();
            handleCloseStationModal();
            navigate(ScreenEnum.UsageManual, {
              deviceId: data?.id,
              stationId: docId,
            });
          }}
          text="Почати користування"
          background={Colors.PRIMARY}
          marginTop={20}
        />
        <ButtonWrapper onPress={() => {}} marginTop={15}>
          <Typography
            variant={'p3SemiBold'}
            textAlign="center"
            color={Colors.LIGHT_GRAY}>
            Support
          </Typography>
        </ButtonWrapper>
      </View>
    </ModalWrapper>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    paddingBottom: 20,
    paddingTop: 40,
    paddingHorizontal: 30,
    justifyContent: 'flex-end',
  },
  linkWrapper: {
    borderWidth: 1,
    borderColor: Colors.BORDER,
    padding: 13,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
    marginTop: 10,
  },
  dropdownButtonStyle: {
    width: 200,
    height: 50,
    backgroundColor: '#E9ECEF',
    borderRadius: 12,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 12,
  },
  dropdownButtonTxtStyle: {
    flex: 1,
    fontSize: 18,
    fontWeight: '500',
    color: '#151E26',
  },
  dropdownButtonArrowStyle: {
    fontSize: 28,
  },
  dropdownButtonIconStyle: {
    fontSize: 28,
    marginRight: 8,
  },
  dropdownMenuStyle: {
    backgroundColor: '#E9ECEF',
    borderRadius: 8,
  },
  dropdownItemStyle: {
    width: '100%',
    flexDirection: 'row',
    paddingHorizontal: 12,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 8,
    gap: 10,
  },
  dropdownItemTxtStyle: {
    flex: 1,
    fontSize: 18,
    fontWeight: '500',
    color: '#151E26',
  },
  dropdownItemIconStyle: {
    fontSize: 28,
    marginRight: 8,
  },
});
