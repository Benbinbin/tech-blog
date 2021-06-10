import { defineClientAppEnhance } from '@vuepress/client'
import HomeLayout from './layout/HomeLayout.vue'

export default defineClientAppEnhance(({ app }) => {
    app.component('HomeLayout', HomeLayout)
})