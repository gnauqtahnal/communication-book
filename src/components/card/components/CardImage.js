import { Image } from 'expo-image'
import React, { memo, useMemo } from 'react'
import { StyleSheet } from 'react-native'

const CardImageComp = ({
  imageStyle: imageStyleProvided,
  source: sourceProvided,
}) => {
  const imageStyle = useMemo(
    () => [styles.image, imageStyleProvided],
    [imageStyleProvided]
  )

  return (
    <Image
      style={imageStyle}
      source={sourceProvided}
    />
  )
}

const styles = StyleSheet.create({
  image: {
    aspectRatio: 1,
  },
})

const CardImage = memo(CardImageComp)

export default CardImage
