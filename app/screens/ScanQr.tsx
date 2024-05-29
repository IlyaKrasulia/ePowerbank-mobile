import React from 'react';
import {Alert} from 'react-native';
import {Camera, CameraType} from 'react-native-camera-kit';
import {SView} from '../components/Base/SView';
import {screenHeight} from '../utils/styles';

export const ScanQr = () => {
  return (
    <SView>
      <Camera
        scanBarcode={true}
        onReadCode={() => Alert.alert('QR code found')}
        showFrame={true}
        laserColor="red"
        frameColor="white"
        cameraType={CameraType.Front}
        style={{height: screenHeight}}
      />
    </SView>
  );
};
