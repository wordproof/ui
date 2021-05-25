<template>
  <div class="wrap">
    <div class="element-wrap">
      <w-serp-certificate
        :last-edited="attributes.lastEdited"
        :first-timestamped="attributes.firstTimestamped"
        :published-by="attributes.publishedBy"
      ></w-serp-certificate>
    </div>

    <div>
      <w-input-text
        class="mt-4"
        label="Last edited"
        :value="attributes.lastEdited"
        @input="attributes.lastEdited = $event.target.value"
      ></w-input-text>

      <w-input-text
        class="mt-4"
        label="First timestamped"
        v-model="attributes.firstTimestamped"
        :value="attributes.firstTimestamped"
        @input="attributes.firstTimestamped = $event.target.value"
      ></w-input-text>

      <w-input-text
        class="mt-4"
        label="Published by"
        v-model="attributes.publishedBy"
        :value="attributes.publishedBy"
        @input="attributes.publishedBy = $event.target.value"
      ></w-input-text>
    </div>

    <div class="language-html extra-class">
      <pre class="language-html"><code>{{html}}</code></pre>
    </div>
  </div>
</template>

<script>
import { getHtml } from '../utils';

export default {
  name: 'WSerpCertificatePlayground',

  data() {
    return {
      attributes: {
        lastEdited: '2020-06-14 14:03',
        firstTimestamped: '2020-10-05 10:58',
        publishedBy: 'Jelle van der Schoot',
      },
    };
  },

  computed: {
    html() {
      return getHtml('w-serp-certificate', this.attributes);
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

.element-wrap {
  display: grid;
  place-items: center;
  padding: 2rem;
  background-color: #eeeeee;
}

.settings-wrap {
  margin-top: 1rem;
  margin-bottom: 1rem;
}

.mr-4 {
  margin-right: 1rem;
}

.mt-4 {
  margin-top: 1rem;
}

.mt-2 {
  margin-top: 0.5rem;
}

.mr-2 {
  margin-right: 0.5rem;
}

.my-2 {
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
}
</style>
