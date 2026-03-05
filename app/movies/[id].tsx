import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { useLocalSearchParams, useRouter } from "expo-router";
import React from "react";
import {
  ActivityIndicator,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import MovieSection from "@/components/MovieSection";
import {
  MovieDetails,
  fetchMovieDetails,
  fetchSimilarMovies,
  getBackdropUrl,
  getPosterUrl,
} from "@/services/api";
import useFetch from "@/services/useFetch";

const formatRuntime = (minutes: number) => {
  if (!minutes) return "N/A";
  const h = Math.floor(minutes / 60);
  const m = minutes % 60;
  return h > 0 ? `${h}h ${m}m` : `${m}m`;
};

const formatMoney = (amount: number) => {
  if (!amount) return null;
  if (amount >= 1_000_000_000) return `$${(amount / 1_000_000_000).toFixed(1)}B`;
  return `$${(amount / 1_000_000).toFixed(0)}M`;
};

export default function MovieDetailScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const router = useRouter();
  const insets = useSafeAreaInsets();

  const { data: movie, loading } = useFetch<MovieDetails>(
    () => fetchMovieDetails(Number(id))
  );
  const { data: similar } = useFetch(() => fetchSimilarMovies(Number(id)));

  if (loading || !movie) {
    return (
      <View className="flex-1 bg-black items-center justify-center">
        <ActivityIndicator size="large" color="#AB8EFF" />
        <Text className="text-light-300 mt-4 font-outfit-regular">Loading...</Text>
      </View>
    );
  }

  const backdropUrl = getBackdropUrl(movie.backdrop_path, 'w1280');
  const posterUrl = getPosterUrl(movie.poster_path, 'w500');
  const rating = movie.vote_average.toFixed(1);
  const year = movie.release_date?.split('-')[0] ?? '';

  const statItems = [
    { label: 'Rating', value: rating, icon: 'star' as const, color: '#FFD700' },
    { label: 'Year', value: year, icon: 'calendar-outline' as const, color: '#AB8EFF' },
    { label: 'Runtime', value: formatRuntime(movie.runtime), icon: 'time-outline' as const, color: '#AB8EFF' },
    { label: 'Votes', value: `${(movie.vote_count / 1000).toFixed(0)}K`, icon: 'people-outline' as const, color: '#AB8EFF' },
  ];

  return (
    <View className="flex-1 bg-black">
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 60 }}>

        {/* ── HERO SECTION ── */}
        <View style={{ height: 360 }}>
          {backdropUrl ? (
            <Image
              source={{ uri: backdropUrl }}
              style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}
              resizeMode="cover"
            />
          ) : (
            <View style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: '#1a172f' }} />
          )}

          {/* Deep gradient overlay */}
          <LinearGradient
            colors={['rgba(0,0,0,0.1)', 'rgba(0,0,0,0.5)', '#000000']}
            locations={[0, 0.6, 1]}
            style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}
          />

          {/* Back button */}
          <TouchableOpacity
            onPress={() => router.back()}
            style={{ position: 'absolute', top: insets.top + 8, left: 16 }}
            className="w-10 h-10 rounded-full bg-black/50 items-center justify-center"
          >
            <Ionicons name="arrow-back" size={22} color="white" />
          </TouchableOpacity>
        </View>

        {/* ── MAIN CONTENT (overlaps hero with -mt) ── */}
        <View className="px-5 -mt-20">

          {/* Poster + Title row */}
          <View className="flex-row items-end mb-5">
            {posterUrl && (
              <View style={{ shadowColor: '#AB8EFF', shadowOffset: { width: 0, height: 8 }, shadowOpacity: 0.4, shadowRadius: 16 }}>
                <Image
                  source={{ uri: posterUrl }}
                  className="w-32 h-48 rounded-2xl"
                  resizeMode="cover"
                />
              </View>
            )}
            <View className="flex-1 ml-4 pb-2">
              <Text className="text-white text-2xl font-outfit-bold leading-tight" numberOfLines={3}>
                {movie.title}
              </Text>
              {movie.tagline ? (
                <Text className="text-accent text-xs font-outfit-regular italic mt-2 leading-5" numberOfLines={2}>
                  "{movie.tagline}"
                </Text>
              ) : null}
              {/* Genre tags */}
              <View className="flex-row flex-wrap mt-3 gap-1">
                {movie.genres?.slice(0, 3).map((g) => (
                  <View key={g.id} className="bg-accent/20 px-2 py-1 rounded-full border border-accent/30">
                    <Text className="text-accent text-xs font-outfit-medium">{g.name}</Text>
                  </View>
                ))}
              </View>
            </View>
          </View>

          {/* ── STATS ROW ── */}
          <View className="flex-row justify-between bg-dark-100 rounded-2xl px-4 py-4 mb-6">
            {statItems.map((item, index) => (
              <React.Fragment key={item.label}>
                <View className="items-center flex-1">
                  <Ionicons name={item.icon} size={18} color={item.color} />
                  <Text className="text-white font-outfit-bold text-sm mt-1">{item.value}</Text>
                  <Text className="text-light-300 text-xs font-outfit-regular">{item.label}</Text>
                </View>
                {index < statItems.length - 1 && (
                  <View className="w-px bg-gray-800 self-stretch mx-1" />
                )}
              </React.Fragment>
            ))}
          </View>

          {/* ── OVERVIEW ── */}
          <View className="mb-6">
            <Text className="text-white text-lg font-outfit-bold mb-3">Overview</Text>
            <Text className="text-light-200 font-outfit-regular text-sm leading-6">
              {movie.overview || 'No overview available.'}
            </Text>
          </View>

          {/* ── EXTRA DETAILS ── */}
          {(movie.budget > 0 || movie.revenue > 0 || movie.status) && (
            <View className="mb-6 bg-dark-100 rounded-2xl p-4">
              <Text className="text-white text-base font-outfit-bold mb-4">Movie Info</Text>
              {movie.status ? (
                <View className="flex-row justify-between mb-3">
                  <Text className="text-light-300 font-outfit-regular text-sm">Status</Text>
                  <Text className="text-white font-outfit-semibold text-sm">{movie.status}</Text>
                </View>
              ) : null}
              {movie.budget > 0 && (
                <View className="flex-row justify-between mb-3">
                  <Text className="text-light-300 font-outfit-regular text-sm">Budget</Text>
                  <Text className="text-white font-outfit-semibold text-sm">{formatMoney(movie.budget)}</Text>
                </View>
              )}
              {movie.revenue > 0 && (
                <View className="flex-row justify-between">
                  <Text className="text-light-300 font-outfit-regular text-sm">Box Office</Text>
                  <Text className="text-green-400 font-outfit-bold text-sm">{formatMoney(movie.revenue)}</Text>
                </View>
              )}
            </View>
          )}
        </View>

        {/* ── SIMILAR MOVIES ── */}
        {similar && similar.length > 0 && (
          <MovieSection title="You May Also Like" movies={similar.slice(0, 10)} />
        )}

      </ScrollView>
    </View>
  );
}