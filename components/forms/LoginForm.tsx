import { FC, useState } from 'react';
import {Image, StyleSheet, Text, useColorScheme, View, Dimensions, ImageBackground, TouchableOpacity, TextInput} from 'react-native';
import { WideButton } from '../buttons/WideButton';
import { WideInput } from '../inputforms/WideInput';
import { WidePassInput } from '../inputforms/WidePassInput';

interface ILogFormCallback {
   toRegister: () => void
   forgotPassword: () => void
}

export const LoginForm: FC<ILogFormCallback> = (props: ILogFormCallback) => {

   interface ILoginForm {
      name: string
      password: string
   }

   const [loginForm, setLoginForm] = useState<ILoginForm>({
      name: '',
      password: '',
   })

   return(
    <View style={{ width: '90%', height: 278, alignItems: 'center', justifyContent: 'center', backgroundColor: 'white', borderRadius: 25, position: 'absolute', bottom: 30, alignSelf: 'center'}}>
      
      
      <WideInput 
         onChangeText={(text: string) => setLoginForm({...loginForm, name: text})}
         placeholder={'Имя'}
      />

      <WidePassInput 
        onChangeText={(text: string) => setLoginForm({...loginForm, password: text})}
        placeholder={'Придумайте пароль'}
      />

      <View style={{width: '100%', alignItems: 'flex-end'}}>
         <TouchableOpacity onPress={props.forgotPassword}>
            <Text style={{textDecorationLine: 'underline', marginRight: 15, fontSize: 13}}>
               Забыли пароль?
            </Text>
         </TouchableOpacity>
      </View>
   
     <WideButton onPress={()=> console.log('Voiti1')} theme={'dark'} width={95} title={'Войти'} />

      <View style={{width: '100%', flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>

         <Text style={{fontSize: 13}}>
            Еще нет аккаунта?
         </Text>

         <TouchableOpacity onPress={props.toRegister}>
            <Text style={{textDecorationLine: 'underline', marginLeft: 5, fontSize: 15}}>
               Регистрация
            </Text>
         </TouchableOpacity>
      </View>


    </View>
   )
  }

  const styles = StyleSheet.create({
   container: {
     flex: 1,
     alignItems: 'center',
     justifyContent: 'center',
   },
   input: {
     height: 50,
     width: '90%',
     borderWidth: 1,
     borderRadius: 5,
     borderColor: '#ccc',
     alignItems: 'center',
     justifyContent: 'space-around',
     marginVertical: 10
   },
 });

