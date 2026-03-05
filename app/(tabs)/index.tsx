import MovieSection from "@/components/MovieSection";
import SearchBar from "@/components/SearchBar";
import TrendingHero from "@/components/TrendingHero";
import { fetchNowPlaying, fetchTopRated, fetchTrending } from "@/services/api";
import useFetch from "@/services/useFetch";
import { useRouter } from "expo-router";
import React from 'react';
import { ActivityIndicator, Image, RefreshControl, SafeAreaView, ScrollView, Text, View } from "react-native";

export default function Index() {
  const router = useRouter();

  const {
    data: trendingMovies,
    loading: trendingLoading,
    fetchData: refetchTrending,
  } = useFetch(() => fetchTrending('week'));

  const {
    data: nowPlayingMovies,
    fetchData: refetchNowPlaying,
  } = useFetch(() => fetchNowPlaying());

  const {
    data: topRatedMovies,
    fetchData: refetchTopRated,
  } = useFetch(() => fetchTopRated());

  const loading = trendingLoading;
  const featuredMovie = trendingMovies?.[0];

  const onRefresh = () => {
    refetchTrending();
    refetchNowPlaying();
    refetchTopRated();
  };

  return (
    <SafeAreaView className="flex-1 bg-black">
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 100 }}
        refreshControl={
          <RefreshControl
            refreshing={loading && !!trendingMovies}
            onRefresh={onRefresh}
            tintColor="#AB8EFF"
          />
        }
      >
        {/* Header */}
        <View className="px-4 py-4 flex-row items-center justify-between">
          <View className="flex-row items-center">
            <Image
              source={require('@/assets/images/app-logo.png')}
              className="w-10 h-10 rounded-lg"
              resizeMode="contain"
            />
            <Text className="text-white text-2xl font-outfit-bold ml-3">CinePlay</Text>
          </View>
          <View className="w-10 h-10 rounded-full bg-gray-900 items-center justify-center border border-gray-800">
            <Image
              source={require('@/assets/images/profile.png')}
              className="w-full h-full rounded-full"
            />
          </View>
        </View>

        <View className="px-4 mt-2">
          <Text className="text-light-200 text-lg font-outfit-regular">Hello, Yusuf 👋</Text>
          <Text className="text-white text-3xl font-outfit-bold mt-1">Ready for a movie?</Text>
        </View>

        <SearchBar onPress={() => router.push('/search')} placeholder='Search for movies...' />

        {loading && !trendingMovies ? (
          <View className="h-96 items-center justify-center">
            <ActivityIndicator size="large" color="#AB8EFF" />
            <Text className="text-light-300 mt-4 font-outfit-regular">Loading movies...</Text>
          </View>
        ) : (
          <>
            {featuredMovie && (
              <TrendingHero
                movie={featuredMovie}
                onWatchPress={() => router.push(`/movies/${featuredMovie.id}`)}
              />
            )}

            {nowPlayingMovies && nowPlayingMovies.length > 0 && (
              <MovieSection title="Now Playing" movies={nowPlayingMovies.slice(0, 10)} />
            )}

            {topRatedMovies && topRatedMovies.length > 0 && (
              <MovieSection title="Top Rated" movies={topRatedMovies.slice(0, 10)} />
            )}

            {trendingMovies && trendingMovies.length > 1 && (
              <MovieSection title="Trending This Week" movies={trendingMovies.slice(1, 11)} />
            )}
          </>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}
