<template>
  <div class="pt-6 pb-[140px] max-w-md mx-auto bg-white">
    <Header />
    <Activity />
    <News />
    <OnlineUsers />
    <NavbarBottom />
  </div>
</template>

<script setup>
import Header from '@/components/Header.vue';
import Activity from '@/components/Activity.vue';
import News from '@/components/News.vue';
import OnlineUsers from '@/components/OnlineUsers.vue';
import NavbarBottom from '@/components/NavbarBottom.vue';
</script>
