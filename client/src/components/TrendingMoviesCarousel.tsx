import React, { FC } from 'react'
import { Text, View } from 'react-native'
import Carousel from "react-native-snap-carousel"
import { MovieCard } from './MovieCard'

interface TrendingMoviesCarouselProps {
  data: number[]
}
export const TrendingMoviesCarousel: FC<TrendingMoviesCarouselProps> = ({ data }) => {
  return (
    <View className='mb-8'>
      <Text className='mt-10 text-white text-xl font-bold mb-5'>Trending</Text>
      <Carousel
        data={data}
        renderItem={({ item }) => <MovieCard movie={item} />}
        firstItem={1}
        inactiveSlideOpacity={0.6}
        sliderWidth={600}
        itemWidth={400}
        slideStyle={{ display: 'flex', alignItems: 'center' }}
      />
    </View>
  )
}
