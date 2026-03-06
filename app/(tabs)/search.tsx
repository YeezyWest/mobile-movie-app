import MovieCard from "@/components/MovieCard";
import SearchBar from "@/components/SearchBar";
import { Movie, searchMovies } from "@/services/api";
import { useRouter } from "expo-router";
import React, { useCallback, useEffect, useRef, useState } from "react";
import {
    ActivityIndicator,
    FlatList,
    SafeAreaView,
    Text,
    View,
} from "react-native";

export default function SearchScreen() {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(false);
  const [searched, setSearched] = useState(false);
  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleSearch = useCallback(async (text: string) => {
    if (!text.trim()) {
      setResults([]);
      setSearched(false);
      return;
    }
    setLoading(true);
    setSearched(true);
    try {
      const data = await searchMovies(text);
      setResults(data);
    } catch {
      setResults([]);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (debounceRef.current) clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(() => {
      handleSearch(query);
    }, 400);
    return () => {
      if (debounceRef.current) clearTimeout(debounceRef.current);
    };
  }, [query, handleSearch]);

  const renderItem = useCallback(({ item }: { item: Movie }) => <MovieCard movie={item} />, []);
  const keyExtractor = useCallback((item: Movie) => item.id.toString(), []);

  return (
    <SafeAreaView className="flex-1 bg-black">
      {/* Header */}
      <View className="px-4 py-4 flex-row items-center">
        <View className="flex-1">
          <Text className="text-white text-2xl font-outfit-bold">Search</Text>
          <Text className="text-light-300 text-sm font-outfit-regular mt-1">
            Find your next favourite movie
          </Text>
        </View>
      </View>

      <SearchBar
        value={query}
        onChangeText={setQuery}
        onClear={() => setQuery("")}
        placeholder="Search movies, actors..."
        editable
      />

      {/* Results */}
      <View className="flex-1 mt-6">
        {loading ? (
          <View className="flex-1 items-center justify-center">
            <ActivityIndicator size="large" color="#AB8EFF" />
            <Text className="text-light-300 mt-3 font-outfit-regular">Searching...</Text>
          </View>
        ) : !searched ? (
          <View className="flex-1 items-center justify-center px-8">
            <Text className="text-6xl mb-4">🎬</Text>
            <Text className="text-white text-xl font-outfit-bold text-center mb-2">
              What are you looking for?
            </Text>
            <Text className="text-light-300 text-base font-outfit-regular text-center">
              Start typing to search from thousands of movies
            </Text>
          </View>
        ) : results.length === 0 ? (
          <View className="flex-1 items-center justify-center px-8">
            <Text className="text-5xl mb-4">😞</Text>
            <Text className="text-white text-xl font-outfit-bold text-center mb-2">
              No results found
            </Text>
            <Text className="text-light-300 text-base font-outfit-regular text-center">
              Try a different title or keyword
            </Text>
          </View>
        ) : (
          <FlatList
            data={results}
            keyExtractor={keyExtractor}
            numColumns={3}
            contentContainerStyle={{ paddingHorizontal: 16, paddingBottom: 100 }}
            columnWrapperStyle={{ justifyContent: 'flex-start', gap: 8, marginBottom: 8 }}
            renderItem={renderItem}
            removeClippedSubviews={true}
            initialNumToRender={10}
            maxToRenderPerBatch={10}
            windowSize={10}
            showsVerticalScrollIndicator={false}
          />
        )}
      </View>
    </SafeAreaView>
  );
}