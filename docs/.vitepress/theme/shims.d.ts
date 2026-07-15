declare module '*.css'
declare module 'lite-youtube-embed'
declare module 'lite-youtube-embed/src/lite-yt-embed.css'

interface ImportMetaEnv {
  readonly SSR: boolean
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}