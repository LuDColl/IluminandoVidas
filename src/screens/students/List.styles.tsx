import { StyleProp, TextStyle, ViewStyle } from 'react-native';

export const container: StyleProp<ViewStyle> = {
    flex:1,
    alignContent: 'center', 
}
export const text: StyleProp<TextStyle> = {
    fontSize: 20,
    fontWeight: 'bold',
    fontStyle: 'italic',
    padding: 5
}
export const input: StyleProp<TextStyle> = {
    height: 20,
    margin: 5,
    borderWidth: 1,
    padding: 10,
    borderColor: '#000', 
    borderTopStartRadius:10,
    borderTopEndRadius:10,
    borderRadius: 10,
    color: '#000', 
    backgroundColor: '#fff', 
}
export const viewInput: StyleProp<ViewStyle> = {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
}
export const viewButton: StyleProp<ViewStyle> = {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
}
export const button: StyleProp<ViewStyle> = {
    justifyContent: 'center',
    backgroundColor: '#FF7F00',
    padding: 10,
    margin: 8,
    width: 150,  
    borderRadius: 10,
}
export const textButton: StyleProp<TextStyle> = {
    color: '#121212',
    fontStyle:'italic',
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center'
}
export const viewList: StyleProp<ViewStyle> = {
    flexDirection: 'row',
    
}
export const textProntuario: StyleProp<TextStyle> = {
    fontSize: 20,
    backgroundColor: '#FFF2E5',
    borderWidth: 2,
    borderColor: '#000',
    borderRadius: 10,
    fontWeight: 'bold',
    fontStyle: 'italic',
}
export const viewProntuario: StyleProp<ViewStyle> = {
    padding: 1,
    borderRadius:10,
    borderColor: '#FFF0',
    backgroundColor: '#FFF2E5',
}