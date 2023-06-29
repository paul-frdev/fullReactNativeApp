import React, { FC } from 'react'
import { Dimensions, Image, Text, TouchableOpacity } from 'react-native'
import { View } from 'react-native-animatable';


interface MovieCardProps {
  movie: number;
}
export const MovieCard: FC<MovieCardProps> = ({ movie }) => {
  const { width, height } = Dimensions.get('window')
  return (
    <View className='flex justify-center items-center w-full'>
      <TouchableOpacity>
        <Image className='rouded-3xl bg-cover w-full' source={require('../assets/moviePoster2.png')} style={{
          width: width * 0.8,
          height: height * 0.52
        }} />
        <Text className='text-white text-3xl'>
          {movie}
        </Text>
      </TouchableOpacity>
    </View>
  )
}
