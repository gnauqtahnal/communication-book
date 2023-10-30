import { useLocalSearchParams } from 'expo-router'
import { StyleSheet, Text, View } from 'react-native'

const Details = () => {
  const params = useLocalSearchParams()
  console.log(params)

  return (
    <View style={styles.container}>
      <Text>Details</Text>
    </View>
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
