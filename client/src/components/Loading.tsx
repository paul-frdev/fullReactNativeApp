import { Colors } from '@/constants/colors';
import React from 'react'
import { View, Text, Dimensions } from 'react-native'
import * as Progress from 'react-native-progress';


const { width, height } = Dimensions.get('window');

export const Loading = () => {
  return (
    <View style={{ width, height }} className='absolute flex-row justify-center items-center'>
      <Progress.CircleSnail thickness={12} size={160} color={Colors.yellow} />
    </View>
  )
}