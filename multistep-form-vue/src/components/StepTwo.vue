<script setup lang="ts"></script>

<template>
  <div class="w-96">
    <div class="font-light text-xl mb-5">Please provide additional details</div>
    <FormKit
      type="textarea"
      name="description"
      label="Description"
      placeholder="Enter your description"
      validation="false"
    />
    <FormKit
      type="autocomplete"
      name="Title"
      label="Please select a title"
      placeholder="Select a title"
      :options="{
        mr: 'Mr',
        mrs: 'Mrs',
        miss: 'Miss',
        dr: 'Dr',
        prof: 'Prof',
      }"
      validation="required"
      popover
    />
  </div>
</template>

<style scoped></style>
