import React, { useState } from 'react'
import { View, StyleSheet, Text } from 'react-native'

import Toggle from './Toggle'

export default function App() {
  const [flexDirection, setFlexDirection] = useState('row')
  const [justifyContent, setJustifyContent] = useState('center')
  const [alignItems, setAlignItems] = useState('center')
  const layoutStyle = { flexDirection, justifyContent, alignItems }

  const primaryAxis = flexDirection === 'row' ? 'Horizontal' : 'Vertical'
  const secondaryAxis = flexDirection === 'row' ? 'Vertical' : 'Horizontal'

  return (
    <View style={styles.container}>
      <Toggle
        label={'Eixo principal (flexDirection)'}
        value={flexDirection}
        options={flexDirectionOptions}
        onChange={(option) => {
          setFlexDirection(option)
        }}
      />
      <Toggle
        label={`Configuração ${primaryAxis} (justifyContent)`}
        value={justifyContent}
        options={justifyContentOptions}
        onChange={(option) => {
          setJustifyContent(option)
        }}
      />
      <Toggle
        label={`Alinhamento ${secondaryAxis} (alignItems)`}
        value={alignItems}
        options={alignItemsOptions}
        onChange={(option) => {
          setAlignItems(option)
        }}
      />
      <Text style={styles.label}>Estilo configurado:</Text>
      <Text style={styles.estilo}>flexDirection: {flexDirection};</Text>
      <Text style={styles.estilo}>justifyContent: {justifyContent};</Text>
      <Text style={styles.estilo}>alignItems: {alignItems};</Text>
      <View style={[styles.layout, layoutStyle]}>
        <View style={styles.box} />
        <View style={styles.box} />
        <View style={styles.box} />
      </View>
    </View>
  )
}

const flexDirectionOptions = ['row', 'column']
const justifyContentOptions = [
  'flex-start',
  'center',
  'flex-end',
  'space-around',
  'space-between',
]
const alignItemsOptions = ['flex-start', 'center', 'flex-end', 'stretch']

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  layout: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.05)',
  },
  box: {
    padding: 25,
    backgroundColor: '#3B6CD4',
    margin: 5,
  },
  label: {
    fontSize: 14,
    padding: 4,
  },
  estilo: {
    fontSize: 12,
    padding: 2,
  },
})
