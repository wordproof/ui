<template>
  <div class="wrap">
    <div class="button-wrap" ref="wbutton">
      <w-certificate-button
        :shape="attributes.shape"
        :variant="attributes.variant"
        :text="attributes.text"
        :color="attributes.color"
        :icon="attributes.icon"
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
        @input="onShapeChange(attributes.shape)"
        class="mr-4 my-2"
      />

      <br />

      <OptionSelect
        v-if="attributes.shape === 'box'"
        label="variant"
        v-model="attributes.variant"
        :options="variantOptions.box"
        class="mr-4 my-2"
      />

      <OptionSelect
        v-if="attributes.shape === 'pill'"
        label="color"
        v-model="attributes.color"
        :options="variantOptions.pill"
        class="mr-4 my-2"
      />

      <OptionSelect
        v-if="attributes.shape === 'text'"
        label="icon"
        v-model="attributes.icon"
        :options="variantOptions.icon"
        class="mr-4 my-2"
      />

      <span v-if="attributes.shape === 'text'">
        <label for="color" class="mr-2 my-2">color: </label>
        <input
          type="text"
          id="color"
          v-model="attributes.color"
          class="mr-4 my-2"
          style="width: 4rem;"
        />
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
import OptionSelect from './OptionSelect';

export default {
  name: 'ShowWCertificateButton',

  data() {
    return {
      attributes: {
        shape: 'text',
        variant: '',
        text: '',
        color: '',
        icon: '',
      },
      shapeOptions: ['text', 'box', 'pill'],
      variantOptions: {
        box: ['base', 'sm', 'tall', 'rounded', 'fluid'],
        pill: ['white', 'blue'],
        icon: ['wordproof', 'shield', 'none'],
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

  methods: {
    onShapeChange(shape) {
      if (shape === 'box') {
        this.attributes.variant = 'rounded';
        this.attributes.color = '';
        return;
      }

      if (shape === 'pill') {
        this.attributes.variant = '';
        this.attributes.color = 'white';
        return;
      }

      if (shape === 'text') {
        this.attributes.variant = '';
        this.attributes.color = '';
        return;
      }
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
  height: 12rem;
}

.settings-wrap {
  margin-top: 1rem;
  margin-bottom: 1rem;
}

.mr-4 {
  margin-right: 1rem;
}

.mr-2 {
  margin-right: 0.5rem;
}

.my-2 {
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
}
</style>
