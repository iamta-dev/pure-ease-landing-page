import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        primary: '#2A9D8F',
        secondary: '#F4A261',
        accent: '#457B9D',
      },
      fontFamily: {
        heading: ['IBM Plex Thai', 'sans-serif'],
        body: ['Prompt', 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config;
