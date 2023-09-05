import { StyleSheet, Dimensions } from 'react-native';
import { FontSize } from '../../fonts/Fonts';
import { Colors } from '../../config/Colors';
import { FontFamily } from '../../fonts/FontFamily';
const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  bg: { flex: 1, },
  bdContainter: {
    justifyContent: 'center',
    alignSelf: 'center',

  },
  container: {
    flex:1,
    width: width,
    justifyContent: 'center',
    alignItems: 'center',
  },
  map: {
    height: "100%",
    width: "100%",
  },
  floatbtnCon:{
  zIndex:99999,
  position: 'absolute',
  bottom: 100,
  right: 16,
  },
  floatButton:{ 
    width: 60,
    height: 60,
    borderRadius: 35,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    backgroundColor:"#fff"

  }
   
});

export { styles };
