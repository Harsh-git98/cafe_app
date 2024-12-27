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
import ContactButton from '@/components/contactButton'



const cards = [
  { title: 'Calm and Cozy', description: 'Experience tranquility with every sip.', image: images.shop1 },
  { title: 'Exquisite Coffee', description: 'Savor the finest brews coffee.', image: images.shop2 },
  { title: 'Stylish Ambiance', description: 'Step into a cafe with a unique theme.', image: images.shop3 },
  { title: 'Romantic Escape', description: 'A perfect spot for memorable dates.', image: images.shop4 },
  { title: 'Skyline Views', description: 'Enjoy your coffee with a rooftop view.', image: images.shop5 },
  // Add more cards here
];


const rcards = [
  { 
    name: 'Linda', 
    review: 'This cafe is a hidden gem! The serene atmosphere combined with the aroma of freshly brewed coffee makes it the perfect place to unwind after a long day. Their attention to detail is remarkable, and the staff is incredibly friendly and welcoming.', 
    rating: 5, 
    avatar: icons.person 
  },
  { 
    name: 'James', 
    review: 'I was looking for a quiet place to work, and this cafe exceeded all my expectations. The themed decor added a touch of elegance, and the coffee? Absolutely divine! The baristas are clearly passionate about what they do, and it shows in every cup.', 
    rating: 4.5, 
    avatar: icons.person 
  },
  { 
    name: 'Sophia', 
    review: 'From the moment I walked in, I was captivated by the ambiance. The cozy lighting, soft music, and warm decor create a welcoming vibe. The menu offers a variety of options, and the seasonal specials are worth trying. A must-visit for coffee lovers!', 
    rating: 5, 
    avatar: icons.person 
  },
  { 
    name: 'Ethan', 
    review: 'The rooftop view alone is worth visiting this cafe. Pair that with their exceptional coffee and delectable pastries, and you have a winning combination. It’s the ideal spot for a weekend hangout or a casual date. Highly recommended!', 
    rating: 4.8, 
    avatar: icons.person 
  },
  { 
    name: 'Olivia', 
    review: 'I came here on a whim and was pleasantly surprised. The cafe has a romantic charm, perfect for dates. The staff pays attention to every little detail, ensuring a memorable experience. The coffee is rich and flavorful, and the desserts are heavenly.', 
    rating: 5, 
    avatar: icons.person 
  },
];




const newcards = [
  { title: '', description: '', image: images.discount },

];
const explore = () => {
  return (
  <SafeAreaView  style={{backgroundColor: '#f2d3bd', flex: 1}} >
    <ScrollView>
          <View className='font-bold flex flex-row justify-between p-2' style={{backgroundColor: '#af8064'}} >
      <Text className='text-2xl font-rubik-medium p-3'>Home</Text>
      <Image source={images.icon} className='size-12'/>
    </View>
    
      <View>
        <Image source={images.banner} className='' style={{height: 250}} resizeMode='cover'/>
        <View className='flex-1 justify-end px-10 pt-5 absolute'>
          <Text className='text-8xl font-extrabold text-white mb-2'>Café Cup</Text>
          <Text className='text-2xl font-rubik-extrabold mb-10' style={{color: '#fff'}}>Your favorite coffee shop in one place</Text>
          </View>
      </View>


      <View>
        
        <View className='flex-1 justify-end px-10 pt-5'>
          <Text className='text-2xl font-rubik-extrabold' style={{color: '#41221b'}}>OUR SHOP</Text>
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
        
        <View className='flex-1 justify-end  px-10 mt-10 '>
          <Text className='text-2xl font-rubik-extrabold ' style={{color: '#41221b'}}>Featured</Text>
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
        contentContainerStyle={{ paddingBottom: 32, marginBottom:10 }}
        columnWrapperStyle={{ flexWrap: 'wrap', gap: 5, paddingHorizontal: 5 }}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={() => (
          <View style={{ }} className="mt-10">
            <Text style={{ marginBottom: 16 }} className='text-2xl font-rubik-extrabold px-10'>
              Reviews:
              </Text>
          </View>
        )}
      />
      <ContactButton/>

      </ScrollView>

 </SafeAreaView>


  )
}

export default explore