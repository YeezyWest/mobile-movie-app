const BASE_URL = process.env.EXPO_PUBLIC_TMDB_BASE_URL;
const IMAGE_BASE_URL = process.env.EXPO_PUBLIC_TMDB_IMAGE_BASE_URL;
const ACCESS_TOKEN = process.env.EXPO_PUBLIC_TMDB_READ_ACCESS_TOKEN;

export interface Movie {
  id: number;
  title: string;
  overview: string;
  poster_path: string | null;
  backdrop_path: string | null;
  vote_average: number;
  vote_count: number;
  release_date: string;
  genre_ids: number[];
}

export interface Genre {
  id: number;
  name: string;
}

export interface MovieDetails extends Movie {
  genres: Genre[];
  runtime: number;
  tagline: string;
  status: string;
  budget: number;
  revenue: number;
  production_companies: { id: number; name: string; logo_path: string | null }[];
}

export interface MovieResponse {
  results: Movie[];
  page: number;
  total_pages: number;
  total_results: number;
}

const headers = {
  accept: 'application/json',
  Authorization: `Bearer ${ACCESS_TOKEN}`,
};

export const getPosterUrl = (path: string | null, size: 'w185' | 'w342' | 'w500' | 'original' = 'w342') => {
  if (!path) return null;
  return `${IMAGE_BASE_URL}/${size}${path}`;
};

export const getBackdropUrl = (path: string | null, size: 'w780' | 'w1280' | 'original' = 'w780') => {
  if (!path) return null;
  return `${IMAGE_BASE_URL}/${size}${path}`;
};

export const fetchTrending = async (timeWindow: 'day' | 'week' = 'week'): Promise<Movie[]> => {
  const response = await fetch(`${BASE_URL}/trending/movie/${timeWindow}?language=en-US`, { headers });
  if (!response.ok) throw new Error('Failed to fetch trending movies');
  const data: MovieResponse = await response.json();
  return data.results;
};

export const fetchNowPlaying = async (page = 1): Promise<Movie[]> => {
  const response = await fetch(`${BASE_URL}/movie/now_playing?language=en-US&page=${page}`, { headers });
  if (!response.ok) throw new Error('Failed to fetch now playing movies');
  const data: MovieResponse = await response.json();
  return data.results;
};

export const fetchTopRated = async (page = 1): Promise<Movie[]> => {
  const response = await fetch(`${BASE_URL}/movie/top_rated?language=en-US&page=${page}`, { headers });
  if (!response.ok) throw new Error('Failed to fetch top rated movies');
  const data: MovieResponse = await response.json();
  return data.results;
};

export const fetchPopular = async (page = 1): Promise<Movie[]> => {
  const response = await fetch(`${BASE_URL}/movie/popular?language=en-US&page=${page}`, { headers });
  if (!response.ok) throw new Error('Failed to fetch popular movies');
  const data: MovieResponse = await response.json();
  return data.results;
};

export const searchMovies = async (query: string, page = 1): Promise<Movie[]> => {
  if (!query.trim()) return [];
  const response = await fetch(
    `${BASE_URL}/search/movie?query=${encodeURIComponent(query)}&language=en-US&page=${page}`,
    { headers }
  );
  if (!response.ok) throw new Error('Failed to search movies');
  const data: MovieResponse = await response.json();
  return data.results;
};

export const fetchMovieDetails = async (id: number): Promise<MovieDetails> => {
  const response = await fetch(`${BASE_URL}/movie/${id}?language=en-US`, { headers });
  if (!response.ok) throw new Error('Failed to fetch movie details');
  return response.json();
};

export const fetchMovieCredits = async (id: number) => {
  const response = await fetch(`${BASE_URL}/movie/${id}/credits?language=en-US`, { headers });
  if (!response.ok) throw new Error('Failed to fetch movie credits');
  return response.json();
};

export const fetchSimilarMovies = async (id: number): Promise<Movie[]> => {
  const response = await fetch(`${BASE_URL}/movie/${id}/similar?language=en-US`, { headers });
  if (!response.ok) throw new Error('Failed to fetch similar movies');
  const data: MovieResponse = await response.json();
  return data.results;
};
