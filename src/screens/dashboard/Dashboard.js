import React, { useState, useEffect, useRef } from 'react';
import {
  View,
  StatusBar,
} from 'react-native';
import { useSelector } from 'react-redux';
import { MyThemeClass } from '../../components/Theme/ThemeDarkLightColor';
import Header from '../../components/shared/header/Header';
import { styles } from '../../assets/css/DashBoardCss/DashboardStyle';
import { useToast } from 'react-native-toast-notifications';
import { useNavigation } from '@react-navigation/native';
import LoadingFullScreen from '../../components/shared/Loader/LoadingFullScreen';
import { UsersFlateList } from '../../components/shared/FlateLists/DashBoardFlateList/UsersFlateList';
import NoDataMsg from '../../components/shared/NoData/NoDataMsg';
import { getUsers } from '../../repository/DashBoardRepository/UsersRep';

export default function Dashboard(props) {
  const toast = useToast();
  const navigation = useNavigation();

  const refRBSheet = useRef();
  const mode = useSelector(state => state.mode);
  const themecolor = new MyThemeClass(mode).getThemeColor();

  const [loader, setLoader] = useState(true);
  const [userData, setUserData] = useState([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const [getOffset, setOffset] = React.useState(0);

  const handleUsers = async () => {
    try {
      var res = await getUsers(getOffset, "10");
      if (res.success === true) {
        if (res.users.length > 0) {
          setIsLoading(true)
          setOffset(getOffset + 10)
          var temp1 = userData.concat(res.users)
          setUserData(temp1);
        } else {
          setIsLoading(false)
        }
        setLoader(false);
      }
    } catch (e) {
      setLoader(false)
      console.log('errrror in..handleUsers page-->', e);
      toast.show('Something went wrong!, Try again later.', {
        type: 'danger',
        placement: 'bottom',
        duration: 1000,
        offset: 30,
        animationType: 'slide-in',
      });
    }
  };

  useEffect(() => {
    handleUsers()
  }, [])

  return (
    <View style={{ ...styles.bg, backgroundColor: themecolor.THEMECOLOR1 }}>
      <StatusBar
        translucent
        backgroundColor={themecolor.LOGINTHEMECOLOR1}
        barStyle={mode === 'dark' ? 'light-content' : 'dark-content'}
      />

      <Header title="Home" />

      {loader ? (
        <LoadingFullScreen style={{ flex: 1 }} />
      ) : (
        <View style={{ ...styles.bdContainter, }} >
          {userData.length > 0 ?
              <UsersFlateList data={userData} handleUsers={handleUsers} isLoading={isLoading} setOffset={setOffset} />
            :
            <NoDataMsg title="No Data found !" />}
             <View style={{ marginVertical: 44 }} />
        </View>
      )}
    </View>
  );
}
