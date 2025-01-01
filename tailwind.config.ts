import type {Config} from 'tailwindcss'

export default {
    content: [
        './.vitepress/**/*.{js,ts,vue}',
        './commo/**/*.md',
        './npmtee/**/*.md',
    ],
    theme: {
        extend: {},
    },
    plugins: [],
    corePlugins: {
        preflight: false,
    },
} satisfies Config

