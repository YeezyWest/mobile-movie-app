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
- Friendly empty state and no-results state

### 🎞️ Movie Detail Page
- **Full-bleed backdrop** with deep gradient fade
- **Poster + Title** overlapping the hero in a cinematic layout
- **Stats bar** — Rating ⭐ · Year 📅 · Runtime ⏱ · Votes 👥
- **Genre tags**, tagline, and full overview
- **Movie Info card** — Status, Budget, Box Office
- **"You May Also Like"** similar movies carousel

### 🗂️ Tab Navigation
- Home · Search · Saved · Profile

---

## 🏗️ Tech Stack

| Layer | Technology |
|---|---|
| Framework | [Expo](https://expo.dev) (SDK 54) + Expo Router |
| Language | TypeScript |
| Styling | NativeWind (Tailwind CSS for RN) |
| Data | [TMDB API](https://www.themoviedb.org/) |
| Icons | `@expo/vector-icons` (Ionicons) |
| Gradients | `expo-linear-gradient` |

---

## 📁 Project Structure

```
mobile-movie-app/
├── app/
│   ├── (tabs)/
│   │   ├── index.tsx       # Home screen
│   │   ├── search.tsx      # Search screen
│   │   ├── saved.tsx       # Saved screen (WIP)
│   │   └── profile.tsx     # Profile screen (WIP)
│   └── movies/
│       └── [id].tsx        # Movie detail screen
├── components/
│   ├── SearchBar.tsx       # Dual-mode search input
│   ├── TrendingHero.tsx    # Featured movie hero card
│   ├── MovieSection.tsx    # Horizontal FlatList section
│   └── MovieCard.tsx       # Movie poster + rating card
├── services/
│   ├── api.ts              # TMDB API calls & types
│   └── useFetch.ts         # Generic data-fetching custom hook
└── assets/images/
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
```

Get your free API key at [themoviedb.org/settings/api](https://www.themoviedb.org/settings/api).

### 4. Start the development server

```bash
npx expo start --clear
```

Scan the QR code with **Expo Go** on your phone (iOS or Android).

---

## 📌 Roadmap

- [ ] Saved / Watchlist functionality
- [ ] Profile screen
- [ ] Movie trailer playback
- [ ] Cast & crew section
- [ ] Genre-based browsing

---

## 🙏 Acknowledgements

- Movie data powered by [The Movie Database (TMDB)](https://www.themoviedb.org/)
- Built with [Expo](https://expo.dev) and [React Native](https://reactnative.dev)
