import { StyleSheet } from 'react-native';


export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  words: {
    color: 'white'
  },
  headerContainer: {
    display: 'flex',
    marginTop: 50,
    alignItems: 'center',
    paddingBottom: 25,
  },
  headerTitle: {
    color: 'white',
    fontSize: 20,
    fontWeight: '300',
    letterSpacing: 3,
  },
  contentContainer: {
    paddingBottom: 100,
    paddingTop: 55
  },
  coinContainer: {
      display: "flex",
      marginBottom: 20,
      borderBottomColor: "#111111",
      borderBottomWidth: 3,
      padding: 20,
  },
  upperRow: {
      display: "flex",
      flexDirection: "row",
      marginBottom: 15
  },
  coinSymbol: {
      marginTop: 10,
      marginLeft: 20,
      marginRight: 5,
      fontWeight: "bold",
      color: 'white',
  },
  coinName: {
      marginTop: 10,
      marginLeft: 5,
      marginRight: 20,
      color: 'white',
  },
  seperator: {
      marginTop: 10,
      color: 'grey',
  },
  coinPrice: {
      marginTop: 10,
      marginLeft: "auto",
      marginRight: 10,
      fontWeight: "bold",
      color: '#F5F5F5',
  },
  image: {
      width: 35,
      height: 35,
  },
  moneySymbol: {
      fontWeight: "bold",
      color: 'gray',
  },
  statisticsContainer: {
      display: "flex",
      borderTopColor: "#111111",
      borderTopWidth: 2,
      padding: 10,
      flexDirection: "row",
      justifyContent: "space-around"
  },
  percentChangePlus: {
      color: "#00BFA5",
      fontWeight: "bold",
      marginLeft: 5
  },
  percentChangeMinus: {
      color: "#DD2C00",
      fontWeight: "bold",
      marginLeft: 5
  }
});
