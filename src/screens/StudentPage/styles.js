import {StyleSheet, StatusBar} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  mainContainer: {
    // flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
    // paddingTop: StatusBar.currentHeight,
    paddingBottom: 40,
    // backgroundColor: '#fff',
  },
  class: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  coins: {
    display: 'flex',
    flexDirection: 'row',
    marginLeft: 10,
    borderColor: '#00D9B6',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 6,
    height: 35,
  },
  navStyle: {
    height: 20,
    // position: 'absolute',
    // top: 0,
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#00D9B6',
    width: '100%',
    justifyContent: 'flex-end',
    paddingHorizontal: 30,
  },
  welcome: {
    // position: 'absolute',
    // top: 40,
    // padding: 'auto',
    // paddingLeft: 20,
  },
});
