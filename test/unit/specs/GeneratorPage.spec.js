import Vue from 'vue'
import GeneratorPage from '@/components/GeneratorPage'

describe('GeneratorPage.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(GeneratorPage)
    const vm = new Constructor().$mount()
    vm.$el.querySelector('.generator-page h1').textContent.should.equal('QUOTABLE PASSWORD GENERATOR')
  })
})
