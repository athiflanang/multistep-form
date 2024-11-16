<script setup lang="ts"></script>

<template>
  <div class="w-96">
    <div class="font-light text-xl mb-5">
      Please fill out your personal information
    </div>
    <FormKit
      type="text"
      label="Name"
      placeholder="Enter your name"
      prefix-icon="avatarMan"
      validation="required"
    />
    <FormKit
      type="radio"
      label="Gender"
      validation="required"
      :options="{
        male: 'Male',
        female: 'Female',
        other: 'Other',
      }"
    />
  </div>
</template>

<style scoped></style>
