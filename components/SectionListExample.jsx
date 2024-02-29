import React from 'react';
import { SectionList, StatusBar, StyleSheet, Text, View } from 'react-native';

const DATA = [
    {
        titulo: 'Prato principal',
        data: ['Carne', 'Frango', 'Peixe'],
    },
    {
        titulo: 'Acompanhamento',
        data: ['Batata frita', 'Anéis de cebola'],
    },
    {
        titulo: 'Bebida',
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
                renderSectionHeader={mountSectionHeader} />
        </View>
    )
};

//SectionList -> renderSectionHeader
//https://reactnative.dev/docs/sectionlist#rendersectionheader

//(info: {section: Section}) => element ｜ null
function mountSectionHeader(info) {
    console.log(info)
    const section = info.section;
    const title = section.titulo;
    return <Text style={styles.header}>{title}</Text>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: StatusBar.currentHeight,
        marginHorizontal: 5,
    },
    item: {
        backgroundColor: 'yellow',
        padding: 10,
        marginVertical: 0,
    },
    header: {
        fontSize: 32,
        backgroundColor: '#00F',
    },
    title: {
        fontSize: 24,
    },
});