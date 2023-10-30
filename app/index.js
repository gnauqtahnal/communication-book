import { useRouter } from 'expo-router'
import { useCallback, useState } from 'react'
import { FlatList, StyleSheet, View } from 'react-native'
import { CardComm } from '../components/card'
import { keygen } from '../components/keygen'

const Home = () => {
  const router = useRouter()

  const [data, setData] = useState([
    {
      key: keygen(),
      imageUri: 'https://picsum.photos/512/512?random=0',
      text: 'Lorem Picsum 0',
    },
    {
      key: keygen(),
      imageUri: 'https://picsum.photos/512/512?random=1',
      text: 'Lorem Picsum 1',
    },
  ])

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={({ item, index }) => {
          const navigateToDetails = () => {
            router.push('/details')
            router.setParams({
              item,
              index,
            })
          }

          return (
            <CardComm
              key={item.key}
              onPress={navigateToDetails}
              imageUri={item.imageUri}
              // text={item.text}
              text={item.key}
            />
          )
        }}
      />
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

export default Home
