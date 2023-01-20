import React from 'react';
import {View, Text, SafeAreaView, TouchableOpacity} from 'react-native';

import LogoSvg from '../../assets/img/logo.svg';
import ArrowSvgSvg from '../../assets/img/final-arrow-white.svg';

const BackButton = ({navigation}) => {
  return (
    <SafeAreaView
      style={{
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <TouchableOpacity
        style={{
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          width: 240,
          height: 50,
          alignItems: 'center',
          margin: 90,
          marginRight: 200,
        }}
        onPress={() => navigation.goBack()}>
        <View>
          <ArrowSvgSvg width={23} height={50} />
        </View>
        <LogoSvg width={150} />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default BackButton;
