import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import React, {useEffect, useState} from 'react';
import {SView} from '../Base/SView';
import {mapStyle} from '../../utils/mapStyle';
import firestore from '@react-native-firebase/firestore';
import {StationType} from '../../utils/types';
import {StationModal} from './StationModal';

export const Mapbox = () => {
  const [currentLocation, _] = useState<{
    latitude: number;
    longitude: number;
  }>({latitude: 50.904907412220965, longitude: 34.805365725714594});
  const [stations, setStations] = useState<StationType[]>([]);
  const [modal, setModal] = useState(false);
  const [modalData, setModalData] = useState({});

  useEffect(() => {
    const unsubscribe = firestore()
      .collection('stations')
      .onSnapshot(res => {
        res.forEach(it => {
          setStations((prev: StationType[]) => [
            ...prev,
            {
              address: it.data().address,
              availability: it.data().availability,
              city: it.data().city,
              coordinate: it.data().coordinate,
              docId: it.id,
              devices: it.data().devices,
              place: it.data().place,
              price24h: it.data().price24h,
              price30m: it.data().price30m,
            } as StationType,
          ]);
        });
      });

    return () => unsubscribe();
  }, []);

  const handleOpenModal = (data: StationType) => {
    setModalData(data);
    setModal(true);
  };

  return (
    <SView flex={1}>
      <MapView
        initialRegion={{
          latitude: currentLocation.latitude,
          longitude: currentLocation.longitude,
          latitudeDelta: 0.022,
          longitudeDelta: 0.021,
        }}
        customMapStyle={mapStyle}
        showsUserLocation
        style={{flex: 1}}
        provider={PROVIDER_GOOGLE}>
        {stations?.map((it, index: number) => {
          return (
            <Marker
              key={index}
              coordinate={{
                latitude: it.coordinate.latitude,
                longitude: it.coordinate.longitude,
              }}
              image={require('../../assets/images/base/lightning.png')}
              onPress={() => handleOpenModal(it)}
            />
          );
        })}
      </MapView>
      <StationModal
        data={modalData as StationType}
        setState={setModal}
        state={modal}
      />
    </SView>
  );
};
