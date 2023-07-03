import React, { useEffect, useState } from 'react'
import { Colors } from '@/constants/colors'
import { PlaceDetailsRouteProps, RootStackParamList } from '@/types/navigation'
import { useNavigation, useRoute } from '@react-navigation/native'
import { Dimensions, Image, Platform, Text } from 'react-native'
import { SafeAreaView, ScrollView, TouchableOpacity, View } from 'react-native'
import { ChevronLeftIcon } from 'react-native-heroicons/outline'
import { HeartIcon } from "react-native-heroicons/solid"
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import clsx from 'clsx'
import { LinearGradient } from 'expo-linear-gradient'
import { Cast } from '@/components/Cast'
import { MovieList } from '@/components/MovieList'
import useGetMovies from '@/hooks/useGetMovies'



const { width, height } = Dimensions.get('window')
const platformIOS = Platform.OS === 'ios';


export const MovieScreen = () => {
  const { params } = useRoute<PlaceDetailsRouteProps>()
  const { goBack } = useNavigation<NativeStackNavigationProp<RootStackParamList>>()
  const { getMovieById, movieById } = useGetMovies()

  const [isFavorite, setIsFavorite] = useState(false)
  const [cast, setCast] = useState(['one', 'two', 'three'])
  const [similarMovies, setSimilarMovies] = useState([1, 2, 3, 4, 5])


  console.log('params.id', params.id);
  console.log('movieById', movieById);



  useEffect(() => {
    getMovieById(+params.id)
  }, [params?.id])


  return (
    <ScrollView
      contentContainerStyle={{ marginBottom: 20 }}
      className='flex-1 bg-neutral-900 px-2'
    >
      {/* add button and movie poster */}
      <View className='w-full'>
        <SafeAreaView className={`${clsx(platformIOS ? 'mt-3' : '')} absolute z-20 w-full flex-row justify-between items-center`}>
          <TouchableOpacity onPress={() => goBack()} style={{ backgroundColor: Colors.yellow }} className='rounded-xl p-1'>
            <ChevronLeftIcon size={28} strokeWidth={2.5} color='white' />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setIsFavorite(!isFavorite)}>
            <HeartIcon size={28} color={isFavorite ? Colors.red : Colors.white} />
          </TouchableOpacity>
        </SafeAreaView>
        <View>
          <Image source={require('../assets/moviePoster2.png')} style={{ width, height: height * 0.55 }} />
          <LinearGradient
            colors={['transparent', 'rgba(23, 23, 23, 0.8)', 'rgba(23, 23, 23, 1)']}
            style={{ width, height: height * 0.22 }}
            start={{ x: 0.5, y: 0 }}
            end={{ x: 0.5, y: 1 }}
            className='absolute bottom-0'
          />
        </View>
      </View>

      {/* movie details */}
      <View style={{ marginTop: -height * 0.09 }} className='space-y-3'>
        <Text className='text-white text-center text-3xl font-bold tracking-wider'>
          Ant-Man and the Wasp
        </Text>
        <Text className='text-neutral-400 font-semibold text-base text-center'>
          Released - 2020 - 170 min
        </Text>
      </View>
      {/* genres */}
      <View className='flex-row justify-center mx-4 space-x-2'>
        <Text className='text-base text-neutral-400 font-semibold text-center'>
          Acton
        </Text>
        <Text className='text-base text-neutral-400 font-semibold text-center'>
          Thrill
        </Text>
        <Text className='text-base text-neutral-400 font-semibold text-center'>
          Comedy
        </Text>
      </View>
      {/* description */}
      <Text className='text-neutral-400 tracking-wide mx-4'>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque magni deleniti facere officiis voluptatum voluptas sunt corporis iste commodi numquam similique, minima eveniet excepturi doloremque aut reiciendis nihil eius odit!
      </Text>

      {/* cast */}
      <Cast authors={cast} />
      {/* similar movies */}
      <MovieList title='Similar Movies' data={similarMovies} seeAllShow={false} />
    </ScrollView>
  )
}
