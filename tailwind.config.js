/* eslint-disable @typescript-eslint/explicit-function-return-type */
const {join} = require('path');
const defaultTheme = require('tailwindcss/defaultTheme');

function withOpacityValue(variable) {
	return ({opacityValue}) => {
		if (opacityValue === undefined) {
			return `hsl(var(${variable}))`;
		}
		return `hsl(var(${variable}) / ${opacityValue})`;
	};
}

module.exports = {
	presets: [
		require('@yearn-finance/web-lib/config/tailwind.config.cjs')
	],
	content: [
		join(__dirname, 'pages', '**', '*.{js,jsx,ts,tsx}'),
		join(__dirname, 'components', 'icons', '**', '*.{js,jsx,ts,tsx}'),
		join(__dirname, 'components', '**', '*.{js,jsx,ts,tsx}'),
		join(__dirname, 'node_modules', '@yearn-finance', 'web-lib', 'dist', 'layouts', '**', '*.js'),
		join(__dirname, 'node_modules', '@yearn-finance', 'web-lib', 'dist', 'components', '**', '*.js'),
		join(__dirname, 'node_modules', '@yearn-finance', 'web-lib', 'dist', 'contexts', '**', '*.js'),
		join(__dirname, 'node_modules', '@yearn-finance', 'web-lib', 'dist', 'icons', '**', '*.js'),
		join(__dirname, 'node_modules', '@yearn-finance', 'web-lib', 'dist', 'utils', '**', '*.js')
	],
	theme: {
		extend: {
			fontFamily: {
				//TODO: FONTS SHOULD BE INTEGRATED INTO THE WEB LIB
				aeonik: ['Aeonik', ...defaultTheme.fontFamily.sans],
				mono: ['Aeonik Mono', ...defaultTheme.fontFamily.mono]
			},
			fontSize: {
				'3xl': ['32px', '40px'],
				'7xl': ['80px', '96px']
			},
			colors: {
				'primary': withOpacityValue('--color-primary'),

				//TODO: ALL THIS SHOULD BE MIGRATED TO WEB-LIB
				'neutral-0': withOpacityValue('--color-neutral-0'),
				'neutral-100': withOpacityValue('--color-neutral-100'),
				'neutral-200': withOpacityValue('--color-neutral-200'),
				'neutral-300': withOpacityValue('--color-neutral-300'),
				'neutral-400': withOpacityValue('--color-neutral-400'),
				'neutral-500': withOpacityValue('--color-neutral-500'),
				'neutral-600': withOpacityValue('--color-neutral-600'),
				'neutral-700': withOpacityValue('--color-neutral-700'),
				'neutral-800': withOpacityValue('--color-neutral-800'),
				'neutral-900': withOpacityValue('--color-neutral-900'),

				/* Up Only Green */
				'green-50': withOpacityValue('--color-green-50'),
				'green-100': withOpacityValue('--color-green-100'),
				'green-200': withOpacityValue('--color-green-200'),
				'green-300': withOpacityValue('--color-green-300'),
				'green-400': withOpacityValue('--color-green-400'),
				'green-500': withOpacityValue('--color-green-500'),
				'green-600': withOpacityValue('--color-green-600'),
				'green-700': withOpacityValue('--color-green-600'),
				'green-800': withOpacityValue('--color-green-800'),
				'green-900': withOpacityValue('--color-green-900'),

				/* Tokyo Party */
				'purple-50': withOpacityValue('--color-purple-50'),
				'purple-100': withOpacityValue('--color-purple-100'),
				'purple-200': withOpacityValue('--color-purple-200'),
				'purple-300': withOpacityValue('--color-purple-300'),
				'purple-400': withOpacityValue('--color-purple-400'),
				'purple-500': withOpacityValue('--color-purple-500'),
				'purple-600': withOpacityValue('--color-purple-600'),
				'purple-700': withOpacityValue('--color-purple-600'),
				'purple-800': withOpacityValue('--color-purple-800'),
				'purple-900': withOpacityValue('--color-purple-900'),

				/* Disco Salmon */
				'pink-50': withOpacityValue('--color-pink-50'),
				'pink-100': withOpacityValue('--color-pink-100'),
				'pink-200': withOpacityValue('--color-pink-200'),
				'pink-300': withOpacityValue('--color-pink-300'),
				'pink-400': withOpacityValue('--color-pink-400'),
				'pink-500': withOpacityValue('--color-pink-500'),
				'pink-600': withOpacityValue('--color-pink-600'),
				'pink-700': withOpacityValue('--color-pink-600'),
				'pink-800': withOpacityValue('--color-pink-800'),
				'pink-900': withOpacityValue('--color-pink-900'),

				/* Metaverse Sunset */
				'yellow-50': withOpacityValue('--color-yellow-50'),
				'yellow-100': withOpacityValue('--color-yellow-100'),
				'yellow-200': withOpacityValue('--color-yellow-200'),
				'yellow-300': withOpacityValue('--color-yellow-300'),
				'yellow-400': withOpacityValue('--color-yellow-400'),
				'yellow-500': withOpacityValue('--color-yellow-500'),
				'yellow-600': withOpacityValue('--color-yellow-600'),
				'yellow-700': withOpacityValue('--color-yellow-600'),
				'yellow-800': withOpacityValue('--color-yellow-800'),
				'yellow-900': withOpacityValue('--color-yellow-900')
			}
		}
	},
	plugins: []
};