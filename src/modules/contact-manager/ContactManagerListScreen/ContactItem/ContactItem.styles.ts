import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  text: {
    fontSize: 20,
    textAlign: 'center',
  },

  buttonContainer: {
    flexDirection: 'column',
    alignItems: 'flex-start',
  },

  profileContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'nowrap',
    alignItems: 'center',
    columnGap: 10,
  },

  arrow: {
    alignSelf: 'flex-end',
  },

  avatar: {
    width: 60,
    height: 60,
    backgroundColor: '#ccc',
    borderRadius: 33,
  },
});
