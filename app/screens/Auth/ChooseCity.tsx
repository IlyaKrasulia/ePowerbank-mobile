import React, {useEffect, useMemo, useState} from 'react';
import {AppLayout} from '../../components/Base/AppLayout';
import {Typography} from '../../components/Base/Typography';
import {SView} from '../../components/Base/SView';
import {BaseInput} from '../../components/Inputs/BaseInput';
import {CityItem} from '../../components/CityItem';
import {FlatList, StyleSheet, View} from 'react-native';
import {CITIES} from '../../utils/constants';
import {CustomButton} from '../../components/Button/CustomButton';
import {Colors} from '../../utils/styles';

export const ChooseCity = () => {
  const [value, setValue] = useState('');
  const [selectedValue, setSelectedValue] = useState('');
  const [cities, setCities] = useState<Array<any>>([]);
  useMemo(() => {
    const sortedData = CITIES.sort((a, b) => {
      if (a.support && !b.support) {
        return -1;
      }
      if (!a.support && b.support) {
        return 1;
      }
      return 0;
    });

    setCities(sortedData);
  }, []);

  useEffect(() => {
    const filteredData = CITIES.filter(item =>
      item.label.toLowerCase().includes(value.toLowerCase()),
    );

    const sortedFilteredData = filteredData.sort((a, b) => {
      if (a.support && !b.support) {
        return -1;
      }
      if (!a.support && b.support) {
        return 1;
      }
      return 0;
    });

    setCities(sortedFilteredData);
  }, [value]);

  return (
    <AppLayout>
      <SView marginLeft={15} marginRight={15} marginTop={10} flex={1}>
        <Typography variant="p2Bold" marginBottom={15} textAlign="center">
          Виберіть своє місто
        </Typography>
        <BaseInput
          defaultValue={value}
          onChange={text => setValue(text)}
          placeholder="Донецьк"
          maxLength={10}
          leftIcon
        />
        <SView marginTop={20} marginBottom={80}>
          <FlatList
            data={cities}
            renderItem={({item}) => {
              return (
                <CityItem
                  active
                  occupied={item.occupied}
                  support={item.support}
                  title={item.label}
                  setState={setSelectedValue}
                  state={selectedValue}
                />
              );
            }}
          />
        </SView>
      </SView>
      <View style={styles.buttonWrapper}>
        <CustomButton
          text="Почати!"
          onPress={() => {}}
          background={Colors.PRIMARY_BUTTON}
        />
      </View>
    </AppLayout>
  );
};

const styles = StyleSheet.create({
  buttonWrapper: {
    backgroundColor: Colors.BG,
    paddingHorizontal: 15,
    paddingVertical: 20,
  },
});
