import {
  SafeAreaView,
  Text,
  Image,
  View,
  TouchableOpacity,
  FlatList,
  ImageBackground,
  Button,
} from 'react-native';
import {styles} from './styles';
import DropdownComponent from '../../components/dropDown';
import BuyCoinIcon from '../../assets/img/buyCoin.svg';
import Swords from '../../assets/img/sword.svg';
import Envelope from '../../assets/img/homework.png';
import {useDispatch, useSelector} from 'react-redux';
import {useEffect, useRef} from 'react';
import {
  InputChange,
  FetchGetWebInitiate,
  FetchGetChallengeInitiate,
  FetchGetClassMemberInitiate,
  FetchGetUnfinishedvideosInitiate,
  FetchTopTenVideosInitiate,
  FetchFavouritevideosInitiate,
  FetchRecentActivityInitiate,
  fetchPastQuestionSubjectsInitiate,
} from '../../redux/action/studentDashBoard';
import React from 'react';
import {
  CapitalizeFirstLetter,
  formatList,
  SubHeading,
  VirtualizedView,
} from '../../utils/helper';
import LinearGradient from 'react-native-linear-gradient';
import CountDown from 'react-native-countdown-component';
import PerformanceIcon from '../../assets/img/Activity.svg';
import Picture1 from '../../assets/img/tutor1.png';
import Picture2 from '../../assets/img/tutor2.png';
import Picture3 from '../../assets/img/tutor3.png';
import Classnote from '../../assets/img/classnote.png';
import moment from 'moment';
import {useNavigation} from '@react-navigation/core';

