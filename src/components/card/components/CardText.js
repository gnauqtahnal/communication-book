import React, { memo, useMemo } from 'react'
import { StyleSheet, Text, View } from 'react-native'

const CardTextComp = ({
  containerStyle: containerStyleProvided,
  textStyle: textStyleProvided,
  text: textProvided,
}) => {
  const containerStyle = useMemo(
    () => [styles.container, containerStyleProvided],
    [containerStyleProvided]
  )

  const textStyle = useMemo(
    () => [styles.text, textStyleProvided],
    [textStyleProvided]
  )

  return (
    <View style={containerStyle}>
      <Text
        style={textStyle}
        numberOfLines={1}
      >
        {textProvided}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
})

const CardText = memo(CardTextComp)

export default CardText
