/* eslint-disable @typescript-eslint/explicit-function-return-type */
const {join} = require('path');

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
			backgroundColor: {
				'good-ol-grey': {
					100: '#F4F4F4',
					200: '#EBEBEB',
					300: '#E1E1E1',
					400: '#9D9D9D',
					500: '#7E7E7E',
					600: '#5B5B5B',
					700: '#424242',
					800: '#282828',
					900: '#0C0C0C'
				},
				'metaverse-sunset': {
					50: '#FFEEA9',
					100: '#FFDC53',
					200: '#F1F025',
					300: '#E6FC06',
					400: '#F0D308',
					500: '#F8A908',
					600: '#F27F07',
					700: '#EA5204',
					800: '#C73203',
					900: '#8F0000'
				},
				'disco-salmon': {
					50: '#FFECEF',
					100: '#FF90A1',
					200: '#FD5DA5',
					300: '#FA3AA7',
					400: '#EE478A',
					500: '#DF536A',
					600: '#CC3767',
					700: '#B71962',
					800: '#99104F',
					900: '#6A0031'
				},
				'tokyo-party': {
					50: '#D1A2DD',
					100: '#A446BA',
					200: '#7829E1',
					300: '#5814FB',
					400: '#6B26C2',
					500: '#7D3787',
					600: '#663690',
					700: '#4F3398',
					800: '#371F75',
					900: '#120040'
				},
				'up-only-green': {
					50: '#DDF3AC',
					100: '#BAE659',
					200: '#55F541',
					300: '#0DFF2F',
					400: '#38E331',
					500: '#63C532',
					600: '#34A14F',
					700: '#00796D',
					800: '#016057',
					900: '#003934'
				},
				'yearn-blue': '#0657F9'
			},
			fontSize: {
				'3xl': ['32px', '40px']
			},
			order: {
				'13': 13,
				'14': 14,
				'15': 15,
				'16': 16,
				'17': 17,
				'18': 18,
				'19': 19,
				'20': 20,
				'21': 21,
				'22': 22,
				'23': 23,
				'24': 24,
				'25': 25,
				'26': 26,
				'27': 27,
				'28': 28,
				'29': 29,
				'30': 30,
				'31': 31,
				'32': 32,
				'33': 33,
				'34': 34,
				'35': 35,
				'36': 36,
				'37': 37,
				'38': 38,
				'39': 39,
				'40': 40
			}
		}
	},
	plugins: []
};