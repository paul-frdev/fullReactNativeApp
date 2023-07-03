import React, { FC, useCallback } from 'react'
import { Dimensions, Text, View } from 'react-native'
import Carousel from 'react-native-reanimated-carousel'
import { MovieCard } from './MovieCard'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack/lib/typescript/src/types'
import { RootStackParamList } from '@/types/navigation'
import useGetMovies from '@/hooks/useGetMovies'
import { IMovie } from '@/types/movies'

interface TrendingMoviesCarouselProps {
  data?: any
}
const width = Dimensions.get('window').width;

export const TrendingMoviesCarousel: FC<TrendingMoviesCarouselProps> = ({ data }) => {
  const { navigate } = useNavigation<NativeStackNavigationProp<RootStackParamList>>()
  const { trendingMovies } = useGetMovies()

  const handleClick = useCallback((item: number) => {
    navigate('MovieScreen', { id: item })
  }, [navigate])

  return (
    <View className='mb-8 w-full items-center'>
      <Text className='mt-10 text-white text-xl font-bold mb-5'>Trending</Text>
      <Carousel
        data={trendingMovies}
        style={{
          width: width,
        }}
        renderItem={({ item }: { item: IMovie }) => <MovieCard movie={item} onClick={handleClick} />}
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
