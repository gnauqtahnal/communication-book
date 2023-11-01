import * as ImagePicker from 'expo-image-picker'
import { CardComm } from 'components/card'
import { manipulateAsync, SaveFormat } from 'expo-image-manipulator'
import { useLocalSearchParams } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'
import { memo, useState } from 'react'
import { StyleSheet, View } from 'react-native'
import {
  ButtonCamera,
  ButtonImage,
  ButtonMic,
  ButtonSubmit,
  ButtonText,
  ButtonTrashBin,
} from './components/Button'

const ButtonSeparator = memo(() => {
  return (
    <View
      style={{
        width: '100%',
        alignItems: 'flex-start',
        paddingHorizontal: 15,
      }}
    >
      <View
        style={{
          width: '100%',
          borderTopWidth: 1,
          borderColor: 'rgba(0,0,0,0.1)',
        }}
      />
    </View>
  )
})

const Details = () => {
  const params = useLocalSearchParams()

  const [imageUri, setImageUri] = useState(params.item.imageUri)
  const [text, setText] = useState(params.item.text)

  const onPressPickImageFromCamera = async () => {
    try {
      await ImagePicker.requestCameraPermissionsAsync()
    } catch (error) {
      console.error(error)
    }

    try {
      let result = await ImagePicker.launchCameraAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [1, 1],
        quality: 1,
      })
      if (result.canceled) {
        return
      }

      let uri = result.assets[0].uri
      result = await manipulateAsync(
        uri,
        [
          {
            resize: {
              width: 256,
              height: 256,
            },
          },
        ],
        {
          compress: 1,
          format: SaveFormat.PNG,
        }
      )

      uri = result.uri
      setImageUri(uri)
    } catch (error) {
      console.error(error)
    }
  }

  const onPressPickImageFromLibrary = async () => {
    try {
      await ImagePicker.requestMediaLibraryPermissionsAsync()
    } catch (error) {
      console.error(error)
    }

    try {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [1, 1],
        quality: 1,
      })
      if (result.canceled) {
        return
      }

      let uri = result.assets[0].uri
      result = await manipulateAsync(
        uri,
        [
          {
            resize: {
              width: 256,
              height: 256,
            },
          },
        ],
        {
          compress: 1,
          format: SaveFormat.PNG,
        }
      )

      uri = result.uri
      setImageUri(uri)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <SafeAreaView
      style={styles.container}
      edges={['right', 'bottom', 'left']}
    >
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <CardComm
          containerStyle={{ transform: [{ scaleX: 2 }, { scaleY: 2 }] }}
          imageUri={imageUri}
          text={text}
        />
      </View>

      <View style={{ width: '100%' }}>
        <ButtonCamera onPress={onPressPickImageFromCamera} />
        <ButtonSeparator />
        <ButtonImage onPress={onPressPickImageFromLibrary} />
        <ButtonSeparator />
        <ButtonMic onPress={() => {}} />
        <ButtonSeparator />
        <ButtonText onPress={() => {}} />
        <ButtonSeparator />
        <ButtonTrashBin onPress={() => {}} />
        <ButtonSeparator />
        <ButtonSubmit onPress={() => {}} />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
})

export default Details
