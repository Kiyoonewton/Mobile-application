import {SafeAreaView, View, Text, TouchableOpacity} from 'react-native';
import PlayIcon from '../../assets/img/Vector.svg';
import NotesOutlineIcon from '../../assets/img/notesOutline.svg';
import ClassNoteMicrophone from '../../assets/img/microphoneBlack.svg';
import Microphone from '../../assets/img/MicrophoneAlt.svg';
import Like from '../../assets/img/Like1.svg';
import UnLike from '../../assets/img/unlikeBlack.svg';
import Eye from '../../assets/img/viewBlack.svg';
import MoreOptionsIcon from '../../assets/img/moreBlack.svg';
import DropdownComponent from '../../components/dropDown';
import ArrowSvgSvg from '../../assets/img/final-arrow-white.svg';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import VideoPlay from 'react-native-video';

const LessonVideo = () => {
  const navigation = useNavigation();
  const {classNoteData} = useSelector(state => state.studentDashboard);

  console.log(classNoteData[0]);
  return (
    <SafeAreaView>
      <View>
        <VideoPlayer />
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <View style={{marginTop: 25, marginLeft: 25}}>
            <ArrowSvgSvg width={23} height={22} />
          </View>
        </TouchableOpacity>
        <View style={{marginTop: 0}}>
          {/* <LessonVideo/> */}
          <View
            style={{
              width: '100%',
              justifyContent: 'space-evenly',
              flexDirection: 'row',
            }}>
            <View
              style={{
                borderWidth: 1,
                borderColor: '#333',
                width: 100,
                padding: 5,
                borderRadius: 10,
                marginBottom: 8,
                marginRight: 5,
                flexDirection: 'row',
                justifyContent: 'space-evenly',
              }}>
              <PlayIcon width={13} />
              <Text style={{color: '#333'}}>Lesson 1</Text>
            </View>
            <TouchableOpacity>
              <View style={{width: 60, alignItems: 'center'}}>
                <NotesOutlineIcon fill="#333" />
                <Text style={{color: '#333', fontSize: 12}}>Class Note</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={{width: 60, alignItems: 'center'}}>
                <ClassNoteMicrophone color="#E5E5E5" width={30} height={30} />
                <Text style={{color: '#333', fontSize: 12}}>Audio</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={{width: 60, alignItems: 'center'}}>
                <UnLike width={25} />
                <Text style={{color: '#333', fontSize: 12}}>Like(s)</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity>
              <View style={{width: 60, alignItems: 'center'}}>
                <MoreOptionsIcon width={36} />
                <Text style={{color: '#333', fontSize: 12}}>More</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View
            style={{
              width: 80,
              alignItems: 'center',
              flexDirection: 'row',
              marginLeft: 15,
            }}>
            <Eye width={23} />
            <Text style={{color: '#333', fontSize: 15, marginLeft: 10}}>
              {/* {data?.views}  */}
              View(s)
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <TouchableOpacity>
              <Text
                style={{
                  color: '#333',
                  fontSize: 15,
                  marginLeft: 10,
                  textDecorationLine: 'underline',
                }}>
                Show Transcript
              </Text>
            </TouchableOpacity>
            <DropdownComponent
              inputValue={'Related Lessons'}
              // data={enrolledCourses() && enrolledCourses()}
              colored={true}
              widthLen={160}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LessonVideo;

const VideoPlayer = () => {
  return (
    <View style={{width: 300, height: 300}}>
      {/* <Text>Video</Text> */}
      <VideoPlay
        control={true}
        source={{uri: 'https://www.bigbuckbunny.org/'}} // Can be a URL or a local file.
        // ref={ref => {
        //   this.player = ref;
        // }}
        // style={{position: 'absolute', top: 0, left: 0, bottom: 0, right: 0}}
        style={{width: '100%', height: '100%'}}
      />
    </View>
  );
};
