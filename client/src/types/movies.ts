import { ImageSourcePropType } from 'react-native';

export interface IMovie {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  media_type: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string | undefined;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}
