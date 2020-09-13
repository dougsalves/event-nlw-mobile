import React, { useState, useEffect } from 'react'

import { View, Image, Text } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { RectButton } from 'react-native-gesture-handler'

import landingImg from '../../assets/images/landing.png'
import studyIcon from '../../assets/images/icons/study.png'
import giveClassesIcon from '../../assets/images/icons/give-classes.png'
import heartIcon from '../../assets/images/icons/heart.png'
import api from '../../services/api'

import style from './style'

function Landing() {
    const { navigate } = useNavigation()
    const [totalConnections, setTotalConnections] = useState(0)

    useEffect(() => {
        api.get('connections').then(res => {
            const {total} = res.data

            setTotalConnections(total)
        })
    }, [])

    function handleNavigationToGiveClasses(){
        navigate('GiveClasses')
    }

    function handleNavigationToStudyTabs(){
        navigate('Study')
    }

    return (
        <View style={style.container}>
            <Image style={style.logoImg} source={landingImg} />
            <Text style={style.title}>
                Seja bem-vindo.{'\n'}
                <Text style={style.titleBold}>O que deseja fazer?</Text>
            </Text>

            <View style={style.buttonContainer}>
                <RectButton
                    onPress={handleNavigationToStudyTabs}
                    style={[style.button, style.buttonPrimary]}
                >
                    <Image source={studyIcon}></Image>
                    <Text style={style.textButton}>Estudar</Text>
                </RectButton>


                <RectButton 
                    onPress={handleNavigationToGiveClasses} 
                    style={[style.button, style.buttonSecondary]}
                >
                    <Image source={giveClassesIcon}></Image>
                    <Text style={style.textButton}>Dar Aulas</Text>
                </RectButton>
            </View>

            <Text style={style.totalConnections}>
                Total de {totalConnections} conexões já realizadas {' '}
                <Image source={heartIcon} />
            </Text>
        </View>
    )
}

export default Landing