import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react';
import Lady from '../../assets/img/home-bg.gif';
import Logo from '../../assets/img/logo.svg';
import {styles} from './styles';
import BackButton from '../../components/backButton';
import Lottie from 'lottie-react-native';

export default Home = ({navigation}) => {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <Logo width={300} height={50} />
      <View style={styles.heroHeader}>
        <Text style={styles.heroText}>
          Learn curriculum-relevant subjects and topics anytime, anywhere
        </Text>
      </View>
      <Lottie
        source={require('../../assets/gif/welcome.json')}
        autoPlay
        loop
        style={styles.gifstyle}
      />

      <TouchableOpacity
        onPress={() => navigation.navigate('Register')}
        style={styles.getstartedBtn}>
        <Text style={styles.getstartedText}>GET STARTED</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('Login')}
        style={styles.alreadyUserBtn}>
        <Text style={styles.alreadyUserText}>I ALREADY HAVE AN ACCOUNT</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};
