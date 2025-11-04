# Light/Dark Mode Implementation

## Features Added

✅ **Theme Context & Provider** - Centralized theme management
✅ **Light & Dark Theme Definitions** - Complete color schemes for both modes
✅ **Theme Toggle Button** - Sun/Moon icons in header
✅ **LocalStorage Persistence** - Remembers user preference
✅ **System Preference Detection** - Defaults to user's OS preference
✅ **Smooth Transitions** - Animated theme switching
✅ **Dynamic Color Updates** - All components adapt to theme changes

## How It Works

1. **ThemeContext**: Manages theme state (light/dark mode)
2. **Theme Toggle**: Button in header switches between themes
3. **Persistence**: User preference saved to localStorage
4. **Dynamic Styling**: All styled-components use theme colors

## Files Modified

### New Files Created:
- `src/context/ThemeContext.js` - Theme management context
- `src/components/ThemeToggle/ThemeToggle.js` - Toggle button component

### Files Updated:
- `src/themes/default.js` - Added light & dark color schemes
- `src/styles/theme.js` - Dynamic theme provider
- `src/pages/_app.js` - Added theme context provider
- `src/styles/globals.js` - Added smooth transitions
- `src/components/Header/Header.js` - Added theme toggle button
- `src/components/Header/HeaderStyles.js` - Updated to use dynamic colors

### Component Styles Updated:
- `src/styles/GlobalComponents/index.js` - All global components
- `src/components/Projects/ProjectsStyles.js` - Project cards & elements
- `src/components/Technologies/TechnologiesStyles.js` - Technology section
- `src/components/Footer/FooterStyles.js` - Footer elements
- `src/components/TimeLine/TimeLineStyles.js` - Timeline components
- `src/components/Acomplishments/AcomplishmentsStyles.js` - Accomplishment boxes

## Usage

1. **Toggle Theme**: Click the sun/moon icon in the header
2. **Auto-Detection**: First visit uses system preference
3. **Persistence**: Theme choice is remembered between sessions
4. **Smooth Animation**: 0.3s transition between themes

## Color Scheme

### Dark Mode (Default):
- Background: `#0F1624` / `hsl(232.7,27.3%,23.7%)`
- Text: `hsl(204,23.8%,95.9%)` / `rgba(255, 255, 255, 0.75)`
- Accent: `hsl(34.9,98.6%,72.9%)` (orange)
- Button: `hsl(205.1,100%,36.1%)` (blue)

### Light Mode:
- Background: `#ffffff` / `hsl(210, 40%, 96%)`
- Text: `hsl(210, 10%, 23%)` / `rgba(0, 0, 0, 0.75)`
- Accent: `hsl(34.9,98.6%,62.9%)` (darker orange)
- Button: `hsl(205.1,100%,46.1%)` (lighter blue)

## Testing

The application should now:
- ✅ Load with default dark theme (or system preference)
- ✅ Show theme toggle button in header
- ✅ Switch themes smoothly when clicked
- ✅ Remember preference after page refresh
- ✅ Apply consistent colors across all components