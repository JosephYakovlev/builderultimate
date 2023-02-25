import { FC } from 'react';
import {Image, StyleSheet, Text, useColorScheme, View, Dimensions, ImageBackground, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

interface Props {
    onPress: () => void
    theme: string
    width: number
    title: string
  }

export const WideButton: FC<Props> = (props: Props) => {

    if(props.theme === 'dark') {
      return(
        <TouchableOpacity onPress={props.onPress} style={{width: '100%', alignItems: 'center'}}>
          <LinearGradient 
            colors={['#3c4a57','#31383e']} 
            style={{height: 60, width: `${props.width}%`, justifyContent: 'space-around', alignItems: 'center', borderRadius: 7, marginVertical: 13}}
          >
            <Text style={{color: 'white', fontSize: 18}}>
                {props.title}
            </Text>
          </LinearGradient>
        </TouchableOpacity>

      )
    } else {
      return(
        <TouchableOpacity onPress={props.onPress} style={{width: '100%', alignItems: 'center'}}>
          <View style={{height: 60, width: `${props.width}%`, justifyContent: 'space-around', alignItems: 'center', borderRadius: 7, marginVertical: 13, borderWidth: 1}}>
            <Text style={{color: 'black', fontSize: 18}}>
                {props.title}
            </Text>
          </View>
        </TouchableOpacity>
      )
    }
  }
