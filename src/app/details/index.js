import * as ImagePicker from 'expo-image-picker'
import { CardComm } from 'components/card'
import { useLocalSearchParams } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {
  ButtonCamera,
  ButtonImage,
  ButtonMic,
  ButtonText,
  ButtonTrashBin,
} from './components/Button'

const Details = () => {
  const params = useLocalSearchParams()

  const [imageUri, setImageUri] = useState(params.item.imageUri)
  const [text, setText] = useState(params.item.text)

  const onPressPickImageFromLibrary = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    })

    if (!result.canceled) {
      setImageUri(result.assets[0].uri)
    }
  }

  return (
    <SafeAreaView
      style={styles.container}
      edges={['right', 'bottom', 'left']}
    >
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <CardComm
          imageUri={imageUri}
          text={text}
        />
      </View>

      <View style={{ width: '100%' }}>
        <ButtonCamera onPress={() => {}} />
        <ButtonImage onPress={onPressPickImageFromLibrary} />
        <ButtonMic onPress={() => {}} />
        <ButtonText onPress={() => {}} />
        <ButtonTrashBin onPress={() => {}} />
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
