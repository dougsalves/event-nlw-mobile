import React, { ReactNode } from 'react'
import { View, Image, Text } from 'react-native'
import { BorderlessButton } from 'react-native-gesture-handler'

import bagkIcon from '../../assets/images/icons/back.png'
import logoImg from '../../assets/images/logo.png'

import style from './style'
import { useNavigation } from '@react-navigation/native'

interface PageHeaderProsp {
    title: string;
    headerRight?: ReactNode;
}

const PageHeader: React.FC<PageHeaderProsp> = ({title, headerRight, children}) => {
    const { navigate } = useNavigation()

    function handleGoBack(){
        navigate('Landing')
    }

    return (
        <View style={style.container}>
            <View style={style.topBar}>
                <BorderlessButton onPress={handleGoBack}>
                    <Image resizeMode='contain' source={bagkIcon} />
                </BorderlessButton>

                <Image resizeMode='contain' source={logoImg} />                
            </View>

            <View style={style.header}>
                <Text style={style.title}>{title}</Text>

                {headerRight}
            </View>

            {children}
        </View>
    )
}

export default PageHeader