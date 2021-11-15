module.exports = {
    purge: [
        './index.html',
        './src/**/*.svelte'
    ],
    darkMode: 'class',
    theme: {
        extend: {
            backgroundColor: {
                'dark': '#121212'
            }
        }
    },
    variants: {
        extend: {}
    },
    plugins: []
};
