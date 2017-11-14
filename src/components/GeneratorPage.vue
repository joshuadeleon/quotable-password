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
      <div class="column textcenter">
        <a class="button is-large generate-quote-button" v-on:click="setQuote">Generate</a>
      </div>
    </div>
    <div class="columns is-centered is-mobile" v-if="entry">
      <QuoteInfo class="quote-info" :entry="entry"></QuoteInfo>
    </div>

    <div class="settings-panel">
      <div class="tile">
        <a class="button is-large toggle-settings-button" v-on:click="toggleSettings">
          <i class="icon fa fa-cog fa-lg" aria-hidden="true"></i>
        </a>
      </div>

      <div class="tile" v-if="settingsOpen">
        <Controls :minValue="minLength" :maxValue="maxLength"></Controls>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import QuoteService from '@/services/QuoteService'
import QuoteInfo from '@/components/QuoteInfo'
import Controls from '@/components/Controls'

export default {
  name: 'GeneratorPage',
  components: {
    QuoteInfo,
    Controls
  },
  data () {
    return {
      header: 'Quotable Password Generator',
      subHeader: 'Generate secure passwords using quotable sentences',
      entry: null,
      settingsOpen: false
    }
  },
  methods: {
    setQuote: function () {
      let self = this
      self.entry = QuoteService.get()
    },
    toggleSettings: function () {
      this.settingsOpen = !this.settingsOpen
    }
  },
  mounted: function () {
    let self = this
    self.setQuote()

    let values = QuoteService.getExtremeValues()
    self.$store.dispatch('SET_MIN_LENGTH', values.min)
    self.$store.dispatch('SET_MAX_LENGTH', values.max)
  },
  computed: {
    ...mapGetters({
      minLength: 'minLength',
      maxLength: 'maxLength',
      removeSpaces: 'removeSpaces'
    })
  }
}
</script>

<style scoped>
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

.toggle-settings-button {
  border: none;
}

.settings-panel {
  position: fixed;
  height: 50%;
  right: .5em;
  top: 0;
}

</style>
