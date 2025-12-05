# Premiere Night 🎬

A React Native movie discovery app powered by The Movie Database (TMDb) API, featuring movie browsing, watchlist management, search functionality, and deep linking.

## Features

### 🏠 Spotlight Home

A vertically scrolling home screen with horizontal carousels showcasing different movie categories:

- **Now Playing** - Currently showing in theaters
- **Popular** - Trending movies
- **Top Rated** - Highest-rated films
- **Upcoming** - Soon to be released

Each movie card displays a poster image and title. Infinite scroll pagination loads more movies as you browse.

### 🎥 Film Detail

Tap any movie card to open a detailed view featuring:

- High-resolution movie poster
- Title, tagline, and synopsis
- Key metadata: release date, runtime, rating, status
- Genre tags
- Production companies
- **Add to Watchlist** - Save movies to watch later
- **Share** - Generate deep link to share with others

### ⭐ Watchlist

A dedicated tab for your saved movies:

- Grid layout with movie thumbnails and titles
- Persistent across app launches (Redux Persist + AsyncStorage)
- Quick removal from watchlist
- Individual API calls per movie for up-to-date data

### 🔍 Search

Full-text search functionality:

- Real-time search with debouncing (500ms)
- Search by movie title
- Grid layout with results
- Pagination support for large result sets

### 🔗 Deep Linking

Share movies with custom URL scheme `mytheresa://movie/{movieId}`:

- Cold start support (app opens from link)
- Hot start support (app already running)
- Automatic navigation to movie detail screen
- Proper navigation stack management

## Tech Stack

- **Framework**: React Native 0.82.1
- **Language**: TypeScript
- **Navigation**: React Navigation (Native Stack + Bottom Tabs)
- **State Management**: Redux Toolkit + RTK Query
- **Persistence**: Redux Persist + AsyncStorage
- **Styling**: Styled Components
- **API Client**: RTK Query
- **Internationalization**: i18next
- **Icons**: Material Design Icons

## Prerequisites

- **Node.js**: >= 20
- **npm**
- **Ruby >= 3.2.2**

- **TMDb API Key**: Get from [themoviedb.org](https://www.themoviedb.org/settings/api)

### Platform-Specific Requirements

#### iOS

- macOS with Xcode 14+

#### Android

- Android Studio
- JDK 17+
- Android SDK (API 34+)

## Setup & Installation

### 1. Clone and Install Dependencies

```bash
git clone https://github.com/usmanghani127/premiere-night
cd premiere-night
npm install
```

### 2. Configure TMDb API Key

Create a `.env` file in the root directory:

```env
TMDB_API_ACCESS_TOKEN=your_api_access_token_here
```

### 3. Install iOS Dependencies

```bash
bundle install
npm run pods
```

### 4. Run the App

#### Start Metro Bundler

```bash
npm start
```

#### iOS

```bash
npm run ios
```

#### Android

```bash
npm run android
```

## Project Structure

```
src/
├── common/           # Shared components and constants
├── hooks/            # Custom React hooks
├── localization/     # i18n translations
├── navigation/       # Navigation configuration
├── screens/          # Screen components
├── services/         # API and Redux configuration
│   ├── api/         # RTK Query endpoints
│   └── redux/       # Redux slices
└── theme/           # Colors and styling
```

## Architectural Decisions

### State Management

- **RTK Query**: Simplified API calls with automatic caching, invalidation, and refetching. Responses are cached to avoid redundant network requests, improving performance and reducing API usage.

- **Redux Toolkit**: Minimal boilerplate for global state (watchlist)

- **Redux Persist**: Automatic watchlist persistence to AsyncStorage

**Trade-off**: Chose not to persist full movie objects in the watchlist. Instead, store only movie IDs and fetch details on-demand. This ensures data freshness but requires more API calls.

### Navigation

- **React Navigation v7**: Native stack for better performance and iOS/Android feel
- **Bottom Tabs**: Two main sections (Spotlight, Watchlist)
- **Modal Stack**: Search and movie details as overlays

### Deep Linking

- **Manual Implementation**: Used React Native Linking API with custom hook (`useDeepLinks`) instead of React Navigation's auto-linking

- **Reason**: Full control over navigation stack initialization, ensuring proper back button behavior

- **Implementation**: Hook placed in `RootNavigator` to remain mounted throughout app lifecycle

- **Custom URL Scheme**: Uses `mytheresa://` instead of HTTPS deep links (Universal Links for iOS / App Links for Android)

- **Note**: Universal Links and App Links were not implemented as they require domain verification through server-hosted files (`apple-app-site-association` for iOS and `assetlinks.json` for Android), which requires a production web server

### API & Data Fetching

- **Pagination Strategy**: RTK Query with `merge` function for infinite scroll

- **Debouncing**: 500ms delay on search to reduce API calls

- **Image Optimization**: Using TMDb's CDN with size-specific URLs (w500, w780)

### Styling Approach

- **Styled Components**: Theme-aware, type-safe styling with object notation

- **Consistent Patterns**: All screens follow `index.tsx` + `styles.ts` structure

- **Dark Mode**: Respects system color scheme via `useColorScheme`

## Assumptions

1. **TMDb API Availability**: Assumed the API remains available and stable
2. **Movie IDs**: TMDb movie IDs are unique and persistent
3. **Network**: Users have internet connectivity for API calls
4. **Platform Support**: Targeting iOS 13+ and Android 8+ (API 26+)
5. **Image URLs**: TMDb CDN URLs remain consistent
6. **Deep Link Format**: Custom scheme `mytheresa://` doesn't conflict with other apps

## Known Limitations

- **Watchlist Sync**: Local-only; no cloud sync across devices

- **Android Search Bug**: The search screen is not accessible on Android due to a bug. Please verify search functionality on iOS.

- **Language**: English only (ready for i18n expansion, support is added but not used)

## Testing Deep Links

**Android**:

```bash
adb shell am start -W -a android.intent.action.VIEW -d "mytheresa://movie/550" com.premierenight
```

**iOS**:

```bash
xcrun simctl openurl booted "mytheresa://movie/550"
```

## Scripts

```bash
npm start              # Start Metro bundler
npm run android        # Run on Android
npm run ios            # Run on iOS
npm run pods           # Install iOS dependencies
npm run tsc            # TypeScript check
npm run lint           # ESLint check
npm run prettier:fix   # Format code
npm run release:apk    # Build Android APK
npm run release:aab    # Build Android bundle
```

## License

MIT

## Credits

- Movie data provided by [The Movie Database (TMDb)](https://www.themoviedb.org/)
- This product uses the TMDb API but is not endorsed or certified by TMDb
