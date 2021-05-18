<template>
  <div class="wrap">
    <div class="button-wrap" ref="wbutton">
      <w-certificate-button
        :shape="attributes.shape"
        :variant="attributes.variant"
        :text="attributes.text"
      >
      </w-certificate-button>
    </div>

    <div class="settings-wrap">
      <label for="button-text" class="mr-2 my-2">button text: </label>
      <input
        type="text"
        id="button-text"
        v-model="attributes.text"
        class="mr-4 my-2"
      />

      <OptionSelect
        label="shape"
        v-model="attributes.shape"
        :options="shapeOptions"
        @input="attributes.variant = variantOptions[attributes.shape][0]"
        class="mr-4 my-2"
      />

      <OptionSelect
        v-if="attributes.shape"
        :key="attributes.shape"
        label="variant"
        v-model="attributes.variant"
        :options="variantOptions[attributes.shape]"
        class="mr-4 my-2"
      />
    </div>

    <div class="language-html extra-class">
      <pre class="language-html">
        <code>{{html}}</code>
      </pre>
    </div>
  </div>
</template>

<script>
import OptionSelect from './OptionSelect';

export default {
  name: 'ShowWCertificateButton',

  data() {
    return {
      attributes: {
        shape: 'text',
        variant: 'gray',
        text: '',
      },
      shapeOptions: ['text', 'box', 'pill'],
      variantOptions: {
        text: ['blue', 'gray'],
        box: ['1', '2'],
        pill: ['1', '2'],
      },
    };
  },

  computed: {
    html() {
      const kebabize = str =>
        str.replace(
          /[A-Z]+(?![a-z])|[A-Z]/g,
          ($, ofs) => (ofs ? '-' : '') + $.toLowerCase(),
        );

      const attrStr = Object.entries(this.attributes)
        .filter(([key, value]) => value)
        .map(([key, value]) => `${kebabize(key)}="${value}"`)
        .join(' ');

      return `<w-certificate-button${
        attrStr ? ' ' : ''
      }${attrStr}></w-certificate-button>`;
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
