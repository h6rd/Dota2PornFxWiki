import { h } from 'vue'
import DefaultTheme from 'vitepress/theme'
// @ts-ignore
import './styles.css'

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout)
  }
}