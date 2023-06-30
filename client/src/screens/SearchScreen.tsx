import { View, Text, Dimensions, SafeAreaView, TextInput, TouchableOpacity, ScrollView, TouchableWithoutFeedback, Image } from 'react-native'
import React, { useState } from 'react'
import { XMarkIcon } from 'react-native-heroicons/solid'
import { Colors } from '@/constants/colors'
import { RootStackParamList } from '@/types/navigation'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { useNavigation } from '@react-navigation/native'


const { width, height } = Dimensions.get('window')

export const SearchScreen = () => {

  const { navigate, push } = useNavigation<NativeStackNavigationProp<RootStackParamList>>()

  const [results, setResults] = useState([])

  const movieName = 'And-Man and Wasp'


  return (
    <SafeAreaView className='bg-neutral-900 flex-1' >
      <View className='mx-4 mb-3 flex-row justify-between items-center border border-neutral-500 rounded-full' >
        <TextInput placeholder='Search Movie' placeholderTextColor='lightgray' className='pb-1 pl-6 flex-1 text-base tracking-wider' />
        <TouchableOpacity onPress={() => navigate('HomeScreen')} className='rounded-full p-3 m-1 bg-neutral-500'>
          <XMarkIcon size={25} color={Colors.white} />
        </TouchableOpacity>
      </View>

      {/* Results */}
      {results.length > 0 ?
        (
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ paddingHorizontal: 15 }}
            className='space-y-3'
          >
            <Text className='text-white font-semibold ml-1'>Results: {results.length}</Text>
            <View className='flex-row justify-between flex-wrap'>
              {results.map(result => (
                <TouchableWithoutFeedback key={result} onPress={() => push('MovieScreen', { id: result })}>
                  <View className='mb-4 space-y-2'>
                    <Image
                      className='rounded-3xl'
                      source={require('../assets/moviePoster2.png')}
                      style={{ width: width * 0.44, height: height * 0.33 }}
                    />
                    <Text className='text-neutral-400 ml-1'>
                      {movieName.length > 20 ? movieName.slice(0, 20) + '...' : movieName}
                    </Text>
                  </View>
                </TouchableWithoutFeedback>
              ))}
            </View>
          </ScrollView>
        )
        : (
          <View className='flex-row justify-center'>
            <Image 
            source={require('../assets/movieTime.png')} 
            className='h-96 w-96'
            />
          </View>
        )
      }
    </SafeAreaView>
  )
}