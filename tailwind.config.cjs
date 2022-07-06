module.exports = {
	mode: 'jit',
	purge: ['./src/**/*.{html,js,svelte,ts}'],
	darkMode: false, // or 'media' or 'class' => use depending on dark mode approach
	theme: {
		extend: {
			// Extend colors and themes here
			// If no dark or light theme is available, you can add colors directly to extend
			dark: {
				// Dark Theme colors
			},
			light: {
				// light theme colors
			},
			colors: {
				color: {
					'border-header-stats': '#79E1ED',
					'divider-header-stats': '#F2F3F5',
					'title-header-stats': '#CFCFCF',
					'filter-dropdown-button-bg': '#091872',
					'filter-bg': '#09145A',
					'search-btn-blue': '#173FA2',
					'search-btn-green': '#0C8D94'
				}
			}
		}
	},
	variants: {
		extend: {}
	},
	plugins: []
};
