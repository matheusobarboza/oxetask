import { Dimensions, StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2EDEB',
    paddingTop: 20,
  },
  headerTask: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    height: '13%',
    borderBottomColor: '#575762',
    borderBottomWidth: 1,
  },
  headerTitle: {
    fontSize: 30,
    color: '#d1d1d1',
    fontWeight: 'bold',
  },
  shadowProp: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  btnIcon: {
    color: '#fff',
    fontSize: 25,
    fontWeight: 'bold',
  },
  btnNewTask: {
    width: 60,
    height: 60,
    position: 'absolute',
    bottom: 30,
    left: (Dimensions.get('window').width / 2) - 25,
    backgroundColor: '#17E0BC',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerTasks: {
    width: '90%',
    alignSelf: 'center',
    backgroundColor: '#fff',
    height: 100,
    marginBottom: 15,
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 20,
  },
  btnDeleteTasks: {
    width: 50,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
  },
  containerIcons: {
    flexDirection: 'row',
    height: '100%',
  },
})