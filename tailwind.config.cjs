/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");
module.exports = {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		screens: {
			sm: "540px",
			md: "768px",
			lg: "1024px",
			xl: "1280px",
			"2xl": "1536px",
		},
		extend: {
			borderRadius: {
				"4xl": "2rem",
				"5xl": "3rem",
				"6xl": "4rem",
				"7xl": "5rem",
			},
			colors: {
				black: "#131313",
				primary: {
					50: "#f4f9fb",
					100: "#e7f3f7",
					200: "#cae5ed",
					300: "#b2dae5",
					400: "#66b6ca",
					500: "#439db4",
					600: "#318098",
					700: "#29677b",
					800: "#255767",
					900: "#244956",
					950: "#183039",
				},
				secondary: {
					50: "#f2f7f9",
					100: "#ddebf0",
					200: "#bed7e3",
					300: "#78aac3",
					400: "#5e95b2",
					500: "#427898",
					600: "#3a6480",
					700: "#34526a",
					800: "#314659",
					900: "#2c3d4d",
					950: "#1a2632",
				},
			},
			fontFamily: {
				display: ["Playfair Display", ...defaultTheme.fontFamily.sans],
				sans: ["Inter", ...defaultTheme.fontFamily.sans],
				mono: ["JetBrains Mono", ...defaultTheme.fontFamily.mono],
			},
		},
	},
	plugins: [
		require("@tailwindcss/typography"),
		require("@tailwindcss/forms"),
		require("@tailwindcss/aspect-ratio"),
	],
	safelist: [
		// Try to avoid to add classes here
	],
	overrides: [
		{
			files: "*.astro",
			options: {
				parser: "astro",
			},
		},
	],
};
