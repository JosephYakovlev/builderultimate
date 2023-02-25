import { FC } from 'react';
import {Image, StyleSheet, Text, useColorScheme, View, Dimensions, TextInput, TouchableOpacity} from 'react-native';
import { Svg, Path, LinearGradient, Defs, Stop, Rect, ClipPath } from 'react-native-svg';
import AnimatedLottieView  from 'lottie-react-native';



export const HatSVGContainer: FC = () => {

    const SCREEN_WIDTH = Dimensions.get('screen').width 
const SCREEN_HEIGHT = Dimensions.get('screen').height

    return(
       
        <Svg 
        height={220}
        width={SCREEN_WIDTH}
        viewBox="0 0 1440 320"
        style={{position: 'relative',
            shadowColor: '#000',
        shadowOffset: { width: 0, height: 7 },
        shadowOpacity: 0.5,
        shadowRadius: 4}} 
        >
            <Defs>
                <LinearGradient id="grad" x1="0" y1="0" x2="0" y2="1">
                    <Stop offset="0" stopColor="#fff" stopOpacity="1" />
                    <Stop offset="1" stopColor="lightgrey" stopOpacity="1" />
                </LinearGradient>
            </Defs>

            <Path
                fill="url(#grad)"
                d='M0,320L280,160L1160,150L1440,64L1440,0L960,0L320,0L0,0Z'
            />


            </Svg>
    )
}

const styles = StyleSheet.create({
   input: {
     height: 50,
     width: '95%',
     borderWidth: 1,
     borderRadius: 5,
     borderColor: '#ccc',
     alignItems: 'center',
     justifyContent: 'space-around',
     marginVertical: 10,
     flexDirection: 'row'
   }
});
