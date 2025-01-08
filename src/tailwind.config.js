tailwind.config = {
  theme: {
    extend: {
      fontFamily: {
        dancing: ['"Dancing Script"', "cursive"],
        playfair: ['"Playfair Display"', "serif"],
        outfit: ['"Outfit"', "sans-serif"],
      },
      colors: {
        "01": "#CDA961",
        "02": "#7F7F7F",
        "03": "#1E1E1E",
        "04": "#191919",
        "05": "#808080",
        "06": "#2C2C2C",
        "07": "#1F1F1F"
      },
      cursor: {
        "hand": "url(/assets/images/handCursor.svg), pointer",
        
      },
    },
  },
  plugins: [],
};
