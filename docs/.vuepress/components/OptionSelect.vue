<template>
  <span>
    <label :for="label" class="mr-2 my-2">{{ label }}: </label>
    <select
      :id="label"
      v-model="modelValue"
      class="mr-4 my-2"
      @change="$emit('input', modelValue)"
    >
      <option v-for="option in options" :key="option" :value="option">{{
        option
      }}</option>
    </select>
  </span>
</template>

<script>
export default {
  name: 'OptionSelect',

  props: {
    label: { type: String, required: true },
    options: { type: Array, required: true },
    value: { type: String, required: true },
  },

  data() {
    return {
      modelValue: this.value,
    };
  },
};
</script>
