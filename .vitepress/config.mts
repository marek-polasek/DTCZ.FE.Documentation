import {defineConfig} from 'vitepress'

const npmTeeItems = [
    {
        text: "Vytvoření balíčku", link: "/NPMTEE/createPackage"
    }
]
// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: "My Awesome Project",
    description: "A VitePress Site",
    base: "/DTCZ.FE.Documentation/",
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        nav: [
            {text: 'Home', link: '/'},
            {text: 'Examples', link: '/markdown-examples'},
            {text: 'Hotfix', link: '/hotfix'},
            {text: 'NPM Balíčky', items: npmTeeItems}
        ],

        sidebar: {
            "/": {
                text: 'Examples',
                items: [
                    {text: 'Markdown Examples', link: '/markdown-examples'},
                    {text: 'Runtime API Examples', link: '/api-examples'},
                    {text: 'Hotfix', link: '/hotfix'}
                ]
            },
            "/NPMTEE/": {
                text: "NPM Balíčky",
                items: npmTeeItems
            }
        },

        socialLinks: [
            {icon: 'github', link: 'https://github.com/marek-polasek/DTCZ.FE.Documentation'}
        ]
    }
})
