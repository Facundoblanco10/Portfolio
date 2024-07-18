/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				black: {
					DEFAULT: '#0B090A',
					'500': '#161A1D'
				},
				white: {
					DEFAULT: '#FFFFFF',
					'100': '#F5F3F4',
					'200': '#D3D3D3',
					'300': '#B1A7A6',
				},
				primary: {
					DEFAULT: '#A4161A',
					'400': '#E5383B',
					'500': '#BA181B',
					'600': '#A4161A',
					'700': '#660708',
				},
			}
		},
		fontFamily: {
			josefin: ['Josefin Sans', 'sans-serif'],
		  },
	},
	plugins: [],
}
