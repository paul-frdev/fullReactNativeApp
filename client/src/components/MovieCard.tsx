import React, { FC } from 'react'
import { TouchableOpacity } from 'react-native'


interface MovieCardProps {
  movie: number;
}
export const MovieCard: FC<MovieCardProps> = ({ movie }) => {
  return (
    <TouchableOpacity>

    </TouchableOpacity>
  )
}
