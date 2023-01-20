import React, {useState} from 'react';
import {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';
import {useDispatch} from 'react-redux';
import {InputChange} from '../../redux/action/studentDashBoard';

const DropdownComponent = ({
  inputValue,
  data,
  colored = false,
  widthLen = 315,
}) => {
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    if (colored) {
      dispatch(InputChange('currentEnrolledCourseId', value));
    }
  }, [value]);

  return (
    <View style={styles(colored, widthLen).container}>
      <Dropdown
        style={[styles.dropdown, isFocus && {borderColor: '#00D9B6'}]}
        placeholderStyle={styles().placeholderStyle}
        selectedTextStyle={styles().selectedTextStyle}
        inputSearchStyle={styles().inputSearchStyle}
        itemTextStyle={styles().label}
        data={data}
        // search
        maxHeight={200}
        labelField="label"
        valueField="value"
        placeholder={inputValue}
        // searchPlaceholder="Search..."
        value={value}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={item => {
          setValue(item.value);
          setIsFocus(false);
        }}
      />
    </View>
  );
};

export default DropdownComponent;

const styles = (colored, widthLen) =>
  StyleSheet.create({
    container: {
      borderWidth: 1,
      color: 'black',
      backgroundColor: colored ? '#00D9B6' : '#6B6B6B',
      width: widthLen,
      borderRadius: 10,
      paddingHorizontal: 10,
      marginBottom: 10,
      marginTop: 10,
    },
    dropdown: {
      borderColor: 'gray',
      borderWidth: 0.5,
      borderRadius: 8,
      paddingHorizontal: 2,
    },
    label: {
      color: 'black',
    },
    placeholderStyle: {
      fontSize: 16,
    },
    selectedTextStyle: {
      fontSize: 16,
    },
  });
