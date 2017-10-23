<template>
  <div class="generator-page">
    <div class="columns is-centered is-mobile">
      <div class="column is-6 textcenter">
        <h1 class="title is-1">{{ header.toUpperCase() }}</h1>
      </div>
    </div>
    <div class="columns is-centered is-mobile">
      <div class="column is-4 textcenter">
        <h3 class="subtitle">{{ subHeader }}</h3>
      </div>
    </div>
    <div class="columns is-centered is-mobile">
      <div class="column-6 textcenter">
        <div class="card quotablepassword">
          <div class="card-content">
            <h2 class="subtitle is-3" v-if="entry && entry.password">{{ entry.password }}</h2>
          </div>
        </div>
      </div>
    </div>
    <div class="columns is-centered is-mobile">
      <div class="column-6 textcenter">
        <button class="button is-large generate-quote-button" v-on:click="setQuote">Generate</button>
      </div>
    </div>
    <div class="columns is-centered is-mobile" v-if="entry">
      <QuoteInfo class="quote-info" :entry="entry"></QuoteInfo>
    </div>
  </div>
</template>

<script>
import QuoteService from '@/services/QuoteService'
import QuoteInfo from '@/components/QuoteInfo'

export default {
  name: 'GeneratorPage',
  components: {
    QuoteInfo
  },
  data () {
    return {
      header: 'Quotable Password Generator',
      subHeader: 'Generate secure passwords using quotable sentences',
      entry: null
    }
  },
  methods: {
    setQuote: function () {
      let self = this
      self.entry = QuoteService.get()
    }
  },
  mounted: function () {
    let self = this
    self.setQuote()
  }
}
</script>

<style scoped>
h1 {
  margin-top: 1em;
}

.textcenter {
  text-align: center;
}

.generate-quote-button,
.quotablepassword {
  margin-top: 2em;
}

.quote-info {
  margin-top: 3em;
}

</style>
