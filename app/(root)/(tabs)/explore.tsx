import { View, Text, ScrollView,Image, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import icons from '@/constants/icons'
import images from '@/constants/images'
import {  featuredCards } from '@/constants/data'
import FeatureCard from '@/components/Featurecards'
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  interpolate,
  Extrapolate,
} from 'react-native-reanimated';
import Reviewcards from '@/components/discount'
import ReviewCard from '@/components/Reviews'



const cards = [
  { title: 'Ascetic Vibe', description: '', image: images.shop1 },
  { title: 'Best coffee', description: '', image: images.shop2},
  { title: 'Themed Cafe', description: '', image: images.shop3},
  { title: 'Perfect Date', description: '', image: images.shop4},
  { title: 'Rooftop Facility', description: '', image: images.shop5},
  // Add more cards here
];

const rcards = [
  { name: 'Linda',review:' Awesome vibe here and 20 words ', rating: 5, avatar: icons.person },
  { name: 'House 2',review:' BEst Cafe and perfect for date', rating: 5, avatar: icons.person },
  { name: 'Linda',review:' Awesome vibe here and 20 words ', rating: 5, avatar: icons.person },
  { name: 'House 2',review:' BEst Cafe and perfect for date', rating: 5, avatar: icons.person },
 
  { name: 'Linda',review:' Awesome vibe here and 20 words ', rating: 5, avatar: icons.person },
  { name: 'House 2',review:' BEst Cafe and perfect for date', rating: 5, avatar: icons.person },
 
 
];



const newcards = [
  { title: '', description: '', image: images.discount },

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
          <Text className='text-3xl font-rubik-bold' style={{color: '#41221b'}}>OUR SHOP</Text>
          </View>
      </View>
      
      <FlatList
        data={cards}
        horizontal={true} // Enables horizontal scrolling
        renderItem={({ item }: { item: { title: string; description: string; image: any } }) => (
          <View style={{ marginHorizontal: 10, width: 250 }}>
            <FeatureCard item={item} />
          </View>
        )}
        keyExtractor={(item) => item.title}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 10 }}
      />
      <View>
        
        <View className='flex-1 justify-end px-10 pt-5'>
          <Text className='text-2xl font-rubik-extrabold' style={{color: '#41221b'}}>Featured</Text>
          </View>
      </View>

    <FlatList
        data={newcards}
        renderItem={({ item }: { item: { title: string; description: string; image: any } }) => (
          <View style={{ marginHorizontal: 10 }}>
            <Reviewcards item={item} />
          </View>
        )}
        keyExtractor={(item: { title: string }) => item.title}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 10 }}
    />


<FlatList
        data={rcards} // Use cards here
        numColumns={2}
        renderItem={({ item }) => <ReviewCard item={item} />} // Ensure you have a Card component defined
        keyExtractor={(item) => item.name} // Assuming title is unique for each item
        contentContainerStyle={{ paddingBottom: 32 }}
        columnWrapperStyle={{ flexWrap: 'wrap', gap: 5, paddingHorizontal: 5 }}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={() => (
          <View style={{ paddingHorizontal: 16 }} className="mt-2">
            <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 16 }}>
              Reviews:
              </Text>
          </View>
        )}
      />

      </ScrollView>

 </SafeAreaView>


  )
}

export default explore