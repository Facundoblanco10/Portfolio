/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        black: {
          DEFAULT: "#0B090A",
          500: "#161A1D",
        },
        white: {
          DEFAULT: "#FFFFFF",
          100: "#F5F3F4",
          200: "#D3D3D3",
          300: "#B1A7A6",
        },
        primary: {
          DEFAULT: "#ffd60a",
          400: "#ffd60a",
		  500: "#ffc300",
        },
		secondary: {
			DEFAULT: '#000814',
			700: '#003566',
			800: '#001d3d',
			900: '#000814'
		}
      },
    },
    fontFamily: {
      josefin: ["Josefin Sans", "sans-serif"],
    },
	maxWidth: {
		'xl': '36rem',
		'2xl': '42rem',
		'3xl': '48rem',
		'4xl': '54rem',
	},
	leading: {
		'16': '4rem',
	}
  },
  plugins: [],
};
