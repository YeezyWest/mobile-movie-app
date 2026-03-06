import { Movie } from '@/services/api';
import React, { useCallback } from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import MovieCard from './MovieCard';

interface MovieSectionProps {
  title: string;
  movies: Movie[];
  onSeeAll?: () => void;
}

const MovieSection = React.memo(({ title, movies, onSeeAll }: MovieSectionProps) => {
  const renderItem = useCallback(({ item }: { item: Movie }) => <MovieCard movie={item} />, []);
  const keyExtractor = useCallback((item: Movie) => item.id.toString(), []);

  return (
    <View className="mt-8 px-4">
      <View className="flex-row items-center justify-between mb-4">
        <Text className="text-white text-xl font-outfit-bold">{title}</Text>
        <TouchableOpacity onPress={onSeeAll}>
          <Text className="text-accent text-sm font-outfit-medium">See All</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={movies}
        keyExtractor={keyExtractor}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={renderItem}
        removeClippedSubviews={true}
        contentContainerStyle={{ paddingRight: 16 }}
        initialNumToRender={5}
        maxToRenderPerBatch={5}
        windowSize={5}
      />
    </View>
  );
});

export default MovieSection;
