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
  container1: {
    width: width * 0.95,
    height: height * 0.3,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 11,
    borderWidth: 1
  },
  image: {
    width: width,
    height: height * 0.25,
    resizeMode: "contain"
  },
  header: {
    // color: "#222",
    fontSize: 28,
    fontWeight: "bold",
    paddingLeft: 20,
    paddingTop: 5
  },
  body: {
    fontSize: 18,
    paddingLeft: 20,
    paddingLeft: 20,
    paddingRight: 20
  },
  container2: {
    width: width,
    height: height * 0.2
  },
  brandsContainer: {
    width: width * 0.9,
  },
  CardText: {
    fontSize: FontSize.labelText4,
    fontFamily: FontFamily.PopinsMedium,
    color: Colors.black,
    fontWeight: '600',
    alignSelf: 'center',
  },
  ViewAllButton: {
    backgroundColor: Colors.bluetheme,
    borderRadius: 30,
    height: 20,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 15,
  },
  ViewAllButtonIcon: {
    color: Colors.white,
    fontSize: FontSize.smallText,
  },
  ViewHeading: {
    width: width * 0.95, alignSelf: 'center', marginBottom: 8,
  },
  ViewInnerHeading: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    position: 'relative',
    marginBottom: 5
  },

  classContanier: {
    width: width * 0.307,
    margin: 2,
    padding: 10,
    alignItems: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    borderColor: '#E9E9E9',
    borderWidth: 0.5,
    borderRadius: 10,
    backgroundColor: '#FFF',
  },
  classImg: {
    width: width * 0.4, height: height * 0.09, overflow: 'hidden'
  },
  classMT5: {
    marginTop: 5
  },
  classhead: {
    fontFamily: FontFamily.Popinssemibold,
    color: Colors.black,
    fontSize: FontSize.labelText,
    fontWeight: 'bold',
  },
  smalltxt: {
    fontFamily: FontFamily.Popinssemibold,
    color: Colors.black,
    fontSize: FontSize.labelText,
    fontWeight: 'bold',
  },
  touchView: {
    backgroundColor: "rgba(252, 252, 203, 0.8)", width: width * 0.305, alignItems: "center", padding: 2,
    position: "absolute",
    marginTop: 50
  },
  mainViewCon: {
    display: 'flex', flexDirection: "column", alignItems: "center"
  },
  adsContainer: {
    width: width * 0.95,
    justifyContent: "center",
    alignSelf: "center",
    borderRadius: 10
  },
  adsContainer1: {
    width: width * 0.95,
    height: height * 0.1,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 11,
    borderWidth: 1

  },
  adsimage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    borderRadius: 10,
  },
  mgT10: {
    marginTop: 10
  },
  searchcontain: {
    padding: 15, width: width * 0.95, justifyContent: "space-between", flexDirection: "row", alignItems: "center", alignSelf: "center"
  },
  searchFilter: {
    width: "15%", padding: 5, borderRadius: 50, alignItems: "center"
  },
  searchbtn: { width: "80%", padding: 3, borderRadius: 50, flexDirection: "row", alignItems: "center", borderWidth: 0.5, },
  tabcontainer: {
    width: width,
    justifyContent:'space-evenly',
    alignSelf: 'center',
    flexDirection:"row",
    alignItems:"center",
    padding:10,
    backgroundColor: "#143D59",
  },
  tabcontainernew: {
    width: width,
    justifyContent: 'center',
    alignSelf: 'center',
    backgroundColor: "#143D59",
  },


  tabsContainerStyle: {
    width: width,
    borderRadius: 0,
    borderWidth: 0,
  },
  tabStyle: {
    backgroundColor: "#143D59",
    borderWidth: 0,
    width: width,
    borderRadius: 0,
  },
  tabTextStyle: {
    padding: 5,
    fontSize: FontSize.labelText4,
    color: "gray",
    borderRadius: 0,
  },
  activeTabStyle: {
    backgroundColor: "#143D59",
    borderBottomColor: '#fff',
    borderBottomWidth: 2,
    borderRightWidth: 0,
    borderRadius: 0
  },
  activeTabTextStyle: {
    fontSize: FontSize.labelText4,
    fontWeight:700,
    color: "#fff",
    borderRadius: 0,  
  },
  bottomAddBtnView: {
    alignItems: "flex-end", padding: 10, backgroundColor: "transparent", alignSelf: 'flex-end'
  },
 
  datalistView: {
    width: width * 0.82,
    shadowColor: '#000',
    backgroundColor: "transparent",
    padding: 20,
    borderRadius: 15,
    overflow: 'visible',
    alignSelf: 'flex-end',
    elevation:2
  },
  headtxt: {
    fontSize: FontSize.labelText5,
    fontFamily: FontFamily.PopinsRegular,
    color: Colors.black,
    fontWeight: 700
  },
  headtxtNoresultBold: {
    fontSize: FontSize.labelTextbigger,
    fontFamily: FontFamily.PopinsRegular,
    color: Colors.black,
    fontWeight: 700
  },
  headtxtNoresult: {
    fontSize: FontSize.labelTextbigger,
    fontFamily: FontFamily.PopinsRegular,
    color: Colors.black,
  },
  headtxtNoresultnew: {
    fontSize: FontSize.labelTextbig,
    fontFamily: FontFamily.PopinsRegular,
    color: Colors.black,
  },
  headtxtbig: {
    fontSize: FontSize.labelTextbig,
    fontFamily: FontFamily.PopinsRegular,
    color: Colors.black,
    fontWeight: 700
  },
  headtxts: {
    fontSize: FontSize.labelText4,
    fontFamily: FontFamily.PopinsRegular,
    color: Colors.black,
    fontWeight: 700
  },
  headtxts1: {
    fontSize: FontSize.labelText4,
    fontFamily: FontFamily.PopinsRegular,
    color: Colors.black,
  },
  imgtxt: {
    fontSize: FontSize.h1,
    fontFamily: FontFamily.PopinsRegular,
    color: Colors.black,
    fontWeight: 700
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
  innerImg: {
    width: 65, height: 70, justifyContent: "center", borderRadius: 13,elevation:3
  },
  fullwidth: {
    width: width * 0.93, margin: 5
  },
  imgViewcon: {
    width: "13%", left: -50, alignItems: "flex-start", justifyContent: "flex-start"
  },
  levelCon: {
    width: "40%", borderRadius: 20, marginTop: 4, marginBottom: 4, overflow: "hidden"
  },
  levelinnercon: {
    backgroundColor: "#fff", height: 10, borderTopLeftRadius: 20, borderBottomLeftRadius: 20
  },


  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  fabContainer: {
    position: 'absolute',
    bottom: 16,
    right: 16,
  },
  bottomAddButton: {
    width: 60,
    height: 60,
    borderRadius: 35,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 6,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
  aninneritem:{
    flexDirection: 'row',justifyContent:"center",alignItems:'center',
  },
  iconanimated:{
    padding:2,width:45,height:45,borderRadius:50,backgroundColor:"#f1c40f",alignItems:'center',alignSelf:"center", justifyContent:"center"
  },
  containernew: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white', // Adjust the background color of the main container
},
overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor:'red', // Red background with opacity
},
btnsave:{
  width:width*0.7,
  justifyContent:"center",
  alignSelf:"center"
},
 
});

export { styles };
