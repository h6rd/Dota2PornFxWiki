declare module '*.css'
declare module 'lite-youtube-embed'
declare module 'lite-youtube-embed/src/lite-yt-embed.css'
declare module '@fancyapps/ui'
declare module '@fancyapps/ui/dist/fancybox/fancybox.css'

interface ImportMetaEnv {
  readonly SSR: boolean
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}