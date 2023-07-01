import React, { FC } from 'react'
import { Dimensions, Image, Text, TouchableOpacity } from 'react-native'
import { View } from 'react-native-animatable';


interface MovieCardProps {
  movie: any;
  onClick: (item: any) => void;
}
export const MovieCard: FC<MovieCardProps> = ({ movie, onClick }) => {
  const { width, height } = Dimensions.get('window')
  return (
    <View className='flex justify-center items-center w-full'>
      <TouchableOpacity onPress={() => onClick(movie)}>
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
