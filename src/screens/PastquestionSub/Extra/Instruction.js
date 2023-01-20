import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {View, Text, TouchableOpacity, Image, Button} from 'react-native';
import QuestionCount from '../../../assets/img/information.svg';
import TimeCount from '../../../assets/img/TimeCircle.svg';
import Bullet from '../../../assets/img/circle.svg';

import ArrowSvgSvg from '../../../assets/img/final-arrow-black.svg';
import {useSelector} from 'react-redux';

const Instruction = () => {
  const navigation = useNavigation();
  const {pastQuestionLoading, pastQuestionData, pastQuestionError} =
    useSelector(state => state.studentDashboard);

  const pastQuestionType = pastQuestionData?.subject_details?.exam_name;
  const Subject = pastQuestionData?.subject_details?.subject;
  const numberOfQuestions = pastQuestionData?.subject_details?.no_of_questions;
  const year = pastQuestionData?.subject_details?.exam_year;
  const duration = pastQuestionData?.subject_details?.duration;

  // console.log(pastQuestionData);

  return (
    <View>
      <View
        style={{
          marginTop: 20,
          marginHorizontal: 20,
        }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <View>
            <ArrowSvgSvg width={23} height={22} />
          </View>
        </TouchableOpacity>
        <Text
          style={{
            marginTop: -30,
            textAlign: 'center',
            fontSize: 20,
            fontWeight: '500',
          }}>
          Instructions
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          marginTop: 20,
        }}>
        <Text style={{fontSize: 23, fontWeight: '500', color: '#00D9B6'}}>
          {pastQuestionType}
        </Text>
        <Text
          style={{
            fontSize: 23,
            fontWeight: '500',
            marginHorizontal: 10,
            color: '#00D9B6',
          }}>
          {Subject}
        </Text>
        <Text style={{fontSize: 23, fontWeight: '500', color: '#00D9B6'}}>
          {year}
        </Text>
      </View>
      <View
        style={{
          marginHorizontal: 20,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginTop: 25,
        }}>
        <View>
          <View style={{flexDirection: 'row', marginBottom: 20}}>
            <QuestionCount />
            <Text
              style={{
                fontSize: 17,
                fontWeight: '600',
                marginLeft: 10,
                alignItems: 'center',
              }}>
              Questions: {numberOfQuestions}
            </Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <TimeCount />
            <Text
              style={{
                fontSize: 17,
                fontWeight: '600',
                marginLeft: 10,
                alignItems: 'center',
              }}>
              Time: {duration}
            </Text>
          </View>
        </View>
        <Image
          source={require('../../../assets/img/start-exam.gif')}
          style={{width: 130, height: 150, resizeMode: 'contain'}}
        />
      </View>
      <View style={{marginTop: 25}}>
        <Text
          style={{
            fontSize: 18,
            fontWeight: '600',
            marginLeft: 50,
            marginBottom: 20,
          }}>
          Before you start
        </Text>
        <View
          style={{
            marginHorizontal: 20,
            flexDirection: 'row',
          }}>
          <Bullet style={{width: 8, height: 8, marginTop: 6, marginRight: 7}} />
          <Text style={{marginBottom: 10, fontSize: 15}}>
            You are about to practice official questions prepared for{' '}
            {pastQuestionType}
          </Text>
        </View>
        <View
          style={{
            marginHorizontal: 20,
            flexDirection: 'row',
          }}>
          <Bullet style={{width: 8, height: 8, marginTop: 6, marginRight: 7}} />
          <Text style={{marginBottom: 10, fontSize: 15}}>
            {' '}
            At the end of your exam practice, you can tap on review to view
            correct answers and solutions.
          </Text>
        </View>
        <View
          style={{
            marginHorizontal: 20,
            flexDirection: 'row',
          }}>
          <Bullet style={{width: 8, height: 8, marginTop: 6, marginRight: 7}} />
          <Text style={{marginBottom: 10, fontSize: 15}}>
            {' '}
            Your results won’t be displayed without your permission.
          </Text>
        </View>
        <View
          style={{
            marginHorizontal: 20,
            flexDirection: 'row',
          }}>
          <Bullet style={{width: 8, height: 8, marginTop: 6, marginRight: 7}} />
          <Text style={{marginBottom: 10, fontSize: 15}}>
            To begin your exam practice, simply tap the START EXAM button.
          </Text>
        </View>
        <Text
          style={{
            fontSize: 18,
            fontWeight: '600',
            color: '#00D9B6',
            textAlign: 'center',
            marginTop: 15,
          }}>
          You’ve got this, and we wish you the very best!
        </Text>
        <TouchableOpacity
          style={{alignItems: 'center'}}
          onPress={() => navigation.navigate('QuestionLoader')}>
          <View
            style={{
              backgroundColor: '#00d9b6',
              width: 150,
              borderRadius: 15,

              marginTop: 25,
            }}>
            <Text style={{textAlign: 'center', padding: 8, fontSize: 18}}>
              Start Exam
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Instruction;
