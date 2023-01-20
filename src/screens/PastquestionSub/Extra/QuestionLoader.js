import {useCallback, useState} from 'react';
import {
  View,
  Text,
  Dimensions,
  ScrollView,
  Image,
  useWindowDimensions,
  TouchableOpacity,
} from 'react-native';
import * as Progress from 'react-native-progress';
import HTML from 'react-native-render-html';
import {useDispatch, useSelector} from 'react-redux';
import {decodeEntities, SentenceCase} from '../../../utils/helper';
import {styles} from '../styles';
import ArrowLeftSquare from '../../../assets/img/ArrowLeftSquare.svg';
import ClassNoteMicrophone from '../../../assets/img/microphoneBlack.svg';
import SendIcon from '../../../assets/img/submit.svg';
import FlagIcon from '../../../assets/img/flag.svg';
import ArrowRightSquare from '../../../assets/img/arrowRightSquare.svg';
import CountDown from 'react-native-countdown-component';
import Share from 'react-native-share';
import AwesomeAlert from 'react-native-awesome-alerts';
import {InputChange} from '../../../redux/action/studentDashBoard';
import {retrieval, storage} from '../../../utils/dataPersist';
import Tts from 'react-native-tts';

const QuestionLoader = () => {
  const {
    pastQuestionLoading,
    pastQuestionData,
    pastQuestionError,
    showAlert1,
    showCancelButton,
    showConfirmButton,
    alertTitle,
    alertMessage,
    cancelText,
    confirmText,
  } = useSelector(state => state.studentDashboard);
  const dispatch = useDispatch();
  const numberOfQuestion = pastQuestionData?.questions?.length;
  const subject = pastQuestionData?.subject_details?.subject;
  const year = pastQuestionData?.subject_details?.exam_year;
  const duration = pastQuestionData?.subject_details?.duration * 60;
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [speaking, setSpeaking] = useState(false);
  const handleChangeCurrentQuestion = serial => {
    serial === -1 && currentQuestion === 0
      ? setCurrentQuestion(0)
      : setCurrentQuestion(currentQuestion + serial);
    serial === 1 && currentQuestion === numberOfQuestion - 1
      ? setCurrentQuestion(numberOfQuestion - 1)
      : setCurrentQuestion(currentQuestion + serial);
  };

  const progressCal = (currentQuestion + 1) / numberOfQuestion;
  const noOfCount = '20';
  const funcOption = index => {
    let symbol = 'A. ';
    if (index === 0) {
      symbol = 'A.  ';
    } else if (index === 1) {
      symbol = 'B.  ';
    } else if (index === 2) {
      symbol = 'C.  ';
    } else if (index === 3) {
      symbol = 'D.  ';
    } else if (index === 4) {
      symbol = 'E.  ';
    }

    return symbol;
  };
  const handleShare = async () => {
    const date = new Date();
    let share = true;

    const currentDay = date.getDate().toString();
    const currentMonth = date.getMonth().toString();
    const currentYear = date.getFullYear().toString();
    const currentCount = 1;

    const savedDay = await retrieval('savedDay');
    const savedMonth = await retrieval('savedMonth');
    const savedYear = await retrieval('savedYear');
    let count = await retrieval('count');
    // await storage('count', '1')
    if (savedDay && savedMonth && savedYear && count) {
      if (
        savedDay === currentDay &&
        savedMonth === currentMonth &&
        savedYear === currentYear &&
        count === noOfCount
      ) {
        share = false;
        dispatch(InputChange('alertTitle', 'Oops!'));
        dispatch(
          InputChange(
            'alertMessage',
            "You've exhausted your daily limit of sharing. Thanks!",
          ),
        );
        dispatch(InputChange('showConfirmButton', false));
        dispatch(InputChange('cancelText', 'Ok'));
        dispatch(InputChange('showCancelButton', true));
        dispatch(InputChange('showAlert1', true));
      } else {
        if (savedDay !== currentDay && savedMonth !== currentMonth) {
          count = 1;
        } else {
          count = +count + 1;
        }

        await storage('count', count.toString());
        await storage('savedDay', currentDay);
        await storage('savedMonth', currentMonth);
        await storage('savedYear', currentYear);
      }
    } else {
      await storage('savedDay', currentDay);
      await storage('savedMonth', currentMonth);
      await storage('savedYear', currentYear);
      await storage('count', currentCount.toString());
    }

    if (share) {
      let options = '';
      for (
        let index = 0;
        index < pastQuestionData.questions[currentQuestion].options.length;
        ++index
      ) {
        if (pastQuestionData.questions[currentQuestion].options[index] !== '') {
          options +=
            funcOption(index) +
            pastQuestionData.questions[currentQuestion].options[index] +
            '\n';
        }
      }

      if (
        savedDay === currentDay &&
        savedMonth === currentMonth &&
        savedYear === currentYear &&
        count > '0'
      ) {
        share = false;
        dispatch(InputChange('alertTitle', 'Reminder!'));
        dispatch(
          InputChange(
            'alertMessage',
            `You have ${
              +noOfCount - count
            } number(s) of Ask a friend remaining for today. Thanks!`,
          ),
        );
        dispatch(InputChange('showConfirmButton', false));
        dispatch(InputChange('cancelText', 'Ok'));
        dispatch(InputChange('showCancelButton', true));
        dispatch(InputChange('showAlert1', true));
      }

      const shareOptions = {
        message:
          'Question: ' +
          decodeEntities(pastQuestionData.questions[currentQuestion].question) +
          '\n\n' +
          options +
          '\nDo you know the answer?\nDownload at - \nhttps://play.google.com/store/apps/details?id=com.afrilearn',
        title: 'Afrilearn',
        subject: 'Afrilearn',
      };

      try {
        await Share.open(shareOptions);
      } catch (error) {
        // console.log(error)
      }
    }
  };

  const handleTextToSpeech = useCallback(async () => {
    let options = '';
    for (
      let index = 0;
      index < pastQuestionData.questions[currentQuestion].options.length;
      ++index
    ) {
      if (pastQuestionData.questions[currentQuestion].options[index] !== '') {
        options +=
          funcOption(index) +
          pastQuestionData.questions[currentQuestion].options[index];
      }
    }
    Tts.setDucking(true);

    Tts.getInitStatus().then(() => {
      if (speaking) {
        setSpeaking(prev => !prev);

        Tts.stop();
      } else {
        setSpeaking(true);
        Tts.speak(
          decodeEntities(pastQuestionData.questions[currentQuestion].question) +
            options,
        );
      }
    });

    Tts.addEventListener('tts-finish', event => {
      setSpeaking(false);
    });
  });
  const hideAlert = () => {
    dispatch(InputChange('showAlert1', false));
    // props.clearErrors();
  };

  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          marginTop: 20,
        }}>
        <Text style={{fontSize: 23, fontWeight: '500', color: '#333'}}>
          {subject} -
        </Text>
        <Text
          style={{
            fontSize: 23,
            fontWeight: '500',
            marginHorizontal: 5,
            color: '#333',
          }}>
          {year}
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: 20,
          marginHorizontal: 30,
          alignItems: 'center',
        }}>
        <Text style={{fontSize: 15, fontWeight: '500', color: '#333'}}>
          Question {currentQuestion + 1} of {numberOfQuestion}
        </Text>
        <Text
          style={{
            fontSize: 15,
            fontWeight: '500',
            // marginHorizontal: 5,
            color: '#333',
          }}>
          <CountDown
            until={duration}
            size={18}
            digitStyle={{backgroundColor: '#FFF'}}
            digitTxtStyle={{color: '#00D9B6'}}
            timeLabelStyle={{color: '#333', fontSize: 14}}
            timeToShow={['M', 'S']}
            timeLabels={{m: 'Min', s: 'Sec'}}
          />
        </Text>
      </View>
      <View style={{marginVertical: 20, alignItems: 'center'}}>
        <Progress.Bar
          progress={progressCal}
          width={useWindowDimensions().width - 50}
          color={'#00D9B6'}
        />
      </View>
      <ScrollView>
        <View>
          <QuestionList
            questions={pastQuestionData.questions}
            selectedQuestion={currentQuestion}
          />
        </View>
        <View style={{padding: 20}}>
          <OptionList
            questions={pastQuestionData.questions}
            selectedQuestion={currentQuestion}
            handleChangeCurrentQuestion={handleChangeCurrentQuestion}
          />
        </View>

        <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
          <View>
            {currentQuestion !== 0 && (
              <TouchableOpacity
                activeOpacity={0.5}
                onPress={() => handleChangeCurrentQuestion(-1)}>
                <ArrowLeftSquare width={30} height={30} />
              </TouchableOpacity>
            )}
          </View>
          <View
            style={{
              width: '65%',
              flexDirection: 'row',
              justifyContent: 'space-evenly',
            }}>
            <TouchableOpacity onPress={() => handleTextToSpeech()}>
              <View style={{alignItems: 'center'}}>
                <ClassNoteMicrophone
                  color={speaking ? 'tomato' : 'grey'}
                  width={25}
                  height={30}
                />
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              activeOpacity={0.5}
              // onPress={() => handleClosure()}
              style={styles.submitBtn}>
              <Text style={styles.submitBtnText}>Submit</Text>
              <SendIcon />
            </TouchableOpacity>

            <TouchableOpacity
              activeOpacity={0.5}
              // onPress={() => handleFlagQuestion()}
            >
              <FlagIcon width={20} height={20} />
            </TouchableOpacity>
          </View>
          <View>
            {currentQuestion !== numberOfQuestion && (
              <TouchableOpacity
                activeOpacity={0.5}
                onPress={() => handleChangeCurrentQuestion(1)}>
                <ArrowRightSquare width={30} height={30} />
              </TouchableOpacity>
            )}
          </View>
        </View>
        <View style={{marginTop: 20}}>
          <TouchableOpacity activeOpacity={0.5} onPress={() => handleShare()}>
            <Text
              style={{textAlign: 'center', fontSize: 18, fontWeight: '500'}}>
              Ask A Friend
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <AwesomeAlert
        show={showAlert1 ? true : false}
        useNativeDriver={true}
        showProgress={false}
        title={alertTitle}
        message={alertMessage}
        closeOnTouchOutside={false}
        closeOnHardwareBackPress={false}
        showCancelButton={showCancelButton}
        showConfirmButton={showConfirmButton}
        cancelText={cancelText}
        confirmText={confirmText}
        confirmButtonColor="#84bb29"
        cancelButtonColor="#e36b6b"
        progressColor="#84bb29"
        onCancelPressed={() => {
          hideAlert();
        }}
        onConfirmPressed={() => {
          handleConfirmation();
        }}
        titleStyle={styles.alertTitle}
        messageStyle={styles.alertMessage}
        cancelButtonTextStyle={styles.alertTitle}
        confirmButtonTextStyle={styles.alertTitle}
      />
    </View>
  );
};

