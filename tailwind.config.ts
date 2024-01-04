import type {Config} from 'tailwindcss'

export default {
    content: [
        './.vitepress/**/*.{js,ts,vue}',
        './**/*.md',
    ],
    theme: {
        extend: {},
    },
    plugins: [],
} satisfies Config

