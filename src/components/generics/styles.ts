import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 20,
    alignItems: 'center',
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
  headerTask: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    height: '10%',
    borderBottomColor: '#575762',
    borderBottomWidth: 1,
  },
  headerTitle: {
    fontSize: 30,
    color: '#d1d1d1',
    fontWeight: 'bold',
  },
  formInput: {
    width: 322,
    height: 54,
    backgroundColor: '#232328',
    borderRadius: 8,
    paddingHorizontal: 15,
    color: '#fff',
  },
  itemForm: {
    gap: 5,
    marginBottom: 10,
  },
  labelForm: {
    color: '#fff',
    fontSize: 15,
  },
  btnSave: {
    backgroundColor: '#17E0BC',
    width: '100%',
    height: 54,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
  },
  textBtnSave: {
    fontSize: 25,
    fontWeight: '500',
    color: '#fff',
  },

})