export default QuestionLoader;

const QuestionList = ({questions, selectedQuestion}) => {
  const contentWidth = useWindowDimensions().width;

  return questions && questions.length ? (
    <View
      style={{
        minHeight: 55,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 25,
        // backgroundColor: 'red',
      }}>
      {questions[selectedQuestion]?.question_image &&
      questions[selectedQuestion]?.question_position === 'above' ? (
        <Image
          source={{
            uri: 'https:' + questions[selectedQuestion]?.question_image,
          }}
          style={{
            width: 120,
            height: 120,
            resizeMode: 'cover',
            borderRadius: 10,
          }}
        />
      ) : null}
      <HTML
        source={{html: questions[selectedQuestion]?.question}}
        contentWidth={contentWidth}
        baseFontStyle={{
          color: '#777',
          fontFamily: 'Nunito-Regular',
          fontSize: 18,
        }}
        allowedStyles={[]}
      />
      {questions[selectedQuestion]?.question_image &&
      questions[selectedQuestion]?.question_position !== 'above' ? (
        <Image
          source={{
            uri: 'https:' + questions[selectedQuestion]?.question_image,
          }}
          style={{
            width: 120,
            height: 120,
            resizeMode: 'cover',
            borderRadius: 10,
          }}
        />
      ) : null}
    </View>
  ) : (
    <Text>0ops!, No Question found</Text>
  );
};

