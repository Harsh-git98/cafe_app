import Reviewcards from '@/components/discount';
import MenuCard from '@/components/MenuCard';
import images from '@/constants/images'
import React from 'react'
import { View ,Text, SafeAreaView, ScrollView,Image, FlatList} from 'react-native'
const newcards = [
  { title: '', description: '', image: images.menu },

];

const menucards = [
  { 
    name: 'Espresso', 
    description: 'A strong and rich shot of coffee to kickstart your day.', 
    image: images.expresso, 
    price: '₹100' 
  },
  
  { 
    name: 'Plain Cappuccino', 
    description: 'Classic cappuccino with frothy milk and a rich coffee base.', 
    image: images.plaincappucino, 
    price: '₹150' 
  },
  { 
    name: 'Americano', 
    description: 'A smooth and bold black coffee for a simple yet satisfying drink.', 
    image: images.americano, 
    price: '₹180' 
  },
  { 
    name: 'Latte', 
    description: 'A creamy coffee drink with steamed milk and a hint of sweetness.', 
    image: images.coldcoffee, 
    price: '₹150' 
  }
  ,{ 
    name: 'Red Sauce Pasta', 
    description: 'Delicious pasta in a tangy and flavorful tomato-based sauce.', 
    image: images.redpasta, 
    price: '₹250' 
  },
  { 
    name: 'White Sauce Pasta', 
    description: 'Creamy and cheesy pasta served with a rich white sauce.', 
    image: images.whitepasta, 
    price: '₹260' 
  },
  { 
    name: 'Green Sandwich', 
    description: 'A healthy sandwich with fresh veggies and a green pesto spread.', 
    image: images.greensandwich, 
    price: '₹200' 
  },
  { 
    name: 'Grilled Sandwich', 
    description: 'A toasty and flavorful sandwich filled with melted cheese and veggies.', 
    image: images.grilledsandwich, 
    price: '₹240' 
  }
];


function menu() {
  return (
    <SafeAreaView  style={{backgroundColor: '#f2d3bd', flex: 1}} >
        <ScrollView>
              <View className='font-bold flex flex-row justify-between p-2' style={{backgroundColor: '#af8064',borderRadius:10}} >
          <Text className='text-2xl font-rubik-medium p-3'>MENU</Text>
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
    <View>    
        <View className='flex-1 justify-end px-10 pt-5'>
          <Text className='text-3xl font-rubik-bold' style={{color: '#41221b'}}>Our Serving</Text>
          </View>
    </View>

<FlatList
        data={menucards}
        renderItem={({ item }: { item: { name: string; description: string; image: any } }) => (
          <View style={{ marginHorizontal: 10 }}>
            <MenuCard item={item} />
          </View>
        )}
        keyExtractor={(item: { name: string }) => item.name}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 10 ,marginBottom:80
        }}
    />
          </ScrollView>
          </SafeAreaView>
  )
}

export default menu
