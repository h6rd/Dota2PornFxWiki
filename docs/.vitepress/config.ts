import { defineConfig } from 'vitepress'

export default defineConfig({
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }]
  ],
  title: 'Dota2PornFxWiki',
  locales: {
    en: {
      label: 'English',
      lang: 'en-US',
      link: '/en/',
      themeConfig: {
        logo: '/logo.png',
        sidebar: [
          {
            text: 'General',
            items: [
              { text: 'Is it safe?', link: '/en/safety' },
              { text: 'Troubleshooting', link: '/en/troubleshoot' },
              { text: 'Guides', link: '/en/guides' }
            ]
          }
        ]
      }
    },
    ru: {
      label: 'Русский',
      lang: 'ru-RU',
      link: '/ru/',
      themeConfig: {
        logo: '/logo.png',
        sidebar: [
          {
            text: 'Основное',
            items: [
              { text: 'Безопасно ли это?', link: '/ru/safety' },
              { text: 'Решение проблем', link: '/ru/troubleshoot' },
              { text: 'Гайды', link: '/ru/guides' }
            ]
          }
        ]
      }
    }
  }
})