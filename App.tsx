import React, { FC, useState, useEffect } from 'react';
import type {PropsWithChildren} from 'react';
import {Image, StyleSheet, Text, View, Dimensions, ImageBackground, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { LoginForm } from './components/forms/LoginForm';
import { RegisterForm } from './components/forms/RegisterForm';
import { EntryContainer } from './components/containers/EntryContainer';
import { WideButton } from './components/buttons/WideButton';
import Animated, { useSharedValue, withSpring, useAnimatedStyle, onChange } from 'react-native-reanimated'
import Svg, { Defs, Stop, Path }from 'react-native-svg';
import { HatSVGContainer } from './components/containers/HatSVGContainter';
import { WidePassInput } from './components/inputforms/WidePassInput';
import AnimatedLottieView from 'lottie-react-native';
import { DropProfile } from './components/dropdown/DropProfile';



function App(): JSX.Element {

 


  const func1 = () => {}


  interface ButtonProps {
    onPress: () => void;
    iconSource: any;
    label: string;
  }

  const Button: FC<ButtonProps> = (props: ButtonProps) => {
    return (
      <TouchableOpacity onPress={props.onPress} style={styles.buttonContainer}>
        <LinearGradient
          colors={['#3c4a57', '#31383e']}
          style={styles.buttonGradient}
        >
          <Image
            source={props.iconSource}
            style={styles.buttonIcon}
          />
        </LinearGradient>
        <View style={styles.buttonContent}>
          <Text style={styles.buttonLabel}>{props.label}</Text>
        </View>
        <View style={styles.buttonDotsContainer}>
          {[1, 2, 3].map((dot) => (
            <View
              key={dot}
              style={styles.buttonDot}
            />
          ))}
        </View>
      </TouchableOpacity>
    );
  };


  return (
    <View style={{flex: 1, backgroundColor: 'whte'}}>

      

      <LinearGradient 
        colors={['#dde4e8','#32414a']} 
        style={{height: '100%', justifyContent: 'space-around', opacity: 0.6}}
      />

      <View style={{ position: 'absolute', height: '100%', width: '100%', justifyContent: 'center', marginTop: 30}}>


        <Button
          onPress={func1}
          iconSource={require('./assets/avas/user1.png')}
          label="Найти исполнителей"
        />
        <Button
          onPress={func1}
          iconSource={require('./assets/avas/obj1.png')}
          label="Найти заказы"
        />
        <Button
          onPress={func1}
          iconSource={require('./assets/avas/megaphone5.png')}
          label="Объявить заказ"
        />
        <Button
          onPress={func1}
          iconSource={require('./assets/avas/track1.png')}
          label="Строительные материалы"
        />
        <Button
          onPress={func1}
          iconSource={require('./assets/avas/firm1.png')}
          label="Моя фирма"
        />
        <Button
          onPress={func1}
          iconSource={require('./assets/avas/obj3.png')}
          label="Мои объекты"
        />
      

      </View>

     <DropProfile />



    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: 'white',
    height: 50,
    borderRadius: 10,
    width: '85%',
    alignSelf: 'center',
    flexDirection: 'row',
    shadowColor: '#000',
    marginVertical: 10,
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 4,
  },
  buttonGradient: {
    width: '15%',
    backgroundColor: '#32424a',
    height: 50,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonIcon: {
    width: 30,
    height: 30,
    borderRadius: 15,
  },
  buttonContent: {
    width: '75%',
    justifyContent: 'center',
  },
  buttonLabel: {
    fontSize: 18,
    marginLeft: 15,
  },
  buttonDotsContainer: {
    width: '10%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonDot: {
    backgroundColor: '#32424a',
    width: 6,
    height: 6,
    borderRadius: 3,
    marginVertical: 2,
  },
  
});

export default App;
