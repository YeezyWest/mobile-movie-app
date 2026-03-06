import MovieCard from '@/components/MovieCard';
import { useSaveContext } from '@/context/SaveContext';
import React from 'react';
import { FlatList, SafeAreaView, Text, View } from 'react-native';

const Saved = () => {
  const { savedMovies } = useSaveContext();

  return (
    <SafeAreaView className="flex-1 bg-black">
      {/* Header */}
      <View className="px-4 py-4 mt-2">
        <Text className="text-white text-2xl font-outfit-bold">Saved Movies</Text>
        <Text className="text-light-300 text-sm font-outfit-regular mt-1">
          Your personal watchlist
        </Text>
      </View>

      <View className="flex-1 mt-2">
        {savedMovies.length === 0 ? (
          <View className="flex-1 items-center justify-center px-8">
            <Text className="text-5xl mb-4">🍿</Text>
            <Text className="text-white text-xl font-outfit-bold text-center mb-2">
              No saved movies yet
            </Text>
            <Text className="text-light-300 text-base font-outfit-regular text-center">
              Explore and save your favorite movies to watch them later
            </Text>
          </View>
        ) : (
          <FlatList
            data={savedMovies}
            keyExtractor={(item) => item.id.toString()}
            numColumns={3}
            contentContainerStyle={{ paddingHorizontal: 16, paddingBottom: 100 }}
            columnWrapperStyle={{ justifyContent: 'flex-start', gap: 8, marginBottom: 8 }}
            renderItem={({ item }) => <MovieCard movie={item} />}
            showsVerticalScrollIndicator={false}
          />
        )}
      </View>
    </SafeAreaView>
  );
};

export default Saved;