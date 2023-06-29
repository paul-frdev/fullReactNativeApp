import { MovieList } from '@/components/MovieList';
import { SearchBar } from '@/components/SearchBar';
import { TrendingMoviesCarousel } from '@/components/TrendingMoviesCarousel';
import React, { useState } from 'react'
import { Platform, ScrollView, Text, View } from 'react-native'



const ios = Platform.OS === 'ios';

export const HomeScreen = () => {
  const [trendingMovies, setTrendingMovies] = useState([1, 2, 3, 4])
  const [upcomingMovies, setUpcomingMovies] = useState([1, 2, 3, 4])
  const [topRated, setTopRated] = useState([1, 2, 3, 4])

  return (
    <View className="flex-1 bg-neutral-800">
      {/* search bar and logo */}
      <SearchBar />
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Trending movies carousel */}
        <TrendingMoviesCarousel data={trendingMovies} />
        {/* upcoming movies */}
        <MovieList title='Upcoming' data={upcomingMovies} />
          {/* top rated movies */}
        <MovieList title='Top Rated' data={topRated} />
      </ScrollView>
    </View>
  )
}
