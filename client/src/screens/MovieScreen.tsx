import React, { useEffect, useState } from 'react'
import { Colors } from '@/constants/colors'
import { PlaceDetailsRouteProps, RootStackParamList } from '@/types/navigation'
import { useNavigation, useRoute } from '@react-navigation/native'
import { Dimensions, Image, Platform } from 'react-native'
import { SafeAreaView, ScrollView, TouchableOpacity, View } from 'react-native'
import { ChevronLeftIcon } from 'react-native-heroicons/outline'
import { HeartIcon } from "react-native-heroicons/solid"
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import clsx from 'clsx'
import LinearGradient from 'react-native-linear-gradient'



const { width, height } = Dimensions.get('window')
const platformIOS = Platform.OS === 'ios';


export const MovieScreen = () => {
  const { params } = useRoute<PlaceDetailsRouteProps>()
  const { goBack } = useNavigation<NativeStackNavigationProp<RootStackParamList>>()

  const [isFavorite, setIsFavorite] = useState(false)

  useEffect(() => {

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
            colors={['#4c669f', '#3b5998', '#192f6a']}
            style={{ width, height: height * 0.22 }}
            start={{ x: 0.5, y: 0 }}
            end={{ x: 0.5, y: 1 }}
            className='absolute bottom-0'
          />
        </View>
      </View>
    </ScrollView>
  )
}
