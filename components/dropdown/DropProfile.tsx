import React, { FC, useState, useEffect } from 'react';
import {Image, StyleSheet, Text, View, Dimensions, TouchableOpacity, ScrollView} from 'react-native';
import Animated, { useSharedValue, withSpring, useAnimatedStyle} from 'react-native-reanimated'
import { HatSVGContainer } from '../../components/containers/HatSVGContainter';
import AnimatedLottieView from 'lottie-react-native';


const WIDTH: number = Dimensions.get('screen').width

export const DropProfile = () => {


    const HEIGHT: number = Dimensions.get('screen').height*0.9 

    const [isOpen, setIsOpen] = useState<boolean>(false)

    const menuY = useSharedValue<number>(0)
    const contY = useSharedValue<number>(-HEIGHT)


    useEffect(() => {
        if(isOpen === false) {
        contY.value = withSpring(-HEIGHT)
        menuY.value = withSpring(0) 
        } else if (isOpen === true ){
        contY.value = withSpring(-100)
        menuY.value = withSpring(HEIGHT-120)
        }
    },[isOpen])

    const entryStyleChangeHandler = useAnimatedStyle(() => {
        return {
        transform: [{ translateY: menuY.value}], // static Y position
        };
    });

    const contYhandler = useAnimatedStyle(() => {
        return {
        transform: [{ translateY: contY.value}], // static Y position
        };
    });


    return(
        <>
            <Animated.View style={[{ backgroundColor: 'white', height: HEIGHT, position: 'absolute', shadowColor: '#000', width: '100%', alignItems: 'center' }, contYhandler]}>
                
                <ScrollView style={{ backgroundColor: 'white', height: '100%', width: '100%', position: 'relative'}} contentContainerStyle={{alignItems: 'center'}}>

                    <Image source={require('../../assets/avas/gear.png')} style={{ borderRadius: 5, width: 30, height: 30, position: 'absolute', top: 160, right: 15}} />
                
                
                    <View style={styles.avatarContainer}>
                        <Image source={require('../../assets/avas/ava33.png')} style={styles.avatarImage} />
                        <Image source={require('../../assets/avas/photo.png')} style={styles.photoIcon} />
                    </View>

                    <View style={{...styles.container, justifyContent: 'center'}}>
                        <Text style={{ ...styles.text,marginLeft: 0 }}>
                            Имя Фамилия
                        </Text>
                    </View>

                    <View style={styles.container}>
                        <Text style={styles.text}>
                            Мои контракты
                        </Text>
                    
                        <Image
                            source={require('../../assets/avas/contract2.png')}
                            style={{ height: 35, width: 30, marginRight: 60, borderRadius: 1 }}
                        />
                    </View>

                    <View style={styles.container}>

                        <Text style={styles.text}>
                            Портфолио
                        </Text>

                        <Image
                            source={require('../../assets/avas/portfolio.png')}
                            style={{ width: 40, height: 32, borderRadius: 0, marginRight: 60 }}
                        />
                    </View>

                    <View style={styles.container}>
                        <Text style={styles.text}>
                            Рейтинг:
                        </Text>
                    
                        <View style={{ flexDirection: 'row', marginRight: 40 }}>
                            {[1, 2, 3, 4, 5].map((item) => (
                            <Image
                                key={item}
                                source={require('../../assets/avas/raiting.png')}
                                style={styles.image}
                            />
                            ))}
                        </View>
                    </View>

                    <View style={styles.container}>
                        <Text style={styles.text}>
                            Баланс:
                        </Text>

                        <Text style={{ ...styles.text, marginRight: 40 }}>
                            0.00 руб.
                        </Text>
                    </View>

                    <View style={{...styles.container, justifyContent: 'center', marginBottom: 30}}>
                        <Image
                            source={require('../../assets/avas/exit.png')}
                            style={{ width: 30, height: 30, marginLeft: 20, borderRadius: 5 }}
                        />

                        <Text style={{ ...styles.text, marginLeft: 40 }}>
                            Выход
                        </Text>
                    </View>

                </ScrollView>

        </Animated.View>

        
        <Animated.View style={[{ backgroundColor: 'white', height: 75, position: 'absolute', shadowColor: '#000'}, entryStyleChangeHandler]}>
            
            <HatSVGContainer />

            <TouchableOpacity onPress={()=>setIsOpen(!isOpen)} style={{height: 50, position: 'absolute', bottom: -20, width: '100%', flexDirection: 'row'}}>

            <AnimatedLottieView
                source={require('../../assets/lottie/cubes.json')}
                autoPlay={true}
                speed={1}
                loop={true} 
                renderMode={"SOFTWARE"}
                style={{height: 70, bottom: -5}} 
                />


                <View style={{width: '100%', alignItems: 'center', justifyContent: 'center', position: 'absolute', top: 16, flexDirection:'row'}}>
                <Text style={{fontSize: 22, fontWeight: 'bold'}}>
                    B U I L D E R
                </Text>

                <Image source={require('../../assets/logo1.png')} style={{width: 35, height: 45, marginLeft: 10}} />

                </View>
                

            </TouchableOpacity>

            
        </Animated.View>
      </>
    )
}


const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 50,
        marginTop: 10,
        backgroundColor: 'white',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        shadowColor: '#000',
        shadowOffset: { width: -1, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 4,
    },
    text: {
        fontSize: 17,
        marginLeft: 50,
    },
    image: {
        width: 25,
        height: 25,
    },
    gearIcon: {
        borderRadius: 5,
        width: 30,
        height: 30,
        position: 'absolute',
        top: 160,
        right: 15,
    },
    avatarContainer: {
        marginTop: 150,
        shadowColor: '#000',
        marginVertical: 10,
        shadowOffset: { width: -1, height: 4 },
        shadowOpacity: 0.5,
        shadowRadius: 4,
    },
    avatarImage: {
        borderRadius: 5,
        width: WIDTH / 2.5,
        height: WIDTH / 2.5,
    },
    photoIcon: {
        borderRadius: 5,
        width: 30,
        height: 30,
        position: 'absolute',
        bottom: -7,
        right: 5,
    },
})