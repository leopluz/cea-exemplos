import React from 'react'
import { Button, FlatList, StyleSheet, Text } from 'react-native'

const items = [
  { id: '0', text: 'View', },
  { id: '1', text: 'Text' },
  { id: '2', text: 'Image' },
  { id: '3', text: 'ScrollView' },
  { id: '4', text: 'ListView' },
]

export default function FlatListExample() {
  return (
    <>
    <FlatList
      style={styles.container}
      data={items}
      renderItem={proccessItems}
      keyExtractor={getKeyFromItem} />
    </>
  )
}

function getKeyFromItem(item) {
  return item.id
}

function proccessItems({ item }) {
  return <Button title={item.text}/>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  row: {
    padding: 15,
    marginBottom: 5,
    backgroundColor: 'skyblue',
  },
})