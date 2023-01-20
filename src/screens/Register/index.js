import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';

import {styles} from './styles';
import LogoSvg from '../../assets/img/logo.svg';
import ArrowSvgSvg from '../../assets/img/final-arrow.svg';
import DropdownComponent from '../../components/dropDown';
import TextInputComponent from '../../components/textInputComponent';

const data = [
  {label: 'Item 1', value: '1'},
  {label: 'Item 2', value: '2'},
  {label: 'Item 3', value: '3'},
  {label: 'Item 4', value: '4'},
  {label: 'Item 5', value: '5'},
  {label: 'Item 6', value: '6'},
  {label: 'Item 7', value: '7'},
  {label: 'Item 8', value: '8'},
];

const Register = ({navigation}) => {
  const [inputValue, setInputValue] = useState('');
  return (
    <SafeAreaView style={styles.mainContainer}>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}>
        <View>
          <ArrowSvgSvg width={23} />
        </View>
        <LogoSvg width={130} />
      </TouchableOpacity>
      <ScrollView>
        <TextInputComponent inputValue={'Full Name'} />
        <TextInputComponent inputValue={'Email Address'} />
        <TextInputComponent inputValue={'Phone Number'} />
        <DropdownComponent inputValue={'Select Role'} data={data} />
        <DropdownComponent inputValue={'Select Class'} data={data} />
        <View style={styles.inputWrapper}>
          <TextInput placeholder="Password" secureTextEntry={true} />
        </View>
        <TextInputComponent inputValue={'Referal code'} />
        <View style={{alignItems: 'flex-start', justifyContent: 'center'}}>
          <Text style={{color: '#000'}}>
            By Signing up for Afrilearn, you agree to our{' '}
            <TouchableOpacity>
              <Text style={{color: '#000'}}>
                Terms of use and Privacy policy
              </Text>
            </TouchableOpacity>
          </Text>
        </View>
        <TouchableOpacity style={styles.signUpBtn}>
          <Text style={styles.signUpText}>Sign Up</Text>
        </TouchableOpacity>
        <View style={{marginTop: 5, alignItems: 'center'}}>
          <View>
            <Text style={{color: '#000', fontFamily: 'Poppins'}}>
              Login with Google
            </Text>
          </View>
          <View style={styles.alreadyUserWrapper}>
            <Text
              style={{color: '#000', marginRight: 10, fontFamily: 'Poppins'}}>
              Already have an account?
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
              <Text
                style={{color: '#00d9b6', fontFamily: 'Poppins', fontSize: 15}}>
                Log In
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Register;
