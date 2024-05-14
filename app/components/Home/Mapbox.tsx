import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import React, {useState} from 'react';
import {SView} from '../Base/SView';
import {mapStyle} from '../../utils/mapStyle';

export const Mapbox = () => {
  const [currentLocation, _] = useState<{
    latitude: number;
    longitude: number;
  }>({latitude: 50.904907412220965, longitude: 34.805365725714594});

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
        // showsMyLocationButton
        style={{flex: 1}}
        provider={PROVIDER_GOOGLE}
      />
    </SView>
  );
};
