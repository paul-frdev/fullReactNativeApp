import { SearchBar } from '@/components/SearchBar';
import { TrendingMoviesCarousel } from '@/components/TrendingMoviesCarousel';
import React, { useState } from 'react'
import { Platform, ScrollView, Text, View } from 'react-native'



const ios = Platform.OS === 'ios';

export const HomeScreen = () => {
  const [trendingMovies, setTrendingMovies] = useState([1, 2, 3, 4])
  return (
    <View className="flex-1 bg-neutral-800">
      {/* search bar and logo */}
      <SearchBar />
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Trending movies carousel */}
        <TrendingMoviesCarousel data={trendingMovies} />
      </ScrollView>
    </View>
  )
}
