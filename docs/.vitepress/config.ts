
import { defineConfig } from 'vitepress'

const base =
  process.env.GITHUB_PAGES === 'true'
    ? '/Dota2PornFxWiki/'
    : '/'

const siteUrl = 'https://d2pfxwiki.pages.dev'
const siteName = 'Dota2PornFxWiki'
const defaultDescription = 'Dota2PornFx FAQs and Guides'
const previewImage = `${siteUrl}${base}banner.png`

export default defineConfig({
  base,

  title: siteName,
  description: defaultDescription,

  sitemap: {
    hostname: siteUrl
  },

  head: [
    ['link', { rel: 'icon', href: `${base}favicon.ico` }],

    ['meta', { name: 'google-site-verification', content: '8bp-L5HSp9tH44kvjS6BkqxzPpPD7uIG5InNKijpyiQ'}],
    
    ['meta', { property: 'og:site_name', content: siteName }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:image', content: previewImage }],
    ['meta', { property: 'og:image:width', content: '1200' }],
    ['meta', { property: 'og:image:height', content: '630' }],

    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:image', content: previewImage }],

    ['meta', { name: 'robots', content: 'index, follow' }]
  ],

  transformHead({ pageData }) {
    const path = pageData.relativePath
      .replace(/(^|\/)index\.md$/, '$1')
      .replace(/\.md$/, '')

    const canonical = new URL(`${base}${path}`, siteUrl).href
    const isRussian = path.startsWith('ru/')
    const lang = isRussian ? 'ru_RU' : 'en_US'

    const title = pageData.frontmatter.title || pageData.title
    const description =
      pageData.frontmatter.description || pageData.description ||
      defaultDescription

    return [
      ['link', { rel: 'canonical', href: canonical }],

      ['meta', { property: 'og:title', content: title }],
      ['meta', { property: 'og:description', content: description }],
      ['meta', { property: 'og:url', content: canonical }],
      ['meta', { property: 'og:locale', content: lang }],

      ['meta', { name: 'description', content: description }],
      ['meta', { name: 'twitter:title', content: title }],
      ['meta', { name: 'twitter:description', content: description }]
    ]
  },

  themeConfig: {
    search: {
      provider: 'local',
      options: {
        locales: {
          ru: {
            translations: {
              button: {
                buttonText: 'Поиск',
                buttonAriaLabel: 'Поиск'
              },
              modal: {
                displayDetails: 'Показать подробный список',
                resetButtonTitle: 'Сбросить поиск',
                backButtonTitle: 'Закрыть поиск',
                noResultsText: 'Ничего не найдено по запросу',
                footer: {
                  selectText: 'выбрать',
                  selectKeyAriaLabel: 'ввод',
                  navigateText: 'перейти',
                  navigateUpKeyAriaLabel: 'вверх',
                  navigateDownKeyAriaLabel: 'вниз',
                  closeText: 'закрыть',
                  closeKeyAriaLabel: 'esc'
                }
              }
            }
          }
        }
      }
    }
  },

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
              { text: 'Install', link: '/en/install' },
              { text: 'Is it safe?', link: '/en/safety' },
              { text: 'Troubleshooting', link: '/en/troubleshoot' },
              { text: 'Guides', link: '/en/guides' },
              { text: 'Upload mod to website', link: '/en/upload' }
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
              { text: 'Установка', link: '/ru/install' },
              { text: 'Безопасно ли это?', link: '/ru/safety' },
              { text: 'Решение проблем', link: '/ru/troubleshoot' },
              { text: 'Гайды', link: '/ru/guides' },
              { text: 'Загрузить мод на сайт', link: '/ru/upload' }
            ]
          }
        ]
      }
    }
  }
})
