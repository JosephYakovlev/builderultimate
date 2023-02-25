import { FC, useState } from 'react';
import {Image, StyleSheet, Text, useColorScheme, View, Dimensions, ImageBackground, TouchableOpacity, TextInput} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { WideButton } from '../buttons/WideButton';
import { WideInput } from '../inputforms/WideInput';
import { WidePassInput } from '../inputforms/WidePassInput'

interface IRegFormCallback {
  toLogin: () => void
}

export const RegisterForm: FC<IRegFormCallback> = (props: IRegFormCallback) => {

  interface IRegUserForm {
    name: string
    password: string
    repeatedPassword: string
  }

   const [regUserForm, setRegUserForm] = useState<IRegUserForm>({
    name: '',
    password: '',
    repeatedPassword: ''
   })



   return(
    <View style={{ width: '90%', height: 360, alignItems: 'center', justifyContent: 'center', backgroundColor: 'white', borderRadius: 25, position: 'absolute', bottom: 30, alignSelf: 'center'}}>
      
      <Text style={{fontSize: 17, marginBottom: 10}}>
        Регистрация
      </Text>

      <WideInput 
        onChangeText={(text: string) => setRegUserForm({...regUserForm, name: text})} 
        placeholder={'Имя'}
      />

      <WidePassInput 
        onChangeText={(text: string) => setRegUserForm({...regUserForm, password: text})}
        placeholder={'Придумайте пароль'}
      />

      <WidePassInput 
        onChangeText={(text: string) => setRegUserForm({...regUserForm, repeatedPassword: text})} 
        placeholder={'Повторите пароль'}
      />

   
      <WideButton onPress={()=> console.log('Sozdat akk')} theme={'dark'} width={95} title={'Создать аккаунт'} />

      <View style={{width: '100%', flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>

         <Text style={{fontSize: 13}}>
            у Вас уже есть аккаунт?
         </Text>

         <TouchableOpacity onPress={props.toLogin}>
            <Text style={{textDecorationLine: 'underline', marginLeft: 5, fontSize: 15}}>
               Войти
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

