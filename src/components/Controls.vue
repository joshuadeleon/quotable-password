<template>
  <div>
    <div class="field">
      <label class="label">Min Length</label>
      <div class="control control-option">
        <input
          class="input input-min-length"
          type="number"
          :min="minValue"
          :max="maxValue"
          :value="25">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Controls',
  props: ['entry', 'minValue', 'maxValue']
}
</script>

<style>
  .input-min-length {
    width: 4em;
  }
  .control-option {
    text-align: right;
  }
</style>
