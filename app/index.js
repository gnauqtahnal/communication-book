import { Link } from 'expo-router'
import { Text, TouchableOpacity, View } from 'react-native'
import { CardComm } from '../components/card'

const Home = () => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Text>Home</Text>

      <Link
        href='/details'
        asChild
      >
        <TouchableOpacity>
          <Text>details</Text>
        </TouchableOpacity>
      </Link>

      <CardComm
        imageUri='https://picsum.photos/512/512'
        text='Lorem Picsum'
      />
    </View>
  )
}

export default Home
