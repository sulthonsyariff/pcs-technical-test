<template>
  <div class="fixed max-w-md mx-auto bottom-0 left-0 right-0 bg-white z-10 navbar-bottom-shadow">
    <nav class="flex justify-around items-end pb-[10px] h-[70px]">
      <button 
        class="flex flex-col flex-1 items-center text-gray-600"
        :class="{ 'font-semibold text-primary': isActiveRoute('home')
      }">
        <font-awesome-icon :icon="['fas', 'house-chimney']" class="text-2xl" />
        <span class="text-xs mt-[6px]">Home</span>
      </button>

      <button class="flex flex-col flex-1 items-center text-gray-600">
        <font-awesome-icon :icon="['far', 'calendar-check']" class="text-2xl" />
        <span class="text-xs mt-[6px]">Attedance</span>
      </button>

      <div class="flex flex-col flex-1 self-end items-center">
        <button
          class="flex justify-center items-center w-[80px] h-[80px] bg-primary text-white rounded-full shadow-md checkout-button-shadow"
          @click="handleCheckinAndCheckout"
        >
          <font-awesome-icon :icon="['fas', 'right-from-bracket']" class="text-4xl" />
        </button>
        <span class="text-xs text-center mt-[6px] font-semibold text-primary">
          {{ isCheckIn ? 'Check Out' : 'Check In' }}
        </span>
      </div>
      
      <button class="flex flex-col flex-1 items-center text-gray-600">
        <font-awesome-icon :icon="['fas', 'receipt']" class="text-2xl" />
        <span class="text-xs mt-[6px]">Form</span>
      </button>
      
      <button class="flex flex-col flex-1 items-center text-gray-600">
        <font-awesome-icon :icon="['fas', 'gear']" class="text-2xl" />
        <span class="text-xs mt-[6px]">Setting</span>
      </button>      
    </nav>
  </div>
</template>


<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useWorkTrackerStore } from '@/stores/workTrackerStore'

const workTrackerStore = useWorkTrackerStore()

const isCheckIn = computed(() => !!workTrackerStore.checkInTime)

const handleCheckin = () => {
  workTrackerStore.handleCheckIn()
}

const handleCheckout = () => {
  workTrackerStore.handleCheckOut()
}

const handleCheckinAndCheckout = () => {
  if (isCheckIn.value) {
    handleCheckout()
  } else {
    handleCheckin()
  }
}

const route = useRoute()

const isActiveRoute = (routeName) => {
  route.name === routeName
};

</script>

<style lang="scss" scoped>
.navbar-bottom-shadow {
  box-shadow: 0 -4px 10px -6px rgba(0,0,0,0.28);
  -webkit-box-shadow: 0 -4px 10px -6px rgba(0,0,0,0.28);
  -moz-box-shadow: 0 -4px 10px -6px rgba(0,0,0,0.28);
}

.checkout-button-shadow {
  box-shadow: 0 -3px 6px 0 rgba(0,0,0,0.28);
  -webkit-box-shadow: 0 -3px 6px 0 rgba(0,0,0,0.28);
  -moz-box-shadow: 0 -3px 6px 0 rgba(0,0,0,0.28);
}
</style>

