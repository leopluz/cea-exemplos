import React, { useState } from 'react'
import { StyleSheet, TextInput } from 'react-native'

export default function NameInput({ valorPadrao, onSubmitEditing }) {
    const [text, setText] = useState('')

    //(value) => setText(value)
    function handleChangeText(value) {
        setText(value)
    }

    return (
        <TextInput
            style={styles.input}
            value={text}
            placeholder={valorPadrao}
            onChangeText={handleChangeText}
            onSubmitEditing={() => {
                //Verifica se possui algum valor
                if (!text) return

                onSubmitEditing(text)
                setText('')
            }}
        />
    )
}

const styles = StyleSheet.create({
    input: {
        padding: 15,
        height: 50,
        color: '#999'
    },
})
