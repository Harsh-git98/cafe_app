import { View, Text, ScrollView,Image, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import icons from '@/constants/icons'
import images from '@/constants/images'
import { Card, FeaturedCard } from '@/components/Cards'
import { cards, featuredCards } from '@/constants/data'
const explore = () => {
  return (
  <SafeAreaView  style={{backgroundColor: '#f2d3bd'}}>
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
      
      <FlatList
        data={cards} // Use cards here
        numColumns={2}
        renderItem={({ item }) => <FeaturedCard item={item} />} // Ensure you have a Card component defined
        keyExtractor={(item) => item.title} // Assuming title is unique for each item
        contentContainerStyle={{ paddingBottom: 32 }}
        columnWrapperStyle={{ flexWrap: 'wrap', gap: 5, paddingHorizontal: 5 }}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={() => (
          <View className="px-5">
            <View className="flex flex-row items-center justify-between mt-5">
              <TouchableOpacity  className="flex flex-row bg-primary-200 rounded-full size-11 items-center justify-center">
                <Image source={icons.backArrow} className="size-5" />
              </TouchableOpacity>

              <Text className="text-base mr-2 text-center font-rubik-medium text-black-300">
                Search for Your Ideal Home
              </Text>
              <Image source={icons.bell} className="w-6 h-6" />
            </View>

            <Text className="text-xl font-rubik-bold text-black-300 mt-5">
              Found {cards.length} Properties
            </Text>
          </View>
        )}
      />
 </SafeAreaView>


  )
}

export default explore