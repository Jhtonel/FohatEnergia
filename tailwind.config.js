/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: ['class'],
	content: [
		'./pages/**/*.{js,jsx}',
		'./components/**/*.{js,jsx}',
		'./app/**/*.{js,jsx}',
		'./src/**/*.{js,jsx}',
	],
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px',
			},
		},
		extend: {
			colors: {
				// Cores principais
				primary: {
					DEFAULT: '#134E4A', // Verde escuro
					light: '#40AFA8',   // Verde claro/mint para contraste
				},
				secondary: {
					DEFAULT: '#584304', // Amarelo/dourado
					light: '#FFBC00',   // Amarelo claro
				},
				// Cores neutras
				neutral: {
					dark: '#3F3F3F',    // Cinza escuro
					brown: '#544C3F',   // Marrom acinzentado
					light: '#E5E5E5',   // Cinza claro
				},
				// Cores de background
				background: {
					primary: '#134E4A',  // Verde escuro
					secondary: '#584304', // Marrom/dourado
					light: '#FFFFFF',    // Branco
					dark: '#3F3F3F',     // Cinza escuro
				},
				// Cores de texto
				text: {
					primary: '#134E4A',   // Verde escuro
					secondary: '#584304', // Amarelo/dourado
					light: '#40AFA8',    // Verde claro/mint
					white: '#FFFFFF',    // Branco
					dark: '#3F3F3F',     // Cinza escuro
				},
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				foreground: 'hsl(var(--foreground))',
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))',
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))',
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))',
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))',
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))',
				},
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)',
			},
			keyframes: {
				'accordion-down': {
					from: { height: 0 },
					to: { height: 'var(--radix-accordion-content-height)' },
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: 0 },
				},
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
			},
		},
	},
	plugins: [require('tailwindcss-animate')],
};
