import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  userContainer: {
    flexDirection: 'row',
    flexWrap: 'nowrap',
    alignItems: 'center',
    columnGap: 15,
    padding: 10,
  },

  text: {
    flex: 1,
    fontSize: 20,
  },

  arrow: {
    fontSize: 20,
    marginRight: 20,
  },

  avatar: {
    width: 60,
    height: 60,
    backgroundColor: '#ccc',
    borderRadius: 30,
  },
});