export default Home = ({navigation}) => {
  const {user} = useSelector(state => state.auth);

  const coin = user?.user?.afriCoins;

  const {
    currentEnrolledCourseId,
    currentCourseId,
    subjectLoading,
    subjectData,
    subjectError,
    challengeLoading,
    challengeData,
    challengeError,
    classMembershipLoading,
    classMembershipData,
    classMembershipError,
    unfinishedVideosLoading,
    unfinishedVideosData,
    unfinishedVideosError,
    favouriteVideosLoading,
    favouriteVideosData,
    favouriteVideosError,
    topTenVideosLoading,
    topTenVideosData,
    topTenVideosError,
    recentActivityLoading,
    recentActivityData,
    recentActivityError,
    pastQuestionSubLoading,
    pastQuestionSubData,
    pastQuestionSubError,
  } = useSelector(state => state.studentDashboard);
  const subjectCourses = subjectData?.enrolledCourse?.courseId;
  const name = user?.user?.fullName;
  const dispatch = useDispatch();
  const token = user?.token;
  useEffect(() => {
    dispatch(
      InputChange(
        'currentEnrolledCourseId',
        enrolledCourses() && enrolledCourses()[0]?.value,
      ),
    ),
      dispatch(
        InputChange(
          'currentCourseId',
          enrolledCourses() && enrolledCourses()[0]?.courseId,
        ),
      );
  }, [InputChange]);

  const enrolledCourses = () => {
    return user?.user?.enrolledCourses.map(items => {
      return {
        label:
          items.courseId.name === 'Afrilearn KidsCode'
            ? 'KidsCode'
            : items.courseId.name,
        value: items.id,
        courseId: items.courseId.id,
      };
    });
  };
  useEffect(() => {
    dispatch(FetchGetWebInitiate(currentEnrolledCourseId, token));
    dispatch(FetchGetClassMemberInitiate(currentEnrolledCourseId, token));
    dispatch(FetchGetChallengeInitiate(currentCourseId));
    dispatch(FetchGetUnfinishedvideosInitiate(currentEnrolledCourseId, token));
    dispatch(FetchFavouritevideosInitiate(currentEnrolledCourseId, token));
    dispatch(FetchTopTenVideosInitiate(currentEnrolledCourseId, token));
    dispatch(FetchRecentActivityInitiate(currentEnrolledCourseId, token));
  }, [currentEnrolledCourseId]);
  // console.log(recentActivityData);
  // console.log(topTenVideosData);
  // console.log(favouriteVideosData);

  const recomm = [
    {
      title: 'Animal Nutrition (Malnutrition)',
      recTitle:
        'symptoms, Effects, Transmission and Control of Selected Diseases',
      imgData: Picture1,
    },
    {
      title: 'Animal Nutrition (Malnutrition)',
      recTitle: 'Fish Farming',
      imgData: Picture2,
    },
    {
      title: 'Animal Extension',
      recTitle: 'Animal Improvement',
      imgData: Picture3,
    },
  ];

  const enterSubjectPage = (courseId, subjectId) => {
    const data = {courseId, subjectId};
    // data.classId = props.inClass && props.clazz._id;
    navigation.navigate('LessonPage', data);
  };

  return (
    <View style={styles.mainContainer}>
      <SafeAreaView />
      {/* Nav */}
      <View style={styles.navStyle}>
        <Text style={{color: '#333', marginRight: 10}}>My Feeds</Text>
        <Text style={{color: '#333'}}>Share App</Text>
      </View>
      <VirtualizedView>
        <View
          style={{
            // width: '98%',
            padding: 'auto',
          }}>
          <View style={styles.welcome}>
            {/* Header */}
            <View>
              <Text style={{color: '#333', fontSize: 24, fontWeight: '700'}}>
                Welcome {name && name?.split(' ')[0]}!
              </Text>
              <View style={styles.class}>
                <DropdownComponent
                  inputValue={enrolledCourses() && enrolledCourses()[0]?.label}
                  data={enrolledCourses() && enrolledCourses()}
                  colored={true}
                  widthLen={140}
                />
                <View style={styles.coins}>
                  <BuyCoinIcon />
                  {coin && <Text style={{color: '#333'}}> {coin} coins</Text>}
                </View>
              </View>
            </View>

            {/* My Subjects */}
            <SubjectList
              data={subjectCourses?.relatedSubjects}
              enterSubjectPage={enterSubjectPage}
            />

            {/* My PastQuestion */}
            <PastQuestionList data={subjectCourses?.relatedPastQuestions} />

            {/* Challenge */}
            <Challenge
              data={
                Object.keys(challengeData).length !== 0 &&
                challengeData?.challenges[0]
              }
              images={coin}
            />

            {/* Homework */}
            <Homework />

            {/* Performance */}
            <Performance />

            {/* Resume Watching */}
            {Object.keys(unfinishedVideosData).length !== 0 && (
              <DashboardVideo
                subHead="Resume Watching"
                imgData={Picture1}
                title={
                  unfinishedVideosData?.unFinishedVideos[0]?.lessonId?.title
                    .length > 40
                    ? unfinishedVideosData?.unFinishedVideos[0]?.lessonId?.title?.substr(
                        0,
                        37,
                      ) + '...'
                    : unfinishedVideosData?.unFinishedVideos[0]?.lessonId?.title
                }
                subject={
                  unfinishedVideosData?.unFinishedVideos[0]?.subjectId
                    ?.mainSubjectId?.name
                }
              />
            )}
            {/* My favourite */}
            {Object.keys(favouriteVideosData).length !== 0 && (
              <DashboardVideo
                subHead="My Fav"
                imgData={Picture2}
                title={
                  Object.keys(favouriteVideosData).length !== 0 &&
                  favouriteVideosData?.favouriteVideos[0]?.lessonId?.title
                    .length > 40
                    ? favouriteVideosData?.favouriteVideos[0]?.lessonId?.title?.substr(
                        0,
                        37,
                      ) + '...'
                    : favouriteVideosData?.favouriteVideos[0]?.lessonId?.title
                }
                subject={
                  favouriteVideosData?.favouriteVideos[0]?.subjectId
                    ?.mainSubjectId?.name
                }
              />
            )}
            {/* Top-Ten */}
            {Object.keys(topTenVideosData).length !== 0 && (
              <DashboardVideo
                subHead="Top Ten"
                imgData={Picture3}
                title={
                  Object.keys(topTenVideosData).length !== 0 &&
                  topTenVideosData?.lessons[0]?.title.length > 40
                    ? topTenVideosData?.lessons[0]?.title?.substr(0, 37) + '...'
                    : topTenVideosData?.lessons[0]?.title
                }
                subject={
                  topTenVideosData?.lessons[0]?.subjectId?.mainSubjectId?.name
                }
              />
            )}

            {/* ClassMemberShip */}
            <Classroom classMembership={classMembershipData} />

            {/* Recommendation */}
            <Recommendation data={recomm} />

            {/* RecentActivity */}
            {Object.keys(recentActivityData).length !== 0 && (
              <RecentActivity data={recentActivityData.recentActivities} />
            )}

            <Text
              style={{
                color: '#333',
                fontSize: 24,
                fontWeight: '700',
                marginTop: 10,
              }}></Text>
          </View>
        </View>
      </VirtualizedView>
    </View>
  );
};

