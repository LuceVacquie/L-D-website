const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors')

module.exports = {
    purge: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.js',
        './resources/**/*.vue',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Nunito', ...defaultTheme.fontFamily.sans],
            },
            colors:{
                indigo: colors.indigo,
                gray: colors.gray,
                teal: colors.teal,
                amber: colors.amber,
                cyan: colors.cyan,
                green: colors.green,
                emerald: colors.emerald,
                darkTeal: '#004146',
                lightTeal: '#018076',
                turquoise: '#03BFB5',
                grey: '#949398',
                lightGrey: '#EFF5F9'
            },
            fontSize: {
                '10xl': '12rem',
            },
        },
    },

    variants: {
        extend: {
            opacity: ['disabled'],
        },
    },

    plugins: [require('@tailwindcss/forms')],
};
