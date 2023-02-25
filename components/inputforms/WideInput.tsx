import { FC } from 'react';
import {Image, StyleSheet, Text, useColorScheme, View, Dimensions, TextInput, TouchableOpacity} from 'react-native';

interface Props {
    onChangeText: (text: string) => void
    placeholder: string
}

export const WideInput: FC<Props> = (props: Props) => {
    return(
        <View style={{...styles.input, width: '95%', flexDirection: 'row'}}>
            
            <Image source={require('../../assets/icons/user.png')} style={{ width: 25, height: 29 }} />

            <TextInput
                placeholder={props.placeholder}
                onChangeText={props.onChangeText}
                style={{width: '80%', fontSize: 17}}
            />
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
