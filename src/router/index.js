import Vue from 'vue'
import Router from 'vue-router'
import GeneratorPage from '@/components/GeneratorPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'GeneratorPage',
      component: GeneratorPage
    }
  ]
})
