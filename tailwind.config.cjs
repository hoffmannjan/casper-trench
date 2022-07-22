module.exports = {
	mode: 'jit',
	purge: ['./src/**/*.{html,js,svelte,ts}'],
	darkMode: false, // or 'media' or 'class' => use depending on dark mode approach
	theme: {
		extend: {
			colors: {
				color: {
					'grey-footer-label': '#8F9398',
					'grey-footer-link': '#ADBDCC',
					'grey-footer-title': '#FFF9F5',
					'hover-footer-link': '#099B91',
					'border-header-stats': '#79E1ED',
					'divider-header-stats': '#F2F3F5',
					'title-header-stats': '#CFCFCF',
					'filter-dropdown-button-bg': '#091872',
					'filter-bg': '#09145A',
					'search-btn-blue': '#173FA2',
					'search-btn-green': '#0C8D94',
					'table-header': '#425466',
					'tooltip-border': '#F2F2F2',
					'arcadia-yellow': '#FECA00',
					'arcadia-green': '#31DE91',
					'arcadia-red': '#FF313F',
					'progress-bg': '#D9D9D9',
					'progress-bar': '#0021A5',
					'paginator-border': '#DADADA',
					'black-text': '#1A1919',
					'translucent-green': '#E5F8F6',
					'translucent-green': '#E5F8F6',
					'ago-background': '#F3F3F3'
				}
			},
			fontFamily: {
				yantramanav: "'Yantramanav', 'Roboto', 'Helvetica', 'Arial', 'sans-serif'"
			}
		}
	},
	variants: {
		extend: {}
	},
	plugins: []
};
