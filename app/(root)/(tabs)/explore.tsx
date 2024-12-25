import { View, Text, ScrollView,Image, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import icons from '@/constants/icons'
import images from '@/constants/images'
import {  featuredCards } from '@/constants/data'
import FeatureCard from '@/components/Featurecards'


const cards = [
  { title: 'House 1', description: 'Beautiful 3BHK House', image: 'path-to-image1' },
  { title: 'House 2', description: 'Modern 2BHK Apartment', image: 'path-to-image2' },
  { title: 'House 2', description: 'Modern 2BHK Apartment', image: 'path-to-image2' },
  { title: 'House 2', description: 'Modern 2BHK Apartment', image: 'path-to-image2' },
  { title: 'House 2', description: 'Modern 2BHK Apartment', image: 'path-to-image2' },
  // Add more cards here
];
const explore = () => {
  return (
  <SafeAreaView  style={{backgroundColor: '#f2d3bd', flex: 1}} >
    <ScrollView>
          <View className='font-bold flex flex-row justify-between p-2' style={{backgroundColor: '#af8064'}} >
      <Text className='text-2xl font-rubik-medium p-3'>Cafe-Cup</Text>
      <Image source={images.icon} className='size-12'/>
    </View>
    
      <View>
        <Image source={images.splash_cafe} className='' style={{height: 250}} resizeMode='cover'/>
        <View className='flex-1 justify-end px-10 pt-5 absolute'>
          <Text className='text-8xl font-extrabold text-white mb-2'>Café Cup</Text>
          <Text className='text-2xl font-rubik-extrabold mb-10' style={{color: '#fff'}}>Your favorite coffee shop in one place</Text>
          </View>
      </View>


      <View>
        
        <View className='flex-1 justify-end px-10 pt-5'>
          <Text className='text-2xl font-rubik-extrabold' style={{color: '#faeb78'}}>Your favorite coffee shop in one place</Text>
          </View>
      </View>
      
      <FlatList
        data={cards}
        horizontal={true} // Enables horizontal scrolling
        renderItem={({ item }) => (
          <View style={{ marginHorizontal: 10 }}>
            <FeatureCard item={item} />
          </View>
        )}
        keyExtractor={(item) => item.title}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 10 }}
      />


      </ScrollView>

 </SafeAreaView>


  )
}

export default explore