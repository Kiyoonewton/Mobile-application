import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  Image,
  FlatList,
  ScrollView,
  ImageBackground,
  Share,
  useWindowDimensions,
} from 'react-native';
import {
  faAngleLeft,
  faAngleRight,
  faDownload,
  faMicrophone,
  faPlay,
  faThumbsUp,
  faTimes,
} from '@fortawesome/free-solid-svg-icons';
import {useState} from 'react';
import ArrowSvgSvg from '../../assets/img/final-arrow-white.svg';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import ClassNoteMicrophone from '../../assets/img/microphone.svg';
import Microphone from '../../assets/img/MicrophoneAlt.svg';
import Like from '../../assets/img/Like1.svg';
import UnLike from '../../assets/img/unlike.svg';
import Eye from '../../assets/img/view.svg';
import MoreOptionsIcon from '../../assets/img/more.svg';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import HTML from 'react-native-render-html';
import styles from './styles';

const ClassNote = () => {
  const navigation = useNavigation();
  const {classNoteData} = useSelector(state => state.studentDashboard);
  const [data, setData] = useState(classNoteData[2]);

  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <ImageBackground
            source={require('../../assets/img/ClassNotePageBg.png')}
            imageStyle={
              {
                // borderRadius: 10,
              }
            }
            style={{
              width: '100%',
              height: 300,
              // marginTop: 10,
            }}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <View style={{marginTop: 25, marginLeft: 25}}>
                <ArrowSvgSvg width={23} height={22} />
              </View>
            </TouchableOpacity>

            <Text
              style={{
                color: '#fff',
                fontSize: 34,
                alignSelf: 'center',
                marginTop: 5,
                textAlign: 'center',
                height: 165,
              }}>
              {data?.title}
            </Text>
            <View
              style={{
                width: '100%',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-evenly',
                marginTop: 25,
              }}>
              <TouchableOpacity>
                <View style={{width: 60, alignItems: 'center'}}>
                  <ClassNoteMicrophone color="#E5E5E5" width={30} height={30} />
                  <Text style={{color: 'white', fontSize: 12}}>Audio</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View style={{width: 60, alignItems: 'center'}}>
                  <FontAwesomeIcon icon={faPlay} size={30} color="white" />
                  <Text style={{color: 'white', fontSize: 12}}>Lessons</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View style={{width: 60, alignItems: 'center'}}>
                  <UnLike width={25} />
                  <Text style={{color: 'white', fontSize: 12}}>Like(s)</Text>
                </View>
              </TouchableOpacity>

              <View style={{width: 80, alignItems: 'center'}}>
                <Eye width={30} />
                <Text style={{color: 'white', fontSize: 12}}>
                  {data?.views} View(s)
                </Text>
              </View>

              <TouchableOpacity>
                <View style={{width: 60, alignItems: 'center'}}>
                  <MoreOptionsIcon width={36} />
                  <Text style={{color: 'white', fontSize: 12}}>More</Text>
                </View>
              </TouchableOpacity>
            </View>
          </ImageBackground>
          <View style={{width: '94%', alignSelf: 'center'}}>
            <View
              style={{
                width: '100%',
                // height: '60%',
              }}>
              <HTML
                source={{
                  html: data?.content || 'Oops! content is not available now',
                }}
                contentWidth={useWindowDimensions().width}
                baseFontStyle={styles.text}
                tagsStyles={styles.tagsStyles}
                allowedStyles={[]}
              />
            </View>
          </View>
          <View
            style={{
              justifyContent: 'space-between',
              flexDirection: 'row',
              marginHorizontal: 10,
              marginVertical: 30,
            }}>
            <View style={{width: '25%'}}>
              <TouchableOpacity style={styles.navButton}>
                <FontAwesomeIcon
                  color="#84bb29"
                  icon={faAngleLeft}
                  style={{
                    borderRightColor: 'rgba(196, 196, 196, 09)',
                    borderRightWidth: 1,
                    paddingHorizontal: 10,
                  }}
                />
                <Text
                  style={[styles.text, {marginLeft: 10}]}
                  // onPress={() => handleMoveback()}
                >
                  Go Back
                </Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                width: '25%',
                height: 35,
                justifyContent: 'center',
              }}>
              <Text
                style={{
                  marginRight: 10,
                  textAlign: 'center',
                  color: '#333',
                }}>
                {classNoteData[0] + 1}/{classNoteData[1] + 1}
              </Text>
            </View>
            <View style={{width: '25%'}}>
              <TouchableOpacity
                style={styles.navButton}
                // onPress={() => {}}
              >
                <Text style={[styles.text, {marginRight: 10}]}>Next</Text>
                <FontAwesomeIcon
                  color="#84bb29"
                  icon={faAngleRight}
                  style={{
                    borderLeftColor: 'rgba(196, 196, 196, 0.7)',
                    borderLeftWidth: 1,
                    paddingHorizontal: 10,
                  }}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ClassNote;
