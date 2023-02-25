import { FC } from 'react';
import {StyleSheet, Text,View} from 'react-native';
import { WideButton } from '../buttons/WideButton';



export const EntryContainer: FC = () => {
    

    return(
        <View style={{width: '90%', height: 220, backgroundColor: 'white', borderRadius: 25,  justifyContent: 'center', alignSelf: 'center', alignItems: 'center', position: 'absolute', bottom: '5%' }}>
      
            <WideButton onPress={()=> console.log('Voiti1')} theme={'dark'} width={95} title={'Войти'}/>

            <Text style={{alignSelf: 'center'}}>
                или
            </Text>
            
            <WideButton onPress={()=> console.log('Sozdat akk1')} theme={'light'} width={95} title={'Создать аккаунт'}/>
          
        </View>
    )
  }
