import { Movie } from '@/services/api';
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { createContext, useContext, useEffect, useState } from 'react';

interface SaveContextType {
  savedMovies: Movie[];
  saveMovie: (movie: Movie) => Promise<void>;
  unsaveMovie: (id: number) => Promise<void>;
  isSaved: (id: number) => boolean;
}

const SaveContext = createContext<SaveContextType | undefined>(undefined);

export const SaveProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [savedMovies, setSavedMovies] = useState<Movie[]>([]);

  useEffect(() => {
    loadSavedMovies();
  }, []);

  const loadSavedMovies = async () => {
    try {
      const storedMovies = await AsyncStorage.getItem('@saved_movies');
      if (storedMovies) {
        setSavedMovies(JSON.parse(storedMovies));
      }
    } catch (e) {
      console.error('Failed to load saved movies', e);
    }
  };

  const saveMovie = async (movie: Movie) => {
    try {
      const updatedMovies = [...savedMovies, movie];
      setSavedMovies(updatedMovies);
      await AsyncStorage.setItem('@saved_movies', JSON.stringify(updatedMovies));
    } catch (e) {
      console.error('Failed to save movie', e);
    }
  };

  const unsaveMovie = async (id: number) => {
    try {
      const updatedMovies = savedMovies.filter((m) => m.id !== id);
      setSavedMovies(updatedMovies);
      await AsyncStorage.setItem('@saved_movies', JSON.stringify(updatedMovies));
    } catch (e) {
      console.error('Failed to unsave movie', e);
    }
  };

  const isSaved = (id: number) => {
    return savedMovies.some((m) => m.id === id);
  };

  return (
    <SaveContext.Provider value={{ savedMovies, saveMovie, unsaveMovie, isSaved }}>
      {children}
    </SaveContext.Provider>
  );
};

export const useSaveContext = () => {
  const context = useContext(SaveContext);
  if (context === undefined) {
    throw new Error('useSaveContext must be used within a SaveProvider');
  }
  return context;
};
