import { Movie, getPosterUrl } from '@/services/api';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';

interface MovieCardProps {
  movie: Movie;
}

const MovieCard = ({ movie }: MovieCardProps) => {
  const router = useRouter();
  const posterUrl = getPosterUrl(movie.poster_path, 'w342');
  const rating = movie.vote_average.toFixed(1);

  return (
    <TouchableOpacity
      className="mr-4 w-32"
      onPress={() => router.push(`/movies/${movie.id}`)}
    >
      {posterUrl ? (
        <Image
          source={{ uri: posterUrl }}
          className="h-48 w-32 rounded-2xl mb-2"
          resizeMode="cover"
        />
      ) : (
        <View className="h-48 w-32 rounded-2xl mb-2 bg-dark-100 items-center justify-center">
          <Ionicons name="film-outline" size={32} color="#AB8EFF" />
        </View>
      )}
      <View className="flex-row items-center mb-1">
        <Ionicons name="star" size={12} color="#FFD700" />
        <Text className="text-white ml-1 text-xs font-outfit-medium">{rating}</Text>
      </View>
      <Text className="text-white text-sm font-outfit-semibold" numberOfLines={1}>
        {movie.title}
      </Text>
    </TouchableOpacity>
  );
};

export default MovieCard;
