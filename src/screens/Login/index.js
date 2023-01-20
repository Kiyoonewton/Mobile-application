import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
} from 'react-native';

import {styles} from './styles';
import LogoSvg from '../../assets/img/logo.svg';
import ArrowSvgSvg from '../../assets/img/final-arrow.svg';
import {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {loginInitiate} from '../../redux/action/auth';
import {useEffect} from 'react';
import {getToken} from '../../redux/action/studentDashBoard';

const Login = ({navigation}) => {
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const dispatch = useDispatch();

  const {user} = useSelector(state => state.auth);

  const handleSumbitLogins = () => {
    dispatch(loginInitiate(email, password));
    console.log(email, password);
  };

  const token = user?.token;

  useEffect(() => {
    token ? navigation.navigate('StudentPage') : navigation.navigate('Parent');
  }, [token]);

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
      <View style={styles.emalInputField}>
        <TextInput
          placeholder="Email Address"
          onChangeText={text => setEmail(text)}
          value={email}
          keyboardType="email-address"
        />
      </View>
      <View style={{display: 'flex', marginBottom: 50}}>
        <View style={styles.passwordInputField}>
          <TextInput
            placeholder="Password"
            onChangeText={text => setPassword(text)}
            value={password}
            secureTextEntry={true}
          />
        </View>
        <TouchableOpacity style={{alignSelf: 'flex-end'}}>
          <Text style={{color: '#000', fontWeight: '500'}}>
            Forgot Password?
          </Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        onPress={() => {
          handleSumbitLogins();
        }}
        style={styles.loginBtn}>
        <Text style={styles.loginText}>Login</Text>
      </TouchableOpacity>
      <View style={{marginTop: 10}}>
        <View>
          <Text style={{color: '#000', fontFamily: 'Poppins'}}>
            Login with Google
          </Text>
        </View>
        <View style={styles.newToAfrilearnTextWrapper}>
          <Text style={{color: '#000', marginRight: 10, fontFamily: 'Poppins'}}>
            New to Afrilearn?
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Register')}>
            <Text
              style={{color: '#00d9b6', fontFamily: 'Poppins', fontSize: 15}}>
              Sign Up Now
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Login;
