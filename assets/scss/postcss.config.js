module.exports = {
    plugins: [
        require('postcss-import')({
            path: ["assets/scss"]
        }),
        require('tailwindcss')('assets/scss/tailwind.config.js'),
        require('autoprefixer')
    ]
};
