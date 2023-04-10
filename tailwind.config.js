const defaultTheme = require('tailwindcss/defaultTheme')

// tailwind.config.js
module.exports = {
    content: ['./layouts/**/*.html', './content/**/*.md'],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                transparent: 'transparent',
                current: 'currentColor',
                'primary': { DEFAULT: '#055E5C', 50: '#27F4EF', 100: '#14F2ED', 200: '#0BD2CE', 300: '#09ABA8', 400: '#078582', 500: '#055E5C', 600: '#022928', 700: '#000000', 800: '#000000', 900: '#000000', 950: '#000000' },
                'secondary': { DEFAULT: '#EEBE00', 50: '#FFEDA7', 100: '#FFE992', 200: '#FFE169', 300: '#FFD941', 400: '#FFD018', 500: '#EEBE00', 600: '#B69100', 700: '#7E6400', 800: '#463800', 900: '#0E0B00', 950: '#000000' },
                'neutral': {
                    DEFAULT: '#6B7280',
                    50: '#CDD0D5',
                    100: '#C2C5CC',
                    200: '#ACB0BA',
                    300: '#969BA7',
                    400: '#7F8694',
                    500: '#6B7280',
                    600: '#515761',
                    700: '#383C43',
                    800: '#1E2024',
                    900: '#050506'
                },
                // To change these, use https://www.tailwindshades.com/ with https://tailwindcss.com/docs/customizing-colors or create your own custom colors.
            },
            lineHeight: {
                'extra-loose': '2.5',
                '12': '3rem',
            },
            typography: (theme) => ({
                DEFAULT: {
                    css: {
                        '--tw-prose-body': theme('colors.zinc[800]'),
                        '--tw-prose-headings': theme('colors.zinc[900]'),
                        '--tw-prose-lead': theme('colors.zinc[700]'),
                        '--tw-prose-links': theme('colors.zinc[900]'),
                        '--tw-prose-bold': theme('colors.zinc[900]'),
                        '--tw-prose-counters': theme('colors.zinc[600]'),
                        '--tw-prose-bullets': theme('colors.zinc[400]'),
                        '--tw-prose-hr': theme('colors.zinc[300]'),
                        '--tw-prose-quotes': theme('colors.zinc[900]'),
                        '--tw-prose-quote-borders': theme('colors.zinc[300]'),
                        '--tw-prose-captions': theme('colors.zinc[700]'),
                        '--tw-prose-code': theme('colors.indigo[500]'),
                        '--tw-prose-pre-code': theme('colors.indigo[300]'),
                        '--tw-prose-pre-bg': theme('colors.gray[900]'),
                        '--tw-prose-th-borders': theme('colors.zinc[300]'),
                        '--tw-prose-td-borders': theme('colors.zinc[200]'),
                        '--tw-prose-invert-body': theme('colors.zinc[200]'),
                        '--tw-prose-invert-headings': theme('colors.white'),
                        '--tw-prose-invert-lead': theme('colors.zinc[300]'),
                        '--tw-prose-invert-links': theme('colors.indigo[400]'),
                        '--tw-prose-invert-bold': theme('colors.white'),
                        '--tw-prose-invert-counters': theme('colors.zinc[400]'),
                        '--tw-prose-invert-bullets': theme('colors.zinc[200]'),
                        '--tw-prose-invert-hr': theme('colors.zinc[500]'),
                        '--tw-prose-invert-quotes': theme('colors.zinc[100]'),
                        '--tw-prose-invert-quote-borders': theme('colors.zinc[700]'),
                        '--tw-prose-invert-captions': theme('colors.zinc[400]'),
                        '--tw-prose-invert-code': theme('colors.indigo[400]'),
                        '--tw-prose-invert-pre-code': theme('colors.indigo[300]'),
                        '--tw-prose-invert-pre-bg': theme('colors.gray[900]'),
                        '--tw-prose-invert-th-borders': theme('colors.zinc[100]'),
                        '--tw-prose-invert-td-borders': theme('colors.zinc[500]'),
                    },
                },
            }),
        },
    },
    variants: {
        typography: ["dark"],
    },
    plugins: [require("@tailwindcss/typography")],
};