const SubjectList = ({data, enterSubjectPage}) => {
  return (
    <View
      style={{
        marginTop: 15,
      }}>
      <Text style={{color: '#333', fontSize: 24, fontWeight: '700'}}>
        My Subject
      </Text>

      <View
        style={{
          marginTop: 15,
        }}>
        <FlatList
          data={formatList(data, 'enrolledCourses')}
          listKey="enrolled_courses_flatlist"
          keyExtractor={(item, index) => item?._id + index.toString()}
          renderItem={({item, index}) => {
            return (
              <View>
                <FlatList
                  data={item}
                  listKey="enrolled_courses_flatlist"
                  keyExtractor={(item, index) => item?._id + index.toString()}
                  horizontal
                  renderItem={({item, index}) => {
                    // console.log(item);
                    return (
                      item && (
                        <TouchableOpacity
                          style={{
                            padding: 4,
                          }}
                          onPress={() =>
                            enterSubjectPage(item.courseId, item._id)
                          }>
                          <Image
                            style={{
                              width: 130,
                              height: 130,
                              borderRadius: 10,
                            }}
                            source={{
                              uri: item?.mainSubjectId?.imageUrl,
                            }}
                            resizeMode="cover"
                          />
                        </TouchableOpacity>
                      )
                    );
                  }}
                />
              </View>
            );
          }}
        />
      </View>
      <View></View>
    </View>
  );
};
const PastQuestionList = ({data}) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  return (
    <View
      style={{
        marginTop: 15,
      }}>
      <Text style={{color: '#333', fontSize: 24, fontWeight: '700'}}>
        Past Questions
      </Text>

      <View
        style={{
          marginTop: 15,
        }}>
        <FlatList
          data={formatList(data, 'pastQuestion')}
          listKey="enrolled_courses_flatlist"
          keyExtractor={(item, index) => item?._id + index.toString()}
          horizontal
          renderItem={({item, index}) => {
            // console.log(index);
            return (
              item && (
                <TouchableOpacity
                  style={{
                    paddingHorizontal: 4,
                  }}
                  onPress={() => {
                    dispatch(
                      fetchPastQuestionSubjectsInitiate(item?.categoryId),
                    ),
                      navigation.navigate('PastquestionSub');
                  }}>
                  <View
                    style={{
                      width: 300,
                      height: 100,
                      borderRadius: 20,
                      backgroundColor: index % 2 !== 0 ? '#118330' : '#340067',
                      display: 'flex',
                      flexDirection: 'row',
                      // shadowOffset:
                      // boxShadow:
                      //   'inset 10.7637px 10.7637px 10.7637px rgba(0, 0, 0, 0.41), inset -10.7637px -10.7637px 10.7637px #56119',
                    }}>
                    <View
                      style={{
                        width: '30%',
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}>
                      <Image
                        style={{
                          width: 70,
                          height: 70,
                        }}
                        source={{
                          uri: item?.imageUrl,
                        }}
                      />
                    </View>
                    <View
                      style={{
                        width: '70%',
                        paddingRight: 15,
                        justifyContent: 'center',
                      }}>
                      <Text
                        style={{
                          color: '#fff',
                          fontSize: 18,
                          fontWeight: '500',
                        }}>
                        {item.name}
                      </Text>
                      <Text
                        style={{
                          color: '#fff',
                          fontSize: 14,
                        }}>
                        {item.description}
                      </Text>
                    </View>
                  </View>
                </TouchableOpacity>
              )
            );
          }}
        />
        {/* </View>
            );
          }}
        /> */}
      </View>
      <View></View>
    </View>
  );
};
const Challenge = ({data, images}) => {
  const image = {uri: data?.challengeImageUrl};
  // console.log(data.challengeImageUrl);

  let endDate;

  const dataDate = new Date(data?.endDate) - new Date();

  dataDate > 0 ? (endDate = dataDate) : (endDate = 0);
  return (
    <View sytle={{marginBottom: 100}}>
      <Text
        style={{color: '#333', fontSize: 24, fontWeight: '700', marginTop: 10}}>
        Enter challenge
      </Text>
      <ImageBackground
        source={{
          uri: 'https://afrilearn-media.s3.eu-west-3.amazonaws.com/challenge/Backgroundss3.png',
        }}
        imageStyle={{
          borderRadius: 10,
        }}
        style={{
          width: '100%',
          height: 200,
          marginTop: 10,
        }}>
        <LinearGradient
          colors={[
            'rgba(228, 224, 224, 0)',
            'rgba(0, 0, 0, 0.5)',
            'rgba(0, 0, 0, 0.81)',
          ]}
          style={{flex: 1}}>
          <View
            style={{
              backgroundColor: '#fff',
              alignSelf: 'flex-end',
              marginEnd: 12,
              marginTop: 10,
              borderRadius: 5,
            }}>
            <Text
              style={{
                color: '#00D9B6',
                fontSize: 18,
                padding: 10,
                fontWeight: '600',
              }}>
              Win {data?.prize}
            </Text>
          </View>

          <View>
            <Text
              style={{
                color: '#fff',
                fontSize: 15,
                paddingLeft: 17,
                marginTop: 25,
              }}>
              {data?.description}
            </Text>
          </View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              paddingHorizontal: 17,
              justifyContent: 'space-between',
              alignContent: 'flex-start',
            }}>
            <View
              style={{
                alignItems: 'flex-start',
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: -20,
              }}>
              <Text
                style={{
                  color: '#fff',
                  fontSize: 24,
                  paddingRight: 8,
                  borderBottomColor: '#00D9B6',
                  borderBottomWidth: 3,
                }}>
                {data?.name}
              </Text>
              <Swords />
            </View>
            <View>
              <CountDown
                until={endDate}
                size={18}
                digitStyle={{backgroundColor: '#FFF'}}
                digitTxtStyle={{color: '#00D9B6'}}
                timeLabelStyle={{color: '#fff', fontSize: 14}}
                timeToShow={['H', 'M', 'S']}
                timeLabels={{h: 'Hour', m: 'Min', s: 'Sec'}}
              />
            </View>
          </View>

          <View>
            <View
              style={{
                alignItems: 'flex-start',
                paddingLeft: 17,
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: -22,
              }}>
              <Text
                style={{
                  color: '#fff',
                  fontSize: 15,
                  paddingRight: 8,
                }}>
                Ticket: {images}
              </Text>
              <BuyCoinIcon />
            </View>
          </View>
        </LinearGradient>
      </ImageBackground>
    </View>
  );
};

