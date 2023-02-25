import { FC , useState} from 'react';
import {Image, StyleSheet, Text, useColorScheme, View, Dimensions, TextInput, TouchableOpacity} from 'react-native';

interface Props {
    onChangeText: (text: string) => void
    placeholder: string
  }

export const WidePassInput: FC<Props> = (props: Props) => {

    const [isVisible, setIsVisible] = useState<boolean>(true)

    return(
        <View style={{...styles.input, width: '95%', flexDirection: 'row'}}>
            
            <Image source={require('../../assets/icons/key.png')} style={{ width: 25, height: 25 }} />

            <TextInput
                placeholder={props.placeholder}
                onChangeText={props.onChangeText}
                style={{width: '67%', fontSize: 17}}
                secureTextEntry={isVisible}
            />
            
            <TouchableOpacity onPress={()=> setIsVisible(!isVisible)}>
                {isVisible === true ? 
                    <Image source={require('../../assets/icons/unseen.png')} style={{ width: 25, height: 24 }} /> 
                :
                    <Image source={require('../../assets/icons/seen.png')} style={{ width: 25, height: 24 }} /> 
                } 
            </TouchableOpacity>
            

        </View>
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