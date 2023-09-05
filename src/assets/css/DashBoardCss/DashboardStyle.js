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
    alignItems:"center",
    marginTop:5,
  },
  container: {
    width: width * 0.93,
    padding: 20,
    alignSelf: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    borderBottomWidth: 1.5,
    display: "flex",
    marginBottom: 1,
  }, 
  innerCon:{
    width:"30%",
  },
  imgCon:{
   width:width*0.2, height:width*0.2, borderRadius:100,borderWidth:1.2,overflow:'hidden'
},

  innerCon1:{
    width:"70%"
  },
  smalltxt: {
    fontFamily: FontFamily.Popinssemibold,
    color: Colors.black,
    fontSize: FontSize.labelText,
    fontWeight: 'bold',
  },
  mgT10: {
    marginTop: 10
  },
  
  mgt3: {
    marginTop: 4
  },
  
  headtxtbold: {
    fontSize: FontSize.labelText5,
    fontFamily: FontFamily.PopinsRegular,
    color: Colors.black,
    fontWeight: 700
  },
  headtxtbig: {
    fontSize: FontSize.labelTextbigger,
    fontFamily: FontFamily.PopinsRegular,
    color: Colors.black,
    fontWeight: 700
  },
  headtxt1bold: {
    fontSize: FontSize.labelText4,
    fontFamily: FontFamily.PopinsRegular,
    color: Colors.black,
    fontWeight: 700
  },
  headtxt1: {
    fontSize: FontSize.labelText4,
    fontFamily: FontFamily.PopinsRegular,
    color: Colors.black,
  },
  txt: {
    fontSize: FontSize.labelText3,
    fontFamily: FontFamily.PopinsRegular,
    color: Colors.black,
  },
  smalltxt: {
    fontSize: FontSize.labelText,
    fontFamily: FontFamily.PopinsRegular,
    color: Colors.black,
  },
 
});

export { styles };
