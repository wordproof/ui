<template>
  <div>
    <div class="show-elemnt__slot-wrapper" ref="wrapper">
      <slot></slot>
    </div>

    <div class="language-html extra-class">
      <pre class="language-html"><code>{{html}}</code></pre>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ShowElement',

  data() {
    return {
      html: '',
    };
  },

  mounted() {
    this.html = this.$refs['wrapper'].innerHTML;
  },
};
</script>

<style>
@media (min-width: 419px) {
  .show-elemnt__slot-wrapper {
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    padding: 1rem;
  }
}
.show-elemnt__slot-wrapper {
  margin-top: 1.5rem;
  margin-bottom: 0.25rem;
  display: grid;
  place-items: center;
}
</style>
