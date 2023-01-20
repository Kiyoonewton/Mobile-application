import {
  SafeAreaView,
  Text,
  Image,
  View,
  TouchableOpacity,
  FlatList,
  ImageBackground,
  Button,
  ScrollView,
} from 'react-native';
// import {styles} from './styles';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import ArrowSvgSvg from '../../assets/img/final-arrow-black.svg';
import {Overlay, Icon} from '@rneui/themed';
import {useState} from 'react';
import {fetchPastQuestionInitiate} from '../../redux/action/studentDashBoard';

const PastquestionSub = () => {
  const navigation = useNavigation();
  const {pastQuestionSubLoading, pastQuestionSubData, pastQuestionSubError} =
    useSelector(state => state.studentDashboard);

  const [visible, setVisible] = useState(false);
  const [pastqueyear, setPastqueyear] = useState('');

  const toggleOverlay = data => {
    setVisible(!visible);
    setPastqueyear(data);
  };

  const dispatch = useDispatch();

  // console.log(pastQuestionSubData);
  return (
    <SafeAreaView>
      <View style={{marginTop: 10}}>
        <View style={{marginTop: 15, marginHorizontal: 20, marginBottom: 10}}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <View>
              <ArrowSvgSvg width={23} height={22} />
            </View>
          </TouchableOpacity>
          <Text
            style={{
              textAlign: 'center',
              fontSize: 20,
              fontWeight: '500',
              marginTop: -20,
            }}>
            Select Subject
          </Text>
        </View>
      </View>
      <ScrollView style={{marginTop: 10, height: '90%'}}>
        <View
          style={{
            width: '100%',
            flexWrap: 'wrap',
            flexDirection: 'row',
            justifyContent: 'space-evenly',
          }}>
          {pastQuestionSubData?.subjects?.map((data, index) => (
            <TouchableOpacity
              onPress={() => toggleOverlay(data?.years)}
              key={index}>
              <View
                style={{
                  width: 140,
                  height: 140,
                  backgroundColor: 'rgba(0,0,0,0.03)',
                  marginBottom: 10,
                  borderRadius: 15,
                  alignItems: 'center',
                  justifyContent: 'center',
                  // opacity: 0.2,
                }}>
                <View
                  style={{
                    width: '100%',
                    height: '80%',
                    //   backgroundColor: 'red',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Image
                    source={{uri: `https:${data.subject_image}`}}
                    style={{width: 80, height: 70}}
                  />
                  <Text>{data.subject}</Text>
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
      <Overlay
        isVisible={visible}
        onBackdropPress={toggleOverlay}
        style={{borderRadius: 15, width: '70%', height: '70%'}}>
        <Text
          style={{
            fontSize: 15,
            textAlign: 'center',
            fontWeight: '500',
          }}>
          Select Year
        </Text>
        {/* <ScrollView style={{borderRadius: 15, width: '70%', height: '70%'}}> */}
        <View
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            width: '100%',
            borderRadius: 10,
            marginTop: 15,
          }}>
          {pastqueyear.length > 0 &&
            pastqueyear?.map((data, i) => (
              <TouchableOpacity
                style={{
                  width: 80,
                  height: 50,
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: 5,
                }}
                key={i}
                onPress={() => {
                  navigation.navigate('Instruction');
                  dispatch(fetchPastQuestionInitiate(data?.subject_id));
                }}>
                <Text
                  style={{
                    borderWidth: 1,
                    borderColor: '#333',
                    borderRadius: 5,
                    padding: 10,
                    fontSize: 18,
                  }}>
                  {data.exam_year}
                </Text>
              </TouchableOpacity>
            ))}
        </View>
        {/* </ScrollView> */}
      </Overlay>
    </SafeAreaView>
  );
};

export default PastquestionSub;
