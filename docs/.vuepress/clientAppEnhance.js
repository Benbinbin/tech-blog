import { defineClientAppEnhance } from '@vuepress/client'
import HomeLayout from './layout/HomeLayout.vue'
import PostsListLayout from './layout/PostsListLayout.vue'

export default defineClientAppEnhance(({ app }) => {
    app.component('HomeLayout', HomeLayout)
    app.component('PostsListLayout', PostsListLayout)
})