<template>
  <span>
    <label :for="label" class="mr-2 my-2">{{ label }}: </label>
    <select
      :id="label"
      :value="value"
      class="mr-4 my-2"
      @change="ev => $emit('input', ev.target.value)"
    >
      <option
        v-for="option in options"
        :key="option"
        :value="option"
        :selected="value === option"
        >{{ option }}</option
      >
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
};
</script>
