import React, { useState } from 'react'
import { View, ScrollView, Text } from 'react-native'
import { TextInput, BorderlessButton, RectButton } from 'react-native-gesture-handler'
import { Feather } from '@expo/vector-icons'
import AsyncStorage from '@react-native-community/async-storage'

import PageHeader from '../../components/PageHeader'
import TeacherItem, { Teacher } from '../../components/TeacherItem'
import api from '../../services/api'

import style from './style'

function TeacherList() {
    const [isFilterVisible, setIsFilterVisible] = useState(false)
    const [favorites, setFavorites] = useState<number[]>([])

    const [teachers, setTeachers] = useState([])
    const [subject, setSubject] = useState('')
    const [week_day, setWeekday] = useState('')
    const [time, setTime] = useState('')

    function loadFavorites(){
        AsyncStorage.getItem('favorites').then(resp => {
            if (resp) {
                const favoritedTeachers = JSON.parse(resp)
                const favoritedTeachersIds = favoritedTeachers.map((teacher: Teacher) => {
                    return teacher.id
                })
                setFavorites(favoritedTeachersIds)
            }
        })
    }

    async function handleFiltersSubmit(){
        loadFavorites()

        const resp = await api.get('classes', {
            params: {
                subject, week_day, time
            }
        })

        setTeachers(resp.data)
        setIsFilterVisible(false)
    }

    function handleToggleFilterVisible() {
        setIsFilterVisible(!isFilterVisible)
    }

    return (
        <View style={style.container}>
            <PageHeader
                title='Proffys Disponíveis'
                headerRight={(
                    <BorderlessButton style={style.filterButton} onPress={handleToggleFilterVisible}>
                        <Feather name='filter' size={20} color='#f0f0f7' />
                    </BorderlessButton>
                )}
            >
                {isFilterVisible && (
                    <View style={style.searchForm}>
                        <Text style={style.label}>Matéria</Text>
                        <TextInput
                            style={style.input}
                            value={subject}
                            onChangeText={text => setSubject(text)}
                            placeholder='Qual a matéria ?'
                            placeholderTextColor='#c1bccc'
                        />

                        <View style={style.inputGroup}>
                            <View style={style.inputBlock}>
                                <Text style={style.label}>Dia da Semana</Text>
                                <TextInput
                                    style={style.input}
                                    value={week_day}
                                    onChangeText={text => setWeekday(text)} 
                                    placeholder='Qual dia ?'
                                    placeholderTextColor='#c1bccc'
                                />
                            </View>

                            <View style={style.inputBlock}>
                                <Text style={style.label}>Horário</Text>
                                <TextInput
                                    style={style.input}
                                    value={time}
                                    onChangeText={text => setTime(text)} 
                                    placeholder='Qual horário ?'
                                    placeholderTextColor='#c1bccc'
                                />
                            </View>
                        </View>

                        <RectButton onPress={handleFiltersSubmit} style={style.submitButton}>
                            <Text style={style.submitButtonText}>Filtrar</Text>
                        </RectButton>
                    </View>
                )}
            </PageHeader>

            <ScrollView
                style={style.teacherList}
                contentContainerStyle={{
                    paddingHorizontal: 16
                }}>

                {teachers.map((teacher: Teacher) => {
                    return (
                        <TeacherItem 
                            key={teacher.id} 
                            teacher={teacher} 
                            favorited={favorites.includes(teacher.id)}
                        />
                    )
                })}
            </ScrollView>
        </View>
    )
}

export default TeacherList