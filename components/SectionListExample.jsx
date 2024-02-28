import React from 'react';
import { SectionList, StatusBar, StyleSheet, Text, View } from 'react-native';

const DATA = [
    {
        title: 'Prato principal',
        data: ['Carne', 'Frango', 'Peixe'],
    },
    {
        title: 'Acompanhamento',
        data: ['Batata frita', 'Anéis de cebola'],
    },
    {
        title: 'Bebida',
        data: ['Água', 'Refrigerante', 'Cerveja', 'Suco'],
    }
];

export default function SectionListExample() {
    return (
        <View style={styles.container}>
            <SectionList
                sections={DATA}
                keyExtractor={(item, index) => item + index}
                renderItem={({ item }) => (
                    <View style={styles.item}>
                        <Text style={styles.title}>{item}</Text>
                    </View>
                )}
                renderSectionHeader={({ section: { title } }) => (
                    <Text style={styles.header}>{title}</Text>
                )}
            />
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: StatusBar.currentHeight,
        marginHorizontal: 5,
    },
    item: {
        backgroundColor: 'skyblue',
        padding: 10,
        marginVertical: 8,
    },
    header: {
        fontSize: 32,
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 24,
    },
});