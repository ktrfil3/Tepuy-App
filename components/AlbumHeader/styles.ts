import { StyleSheet} from "react-native";

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'center',
    flex: 1,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 10,
  },
  name: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
  },
  creatorContainer: {
    flexDirection: "row",
    left: 0,
  },
  creator: {
    color: 'lightgray',
    left: 0,
    fontSize: 15,
  },
  likes: {
    color: 'lightgray',
    left: 5,
    fontSize: 15,
  },
  button: {
    backgroundColor: '#3F50FC',
    height: 60,
    width: 60,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    left: 3,
  },
  description: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
    top:  30,
    marginBottom: 45,
    textAlign: 'center',
    left: -250,
  },
});

export default styles;
