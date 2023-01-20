import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  heroText: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingHorizontal: 50,
    paddingVertical: 10,
    textAlign: 'center',
    fontFamily: 'Poppins-Italic',
    color: '#000',
  },
  heroHeader: {
    marginBottom: 350,
  },
  getstartedBtn: {
    backgroundColor: '#00d9b6',
    padding: 13,
    width: '90%',
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
  },
  getstartedText: {
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'Poppins',
    color: 'black',
  },
  alreadyUserBtn: {
    backgroundColor: '#fff',
    padding: 13,
    width: '90%',
    borderRadius: 10,
    alignItems: 'center',
    borderWidth: 4,
    borderColor: '#20232a',
    marginTop: 10,
  },
  alreadyUserText: {
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'Poppins',
    color: 'black',
  },
});
