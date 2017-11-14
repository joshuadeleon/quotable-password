<template>
  <div>
    <div class="columns is-centered">
      <div class="column">
        {{ entry.quote }}
      </div>
    </div>
    <div class="columns is-pulled-right">
      <div class="column">
        &mdash; {{ getAuthor }}
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'QuoteInfo',
  props: ['entry'],
  computed: {
    getAuthor: function () {
      return (this.entry.author === '') ? 'Anonymous' : this.entry.author
    }
  }
}
</script>