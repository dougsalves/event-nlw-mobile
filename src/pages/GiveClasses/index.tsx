import React from 'react'
import { View, ImageBackground, Text } from 'react-native'
import { RectButton } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'

import giveClassesBgImage from '../../assets/images/give-classes-background.png'

import style from './style'

function GiveClasses() {
    const { navigate } = useNavigation()

    function handleNavigationToLanding() {
        navigate('Landing')
    }
    
    return ( 
        <View style={style.container}>
            <ImageBackground style={style.content} resizeMode="contain" source={giveClassesBgImage}>
                <Text style={style.title}>Quer ser um Proffy ?</Text>
                <Text style={style.description}>
                    Para começar, você precisa se cadastrar como professor na nossa plataforma web
                </Text>
            </ImageBackground>
            <RectButton onPress={handleNavigationToLanding} style={style.okButton}>
                <Text style={style.okButtonText}>Tudo bem</Text>
            </RectButton>
        </View> 
    )
}

export default GiveClasses