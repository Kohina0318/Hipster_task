import { StyleSheet, Dimensions } from 'react-native';
import { FontSize } from '../../fonts/Fonts';
import { Colors } from '../../config/Colors';
import { FontFamily } from '../../fonts/FontFamily';
const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center',

    },

    txt: {
        fontSize: FontSize.labelTextbig,
        fontFamily: FontFamily.PopinsRegular,
        color: Colors.black,
    }
});

export { styles };
