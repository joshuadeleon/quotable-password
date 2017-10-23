<template>
  <div>
    <div class="columns is-centered">
      <div class="column">
        {{ entry.quote }}
      </div>
    </div>
    <div class="columns is-pulled-right">
      <div class="column">
        &mdash; {{ entry.author }}
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'QuoteInfo',
  props: ['entry']
}
</script>