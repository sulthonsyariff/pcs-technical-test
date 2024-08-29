<template>
  <div class="px-6 mt-6">
    <h2 class="text-md font-semibold">Today's activity</h2>

    <div class="flex justify-around items-center mt-4">
      <div class="text-center">
        <font-awesome-icon :icon="['far', 'clock']" class="text-primary text-2xl" />
        <p class="mt-2 font-semibold">{{ activity.checkIn }}</p>
        <p class="text-xs">Check In</p>
      </div>

      <div class="text-center">
        <font-awesome-icon :icon="['fas', 'clock-rotate-left']" class="text-primary text-2xl" />
        <p class="mt-2 font-semibold text-primary">{{ activity.workingHours }}</p>
        <p class="text-xs">Working Hours</p>
      </div>

      <div class="text-center">
        <font-awesome-icon :icon="['far', 'clock']" class="text-primary text-2xl" />
        <p class="mt-2 font-semibold">{{ activity.checkOut }}</p>
        <p class="text-xs">Check Out</p>
      </div>
    </div>

  </div>
</template>

<script setup>
import { ref } from 'vue';

const activity = ref({
  checkIn: '08:30',
  workingHours: '03:00:00',
  checkOut: '--:--',
});
</script>
