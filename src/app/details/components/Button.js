import { Ionicons } from '@expo/vector-icons'
import { memo, useMemo } from 'react'
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native'

const ICON_COLOR = 'white'
const ICON_SIZE = 22

export const ButtonPressable = ({
  onPress: onPressProvided,
  containerStyle: containerStyleProvided,
  children,
}) => {
  const containerStyle = useMemo(
    () => [{ width: '100%' }, containerStyleProvided],
    [containerStyleProvided]
  )

  return (
    <TouchableHighlight
      onPress={onPressProvided}
      style={containerStyle}
      underlayColor='rgba(0,0,0,0.1)'
    >
      {children}
    </TouchableHighlight>
  )
}

export const ButtonCamera = memo(({ onPress: onPressProvided }) => {
  return (
    <ButtonPressable onPress={onPressProvided}>
      <View style={styles.container}>
        <View style={styles.containerIcon}>
          <Ionicons
            name='ios-camera-outline'
            size={ICON_SIZE}
            color={ICON_COLOR}
          />
        </View>
        <Text>Chọn ảnh từ camera</Text>
      </View>
    </ButtonPressable>
  )
})

export const ButtonImage = memo(({ onPress: onPressProvided }) => {
  return (
    <ButtonPressable onPress={onPressProvided}>
      <View style={styles.container}>
        <View style={styles.containerIcon}>
          <Ionicons
            name='ios-image-outline'
            size={ICON_SIZE}
            color={ICON_COLOR}
          />
        </View>
        <Text>Chọn ảnh từ thư viện</Text>
      </View>
    </ButtonPressable>
  )
})

export const ButtonMic = memo(({ onPress: onPressProvided }) => {
  return (
    <ButtonPressable onPress={onPressProvided}>
      <View style={styles.container}>
        <View style={styles.containerIcon}>
          <Ionicons
            name='mic-outline'
            size={ICON_SIZE}
            color={ICON_COLOR}
          />
        </View>
        <Text>Ghi âm</Text>
      </View>
    </ButtonPressable>
  )
})

export const ButtonText = memo(({ onPress: onPressProvided }) => {
  return (
    <ButtonPressable onPress={onPressProvided}>
      <View style={styles.container}>
        <View style={styles.containerIcon}>
          <Ionicons
            name='ios-text-outline'
            size={ICON_SIZE}
            color={ICON_COLOR}
          />
        </View>
        <Text>Nhập nhãn cho thẻ</Text>
      </View>
    </ButtonPressable>
  )
})

export const ButtonTrashBin = memo(({ onPress: onPressProvided }) => {
  return (
    <ButtonPressable onPress={onPressProvided}>
      <View style={styles.container}>
        <View style={styles.containerIcon}>
          <Ionicons
            name='ios-trash-bin-outline'
            size={ICON_SIZE}
            color={ICON_COLOR}
          />
        </View>
        <Text>Xoá thẻ</Text>
      </View>
    </ButtonPressable>
  )
})

export const ButtonSubmit = memo(
  ({ containerStyle: containerStyleProvided, onPress: onPressProvided }) => {
    const containerStyle = useMemo(
      () => [styles.container, containerStyleProvided],
      [containerStyleProvided]
    )

    return (
      <ButtonPressable onPress={onPressProvided}>
        <View style={containerStyle}>
          <View style={[styles.containerIcon, { backgroundColor: 'green' }]}>
            <Ionicons
              name='md-checkmark-outline'
              size={ICON_SIZE}
              color={ICON_COLOR}
            />
          </View>
          <Text>Xong</Text>
        </View>
      </ButtonPressable>
    )
  }
)

const styles = StyleSheet.create({
  container: {
    padding: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  containerIcon: {
    padding: 6,
    marginHorizontal: 12,
    borderRadius: 9999,
    backgroundColor: 'rgba(64,64,64,1.0)',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
