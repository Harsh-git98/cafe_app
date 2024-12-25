import { View, Text, ScrollView,Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import icons from '@/constants/icons'

const explore = () => {
  return (
  <SafeAreaView>
    <View className='font-bold flex flex-row justify-between m-4'>
      <Text className='text-2xl font-rubik-medium'>Cafe-Cup</Text>
      <Image source={icons.home} className='size-6'/>
    </View>
    <ScrollView>
      <View>
        <Text>EXPLORE</Text>
        <Text>EXPLORE</Text><Text>EXPLORE</Text><Text>EXPLORE</Text><Text>EXPLORE</Text><Text>EXPLORE</Text><Text>EXPLORE</Text><Text>EXPLORE</Text><Text>EXPLORE</Text><Text>EXPLORE</Text><Text>EXPLORE</Text><Text>EXPLORE</Text><Text>EXPLORE</Text><Text>EXPLORE</Text><Text>EXPLORE</Text><Text>EXPLORE</Text><Text>EXPLORE</Text><Text>EXPLORE</Text><Text>EXPLORE</Text><Text>EXPLORE</Text><Text>EXPLORE</Text><Text>EXPLORE</Text><Text>EXPLORE</Text><Text>EXPLORE</Text><Text>EXPLORE</Text><Text>EXPLORE</Text><Text>EXPLORE</Text><Text>EXPLORE</Text><Text>EXPLORE</Text>
        <Text>EXPLORE</Text><Text>EXPLORE</Text><Text>EXPLORE</Text><Text>EXPLORE</Text><Text>EXPLORE</Text><Text>EXPLORE</Text><Text>EXPLORE</Text><Text>EXPLORE</Text><Text>EXPLORE</Text><Text>EXPLORE</Text><Text>EXPLORE</Text><Text>EXPLORE</Text><Text>EXPLORE</Text><Text>EXPLORE</Text><Text>EXPLORE</Text><Text>EXPLORE</Text><Text>EXPLORE</Text><Text>EXPLORE</Text><Text>EXPLORE</Text><Text>EXPLORE</Text><Text>EXPLORE</Text><Text>EXPLORE</Text><Text>EXPLORE</Text><Text>EXPLORE</Text><Text>EXPLORE</Text><Text>EXPLORE</Text><Text>EXPLORE</Text><Text>EXPLORE</Text>
      
      </View>
    </ScrollView>
    
 </SafeAreaView>
  )
}

export default explore