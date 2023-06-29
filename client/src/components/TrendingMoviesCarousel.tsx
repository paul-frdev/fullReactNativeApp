import React, { FC } from 'react'
import { Dimensions, Text, View } from 'react-native'
import Carousel from 'react-native-reanimated-carousel'
import { MovieCard } from './MovieCard'

interface TrendingMoviesCarouselProps {
  data: number[]
}
export const TrendingMoviesCarousel: FC<TrendingMoviesCarouselProps> = ({ data }) => {
  const width = Dimensions.get('window').width;

  return (
    <View className='mb-8 w-full items-center'>
      <Text className='mt-10 text-white text-xl font-bold mb-5'>Trending</Text>
      <Carousel
        data={data}
        style={{
          width: width,
        }}
        renderItem={({ item }) => <MovieCard movie={item} />}
        autoPlayInterval={3000}
        mode="parallax"
        modeConfig={{
          parallaxScrollingScale: 0.9,
          parallaxScrollingOffset: 110,
        }}
        loop
        width={width}
        height={width}
        autoPlay={true}
        scrollAnimationDuration={1000}
      />
    </View>
  )
}
