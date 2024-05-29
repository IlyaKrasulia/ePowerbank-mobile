import React, {useState} from 'react';
import {AppLayout} from '../components/Base/AppLayout';
import {StyleSheet, View} from 'react-native';
import {Typography} from '../components/Base/Typography';
import {useFormik} from 'formik';
import {BaseInput} from '../components/Inputs/BaseInput';
import {SView} from '../components/Base/SView';
import {CustomButton} from '../components/Button/CustomButton';
import {Colors} from '../utils/styles';
import firestore from '@react-native-firebase/firestore';
import {BackButton} from '../components/Base/BackButton';

export const CreateStation = () => {
  const [isLoading, setIsLoading] = useState(false);

  const generateDevice = () => {
    const powerbank = {
      id: Math.floor(Math.random() * 1000),
      charge: 100,
      status: 'free',
      capacity: 10000,
    };

    return powerbank;
  };

  const formik = useFormik({
    initialValues: {
      city: 'Sumy',
      address: '',
      place: '',
      price30m: '',
      price24h: '',
      latitude: '',
      longitude: '',
    },
    onSubmit: values => {
      setIsLoading(true);
      firestore()
        .collection('stations')
        .add({
          address: values.address,
          availability: true,
          city: values.city,
          coordinate: {latitude: values.latitude, longitude: values.longitude},
          place: values.place,
          price24h: values.price24h,
          price30m: values.price30m,
          totalPowerbanks: 6,
          availablePowerbanks: 6,
          devices: [
            generateDevice(),
            generateDevice(),
            generateDevice(),
            generateDevice(),
            generateDevice(),
            generateDevice(),
          ],
        })
        .then(() => {
          setIsLoading(false);
          formik.resetForm();
        })
        .catch(() => {
          setIsLoading(false);
        });
    },
  });
  return (
    <AppLayout>
      <View style={styles.wrapper}>
        <SView
          flexDirection="row"
          alignItems="center"
          gap={20}
          marginBottom={20}>
          <BackButton />
          <Typography
            variant="h3"
            textAlign="center"
            marginTop={20}
            marginBottom={20}>
            Додайте нову станцію
          </Typography>
        </SView>
        <SView gap={10}>
          <BaseInput
            defaultValue={formik.values.address}
            onChange={(text: string) => formik.setFieldValue('address', text)}
            placeholder="Адреса"
          />
          <BaseInput
            defaultValue={formik.values.place}
            onChange={(text: string) => formik.setFieldValue('place', text)}
            placeholder="Заклад"
          />
          <BaseInput
            defaultValue={formik.values.price30m}
            onChange={(text: string) => formik.setFieldValue('price30m', text)}
            placeholder="Ціна за 30 хвилин"
            keyboardType="number-pad"
          />
          <BaseInput
            defaultValue={formik.values.price24h}
            onChange={(text: string) => formik.setFieldValue('price24h', text)}
            placeholder="Ціна за добу"
            keyboardType="number-pad"
          />
          <BaseInput
            defaultValue={formik.values.latitude}
            onChange={(text: string) => formik.setFieldValue('latitude', text)}
            placeholder="latitude"
            keyboardType="number-pad"
          />
          <BaseInput
            defaultValue={formik.values.longitude}
            onChange={(text: string) => formik.setFieldValue('longitude', text)}
            placeholder="longitude"
            keyboardType="number-pad"
          />
        </SView>
      </View>
      <View style={{paddingHorizontal: 20}}>
        <CustomButton
          onPress={formik.handleSubmit}
          text="Створити"
          background={Colors.PRIMARY}
          loading={isLoading}
        />
      </View>
    </AppLayout>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: 20,
    flex: 1,
  },
});
