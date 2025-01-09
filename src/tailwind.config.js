tailwind.config = {
  theme: {
    extend: {
      transitionTimingFunction: {
        "in-out-expo": "cubic-bezier(0.85, 0, 0.15, 1)",
      },
      animation: {
        "fade-in": "fade-in 1s ease-in-out",
        "slide-up": "slide-up 0.8s ease-in-out",
        marquee: "marquee 60s linear infinite",
      },

      fontFamily: {
        dancing: ['"Dancing Script"', "cursive"],
        playfair: ['"Playfair Display"', "serif"],
        outfit: ['"Outfit"', "sans-serif"],
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "slide-up": {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },

      colors: {
        "01": "#CDA961",
        "02": "#7F7F7F",
        "03": "#1E1E1E",
        "04": "#191919",
        "05": "#808080",
        "06": "#2C2C2C",
        "07": "#1F1F1F",
      },
      cursor: {
        hand: "url(/assets/images/handCursor.svg), pointer",
      },
    },
  },
  plugins: [],
};
