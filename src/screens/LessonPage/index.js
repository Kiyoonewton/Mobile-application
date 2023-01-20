import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  Image,
  FlatList,
  ScrollView,
  Share,
} from 'react-native';

import styled from 'styled-components/native';
import LogoSvg from '../../assets/img/logo.svg';
import {useDispatch, useSelector} from 'react-redux';
import {
  GetSubjectAndRelatedLessons,
  InputChange,
} from '../../redux/action/studentDashBoard';
import React, {useCallback, useEffect, useState} from 'react';
import ArrowSvgSvg from '../../assets/img/final-arrow-white.svg';
import PlayIcon from '../../assets/img/Vector.svg';
import Activity from '../../assets/img/Activity.svg';
import {useNavigation} from '@react-navigation/native';
import AccordionListItem from '../../components/Accordion';
import ClassNote from '../ClassNote';

const LessonPage = props => {
  const [isOnline, setOnlineStatus] = useState(true);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const navigation = useNavigation();
  const {
    subjectAndRelatedLessonsLoading,
    subjectAndRelatedLessonsData,
    subjectAndRelatedLessonsError,
  } = useSelector(state => state.studentDashboard);

  const dispatch = useDispatch();
  useEffect(() => {
    // NetworkUtils().then(isConnected => {
    //   setOnlineStatus(isConnected);
    //   if (isConnected) {
    fetchData();
    // }
    // });
  }, [props.route.params.subjectId]);

  const fetchData = useCallback(async () => {
    // setIsRefreshing(true);
    dispatch(
      GetSubjectAndRelatedLessons(
        props.route.params.courseId,
        props.route.params.subjectId,
      ),
    );
    // setIsRefreshing(false);

    // NetworkUtils().then(isConnected => {
    //   setOnlineStatus(isConnected);
    // });
  }, []);
  // console.log(subjectAndRelatedLessonsData);

  const [termSelection, setTermSelection] = useState(0);
  const [classNoteSwitch, setClassNoteSwitch] = useState(0);

  const ImageStyle = styled.Image`
    width: 100%;
    height: 280px;
    object-position: top;
  `;

  const terms = [];
  const termIds = [
    {id: '5fc8d1b20fae0a06bc22db5c', name: 'First Term'},
    {id: '600047f67cabf80f88f61735', name: 'Second Term'},
    {id: '600048197cabf80f88f61736', name: 'Third Term'},
  ];

  termIds.forEach(item => {
    const lessons =
      subjectAndRelatedLessonsData?.subject?.relatedLessons &&
      subjectAndRelatedLessonsData?.subject?.relatedLessons?.filter(
        les => les.termId === item.id,
      );
    terms.push({id: item.id, name: item.name, lessons});
  });

  const onShare = async () => {
    try {
      const result = await Share.share({
        message:
          'Transform your life through world-class education. Download the Afrilearn App for free now at https://play.google.com/store/apps/details?id=com.afrilearn or visit https://myafrilearn.com/',
        url: 'https://play.google.com/store/apps/details?id=com.afrilearn',
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };

  const [nextData, setNextData] = useState(6);

  useEffect(() => {
    // if (type === 'classNote') {
    if (nextData !== '') {
      const classNextData = terms[termSelection]?.lessons?.filter(
        (data, index) => {
          return index === nextData;
        },
      );
      // console.log('classNextData', classNextData);
      // navigation.navigate('ClassNote');
      dispatch(InputChange('classNoteData', classNextData));
    }
  }, [nextData]);

  const enterSubjectPage = (type, classData) => {
    // const data = {courseId, subjectId};
    // data.classId = props.inClass && props.clazz._id;
    if (type === 'classNote') {
      navigation.navigate('ClassNote');
      dispatch(InputChange('classNoteData', classData));
    }
    if (type === 'lessonVideo') {
      navigation.navigate('LessonVideo');
      dispatch(InputChange('classNoteData', classData));
    }
  };
  return (
    <SafeAreaView>
      <View
        style={{
          flex: 1,
          width: '100%',
          backgroundColor: 'red',
        }}>
        <ImageStyle
          source={{
            uri: subjectAndRelatedLessonsData?.subject?.mainSubjectId?.imageUrl,
          }}
        />
      </View>
      <View>
        <View
          style={{
            marginTop: 30,
            flexDirection: 'row',
            height: 25,
            width: '92%',
            marginLeft: '3%',
            marginRight: '5%',
            justifyContent: 'space-between',
          }}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <View>
              <ArrowSvgSvg width={23} height={22} />
            </View>
          </TouchableOpacity>

          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity
              style={{
                marginRight: 15,
              }}>
              <View>
                <Text style={{color: '#fff', fontSize: 15}}>Add Class</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={onShare}>
              <View>
                <Text style={{color: '#fff', fontSize: 15}}>Share App</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{alignItems: 'flex-end'}}>
          <TouchableOpacity
            style={{
              marginRight: 15,
            }}>
            {classNoteSwitch === 0 ? (
              <View style={{width: 150, marginTop: 40}}>
                <Text
                  style={{color: '#fff', fontSize: 19, textAlign: 'center'}}>
                  Class Notes
                </Text>
                <View style={{backgroundColor: '#fff', height: 2}}></View>
              </View>
            ) : (
              <View style={{width: 150, marginTop: 40}}>
                <Text
                  style={{color: '#fff', fontSize: 19, textAlign: 'center'}}
                  onPress={() => {
                    setClassNoteSwitch(0);
                  }}>
                  Class Notes
                </Text>
              </View>
            )}
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              marginRight: 15,
            }}>
            {classNoteSwitch === 1 ? (
              <View style={{width: 150, marginTop: 20}}>
                <Text
                  style={{color: '#fff', fontSize: 19, textAlign: 'center'}}>
                  Video Lessons
                </Text>
                <View style={{backgroundColor: '#fff', height: 2}}></View>
              </View>
            ) : (
              <View style={{width: 150, marginTop: 20}}>
                <Text
                  style={{color: '#fff', fontSize: 19, textAlign: 'center'}}
                  onPress={() => {
                    setClassNoteSwitch(1);
                  }}>
                  Video Lessons
                </Text>
              </View>
            )}
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            width: '100%',
          }}>
          {/* <Tooltip/> */}
        </View>
      </View>

      <View
        style={{
          justifyContent: 'space-evenly',
          flexDirection: 'row',
          marginTop: 130,
        }}>
        {termSelection === 0 ? (
          <View>
            <Text style={{fontSize: 16, fontWeight: '500', color: '#00D9B6'}}>
              First Term
            </Text>
            <View style={{backgroundColor: '#00D9B6', height: 2}}></View>
          </View>
        ) : (
          <Text
            style={{fontSize: 16, fontWeight: '500', color: '#333'}}
            onPress={() => {
              setTermSelection(0);
            }}>
            First Term
          </Text>
        )}
        {termSelection === 1 ? (
          <View>
            <Text style={{fontSize: 16, fontWeight: '500', color: '#00D9B6'}}>
              Second Term
            </Text>
            <View style={{backgroundColor: '#00D9B6', height: 2}}></View>
          </View>
        ) : (
          <Text
            style={{fontSize: 16, fontWeight: '500', color: '#333'}}
            onPress={() => {
              setTermSelection(1);
            }}>
            Second Term
          </Text>
        )}
        {termSelection === 2 ? (
          <View>
            <Text style={{fontSize: 16, fontWeight: '500', color: '#00D9B6'}}>
              Third Term
            </Text>
            <View style={{backgroundColor: '#00D9B6', height: 2}}></View>
          </View>
        ) : (
          <Text
            style={{fontSize: 16, fontWeight: '500', color: '#333'}}
            onPress={() => {
              setTermSelection(2);
            }}>
            Third Term
          </Text>
        )}
      </View>
      <SafeAreaView
        style={{height: '48%', marginTop: 10, marginHorizontal: 10}}>
        {terms &&
        terms?.length !== 0 &&
        terms[termSelection]?.lessons?.length !== 0 ? (
          <FlatList
            data={terms[termSelection]?.lessons}
            keyExtractor={item => item._id}
            renderItem={({item, index}) => (
              <View>
                {classNoteSwitch === 0 && (
                  <AccordionListItem title={item.title} key={item._id}>
                    <View style={{alignItems: 'flex-start'}}>
                      <View
                        style={{
                          flexDirection: 'row',
                          flexWrap: 'wrap',
                          marginTop: 15,
                        }}>
                        <TouchableOpacity
                          key={item._id}
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
                          <Text
                            style={{color: '#333'}}
                            onPress={() => {
                              // console.log(item);
                              enterSubjectPage('classNote', [
                                index,
                                terms[termSelection]?.lessons?.length,
                                item,
                              ]);
                            }}>
                            Class Note
                          </Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                          key={item._id + 'note'}
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
                          <Activity width={18} />
                          <Text style={{color: '#333'}}>Quiz</Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                  </AccordionListItem>
                )}
                {classNoteSwitch === 1 && (
                  <AccordionListItem title={item.title} key={item._id}>
                    <View style={{alignItems: 'center'}}>
                      <ScrollView
                        style={
                          {
                            // width: '100%',
                            // justifyContent: 'center',
                          }
                        }>
                        <View
                          style={{
                            flexDirection: 'row',
                            flexWrap: 'wrap',
                            marginTop: 15,
                            margin: 'auto',
                            // backgroundColor: 'red',
                            width: 315,
                            // a: 'center',
                          }}>
                          {item?.videoUrls.map((videoUrl, vidIndex) => {
                            return (
                              <TouchableOpacity
                                key={vidIndex}
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
                                <Text
                                  style={{color: '#333'}}
                                  onPress={() => {
                                    // console.log(item);
                                    enterSubjectPage('lessonVideo', [
                                      index,
                                      item?.videoUrls.length,
                                      item,
                                    ]);
                                  }}>
                                  Lesson {vidIndex + 1}
                                </Text>
                              </TouchableOpacity>
                            );
                          })}
                          <TouchableOpacity
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
                            <Activity width={18} />
                            <Text style={{color: '#333'}}>Quiz</Text>
                          </TouchableOpacity>
                        </View>
                      </ScrollView>
                    </View>
                  </AccordionListItem>
                )}
              </View>
            )}
          />
        ) : (
          <View style={{alignItems: 'center', marginTop: 15}}>
            <Text style={{fontSize: 18}}>No Topic(s) Available</Text>
          </View>
        )}
      </SafeAreaView>
    </SafeAreaView>
  );
};

export default LessonPage;
