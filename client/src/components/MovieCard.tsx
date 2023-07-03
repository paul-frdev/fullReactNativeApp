import { image500 } from '@/helpers';
import { IMovie } from '@/types/movies';
import React, { FC } from 'react'
import { Dimensions, Image, TouchableOpacity } from 'react-native'
import { View } from 'react-native-animatable';


interface MovieCardProps {
  movie: IMovie;
  onClick: (item: any) => void;
}
export const MovieCard: FC<MovieCardProps> = ({ movie, onClick }) => {
  const { width, height } = Dimensions.get('window')

  return (
    <View className='flex justify-center items-center w-full'>
      <TouchableOpacity onPress={() => onClick(movie)}>
        <Image className='rouded-3xl bg-cover w-full' source={{ uri: image500(movie?.poster_path) as string | undefined }} style={{
          width: width * 0.8,
          height: height * 0.52
        }} />
      </TouchableOpacity>
    </View>
  )
}
