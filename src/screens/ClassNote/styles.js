import {Platform, StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  afterVidPopUp: {
    position: 'absolute',
    height: 380,
    width: 420,
    borderRadius: 210,
    top: -80,
    right: -95,
    zIndex: 2,
    backgroundColor: '#84bb29',
    alignItems: 'flex-start',
    paddingTop: 120,
    paddingLeft: 50,
    elevation: 5,
  },
  baloo: {
    fontFamily: Platform.select({
      ios: 'BalooBhaijaan-Regular',
      android: 'Baloo-Bhaijaan-Regular',
    }),
  },
  boldGreen: {
    color: '#84bb29',
    fontFamily: Platform.select({
      ios: 'BalooBhaijaan-Regular',
      android: 'Baloo-Bhaijaan-Regular',
    }),
    fontSize: 20,
  },
  boxInPopUp: {
    width: 250,
    height: 220,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 19,
  },
  background: {
    flex: 1,
    width: '100%',
    resizeMode: 'cover',
    // justifyContent: 'center',
    overlayColor: 'green',
  },
  closePopUp: {
    position: 'absolute',
    top: 30,
    right: 30,
    zIndex: 6,
    elevation: 7,
  },
  centeredView: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.6)',
    height: '100%',
  },
  modalView: {
    backgroundColor: '#84bb29',
    borderRadius: 7,
    paddingVertical: 25,
    paddingHorizontal: 32,
    flexDirection: 'column',
  },
  textStyle: {
    color: 'white',
    textAlign: 'center',
    fontFamily: 'Nunito-Regular',
    fontSize: 18,
  },
  textStyle2: {
    fontSize: 15,
    marginTop: 10,
  },
  textStyle3: {
    marginTop: 20,
    // textDecorationLine: 'underline'
  },
  container: {
    flex: 1,
    backgroundColor: 'black',
    paddingTop: 20,
    position: 'relative',
  },
  containerOnImage: {
    height: '100%',
    width: '100%',
    position: 'relative',
    paddingHorizontal: 30,
  },
  header: {
    position: 'absolute',
    top: '5%',
    left: '5%',
  },
  headingText: {
    marginTop: 'auto',
    fontSize: 30,
    lineHeight: 45,
    textAlign: 'center',
    color: 'white',
    fontFamily: Platform.select({
      ios: 'BalooBhaijaan-Regular',
      android: 'Baloo-Bhaijaan-Regular',
    }),
    marginBottom: 'auto',
  },

  iconPlusTextContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    paddingVertical: 10,
  },
  iconPlusText: {
    alignItems: 'center',
  },
  viewCountBox: {
    marginLeft: 10,
    flexDirection: 'row',
  },
  viewCountText: {
    marginTop: -4,
  },
  icon: {
    height: 20,
  },
  iconText: {
    color: 'white',
    marginTop: 5,
    fontFamily: 'Nunito-Regular',
    fontSize: 10,
  },
  image: {
    width: 100,
    height: 100,
    alignSelf: 'center',
  },
  ///used
  navButton: {
    width: 100,
    backgroundColor: 'rgba(196, 196, 196, 0.9)',
    justifyContent: 'space-between',

    alignItems: 'center',
    borderRadius: 4,
    // padding: 7,
    flexDirection: 'row',
    paddingHorizontal: 9,
    paddingVertical: 8,
  },

  navContainer: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    padding: 10,
    marginBottom: 50,
  },
  sectionOne: {
    height: 350,
    backgroundColor: 'white',
    position: 'relative',
    width: '100%',
  },
  ////used
  text: {
    color: '#333',
    textAlign: 'justify',
    fontFamily: 'Nunito-Regular',
    fontSize: 14,
  },

  tagsStyles: {
    body: {
      whiteSpace: 'normal',
      color: '#333',
    },
    a: {
      color: '#333',
    },
    p: {
      color: '#333',
    },
  },
  popUpText: {
    color: 'white',
    textAlign: 'center',
    fontFamily: 'Nunito-Regular',
    fontSize: 20,
    margin: 13,
  },
  mb10: {
    marginBottom: 10,
  },
  textContainer: {
    padding: 20,
    width: '100%',
    backgroundColor: 'black',
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
  underline: {
    textDecorationLine: 'underline',
  },
  likeIcon: {
    marginTop: -8,
  },
  popUpFavourite: {
    marginLeft: 0,
  },
  popUpNoFavourite: {
    marginLeft: -20,
  },
});
export default styles;
