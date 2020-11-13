import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection: 'row',
    textAlign: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderBottomColor: 'grey',
    borderRadius: 6
  },
  title: {
    fontSize: 20,
  },
  movieImage: {
    backgroundColor: 'transparent',
    height: 50,
    width: 50,
    marginRight: 10
  }
});

export { styles };