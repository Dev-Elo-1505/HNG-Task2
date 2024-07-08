/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        "custom-medium": "0 1px 4px hsla(0, 0%, 8%, 0.1)",
      },
      colors: {
        customGreen: {
          DEFAULT: "#3A9A32",
        },
      },
    },
  },
  plugins: [],
};
