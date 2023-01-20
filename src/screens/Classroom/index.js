import {useNavigation} from '@react-navigation/core';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import ArrowSvgSvg from '../../assets/img/final-arrow-black.svg';
import OptionsMenu from 'react-native-option-menu';
import {SentenceCase} from '../../utils/helper';

const Classroom = () => {
  const navigation = useNavigation();
  const MoreIcon = require('../../assets/img/moreIcon.png');
  return (
    <View>
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{
            alignItems: 'flex-end',
            width: '15%',
            //   marginLeft: 25,
          }}>
          <View style={{marginTop: 25}}>
            <ArrowSvgSvg width={23} height={22} />
          </View>
        </TouchableOpacity>
        <Text
          style={{
            textAlign: 'center',
            fontSize: 20,
            fontWeight: '500',
            marginTop: 20,
            width: '70%',
          }}>
          Anouncements
        </Text>

        <OptionsMenu
          button={MoreIcon}
          buttonStyle={{
            width: 23,
            height: 23,
            marginTop: 25,
            resizeMode: 'contain',
          }}
          destructiveIndex={1}
          options={['Edit', 'Delete', 'Cancel']}
          // actions={[editPost, deletePost]}
        />
      </View>
      <View>
        <Text
          style={{
            fontSize: 20,
            fontWeight: '500',
            marginTop: 20,
            color: '#333',
            borderBottomWidth: 1,
            paddingLeft: 23,
            paddingBottom: 10,
          }}>
          Anouncements from teacher
        </Text>
      </View>
      {/* <ScrollView> */}
      <View
        style={{
          borderWidth: 1,
          margin: 5,
          borderRadius: 10,

          paddingTop: 20,
        }}>
        <View style={{flexDirection: 'row'}}>
          <View
            style={{
              backgroundColor: 'grey',
              paddingVertical: 7,
              borderRadius: 50,
              width: 45,
              height: 45,
              marginLeft: 20,
            }}>
            <Text
              style={{
                fontSize: 22,
                color: '#fff',
                textAlign: 'center',
              }}>
              Wo
            </Text>
          </View>
          <View style={{paddingLeft: 10}}>
            <Text style={{fontSize: 18, fontWeight: '500', color: '#000'}}>
              Kolawole Isaac (Teacher)
            </Text>
            <Text style={{fontSize: 15}}>2 months ago</Text>
          </View>
        </View>
        <View style={{marginTop: 10, paddingHorizontal: 25}}>
          <Text style={{fontSize: 18, color: '#000'}}>
            {SentenceCase('hi guys how are we doing')}
          </Text>
        </View>
        <View
          style={{
            marginTop: 10,
            paddingHorizontal: 25,
            borderBottomWidth: 1,
            paddingBottom: 8,
          }}>
          <Text style={{fontSize: 18, color: '#00D9B6'}}>
            1 class comment(s)
          </Text>
        </View>
        {/* =============================Comments========================== */}
        <View style={{}}>
          <View style={{flexDirection: 'row', marginTop: 5}}>
            <View
              style={{
                backgroundColor: 'grey',
                paddingVertical: 7,
                borderRadius: 50,
                width: 45,
                height: 45,
                marginLeft: 20,
              }}>
              <Text
                style={{
                  fontSize: 22,
                  color: '#fff',
                  textAlign: 'center',
                }}>
                Wo
              </Text>
            </View>
            <View style={{paddingLeft: 10}}>
              <Text style={{fontSize: 18, fontWeight: '500', color: '#000'}}>
                Kolawole Isaac (Teacher)
              </Text>
              <Text style={{fontSize: 15}}>2 months ago</Text>
            </View>
          </View>
          <View style={{marginTop: 10, paddingHorizontal: 25}}>
            <Text style={{fontSize: 18, color: '#000'}}>
              {SentenceCase('hi guys how are we doing')}
            </Text>
          </View>
        </View>
      </View>
      {/* </ScrollView> */}
    </View>
  );
};

export default Classroom;
