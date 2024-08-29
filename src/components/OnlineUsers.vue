<template>
  <div class="px-6 mt-4">
    <h2 class="text-md font-semibold">Online</h2>

    <div class="mt-4 border shadow-card rounded-2xl px-5 py-2 online-users-card">
      <div v-for="user in users" :key="user.name" class="z-[1] mb-2">
        <div class="border-2 border-white w-12 h-12 rounded-full relative overflow-hidden">
          <img :src="user.avatar" alt="avatar" class="w-full h-full" />
        </div>

        <p class="text-center text-xs font-semibold mt-2">{{ user.name }}</p>
        <p class="text-center text-[10px] text-gray-500">{{ user.location }}</p>
      </div>

      <div class="border-2 border-white w-12 h-12 text-[10px] rounded-full bg-gradient-to-r from-primary to-secondary text-white flex flex-col justify-center items-center">
        <span>10</span>
        <span>More</span>
      </div>
    </div>

  </div>
</template>

<script setup>
import { ref } from 'vue';

const users = ref([
  { name: 'Nur', location: 'Sahid', avatar: 'https://i.pravatar.cc/100?img=1' },
  { name: 'Sam', location: 'Sahid', avatar: 'https://i.pravatar.cc/100?img=8' },
  { name: 'Risya', location: 'BSD', avatar: 'https://i.pravatar.cc/100?img=32' },
  { name: 'Aldo', location: 'BSD', avatar: 'https://i.pravatar.cc/100?img=10' },
  { name: 'Erwin', location: 'BSD', avatar: 'https://i.pravatar.cc/100?img=14' },
  { name: 'Arye', location: 'Sahid', avatar: 'https://i.pravatar.cc/100?img=16' },
  { name: 'Pica', location: 'Sahid', avatar: 'https://i.pravatar.cc/100?img=29' },
  { name: 'Nesha', location: 'WFH', avatar: 'https://i.pravatar.cc/100?img=30' },
]);

</script>

<style lang="scss" scoped>
.online-users-card {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(36px, 1fr));
  justify-items: center;
  align-items: start;
}
</style>