import React, { memo, useMemo, useState } from 'react'
import { StyleSheet } from 'react-native'
import CardCommContainer from './CardCommContainer'
import CardImage from './CardImage'
import CardPressable from './CardPressable'
import CardText from './CardText'

const CardCommPressable = ({ onPress: onPressProvided, children }) => {
  if (onPressProvided) {
    return <CardPressable onPress={onPressProvided}>{children}</CardPressable>
  }
  return <>{children}</>
}

const CardCommComp = ({
  containerStyle: containerStyleProvided,
  imageStyle: imageStyleProvided,
  textStyle: textStyleProvided,
  imageUri,
  audioUri,
  text,
  onPress: onPressProvided = undefined,
}) => {
  const [sound, setSound] = useState(undefined)

  const containerStyle = useMemo(
    () => [styles.container, containerStyleProvided],
    [containerStyleProvided]
  )

  const imageStyle = useMemo(
    () => [styles.image, imageStyleProvided],
    [imageStyleProvided]
  )

  const textStyle = useMemo(() => [textStyleProvided], [textStyleProvided])

  return (
    <CardCommPressable onPress={onPressProvided}>
      <CardCommContainer containerStyle={containerStyle}>
        <CardImage
          imageStyle={imageStyle}
          source={imageUri}
        />
        <CardText
          containerStyle={styles.textContainer}
          textStyle={textStyle}
          text={text}
        />
      </CardCommContainer>
    </CardCommPressable>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 5,
    paddingBottom: 0,
  },
  image: {
    aspectRatio: 1,
    width: '100%',
  },
  textContainer: {
    flex: 1,
  },
})

const CardComm = memo(CardCommComp)

export default CardComm
