import React, { memo, useMemo } from 'react'
import { StyleSheet, View } from 'react-native'

const CardCommContainerComp = ({
  containerStyle: containerStyleProvided,
  children,
}) => {
  const containerStyle = useMemo(
    () => [styles.container, containerStyleProvided],
    [containerStyleProvided]
  )

  return <View style={containerStyle}>{children}</View>
}

const styles = StyleSheet.create({
  container: {
    width: 128,
    height: 128 * 1.2,
    borderWidth: 1,
    borderRadius: 9,
    borderColor: 'rgba(64,64,64,0.4)',
    backgroundColor: 'rgba(255,255,255,1.0)',
    overflow: 'hidden',
  },
})

const CardComContainer = memo(CardCommContainerComp)

export default CardComContainer
