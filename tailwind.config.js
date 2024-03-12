/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        main: "#FFFFFF",
        secondary1: "#FAF9FE",
        secondary2: "#F3F3F3",
      },
      height: {
        custom_h_1: "40px",
        custom_h_2: "60px",
        custom_h_3: "70px",
        custom_h_4: "30px",
        custom_h_5: "500px"
      },
      width: {
        custom_w_1: "110px",
        custom_w_2: "35px",
      },
      screens: {
        mobile1: { max: "600px" },
      },
    },
  },
  plugins: [],
};
