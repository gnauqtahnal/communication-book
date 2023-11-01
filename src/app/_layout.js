import { Stack } from 'expo-router'
import 'react-native-get-random-values'

const Layout = () => {
  return (
    <Stack
      screenOptions={{
        headerShown: true,
        headerTitle: '',
        // headerStyle: { backgroundColor: 'rgba(255,200,28,0.9)' },
      }}
    />
  )
}

export default Layout
