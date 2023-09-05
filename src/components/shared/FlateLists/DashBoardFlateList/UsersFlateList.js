import React, { useEffect, useState ,PureComponent} from 'react';
import {
    View,
    FlatList,
    Text,
    Image,
} from 'react-native';

import { MyThemeClass } from '../../../Theme/ThemeDarkLightColor';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { styles } from '../../../../assets/css/DashBoardCss/DashboardStyle';
import LoadingContent from '../../Loader/LoadingContent';

function UserDataFlateList({ item, themecolor, }) {

    return (
        <View
            style={{
                ...styles.container,
                backgroundColor: themecolor.BOXBORDERCOLOR,
                borderColor: themecolor.BOXBORDERCOLOR1,
            }}
        >
            <View style={{ ...styles.innerCon }}>
                <View style={{ ...styles.imgCon, borderColor: themecolor.BOXBORDERCOLOR1, }}>
                    <Image
                        style={{
                            width: "100%",
                            height: "100%",
                            resizeMode: 'contain',
                            borderRadius:100
                        }}
                        source={{uri:item.profile_picture}}
                        // source={require('../../../../assets/images/profile.png')}
                    />
                </View>
            </View>

            <View style={{ ...styles.innerCon1 }}>
                <Text
                    allowFontScaling={false}
                    style={{ ...styles.headtxtbig, color: themecolor.TXTWHITE, }}
                >
                    {item.first_name} {item.last_name}
                </Text>
                <View style={styles.mgt3} />
                <Text
                    allowFontScaling={false}
                    style={{ ...styles.headtxt1, color: themecolor.TXTGREY, }}
                >
                    {item.city}
                </Text>

            </View>
        </View>
    );
}

export function UsersFlateList(props) {
    const mode = useSelector(state => state.mode);
    const themecolor = new MyThemeClass(mode).getThemeColor();

    const handleEndReached = () => {
            props.handleUsers();
        
    };

    return (
        <FlatList
            data={props.data}
            renderItem={({ item }) => (
                <UserDataFlateList item={item} themecolor={themecolor} />
            )}
            showsVerticalScrollIndicator={false}
            scrollEnabled={true}
            onEndReached={handleEndReached}
              onEndReachedThreshold={0.1} 
              ListFooterComponent={() => {
                if (props.isLoading && props.data.length > 9) {
                  return (
                    <LoadingContent />
                  );
                } else {
                  return null;
                }
            }}
        />
    );
}
