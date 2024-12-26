import Reviewcards from '@/components/discount';
import MenuCard from '@/components/MenuCard';
import images from '@/constants/images'
import React from 'react'
import { View ,Text, SafeAreaView, ScrollView,Image, FlatList} from 'react-native'
const newcards = [
  { title: '', description: '', image: images.splash_cafe },

];

const menucards = [
  { name: '67777', description: '', image: images.splash_cafe , price:'rs.700'},
  { name: '6777', description: '', image: images.splash_cafe , price:'rs.700'},
  { name: '677', description: '', image: images.splash_cafe , price:'rs.700'},
];


function menu() {
  return (
    <SafeAreaView  style={{backgroundColor: '#f2d3bd', flex: 1}} >
        <ScrollView>
              <View className='font-bold flex flex-row justify-between p-2' style={{backgroundColor: '#af8064'}} >
          <Text className='text-2xl font-rubik-medium p-3'>Cafe-Cup</Text>
          <Image source={images.icon} className='size-12'/>
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
        data={menucards}
        renderItem={({ item }: { item: { name: string; description: string; image: any } }) => (
          <View style={{ marginHorizontal: 10 }}>
            <MenuCard item={item} />
          </View>
        )}
        keyExtractor={(item: { name: string }) => item.name}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 10 }}
    />
          </ScrollView>
          </SafeAreaView>
  )
}

export default menu
