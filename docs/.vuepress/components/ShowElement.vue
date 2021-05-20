<template>
  <div class="show-elemnt__card">
    <div class="show-elemnt__slot-wrapper" ref="wrapper">
      <slot></slot>
    </div>

    <div class="language-html extra-class show-elemnt__code">
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
.show-elemnt__card {
  margin: 1rem 0;
  display: grid;
  place-items: center;
  padding: 1rem;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  width: 100%;
}

.show-elemnt__slot-wrapper {
  width: 100%;
  padding: 1rem 0;
  display: grid;
  place-items: center;
}

.show-elemnt__code {
  width: 100%;
}
</style>
