import { View, Text, Dimensions, Platform, ScrollView, SafeAreaView, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import { ChevronLeftIcon, HeartIcon } from 'react-native-heroicons/outline'
import clsx from 'clsx'
import { RootStackParamList } from '@/types/navigation'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { useNavigation } from '@react-navigation/native'
import { Colors } from '@/constants/colors'
import { MovieList } from '@/components/MovieList'

const { width, height } = Dimensions.get('window')
const ios = Platform.OS === 'ios'

export const PersonScreen = () => {
  const { goBack } = useNavigation<NativeStackNavigationProp<RootStackParamList>>()

  const [personMovies, setPersonMovies] = useState([1, 2, 3, 4])

  const [isFavorite, setIsFavorite] = useState(false)
  return (
    <ScrollView className='flex-1 bg-neutral-900' contentContainerStyle={{ paddingBottom: 20, margin: ios ? 15 : 0 }}>
      <SafeAreaView className={`${clsx(ios ? 'py-3' : '')} absolute z-20 w-full flex-row justify-between items-center`}>
        <TouchableOpacity onPress={() => goBack()} style={{ backgroundColor: Colors.yellow }} className='rounded-xl p-1'>
          <ChevronLeftIcon size={28} strokeWidth={2.5} color='white' />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setIsFavorite(!isFavorite)}>
          <HeartIcon size={28} color={isFavorite ? Colors.red : Colors.white} />
        </TouchableOpacity>
      </SafeAreaView>
      {/* person details */}
      <View className='mt-16'>
        <View className='flex-row justify-center' style={{ shadowColor: 'gray', shadowRadius: 40, shadowOffset: { width: 0, height: 5 }, shadowOpacity: 1 }}>
          <View className='items-center rounded-full overflow-hidden h-72 w-72 border-2 border-neutral-500' >
            <Image source={require('../assets/moviePoster2.png')}
              style={{ height: height * 0.43, width: width * 0.74, }}
            />
          </View>
        </View>
        <View className='mt-6'>
          <Text className='text-white text-3xl font-bold text-center' >
            Keanu Reevs
          </Text>
          <Text className=' text-neutral-400 text-base font-normal text-center' >
            London, United Kingdom
          </Text>
        </View>
        <View className='mt-6 p-4 flex-row justify-between items-center bg-neutral-700 rounded-full'>
          <View className='border-r-2 border-r-neutral-400 px-2 items-center' >
            <Text className='text-white font-semibold' >Gender</Text>
            <Text className=' text-neutral-400 text-sm' >Male</Text>
          </View>
          <View className='border-r-2 border-r-neutral-400 px-2 items-center' >
            <Text className='text-white font-semibold' >Birthday</Text>
            <Text className=' text-neutral-400 text-sm' >1964-10-23</Text>
          </View>
          <View className='border-r-2 border-r-neutral-400 px-2 items-center' >
            <Text className='text-white font-semibold' >Known for</Text>
            <Text className=' text-neutral-400 text-sm' >Acting</Text>
          </View>
          <View className='px-2 items-center' >
            <Text className='text-white font-semibold' >Popularity</Text>
            <Text className=' text-neutral-400 text-sm' >64.23</Text>
          </View>
        </View>
        <View className='my-6 mx-4 space-y-2' >
          <Text className='text-white text-lg' >Biography</Text>
          <Text className='text-neutral-400 tracking-wide' >
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem debitis maiores est, praesentium aspernatur illo sunt porro quisquam a quis recusandae quos inventore enim, amet accusantium quo accusamus, totam iusto!
          </Text>
        </View>
        {/* Movies list */}
        <MovieList title='Personal Movies' seeAllShow={false} data={personMovies} />
      </View>
    </ScrollView>
  )
}