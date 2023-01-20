import React, {useState, useRef} from 'react';
import {
  View,
  Text,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Animated,
  Easing,
} from 'react-native';

import AccordionArrowIcon from '../../assets/img/accordionArrow.svg';
import {CapitalizeFirstLetter} from '../../utils/helper';

import Styles from './styles';

const AccordionListItem = ({title, children}) => {
  const [open, setOpen] = useState(false);
  const animatedController = useRef(new Animated.Value(0)).current;
  const [bodySectionHeight, setBodySectionHeight] = useState(0);

  const bodyHeight = animatedController.interpolate({
    inputRange: [0, 1],
    outputRange: [0, bodySectionHeight],
  });

  const arrowAngle = animatedController.interpolate({
    inputRange: [0, 1],
    outputRange: ['0rad', `${Math.PI}rad`],
  });

  const toggleListItem = () => {
    if (open) {
      Animated.timing(animatedController, {
        duration: 300,
        toValue: 0,
        easing: Easing.bezier(0.4, 0.0, 0.2, 1),
        useNativeDriver: false,
      }).start();
    } else {
      Animated.timing(animatedController, {
        duration: 300,
        toValue: 1,
        easing: Easing.bezier(0.4, 0.0, 0.2, 1),
        useNativeDriver: false,
      }).start();
    }
    setOpen(!open);
  };

  return (
    <>
      <TouchableWithoutFeedback onPress={toggleListItem}>
        <View style={Styles.titleContainer}>
          <Text style={Styles.titleText}>{CapitalizeFirstLetter(title)}</Text>
          <Animated.View style={{transform: [{rotateZ: arrowAngle}]}}>
            <AccordionArrowIcon color="black" />
          </Animated.View>
        </View>
      </TouchableWithoutFeedback>

      <Animated.View style={[Styles.bodyBackground, {height: bodyHeight}]}>
        <View
          style={Styles.bodyContainer}
          onLayout={event =>
            setBodySectionHeight(event.nativeEvent.layout.height)
          }>
          {children}
        </View>
      </Animated.View>
    </>
  );
};

export default AccordionListItem;
