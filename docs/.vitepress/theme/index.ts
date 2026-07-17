import { h, onMounted, watch, nextTick } from 'vue'
import DefaultTheme from 'vitepress/theme'
import type { Theme } from 'vitepress'
import { useRoute } from 'vitepress'
import '@fancyapps/ui/dist/fancybox/fancybox.css'
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
  },
  setup() {
    const route = useRoute()

    const initLightbox = async () => {
      if (import.meta.env.SSR) return

      try {
        const { Fancybox } = await import('@fancyapps/ui/dist/fancybox/fancybox.esm.js')

        Fancybox.close()
        
        const images = document.querySelectorAll('.main img:not(.no-lightbox)')

        images.forEach((img) => {
          const imageEl = img as HTMLImageElement
          if (imageEl.parentElement && imageEl.parentElement.tagName !== 'A') {
            const link = document.createElement('a')
            link.href = imageEl.src
            link.dataset.fancybox = 'gallery'
            
            if (imageEl.alt) {
              link.dataset.caption = imageEl.alt
            }

            imageEl.parentNode.insertBefore(link, imageEl)
            link.appendChild(imageEl)
          }
        })

        Fancybox.bind('[data-fancybox="gallery"]', {
          Hash: false,
          Thumbs: {
            autoStart: false,
          },
          Toolbar: {
            display: {
              left: [],
              middle: [],
              right: ['zoom', 'slideshow', 'download', 'close'],
            },
          },
        })
      } catch (error) {
        console.error('init fancybox:', error)
      }
    }

    onMounted(() => {
      initLightbox()
    })

    watch(
      () => route.path,
      () => nextTick(() => initLightbox())
    )
  }
} satisfies Theme