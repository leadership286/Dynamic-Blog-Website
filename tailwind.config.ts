import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily :{
        Judson :["Judson,Serif"],
        GreatVibes :["GreatVibes,Sans"]
      },
      boxShadow: {
        glow: '0 0 20px #FFFF00', 
      },
   
    },
  },
  plugins: [],
};
export default config;
