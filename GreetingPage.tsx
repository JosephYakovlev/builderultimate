import {Image, StyleSheet, Text, View, Dimensions, ImageBackground} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { LoginForm } from '../components/forms/LoginForm';
import { RegisterForm } from '../components/forms/RegisterForm';
import { WideButton } from '../components/buttons/WideButton';
import Animated, { useSharedValue, withSpring, useAnimatedStyle } from 'react-native-reanimated'

function GreetingPage(): JSX.Element {

  const SCREEN_WIDTH = Dimensions.get('screen').width + 10

  const loginFormPositionX = useSharedValue(-SCREEN_WIDTH)
  const entryFormPositionX = useSharedValue(0)
  const registerFormPositionX = useSharedValue(SCREEN_WIDTH)

  const toLoginForm = () => {
    loginFormPositionX.value = withSpring(0);
    entryFormPositionX.value = withSpring(SCREEN_WIDTH)
    registerFormPositionX.value = withSpring(SCREEN_WIDTH*2) // move to center of screen
  };

  const toRegisterForm = () => {
    loginFormPositionX.value = withSpring(-SCREEN_WIDTH*2);
    entryFormPositionX.value = withSpring(-SCREEN_WIDTH)
    registerFormPositionX.value = withSpring(0) // move to center of screen
  };

  const entryStyleChangeHandler = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: entryFormPositionX.value}], // static Y position
    };
  });

  const loginStyleChangeHandler = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: loginFormPositionX.value}], // static Y position
    };
  });

  const registerStyleChangeHandler = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: registerFormPositionX.value }], // static Y position
    };
  });


  return (
    <ImageBackground source={require('./assets/bkg.png')} style={{height: '100%', width: '100%', flex: 1}}>
      <LinearGradient 
        colors={['#080b0e','#000']} 
        style={{height: '100%', justifyContent: 'space-around', opacity: 0.6}}
      />

      <View style={{position: 'absolute', top: 100, width: '100%', alignItems: 'center'}}>
        <Image source={require('./assets/logo1.png')} style={{ width: '45%', height: 235}} />
         
         <Text style={{ color: 'white', fontWeight: 'bold',fontSize: 32, marginTop: 20}}>
            B U I L D E R
         </Text>

         <Text style={{ color: 'orange'}}>
            построй свой бизнесс
         </Text>
      </View>

        <Animated.View style={[styles.entryCont, entryStyleChangeHandler]}>
      
            <WideButton onPress={toLoginForm} theme={'dark'} width={95} title={'Войти'}/>

            <Text style={{alignSelf: 'center'}}>
                или
            </Text>
            
            <WideButton onPress={toRegisterForm} theme={'light'} width={95} title={'Создать аккаунт'}/>
          
        </Animated.View>

      <Animated.View style={[loginStyleChangeHandler]}>
        <LoginForm forgotPassword={() => console.log("FORGME")} toRegister={toRegisterForm} />
      </Animated.View> 

      <Animated.View style={[registerStyleChangeHandler]}>
        <RegisterForm toLogin={toLoginForm}/>
      </Animated.View> 

 
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  entryCont: {
    width: '90%', 
    height: 220, 
    backgroundColor: 'white', 
    borderRadius: 25,  
    justifyContent: 'center', 
    alignSelf: 'center', 
    alignItems: 'center', 
    position: 'absolute', 
    bottom: '5%' 
  },
  boxstyle:{
    position: 'absolute',
    width: '100%',
    height: 280,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf:'flex-end',
    backgroundColor: 'black'
  }
});

export default GreetingPage;
