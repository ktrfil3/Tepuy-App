import { StyleSheet} from "react-native";

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 48,
    backgroundColor: '#000',
    width: '100%',
    borderWidth: 2,
    borderColor: 'black',
    flexDirection:'column',
  },
  progress: {
    height: 2,
    left: 6,
    borderRadius: 5,
    width: '100%',
    maxWidth: '95%',
    backgroundColor: '#bcbcbc'
  },
  row: {
    flexDirection: 'row',
  },
  image: {
    width: 50,
    height: 50,
    marginRight: 10,
    marginLeft: 5,
    borderRadius: 5,
    marginBottom: 3,
    marginTop: 3,
  },
  rightContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  nameContainer: {
    // flexDirection: 'row',
    alignItems: 'center',
  },
  iconsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 100,
    justifyContent: 'space-around'
  },
  iconCenter: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 12,
    justifyContent: 'space-around'
  },
  title: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
    top: 7, 
  },
  artist: {
    color: 'lightgray',
    fontSize: 13,
    top: 10,
    marginRight: 90,
  }
})

export default styles;