const Homework = () => {
  return (
    <View style={{marginTop: 10}}>
      <Text
        style={{color: '#333', fontSize: 24, fontWeight: '700', marginTop: 10}}>
        Get Homework Help
      </Text>
      <LinearGradient
        colors={['#33334F', '#171738']}
        style={{
          height: 200,
          borderRadius: 10,
          marginTop: 15,
          paddingHorizontal: 20,
        }}>
        <View
          style={{
            display: 'flex',
            alignContent: 'center',
            height: '100%',
            flexDirection: 'row',
          }}>
          <View
            style={{
              width: '60%',
              height: '100%',
              justifyContent: 'center',
            }}>
            <Text
              style={{
                color: '#fff',
                fontSize: 17,
                fontWeight: '500',
              }}>
              Submit your Assignment for Instant Solutions 24/7
            </Text>
            <View>
              <TouchableOpacity
                style={{
                  padding: 4,
                  borderRadius: 10,
                  backgroundColor: 'white',
                  marginTop: 20,
                }}
                // onPress={'how'}
              >
                <Text
                  style={{
                    color: '#333',
                    fontSize: 17,
                    fontWeight: '500',
                    textAlign: 'center',
                  }}>
                  GET SOLUTION NOW!
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View
            style={{width: '30%', height: '100%', justifyContent: 'center'}}>
            <Image style={{width: 150, height: 150}} source={Envelope} />
          </View>
        </View>
      </LinearGradient>
    </View>
  );
};

