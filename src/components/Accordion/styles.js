import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  titleContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 20,
    paddingHorizontal: 10,
    // marginVertical: 5,
    borderBottomWidth: 1,
    borderColor: 'rgb(96,96,96)',
  },
  bodyBackground: {
    overflow: 'hidden',
    paddingHorizontal: 5,
  },
  bodyContainer: {
    paddingVertical: 15,
    marginVertical: 5,
    paddingHorizontal: 5,
    position: 'absolute',
    width: '100%',
    bottom: 0,
  },
  titleText: {
    color: '#333',
    maxWidth: 290,
    fontFamily: 'Nunito-Regular',
    fontSize: 15,
  },
});
