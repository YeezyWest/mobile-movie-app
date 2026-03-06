# 🎬 CinePlay — Mobile Movie App

A premium, cinematic mobile movie application built with **React Native** and **Expo**, powered by the **TMDB API**. Discover trending movies, search the full movie catalogue, and dive into rich movie detail pages.

---

## ✨ Features

### 🏠 Home Screen
- **Branded header** with the CinePlay logo and user profile
- **Search bar** — tap to navigate to the full search screen
- **Trending Hero** — immersive full-bleed featured movie with backdrop, rating badge, and "Watch Now" CTA
- **Horizontal movie carousels** (Now Playing, Top Rated, Trending This Week)
- **Pull-to-refresh** to reload all sections

### 🔍 Search
- **Live debounced search** (400ms) — results appear as you type
- **3-column grid** of movie poster results
- **Optimized scrolling** — Unloading off-screen nodes for buttery smooth performance

### 🎞️ Movie Detail Screen
- **Full-bleed backdrop** with deep gradient fade
- **In-App Trailer Player** — seamlessly transition the hero image to a native YouTube player!
- **Global Save Button** — bookmark movies directly to your device storage
- **Stats bar** — Rating ⭐ · Year 📅 · Runtime ⏱ · Votes 👥
- **Genre tags**, tagline, and full overview

### 🗂️ Global Features
- **Floating Curved Tab Bar** — modern, elevated iOS/WhatsApp aesthetic for navigation
- **Persistent Saved List** — utilizing React Context and `AsyncStorage`
- **Dynamic Profile Page** — tracks real-time save stats
- **Movie Info card** — Status, Budget, Box Office
- **"You May Also Like"** similar movies carousel

### 🗂️ Tab Navigation
- Home · Search · Saved · You

---

## 🏗️ Tech Stack

| Layer | Technology |
|---|---|
| Framework | [Expo](https://expo.dev) (SDK 54) + Expo Router |
| Language | TypeScript |
| Styling | NativeWind (Tailwind CSS for RN) |
| API | [TMDB API](https://www.themoviedb.org/) |
| Backend SDK | `react-native-appwrite` |
| Video Player | `react-native-youtube-iframe` |
| Storage | `@react-native-async-storage/async-storage` |
| Icons | `@expo/vector-icons` (Ionicons) |
| Layout | `react-native-safe-area-context` |

---

## 📁 Project Structure

```
mobile-movie-app/
├── app/
│   ├── _layout.tsx         # Root layout with SaveProvider
│   ├── (tabs)/
│   │   ├── _layout.tsx     # Floating Tab bar logic
│   │   ├── index.tsx       # Home screen
│   │   ├── search.tsx      # Search screen
│   │   ├── saved.tsx       # Saved Watchlist screen
│   │   └── profile.tsx     # Profile screen
│   └── movies/
│       └── [id].tsx        # Movie detail screen
├── components/
│   ├── SearchBar.tsx       
│   ├── TrendingHero.tsx    
│   ├── MovieSection.tsx    # Memoized horizontal list
│   └── MovieCard.tsx       # Memoized movie poster
├── context/
│   └── SaveContext.tsx     # Global state + AsyncStorage
├── lib/
│   └── appwrite.ts         # Appwrite BaaS Config
├── services/
│   ├── api.ts              # TMDB API calls & endpoints
│   └── useFetch.ts         # Generic data-fetching custom hook
└── assets/
    └── app-logo.png        # CinePlay logo
```

---

## 🚀 Getting Started

### 1. Clone the repo

```bash
git clone <repo-url>
cd mobile-movie-app
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set up environment variables

Create a `.env` file in the root directory:

```env
EXPO_PUBLIC_TMDB_API_KEY=your_api_key
EXPO_PUBLIC_TMDB_READ_ACCESS_TOKEN=your_read_access_token
EXPO_PUBLIC_TMDB_BASE_URL=https://api.themoviedb.org/3
EXPO_PUBLIC_TMDB_IMAGE_BASE_URL=https://image.tmdb.org/t/p

EXPO_PUBLIC_APPWRITE_ENDPOINT=https://cloud.appwrite.io/v1
EXPO_PUBLIC_APPWRITE_PROJECT_ID=your_id
EXPO_PUBLIC_APPWRITE_DATABASE_ID=your_id
```

Get your free API key at [themoviedb.org/settings/api](https://www.themoviedb.org/settings/api).

### 4. Start the development server

```bash
npx expo start --clear
```

Scan the QR code with **Expo Go** on your phone (iOS or Android).

---

## 📌 Roadmap

- [x] Saved / Watchlist functionality
- [x] Profile screen
- [x] Movie trailer playback
- [ ] Cast & crew section
- [ ] Full Appwrite Backend Database Sync

---

## 🙏 Acknowledgements

- Movie data powered by [The Movie Database (TMDB)](https://www.themoviedb.org/)
- Built with [Expo](https://expo.dev) and [React Native](https://reactnative.dev)
