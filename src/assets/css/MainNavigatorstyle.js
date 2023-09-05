import { StyleSheet, Dimensions } from 'react-native'
import { FontSize } from '../fonts/Fonts'
import { Colors } from '../config/Colors'
import { FontFamily } from '../fonts/FontFamily'
const { width, height } = Dimensions.get('window')

const MainNavigatorstyle = StyleSheet.create({
    drawerContent: {
        // flex: 1,
        // backgroundColor: Colors.white,
    },
    signintext: {
        fontSize: FontSize.h6,
        color: Colors.signtext,
        fontFamily: FontFamily.Popinssemibold,
    },
    signintextnew: {
        fontSize: FontSize.h6,
        color: Colors.signtext,
        fontFamily: FontFamily.Popinssemibold,
        fontWeight:'700'
    },
    signintextmini: {
        fontSize: FontSize.labelText,
        // color: Colors.signtext,
        fontFamily: FontFamily.PopinsMedium,
        color: Colors.bluetheme,
    },
    labelstylecss: {
        color: Colors.sidemenucolor,
        fontSize: FontSize.labelText5,
        fontFamily: FontFamily.PopinsMedium,
        fontWeight:'650',
        left: 10,
    },
    labelstylecssnew: {
        color: Colors.sidemenucolor,
        fontSize: FontSize.labelText4,
        fontFamily: FontFamily.PopinsMedium,
        left: 10,
        fontWeight:'700'
    },
    labelstylecss1: {
        color: Colors.sidemenucolor,
        fontSize: FontSize.labelText5,
        fontFamily: FontFamily.PopinsMedium,
        fontWeight:'700'
    },
    abelstylecss2: {
        color: Colors.sidemenucolor,
        fontSize: FontSize.smallText,
        fontFamily: FontFamily.PopinsMedium,
        fontWeight: 700,
        marginBottom:-13
    },
    labelicon: {
        width: 16,
        height: 16,
        resizeMode: 'contain',
        top: 2,
    },
    Borderline: {
        width: width * 0.8,
        justifyContent: 'flex-end',
        alignSelf: 'flex-end',
        borderWidth: 0.5,
        borderColor: Colors.borderColor,
    },
    viewstyle: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignContent: 'center',
        paddingHorizontal: 10,
        paddingVertical: 12,
    },
    viewstyle1: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignContent: 'center',
        alignItems:"center",
        paddingHorizontal: 20,
        paddingVertical: 15,
    },
    bottomicon: {
        width: 22,
        height: 22,
        backgroundColor: 'transparent',
        resizeMode: 'contain',
    },
    tabbarbottomborder: {
        backgroundColor: "#281E5D",
        height: 6,
        width: 55,
        bottom: -14,
        position: 'absolute',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    tab1: {
        fontSize: 11,
        fontFamily: FontFamily.PopinsMedium,
        bottom: 8,
    },
    tab2: {
        backgroundColor: '#4343ef',
        borderRadius: 30,
        width: width * 0.9,
        alignSelf: 'center',
        // height: 'auto',
        overflow: 'hidden',
        // bottom: 44,
        fontFamily: FontFamily.PopinsMedium,
    },
    userinfo1: {
        alignSelf: 'center',
        width: '100%',
        height: height * 0.945,
    },
    userimg: {
        width: "50%",
        resizeMode: 'cover',
        height: 120,
        borderRadius: 100 
    },
    userimgIconsSmall: {
        width: 50,
        resizeMode: 'contain',
        height: 50,
    },
    userimgIconsSmall1: {
        width: 60,
        resizeMode: 'contain',
        height: 60,
    },
   view1: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignSelf: 'center',
        height: 60,
        alignItems: 'center',

    },
    view1img:
    {
        width: 40,
        height: 40,
        borderRadius: 60
    },
    view2: {
        alignSelf: 'center',
        alignContent: 'flex-end',
        // bottom: 0,
        // position: "absolute",
        width: '100%',
    },
    view2txt: {
        color: Colors.bluetheme,
        textAlign: 'center',
        fontSize: 13,
    },
    DrawerContentSView: {
        overflow: 'hidden',
        width: width * 0.8,
        borderWidth: 1,
    },
    ImageRView: {
        // left:5,
        justifyContent: "center",
         alignItems: 'center',
        marginBottom: 30,
    },
    textSpace:{
        marginBottom:4
    }, 
    profilecontainer:{
        width: width*0.8, padding: 15, flexDirection:"row", marginTop:-5,
    }, 
    imgCon:{
        backgroundColor:"#fff",padding:5, margin:5,width:width*0.25, height:width*0.25, alignItems:"center", borderRadius:100,borderWidth:1,overflow:'hidden'
    },
    levelCon:{
        width: "80%", left: 5, borderRadius: 20
    },
    levelinnercon:{
        backgroundColor: "#fff", width: "30%", height: 18, borderTopLeftRadius: 20, borderBottomLeftRadius: 20 
    },
    settingBtn:{
        width: "20%", alignItems: "flex-end"
    }

})
export { MainNavigatorstyle }