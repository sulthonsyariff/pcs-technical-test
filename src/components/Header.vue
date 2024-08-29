<template>
  <div class="px-6">
    <div class="flex justify-between items-center">
      <h1 class="text-2xl font-bold text-primary">KerjaYuk!</h1>

      <font-awesome-icon :icon="['far', 'bell']" class="text-2xl cursor-pointer" @click="goToNotification"/>
    </div>

    <p class="text-md pt-6">Hi, Good Morning!</p>

    <div class="bg-gradient-to-r from-primary to-secondary text-white shadow-card rounded-xl p-4 mt-2">
      <div class="flex justify-between">
        <div class="flex">
          <img :src="user.avatar" alt="avatar" class="rounded-full w-14 h-14" />
  
          <div class="ml-4">
            <p class="font-semibold">{{ user.name }}</p>
            <p class="text-xs italic">{{ user.job }}</p>
          </div>
        </div>

        <div class="text-right">
          <p class="text-xs italic">Member Since</p>
          <p class="text-md font-semibold">{{ user.memberSince }}</p>
        </div>
      </div>

      <div class="flex justify-between items-end mt-4">
        <div>
          <p class="text-xs">Location:</p>
          <p class="text-sm">{{ user.location }}</p>
        </div>

        <p class="text-xs italic">{{ user.status }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router'

const router = useRouter()

const user = ref({
  name: 'Tabay',
  job: 'UI/UX Designer',
  memberSince: '01 Juni 2021',
  location: 'Kantor Sahid',
  status: 'ICO',
  avatar: 'https://i.pravatar.cc/100?img=54'
});

const goToNotification = () => {
  router.push({ name: 'notification' });
};
</script>