const OptionList = ({
  questions,
  selectedQuestion,
  handleChangeCurrentQuestion,
}) => {
  const contentWidth = useWindowDimensions().width;
  if (questions.length) {
    return questions[selectedQuestion].options.map((item, index) => {
      let symbol = 'A. ';
      index === 0
        ? (symbol = 'A. ')
        : index === 1
        ? (symbol = 'B. ')
        : index === 2
        ? (symbol = 'C. ')
        : index === 3
        ? (symbol = 'D. ')
        : index === 4
        ? (symbol = 'E. ')
        : '';

      if (item !== '') {
        let myOPtion = SentenceCase(item);
        return (
          <TouchableOpacity
            activeOpacity={0.6}
            key={index}
            onPress={() => {
              handleChangeCurrentQuestion(1);
              // handleNextQuestion(index);
            }}>
            <View
              style={
                // answers[selectedQuestion] === index
                //   ? styles.selectedOptionBox
                //   :
                styles.optionBox
              }
              key={index}>
              <HTML
                source={{html: symbol + ' ' + myOPtion}}
                contentWidth={contentWidth}
                baseFontStyle={
                  // answers[selectedQuestion] === index
                  //   ? styles.selectedOptionText
                  //   :
                  styles.optionText
                }
                allowedStyles={[]}
              />
            </View>
          </TouchableOpacity>
        );
      }
    });
  }
};
