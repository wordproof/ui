<template>
  <div class="wrap">
    <div class="button-wrap" ref="wbutton">
      <w-button
        :color="attributes.color"
        :size="attributes.size"
        :text="attributes.text"
        :disabled="attributes.disabled"
        :loading="attributes.loading"
        :outline="attributes.outline"
        :icon="attributes.icon"
        :underline-none="attributes.underlineNone"
        >{{ buttonText }}</w-button
      >
    </div>

    <div class="settings-wrap">
      <label for="color" class="mr-2 my-2">color: </label>
      <select id="color" v-model="attributes.color" class="mr-4 my-2">
        <option v-for="option in colorOptions" :key="option" :value="option">{{
          option
        }}</option>
      </select>

      <label for="size" class="mr-2 my-2">size: </label>
      <select id="size" v-model="attributes.size" class="mr-4 my-2">
        <option v-for="option in sizeOptions" :key="option" :value="option">{{
          option
        }}</option>
      </select>

      <label for="icon" class="mr-2 my-2">icon: </label>
      <select id="icon" v-model="attributes.icon" class="mr-4 my-2">
        <option v-for="option in iconOptions" :key="option" :value="option">{{
          option
        }}</option>
      </select>

      <br />

      <span v-if="!attributes.text">
        <input type="checkbox" id="outline" v-model="attributes.outline" />
        <label for="outline" class="mr-4 my-2">outline</label>
      </span>

      <span v-if="!attributes.outline">
        <input type="checkbox" id="text" v-model="attributes.text" />
        <label for="text" class="mr-4 my-2">text </label>
      </span>

      <span v-if="!attributes.text">
        <input type="checkbox" id="loading" v-model="attributes.loading" />
        <label for="loading" class="mr-4 my-2">loading</label>
      </span>

      <input type="checkbox" id="disabled" v-model="attributes.disabled" />
      <label for="disabled" class="mr-4 my-2">disabled </label>

      <span v-if="attributes.text">
        <input
          type="checkbox"
          id="underlineNone"
          v-model="attributes.underlineNone"
        />
        <label for="underlineNone" class="mr-4 my-2">underline-none </label>
      </span>
    </div>

    <div class="language-html extra-class">
      <pre class="language-html">
        <code>{{html}}</code>
      </pre>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ShowWButton',

  data() {
    return {
      colorOptions: ['blue', 'white', 'yellow', 'gray'],
      sizeOptions: ['xs', 'sm', 'base', 'lg', 'xl'],
      attributes: {
        color: 'blue',
        size: 'lg',
        text: false,
        disabled: false,
        loading: false,
        underlineNone: false,
        outline: true,
        icon: 'close',
      },
      buttonText: 'Sample button',
      iconOptions: [
        '',
        'comment',
        'eye',
        'close',
        'close-circle',
        'check-circle',
        'clock',
        'ink-pen',
        'times-circle',
        'arrow-down',
        'question-circle',
        'eye-large',
        'blockchain',
        'accessibility',
        'hamburger',
        'hamburger-close',
        'arrow-right',
        'dots',
        'check-ring',
        'check',
        'api',
        'shopify',
        'wordpress',
        'gear',
        'search',
        'calendar',
        'shield',
        'info',
      ],
    };
  },

  computed: {
    html() {
      const attrStr = Object.entries(this.attributes)
        .filter(([key, value]) => value)
        .map(([key, value]) => `${key}="${value}"`)
        .join(' ');

      return `<w-button ${attrStr}>${this.buttonText}</w-button>`;
    },
  },
};
</script>

<style scoped>
.wrap {
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  padding: 1rem;
  border-radius: 0.5rem;
  margin-top: 1rem;
}

.button-wrap {
  display: grid;
  place-items: center;
  height: 6rem;
  background-color: #eeeeee;
}

.settings-wrap {
  margin-top: 1rem;
  margin-bottom: 1rem;
}

.mr-4 {
  margin-right: 1rem;
}

.mr-2 {
  margin: 0.5rem;
}

.my-2 {
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
}
</style>
