import { h } from 'vue'
import DefaultTheme from 'vitepress/theme'
import type { Theme } from 'vitepress'
import './styles.css'

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout)
  },
  enhanceApp({ app }) {
    app.config.compilerOptions.isCustomElement = (tag) => tag === 'lite-youtube'

    if (!import.meta.env.SSR) {
      import('lite-youtube-embed')
      import('lite-youtube-embed/src/lite-yt-embed.css')
    }
  }
} satisfies Theme