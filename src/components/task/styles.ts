import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2EDEB',
    paddingTop: 20,
  },
  shadowProp: {
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
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
    right: 20,
    backgroundColor: '#F96E46',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerTasks: {
    width: '100%',
    marginTop: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  descriptionTask: {
    width: '90%',
    alignContent: 'flex-start',
    backgroundColor: '#f5f5f5',
    padding: 12,
    paddingHorizontal: 20,
    borderRadius: 30,
    marginBottom: 5,
    fontWeight: '500',
    color: '#1C0221',
  },
  btnDeleteTasks: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
})