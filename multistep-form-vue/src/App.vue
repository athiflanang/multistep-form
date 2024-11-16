<script setup lang="ts">
import StepOne from "./components/StepOne.vue";
import StepTwo from "./components/StepTwo.vue";
</script>

<template>
  <div class="w-full min-h-screen bg-slate-200">
    <div class="flex items-center justify-center">
      <FormKit type="form" :actions="false" class="w-full">
        <FormKit
          type="multi-step"
          tab-style="progress"
          :allow-incomplete="false"
        >
          <FormKit type="step" name="personalInformation">
            <StepOne />
          </FormKit>
          <FormKit type="step" name="additionalInformation">
            <StepTwo />
            <template #stepNext>
              <FormKit type="submit" />
            </template>
          </FormKit>
        </FormKit>
      </FormKit>
    </div>
  </div>
</template>

<style scoped></style>
