import { Movie, getBackdropUrl, getPosterUrl } from '@/services/api';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { ImageBackground, Text, TouchableOpacity, View } from 'react-native';

interface TrendingHeroProps {
  movie: Movie;
  onWatchPress?: () => void;
}

const TrendingHero = ({ movie, onWatchPress }: TrendingHeroProps) => {
  const imageUrl = getBackdropUrl(movie.backdrop_path, 'w1280') ?? getPosterUrl(movie.poster_path, 'original') ?? undefined;
  const rating = movie.vote_average.toFixed(1);

  return (
    <View className="px-4 mt-8">
      <ImageBackground
        source={imageUrl ? { uri: imageUrl } : undefined}
        className="h-96 rounded-3xl overflow-hidden justify-end"
        imageStyle={{ borderRadius: 24 }}
      >
        <LinearGradient
          colors={['transparent', 'rgba(3,0,20,0.8)', '#030014']}
          className="p-6"
        >
          <View className="flex-row items-center mb-2">
            <View className="bg-accent/20 px-3 py-1 rounded-full border border-accent/30">
              <Text className="text-accent text-xs font-outfit-bold">TRENDING NOW</Text>
            </View>
            <View className="flex-row items-center ml-4">
              <Ionicons name="star" size={14} color="#FFD700" />
              <Text className="text-white ml-1 font-outfit-medium">{rating}</Text>
            </View>
          </View>

          <Text className="text-white text-3xl font-outfit-bold mb-2">{movie.title}</Text>
          <Text className="text-light-200 text-sm font-outfit-regular mb-4" numberOfLines={2}>
            {movie.overview}
          </Text>

          <TouchableOpacity
            className="bg-accent py-3 rounded-xl flex-row items-center justify-center"
            onPress={onWatchPress}
          >
            <Ionicons name="play" size={20} color="white" />
            <Text className="text-white ml-2 font-outfit-bold">Watch Now</Text>
          </TouchableOpacity>
        </LinearGradient>
      </ImageBackground>
    </View>
  );
};

export default TrendingHero;
