/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        green: {
          one: "#519A70",
          two: "#498B65",
          three: "#417b5a",
          four: "#3C7354",
          five: "#386A4E",
        },
        dark: {
          one: "#5D5D5D",
          two: "#3C3C3C",
          three: "#1c1c1c",
          four: "#141414",
          five: "#0A0A0A",
        },
        platinum: {
          one: "#F5F6F4",
          two: "#EAECE9",
          three: "#DADDD8",
          four: "#D6D9D3",
          five: "#CBDOC8",
        },
        alabaster: {
          two: "#F7F6F3",
          three: "#ECEBE4",
          four: "#E6E4DB",
          five: "#DDDBCF",
        },
        flash: {
          one: "#EEF0F2",
          two: "#E8EBED",
          three: "#DCE0E4",
          four: "#D1D6DC",
          five: "#C5CCD3",
        },
        ghost: "#FAFAFF",
      },
    },
  },
  plugins: [],
};
