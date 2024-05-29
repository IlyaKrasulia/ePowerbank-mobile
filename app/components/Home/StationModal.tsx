import React, {useState} from 'react';
import {ModalWrapper} from '../Base/ModalWrapper';
import {StyleSheet, View} from 'react-native';
import {Typography} from '../Base/Typography';
import {
  ClockBlackIcon,
  LocationIcon,
  PowerbankIcon,
} from '../../assets/images/base';
import {SView} from '../Base/SView';
import {Colors} from '../../utils/styles';
import {ButtonWrapper} from '../Button/ButtonWrapper';
import {PowerbankType, StationType} from '../../utils/types';
import {DeviceModal} from './DeviceModal';

interface IProps {
  state: boolean;
  setState: React.Dispatch<React.SetStateAction<boolean>>;
  data: StationType;
}

export const StationModal = ({state, setState, data}: IProps) => {
  const [modal, setModal] = useState<PowerbankType | null>(null);

  const handleOpenModal = (it: PowerbankType) => {
    setModal(it);
  };

  return (
    <ModalWrapper close={() => setState(false)} isVisible={state}>
      <View style={styles.modalContainer}>
        <Typography variant="h3">{data.place}</Typography>
        <SView flexDirection="row" alignItems="center" gap={5} marginTop={15}>
          <ClockBlackIcon width={20} height={20} />
          <Typography variant="p3Medium">
            Ціна за 30хв - {data.price30m} грн
          </Typography>
        </SView>
        <SView flexDirection="row" alignItems="center" gap={5} marginTop={10}>
          <ClockBlackIcon width={20} height={20} />
          <Typography variant="p3Medium">
            Ціна за добу - {data.price24h} грн
          </Typography>
        </SView>
        <SView flexDirection="row" alignItems="center" gap={5} marginTop={10}>
          <LocationIcon width={20} height={20} />
          <Typography variant="p3Medium">
            {data.place}, {data.address}
          </Typography>
        </SView>
        <View style={styles.stationWrapper}>
          {data.devices?.map((it, index) => {
            return (
              <ButtonWrapper
                onPress={() => handleOpenModal(it)}
                key={index}
                style={it.status === 'busy' && {opacity: 0.5}}>
                <PowerbankIcon width={90} height={90} />
              </ButtonWrapper>
            );
          })}
        </View>
      </View>
      <DeviceModal
        data={modal}
        onClose={() => setModal(null)}
        handleCloseStationModal={() => setState(false)}
        docId={data.docId}
      />
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
  stationWrapper: {
    borderColor: Colors.PRIMARY,
    borderWidth: 10,
    padding: 10,
    borderRadius: 20,
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 15,
  },
});
