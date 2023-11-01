import React, { memo, useMemo } from 'react'
import { TouchableOpacity } from 'react-native'

const CardPressableComp = ({
  containerStyle: containerStyleProvided,
  onPress: onPressProvided,
  children,
}) => {
  const containerStyle = useMemo(
    () => [containerStyleProvided],
    [containerStyleProvided]
  )

  return (
    <TouchableOpacity
      onPress={onPressProvided}
      style={containerStyle}
    >
      {children}
    </TouchableOpacity>
  )
}

const CardPressable = memo(CardPressableComp)

export default CardPressable
