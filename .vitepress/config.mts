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
                    },
                    {
                        text: "Testování", link: '/common/tests'
                    }
                ]
            },
            {text: 'NPMTEE Balíčky', items: [
                    {
                        text: "Vytvoření balíčku", link: "/npmtee/create/index",
                    }, {
                        text: "Abnb", link: "/npmtee/abnb/index"
                    }, {
                        text: "Form elements", link: "/npmtee/form-elements/index"
                    }, {
                        text: "GTM push", link: "/npmtee/gtm-push/index"
                    }, {
                        text: "Icons", link: "/npmtee/icons/index"
                    }, {
                        text: "Locale", link: "/npmtee/locale/index"
                    }, {
                        text: "Modal-dialogs", link: "/npmtee/modal-dialogs/index"
                    }, {
                        text: "Url", link: "/npmtee/url/index"
                    }
                ]}
        ],

        sidebar: {
            "/": {
                text: 'Examples',
                items: [
                    {text: 'Hotfix', link: '/common/hotfix'}
                ]
            },
            "/tests": {
                text: 'Testování',
                items: [
                    {text: 'Testování', link: '/common/tests'}
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
                    text: "Form elements",
                    link: "/npmtee/form-elements/index"
                }, {
                    text: "GTM push",
                    link: "/npmtee/gtm-push/index"
                }, {
                    text: "Icons",
                    link: "/npmtee/icons/index",
                }, {
                    text: "Locale",
                    link: "/npmtee/locale/index"
                }, {
                    text: "Modal-dialogs",
                    link: "/npmtee/modal-dialogs/index",
                }, {
                    text: "Url",
                    link: "/npmtee/url/index"
                }]
            }
        },

        socialLinks: [
            {icon: 'github', link: 'https://github.com/marek-polasek/DTCZ.FE.Documentation'}
        ]
    }
})
