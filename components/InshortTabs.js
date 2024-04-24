import { View, Text, useWindowDimensions } from 'react-native'
import React, { useState } from 'react'

const InshortTabs = () => {
  const layout = useWindowDimensions()
  const [index, setIndex] = useState(1)
  const [routes] = useState([
    {key: 'first', title: "Discover"},
    {key: 'second', title: "News"},
  ])
  return (
    <View>
      <Text>InshortTabs</Text>
    </View>
  )
}

export default InshortTabs