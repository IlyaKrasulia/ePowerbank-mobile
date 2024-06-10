import firestore from '@react-native-firebase/firestore';
import {PowerbankType} from './types';
import {firebase} from '@react-native-firebase/auth';

export const updateDeviceStatus = async (
  stationDocId: string,
  powerbankId: number,
  newStatus: string,
  currentUid: string,
  type: 'startRent' | 'endRent',
  redirect?: () => void,
) => {
  try {
    const stationRef = firestore().collection('stations').doc(stationDocId);
    const stationDoc = await stationRef.get();

    if (stationDoc.exists) {
      const stationData = stationDoc.data();
      const devices = stationData?.devices || [];

      // find device & update status
      const updatedDevices = devices.map((device: any) =>
        device.id === powerbankId ? {...device, status: newStatus} : device,
      );

      // update Firestore
      await stationRef.update({devices: updatedDevices});

      console.log(`Device ${powerbankId} status updated to ${newStatus}`);
      const userRef = firestore().collection('Users').doc(currentUid);
      if (type === 'startRent') {
        const time = new Date();

        userRef.update({
          activRent: {
            ...devices.find((it: PowerbankType) => it.id === powerbankId),
            timestamp: time,
            stationDocId,
          },
        });
        redirect && redirect();
      } else if (type === 'endRent') {
        let history;
        userRef.get().then(data => {
          history = data;
        });
        console.log(history);

        userRef.update({
          activRent: {},
        });
      }
    } else {
      console.log(`Station ${stationDocId} not found`);
    }
  } catch (error) {
    console.error('Error updating device status: ', error);
  }
};

export const userRef = firestore()
  .collection('Users')
  .doc(firebase.auth().currentUser?.uid);
