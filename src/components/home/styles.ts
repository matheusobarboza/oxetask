import { Dimensions, StyleSheet } from 'react-native'

export const stylesHome = StyleSheet.create({
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
    backgroundColor: '#FAF8F8',
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
  containerDescription: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    flex: 1,
    gap: 10,
  },
  textDescription: {
    fontWeight: '500',
    fontSize: 17,
    color: '#000',
    maxWidth: 150,
  },
  containerEmpty: {
    gap: 10,
    height: '100%',
    alignItems: 'center',
  },
  textEmpty: {
    fontSize: 18,
    fontWeight: '400',
    color: '#575762',
  },
})