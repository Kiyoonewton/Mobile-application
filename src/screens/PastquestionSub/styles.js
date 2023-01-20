import {Platform, StyleSheet} from 'react-native';
export const styles = StyleSheet.create({
  selectedOptionBox: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 6,
    borderStyle: 'dotted',
    borderColor: '#84bb29',
    borderWidth: 1,
    marginBottom: 10,
    backgroundColor: '#84bb29',
  },
  optionBox: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 6,
    borderStyle: 'dotted',
    borderColor: '#00D9B6',
    borderWidth: 1,
    marginBottom: 10,
  },
  selectedOptionText: {
    fontFamily: 'Nunito-Regular',
    fontSize: 15,
    color: 'white',
  },
  optionText: {
    fontFamily: 'Nunito-Regular',
    fontSize: 16,
    color: '#777',
  },
  submitBtn: {
    flexDirection: 'row',
    borderColor: '#00D9B6',
    borderWidth: 2,
    paddingHorizontal: 20,
    paddingVertical: 5,
    borderRadius: 7,
    marginTop: -5,
    width: 112,
  },
  submitBtnText: {
    fontFamily: 'Nunito-Regular',
    color: '#00D9B6',
    marginRight: 5,
  },
  alertTitle: {
    fontFamily: Platform.select({
      ios: 'BalooBhaijaan-Regular',
      android: 'Baloo-Bhaijaan-Regular',
    }),
  },
  alertMessage: {
    fontFamily: 'Nunito-Regular',
    textAlign: 'center',
  },
});
