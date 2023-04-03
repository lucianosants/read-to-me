const { colors: theme } = require('./theme/default_colors');

/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                primary: theme.primary,
                secondary: theme.secondary,
                tertiary: theme.tertiary,
                warning: theme.warning,
                danger: theme.danger,
                neutral: theme.neutral,
                'neutral-variant': theme['neutral-variant'],
            },
        },
    },
    plugins: [],
};
