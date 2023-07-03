import { Loading } from '@/components/Loading';
import { MovieList } from '@/components/MovieList';
import { SearchBar } from '@/components/SearchBar';
import { TrendingMoviesCarousel } from '@/components/TrendingMoviesCarousel';
import useGetMovies from '@/hooks/useGetMovies';
import React, { useState } from 'react'
import { Platform, ScrollView, View } from 'react-native'



const ios = Platform.OS === 'ios';

export const HomeScreen = () => {
  const { loading, upcomingMovies, topRated } = useGetMovies()


  return (
    <View className="flex-1 bg-neutral-800">
      {loading ? (
        <Loading />
      ) : (
        <>
          {/* search bar and logo */}
          <SearchBar />
          <ScrollView showsVerticalScrollIndicator={false}>
            {/* Trending movies carousel */}
            <TrendingMoviesCarousel />
            {/* upcoming movies */}
            <MovieList loading={loading} title='Upcoming' data={upcomingMovies} />
            {/* top rated movies */}
            <MovieList title='Top Rated' data={topRated} />
          </ScrollView>
        </>
      )
      }
    </View>
  )
}
