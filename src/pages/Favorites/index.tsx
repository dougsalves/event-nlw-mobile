import React, { useState } from 'react'
import { View, ScrollView } from 'react-native'
import AsyncStorage from '@react-native-community/async-storage'
import { useFocusEffect } from '@react-navigation/native'

import PageHeader from '../../components/PageHeader'
import TeacherItem, { Teacher } from '../../components/TeacherItem'

import style from './style'

function Favorites() {
    const [favorites, setFavorites] = useState([])

    function loadFavorites() {
        AsyncStorage.getItem('favorites').then(resp => {
            if (resp) {
                const favoritedTeachers = JSON.parse(resp)
                setFavorites(favoritedTeachers)
            }
        })
    }

    useFocusEffect(() => {
        React.useCallback(() => {
            loadFavorites();
        }, [])
    })

    return (
        <View style={style.container}>
            <PageHeader title='Meus proffys Favoritos' />

            <ScrollView
                style={style.teacherList}
                contentContainerStyle={{
                    paddingHorizontal: 16
                }}
            >
                {favorites.map((teacher: Teacher) => {
                    return (
                        <TeacherItem
                            key={teacher.id}
                            teacher={teacher}
                            favorited
                        />
                    )
                })}
            </ScrollView>
        </View>
    )
}

export default Favorites