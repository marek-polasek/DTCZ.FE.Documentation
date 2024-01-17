import {defineConfig} from 'vitepress'

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
            {text: 'NPMTEE Balíčky', items: [
                    {
                        text: "Vytvoření balíčku", link: "/npmtee/create/index",
                    }, {
                        text: "Abnb", link: "/npmtee/create/index"
                    }
                ]}
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
            "/npmtee/": {
                text: "NPM Balíčky",
                items: [{
                    text: "Vytvoření balíčku",
                    link: "/npmtee/create/index"
                }, {
                    text: "Abnb",
                    link: "/npmtee/abnb/index",
                    items: [{
                        text: "Nadpis",
                        link: "/npmtee/abnb/title"
                    }]
                }]
            }
        },

        socialLinks: [
            {icon: 'github', link: 'https://github.com/marek-polasek/DTCZ.FE.Documentation'}
        ]
    }
})
