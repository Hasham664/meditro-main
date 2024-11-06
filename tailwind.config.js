/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        "custom-blue": "#023E8A",
        "custom-teal": "#4CB6B6",
        "sky-blue": "#FFFFFF",
        "dark-blue": "#F8FDFF",
        "testimonial-1": "#EBF8FF",
        "testimonial-2": "#FDFEFF",
        "border-1": "#0069AB",
        "border-2": "#4CB6B6",
      },
      screens: {
        tablet: "840px",
      },
      fontFamily: {
        sans: ["Work Sans"], 
      },
    },
  },
  plugins: [],
};
