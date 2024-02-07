import {defineConfig} from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: "FrontEnd dokumentace",
    description: "Dokumantace pro frontend",
    base: "/DTCZ.FE.Documentation/",
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        nav: [
            {text: 'Obecné', items: [
                    {
                        text: "Hotfix", link: '/common/hotfix'
                    }
                ]
            },
            {text: 'NPMTEE Balíčky', items: [
                    {
                        text: "Vytvoření balíčku", link: "/npmtee/create/index",
                    }, {
                        text: "Abnb", link: "/npmtee/abnb/index"
                    }, {
                        text: "Modal-dialogs", link: "/npmtee/modal-dialogs/index"
                    }, {
                        text: "Icons", link: "/npmtee/icons/index"
                    }
                ]}
        ],

        sidebar: {
            "/": {
                text: 'Examples',
                items: [
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
                        text: "AbnbTitle (nadpis)",
                        link: "/npmtee/abnb/title"
                    }, {
                        text: "Gallery",
                        link: "/npmtee/abnb/gallery",
                    }]
                }, {
                    text: "Modal-dialogs",
                    link: "/npmtee/modal-dialogs/index",
                }, {
                    text: "Icons",
                    link: "/npmtee/icons/index",
                }]
            }
        },

        socialLinks: [
            {icon: 'github', link: 'https://github.com/marek-polasek/DTCZ.FE.Documentation'}
        ]
    }
})