const Performance = () => {
  return (
    <View style={{marginTop: 10}}>
      <Text
        style={{
          color: '#333',
          fontSize: 24,
          fontWeight: '700',
          marginVertical: 10,
        }}>
        Performance Analysis
      </Text>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          height: 53,
        }}>
        <View
          style={{
            backgroundColor: '#00D9B6',
            padding: 10,
            borderRadius: 8,
          }}>
          <PerformanceIcon />
        </View>
        <TouchableOpacity
          style={{
            marginLeft: 10,
            height: '100%',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              fontSize: 15,
              textDecorationLine: 'underline',
              color: '#333',
            }}>
            Performance Analysis
          </Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity>
        <View
          style={{
            height: 60,
            backgroundColor: '#00D9B6',
            borderRadius: 7,
            marginTop: 15,
          }}>
          <Text
            style={{
              color: '#333',
              fontSize: 12,
              fontWeight: '500',
              marginLeft: 35,

              marginTop: 8,
            }}>
            Share with friends
          </Text>
          <Text
            style={{
              color: '#333',
              fontSize: 17,
              fontWeight: '500',
              marginLeft: 35,

              // marginTop: 10,
            }}>
            Invite a friend to earn 100 Africoins
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View
          style={{
            height: 60,
            backgroundColor: '#00D9B6',
            borderRadius: 7,
            marginTop: 15,
          }}>
          <Text
            style={{
              color: '#333',
              fontSize: 12,
              fontWeight: '500',
              marginLeft: 35,

              marginTop: 8,
            }}>
            Buy the future
          </Text>
          <Text
            style={{
              color: '#333',
              fontSize: 17,
              fontWeight: '500',
              marginLeft: 35,

              // marginTop: 10,
            }}>
            Subscribe to Unlock Full Access
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const DashboardVideo = ({subHead, title, subject, imgData}) => {
  return (
    <View style={{marginTop: 10}}>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <Text
          style={{
            color: '#333',
            fontSize: 24,
            fontWeight: '700',
            marginVertical: 10,
          }}>
          {subHead}
        </Text>
        <TouchableOpacity>
          <Text
            style={{
              color: '#333',
              fontSize: 14,
              marginVertical: 10,
              textDecorationLine: 'underline',
            }}>
            Show All
          </Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <View>
          <TouchableOpacity>
            <Image
              style={{
                width: 160,
                height: 100,
                resizeMode: 'cover',
                borderRadius: 7,
              }}
              source={imgData}
            />
          </TouchableOpacity>
        </View>
        <View style={{marginLeft: 5}}>
          <Text style={{color: '#00D9B6', fontSize: 16, fontWeight: '500'}}>
            {' '}
            {subject}
          </Text>
          <Text
            style={{
              color: '#333',
              fontSize: 15,
              fontWeight: '500',
              width: 200,
            }}>
            {' '}
            {title}
          </Text>
        </View>
      </View>
    </View>
  );
};

const Classroom = ({classMembership}) => {
  const item = classMembership?.classMembership;
  const navigation = useNavigation();
  return (
    <View style={{marginTop: 10}}>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <Text
          style={{
            color: '#333',
            fontSize: 24,
            fontWeight: '700',
            marginVertical: 10,
          }}>
          Classroom
        </Text>
        <TouchableOpacity>
          <Text
            style={{
              color: '#333',
              fontSize: 14,
              marginVertical: 10,
              textDecorationLine: 'underline',
            }}>
            Join A Classroom
          </Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={item}
        listKey="classMembership_flatlist"
        keyExtractor={(item, index) => item?._id + index.toString()}
        // horizontal
        renderItem={({item, index}) => {
          return (
            <View
              style={{
                height: 60,
                backgroundColor: 'rgba(144, 137, 137, 0.33)',
                borderRadius: 7,
                marginTop: 15,
                justifyContent: 'center',
              }}>
              <View style={{display: 'flex', flexDirection: 'row'}}>
                <Text
                  style={{
                    color: '#333',
                    fontSize: 17,
                    fontWeight: '500',
                    marginLeft: 35,
                    width: '65%',
                    // marginTop: 10,
                  }}>
                  {CapitalizeFirstLetter(item?.classId?.name)}
                </Text>
                <View
                  style={{
                    backgroundColor: '#00D9B6',
                    width: '23%',
                    borderRadius: 8,
                    paddingVertical: 4,
                  }}>
                  <TouchableOpacity
                    onPress={() => navigation.navigate('Classroom')}>
                    <Text
                      style={{
                        color: '#333',
                        fontSize: 14,
                        fontWeight: '500',
                        // marginLeft: 35,
                        textAlign: 'center',
                      }}>
                      {item?.status === 'approved'
                        ? 'Enter'
                        : CapitalizeFirstLetter(item?.status)}
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          );
        }}
      />
    </View>
  );
};

