import {defineConfig} from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: "FrontEnd dokumentace",
    description: "Dokumantace pro frontend",
    base: "/DTCZ.FE.Documentation/",
    lastUpdated: true,
    themeConfig: {
        search: {
            provider: 'local'
        },
        // https://vitepress.dev/reference/default-theme-config
        nav: [
            {
                text: "Best practice", items: [{
                    text: "Best practice", link: "/best-practice/index"
                }, {
                    text: "Složky a soubory", link: "/best-practice/folders-and-files"
                }]
            },
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
                        text: "Abnb", link: "/npmtee/abnb/index"
                    }, {
                        text: "Brand source logo", link: "/npmtee/brand-source-logo/index"
                    }, {
                        text: "Form elements", link: "/npmtee/form-elements/index"
                    }, {
                        text: "GTM push", link: "/npmtee/gtm-push/index"
                    }, {
                        text: "Icons", link: "/npmtee/icons/index"
                    }, {
                        text: "Inline date picker", link: "/npmtee/inline-date-picker/index"
                    }, {
                        text: "Locale", link: "/npmtee/locale/index"
                    }, {
                        text: "Modal dialogs", link: "/npmtee/modal-dialogs/index"
                    }, {
                        text: "Url", link: "/npmtee/url/index"
                    }, {
                        text: "Vytvoření balíčku", link: "/npmtee/create/index",
                    }, {
                        text: "Vue app mounter", link: "/npmtee/vue-app-mounter/index"
                    }
                ]}
        ],

        sidebar: {
            "/": {
                text: 'Best practice',
                items: [
                    {text: 'Best practice', link: '/best-practice/index'},
                    {text: "Složky a soubory", link: "/best-practice/folders-and-files"}
                ]
            },
            "/hotfix": {
                text: 'Hotfix',
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
                    text: "Brand source logo",
                    link: "/npmtee/brand-source-logo/index"
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
                    text: "Inline date picker",
                    link: "/npmtee/inline-date-picker/index",
                }, {
                    text: "Locale",
                    link: "/npmtee/locale/index"
                }, {
                    text: "Modal dialogs",
                    link: "/npmtee/modal-dialogs/index",
                }, {
                    text: "Url",
                    link: "/npmtee/url/index"
                }, {
                    text: "Vytvoření balíčku",
                    link: "/npmtee/create/index"
                }, {
                    text: "Vue app mounter",
                    link: "/npmtee/vue-app-mounter/index"
                }]
            }
        },

        socialLinks: [
            {icon: 'github', link: 'https://github.com/marek-polasek/DTCZ.FE.Documentation'}
        ]
    }
})
