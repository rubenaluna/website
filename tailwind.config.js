module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          '"Inter"',
          "-apple-system",
          "BlinkMacSystemFont",
          '"Segoe UI"',
          "Roboto",
          "sans-serif",
        ],
        mono: [
          '"JetBrains Mono"',
          '"SF Mono"',
          "Monaco",
          "Consolas",
          '"Courier New"',
          "monospace",
        ],
      },
      letterSpacing: {
        tightest: "-0.045em",
        tighter: "-0.035em",
        tight: "-0.025em",
      },
    },
  },
};