const Recommendation = ({data}) => {
  return (
    <View style={{marginTop: 10}}>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <SubHeading head="Recommended For You" />
      </View>
      <FlatList
        data={data}
        listKey="recommended_flatlist"
        keyExtractor={(item, index) => item?._id + index.toString()}
        // horizontal
        renderItem={({item, index}) => {
          const {title, recTitle, imgData} = item;
          return (
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                marginBottom: 10,
              }}>
              <View>
                <TouchableOpacity>
                  <Image
                    style={{
                      width: 140,
                      height: 100,
                      resizeMode: 'cover',
                      borderRadius: 7,
                    }}
                    source={imgData}
                  />
                </TouchableOpacity>
              </View>
              <View style={{marginLeft: 15}}>
                <Text
                  style={{
                    color: '#333',
                    fontSize: 13,
                    fontWeight: '400',
                    width: 200,
                  }}>
                  {' '}
                  {`Because you watched "${title}"`}
                </Text>
                <Text
                  style={{
                    color: '#00D9B6',
                    fontWeight: '500',
                    fontSize: 10,
                    fontWeight: '400',
                  }}>
                  {' '}
                  Recommended:
                </Text>
                <Text
                  style={{
                    color: '#333',
                    fontSize: 13,
                    fontWeight: '400',
                    width: 200,
                  }}>
                  {' '}
                  {recTitle}
                </Text>
              </View>
            </View>
          );
        }}
      />
    </View>
  );
};

const RecentActivity = ({data}) => {
  return (
    <View style={{marginTop: 10}}>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <SubHeading head="Recent Activity" />
      </View>
      <FlatList
        data={data}
        listKey="recent_activity_flatlist"
        keyExtractor={(item, index) => item?._id + index.toString()}
        // horizontal
        renderItem={({item, index}) => {
          const {lessonId, updatedAt} = item;
          return (
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                marginBottom: 10,
                // borderColor: '#333',
                borderBottomWidth: 1,
                borderBottomColor: '#333',
              }}>
              <View>
                <TouchableOpacity>
                  <Image
                    style={{
                      width: 140,
                      height: 100,
                      resizeMode: 'cover',
                      borderRadius: 7,
                    }}
                    source={Picture1}
                  />
                </TouchableOpacity>
              </View>
              <View
                style={{
                  marginLeft: 15,
                  width: 200,
                }}>
                <View
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <Text
                    style={{
                      color: '#00D9B6',
                      fontSize: 13,
                      fontWeight: '400',
                      // width: 200,
                    }}>
                    {' '}
                    Lesson
                  </Text>
                  <Text
                    style={{
                      color: '#333',
                      fontSize: 13,
                      fontWeight: '400',
                      // width: 200,
                    }}>
                    {moment(updatedAt).startOf('hour').fromNow()}
                  </Text>
                </View>
                <View>
                  <Text
                    style={{
                      color: '#333',
                      fontSize: 13,
                      fontWeight: '400',
                      width: 200,
                      marginVertical: 8,
                    }}>
                    {' '}
                    {lessonId.title}
                  </Text>
                </View>
                <TouchableOpacity>
                  <Button
                    // onPress={onPressLearnMore}
                    title={lessonId.subjectId.mainSubjectId.name}
                    color="#00D9B6"
                    accessibilityLabel="recent activity button"
                  />
                </TouchableOpacity>
              </View>
            </View>
          );
        }}
      />
    </View>
  );
};
