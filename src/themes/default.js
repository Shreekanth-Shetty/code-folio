const themes = {
  dark: {
    // Temp fonts
    fonts: {
      title: "Space Grotesk, sans-serif",
      main: "Space Grotesk, sans-serif"
    },
    // Colors for dark layout
    colors: {
      primary1: "hsl(204,23.8%,95.9%)", // Light text
      primary2: "rgba(255, 255, 255, 0.75)", // Semi-transparent white
      primary3: "#fff", // Pure white
      background1: "#0F1624", // Dark background
      background2: "hsl(232.7,27.3%,23.7%)", // Slightly lighter dark
      background3: "#212d45", // Hover background
      accent1: "hsl(34.9,98.6%,72.9%)", // Orange accent
      button: "hsl(205.1,100%,36.1%)", // Blue button
      border: "rgba(255, 255, 255, 0.1)", // Light border
      shadow: "rgba(0, 0, 0, 0.3)", // Dark shadow
    },
    // Breakpoints for responsive design
    breakpoints: {
      sm: 'screen and (max-width: 640px)',
      md: 'screen and (max-width: 768px)',
      lg: 'screen and (max-width: 1024px)',
      xl: 'screen and (max-width: 1280px)'
    },
  },
  light: {
    // Temp fonts
    fonts: {
      title: "Space Grotesk, sans-serif",
      main: "Space Grotesk, sans-serif"
    },
    // Colors for light layout
    colors: {
      primary1: "hsl(210, 10%, 23%)", // Dark text
      primary2: "rgba(0, 0, 0, 0.75)", // Semi-transparent black
      primary3: "#000", // Pure black
      background1: "#ffffff", // Light background
      background2: "hsl(210, 40%, 96%)", // Very light gray
      background3: "hsl(210, 40%, 90%)", // Hover background
      accent1: "hsl(34.9,98.6%,62.9%)", // Slightly darker orange for light mode
      button: "hsl(205.1,100%,46.1%)", // Slightly lighter blue for light mode
      border: "rgba(0, 0, 0, 0.1)", // Dark border
      shadow: "rgba(0, 0, 0, 0.1)", // Light shadow
    },
    // Breakpoints for responsive design
    breakpoints: {
      sm: 'screen and (max-width: 640px)',
      md: 'screen and (max-width: 768px)',
      lg: 'screen and (max-width: 1024px)',
      xl: 'screen and (max-width: 1280px)'
    },
  }
};

export { themes };

// Export default dark theme for backward compatibility
export default themes.dark;
