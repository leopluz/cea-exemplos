import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'

import NameInput from './NameInput'

const STORAGE_KEY = 'ASYNC_STORAGE_NAME_EXAMPLE'

export default function NameStorage() {
    const [name, setName] = useState('USUARIO')

    async function loadName() {
        try {
            const name = await AsyncStorage.getItem(STORAGE_KEY)

            if (name === null) return

            setName(name)
        } catch (e) {
            console.error('Erro ao tentar carregar o nome')
        }
    }

    async function saveName(name) {
        try {
            await AsyncStorage.setItem(STORAGE_KEY, name)
            setName(name)
        } catch (e) {
            console.error('Erro ao tentar salvar o nome')
        }
    }

    useEffect(() => {
        loadName()
    }, [])

    return (
        <View>
            <NameInput
                valorPadrao={'Digite algo'}
                onSubmitEditing={(value) => {
                    saveName(value)
                }}
            />
            <Text style={styles.text}>Bem-vindo, {name}!</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    text: {
        padding: 15,
        backgroundColor: '#EEB',
    },
})
